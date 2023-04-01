from flask import Flask, request
import requests
from bs4 import BeautifulSoup
import xkom
import morele
import komputronik

app = Flask(__name__)

@app.route('/search', methods=['GET', "POST"])
def search_products():
    product = request.json
    concrete_product = product["name"]
    xkom_product = xkom.get_xkom_products(concrete_product)
    print("cos1")
    morele_products = morele.get_morele_products(concrete_product)
    print("cos2")
    komputronik_products = komputronik.get_komputronik_products(concrete_product)
    print("cos3")
    product_list = []
    product_list.append(xkom_product)
    product_list.append(morele_products)
    product_list.append(komputronik_products)
    return product_list
    

if __name__ == '__main__':
    app.run(debug=True)