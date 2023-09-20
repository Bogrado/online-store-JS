'use strict'

/**
 * Управляющий класс каталога, при инициализации принимает в себя один аргумент selector
 */

class Catalog {
    data = []
    products = []
    container = null

    constructor(selector) {
        this.container = document.querySelector(selector)

    }

    /**
     * Инициализирующий метод, через нее всё запускаю, две метода fetchData и render (каталога) можно было вынести в конструктор, но я решил сделать init
     */

    init(){
        this._fetchData()
        this._render()
    }

    /**
     * метод fetchData: пока что это метод заглушка.
     * @private
     */

    _fetchData(){
        this.data = [
            {
                title: 'Name 1',
                id: 1,
                price: 2000,
                img: 'img/catprod_1.jpg'

            },
            {
                title: 'Name 2',
                id: 2,
                price: 200,
                img: 'img/catprod_2.jpg'
            },
            {
                title: 'Name 3',
                id: 3,
                price: 100,
                img: 'img/catprod_3.jpg'
            },
            {
                title: 'Name 4',
                id: 4,
                price: 87,
                img: 'img/catprod_4.jpg'
            },
            {
                title: 'Name 5',
                id: 4,
                price: 87,
                img: 'img/catprod_5.jpg'
            },
            {
                // title: 'Name 6',
                id: 4,
                // price: 87,
                // imgSrc: 'img/catprod_6.jpg'
            }
        ]
    }

    /**
     * Решил разбить метод рендер и добавил метод getProducts, который присваивает карточки товаров (уже с разметкой) пустому массиву свойства products
     * @private
     */

    _getProducts(){
        this.products = this.data.map(item => new ProductItem(item))
    }

    /**
     * Рендер каталога, перед тем как непосредственно рендерить вызывает метод getProducts, который заполняет пустой массив свойства products, затем пробегаюсь по этому массиву forEach-ем и добавляю в контейнер готовую разметку.
     * @private
     */

    _render(){
        this._getProducts()
        this.products.forEach(product => this.container.insertAdjacentHTML('beforeend', product.render()))

    }

}

/**
 * класс одного товара
 */

class ProductItem {
    title = ''
    price = 0
    id = 0
    img = ''

    /**
     * конструктор принимает в себя два аргумента, какой-то объект товара из data и значение изображения по умолчанию
     * @param product
     * @param defaultImg
     */

    constructor(product, defaultImg = 'img/default.jpeg') {
        ({title: this.title, price: this.price, id: this.id, img: this.img = defaultImg} = product)
    }

    /**
     * метод рендера, возвращает разметку
     * @returns {string}
     */

    render(){
        return `
            <div class="product-wrap">
                <div class="product-item">
                    <img src="${this.img}" alt="${this.id}">
                    <div class="product-buttons">
                        <a href="#" class="button"> <i class="fas fa-shopping-cart"></i>Add to Cart</a>
                    </div>
                </div>
                <div class="product-title">
                    <a class="prName" href="#">${this.title}</a>
                    <span class="product-price">${this.price}$</span>
                </div>
            </div>
            `
    }
}

const list = new Catalog('.productWraps')
list.init()













