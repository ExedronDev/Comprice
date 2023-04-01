import requests
from bs4 import BeautifulSoup
import pandas as pd

def get_xkom_products(concrete_product):
    
    product_info = {"name" : "", "price" : 0, "url": "", "parameters" : "", "vendor" : "x-kom", "img" : ""}
    
    url = f'https://www.x-kom.pl/szukaj?hide_unavailable=1&q={concrete_product}'
    
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"}
    
    page = requests.get(url, headers=headers)
    
    if page.status_code == 200:
        try:
            soup = BeautifulSoup(page.content, 'html.parser')
            if soup.find(class_="sc-11oikyw-2 fUaLpF").text.strip()[2:]:
                page_count = int(soup.find(class_="sc-11oikyw-2 fUaLpF").text.strip()[2:])

            for page in range(1, 2):
                url = f'https://www.x-kom.pl/szukaj?page=${page}&hide_unavailable=1&q=${concrete_product}'
                page = requests.get(url, headers=headers)
                soup = BeautifulSoup(page.content, 'html.parser')
                products = []
                for name in soup.find_all("h3", attrs={'class': 'sc-16zrtke-0 kGLNun sc-1yu46qn-9 feSnpB'}):
                    if name:
                        product_info["name"] = name.text
                        parent = name.parent
                        if parent.name != 'a':
                            continue
                        link = parent['href']
                        product_info["url"] = ("https://www.x-kom.pl"+link)
                        product_container = name.find_parent("div", attrs={'class': 'sc-2ride2-0 dwsfIN sc-1yu46qn-4 gyHdpL'})
                        if product_container:
                            price = product_container.find(class_="sc-6n68ef-0 sc-6n68ef-3 guFePW").text.replace(",",".").replace("zł","").replace(" ","")
                            img = product_container.find("img")["src"]
                            product_info["img"] = img
                            parameters = product_container.find(class_="sc-vb9gxz-0 sc-vb9gxz-1 gOnpJX sc-1yu46qn-11 lkUKnQ")
                            parameter = ""
                            if parameters:
                                for li in parameters:
                                    parameter = parameter + li.text + ", "
                                product_info["parameters"] = parameter
                                product_info["price"] = float(price)
                                products.append(product_info.copy())
                return products
            
            # save_data = pd.json_normalize(products)
            # save_data.to_csv("xkom.csv")

        except Exception as e:
            print(e)
    else:
        print("Error - status code = " + str(page.status_code))
        