import requests
from bs4 import BeautifulSoup

def get_komputronik_products(concrete_product):
    
    product_info = {"name" : "", "price" : 0, "url": "", "vendor" : "komputronik", "img" : ""}
    
    url = f'https://www.komputronik.pl/search/category/1?query={concrete_product}'
    
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"}
    
    page = requests.get(url, headers=headers)
    
    if page.status_code == 200:
        try:
            soup = BeautifulSoup(page.content, 'html.parser')
            
            names = soup.find_all(class_="font-headline text-lg font-bold leading-6 line-clamp-3 md:text-xl md:leading-8")
            
            #Removed useless last element from list generated by angular
            names.pop()
            
            products = []
            for name in names:
                product_container = name.find_parent("div", attrs={'class': 'tests-product-entry'})
                img = product_container.find("img")["src"]
                product_info["img"] = img
                product_info["name"] = name.text.strip()
                product_info["url"] = name.find("a")["href"]
                product_container = name.find_parent("div", attrs={'class': 'tests-product-entry'})
                price = product_container.find(class_="text-3xl font-bold leading-8").text.replace(",", ".").replace("zł","").replace("\xa0","").strip()
                product_info["price"] = float(price)
                products.append(product_info.copy())
            return products
        except Exception as e:
            print(e)