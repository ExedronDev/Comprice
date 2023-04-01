import requests
from bs4 import BeautifulSoup

def get_morele_products(concrete_product):
    
    product_info = {"name" : "", "price" : 0, "url": "", "parameters" : "", "vendor" : "morele"}
    
    url = f'https://www.morele.net/wyszukiwarka/?q={concrete_product}'
    
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"}
    
    page = requests.get(url, headers=headers)
    
    if page.status_code == 200:
        try:
            soup = BeautifulSoup(page.content, 'html.parser')
            
            if soup.find(class_="pagination-lg btn") is not None:
                page_count = int(soup.find(class_="pagination-lg btn").text)
            else:
                page_count = 1
            
            for page in range(1, 2):
                url = f'https://www.morele.net/wyszukiwarka/0/0/,,,,,,,,0,,,,/{page}/?q={concrete_product}'
                page = requests.get(url, headers=headers)
                soup = BeautifulSoup(page.content, 'html.parser')
                products = []
                for name in soup.find_all("div", attrs={'class': 'cat-product-name'}):
                    product_info["name"] = name.text.strip()
                    product_info["url"] = "https://www.morele.net" + name.find('a')["href"]
                    product_container = name.find_parent("div", attrs={'class': 'cat-product-content'})
                    price = product_container.find(class_="price-new").text.replace(",",".").replace("zł","").replace(" ","").strip()
                    product_info["price"] = float(price)
                    # parameters = product_container.find(class_="cat-product-features")
                    # parameter = ""
                    # for element in parameters:
                    #     # if parameters.find(class_="cat-product-features-title"):
                    #     #     continue
                    #     #product_info["parameters"] = div.text.strip()
                    #     if element == parameters.find(class_="cat-product-features-title"):
                    #         continue
                    #     elif element == parameters.find(class_="cat-product-features-button"):
                    #         continue
                    #     else:
                    #         parameter = parameter + element.text.replace("\n","").strip() + " "
                    # product_info["parameters"] = parameter
                    product_box = soup.find("div", attrs={'class': 'cat-product-inside'})
                    img = product_box.find("img")["src"]
                    product_info["img"] = img
                    products.append(product_info.copy())
                return products
            
        except Exception as e:
            print(e)
    else:
        print("Error - status code = " + str(page.status_code))