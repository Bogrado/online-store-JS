'use strict'

/**
 * Базовый класс для товаров от которого будут наследоваться товар для корзины и для каталога
 */

class Item {
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
                        <a href="#" class="button  hoover_button" data-id = "${this.id}"> <i class="fas fa-shopping-cart"></i>Add to Cart</a>
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

/**
 * Класс товара для каталога
 */
class ProductItem extends Item{

    /**
     * Прослушка на контейнере, если клик по кнопке "Добавить в корзину", то вызывается метод _pushCatalogProductInCartData
     * @param selector
     * @param cartData
     * @param catalogProducts
     */
    addEventHandler(selector, cartData, catalogProducts){

        selector.addEventListener('click', (event)=>{
            event.preventDefault()
            const target = event.target
            if (target && target.matches('.hoover_button')){

                this._pushCatalogProductInCartData(target, catalogProducts, cartData)
            }
        })
    }

    /**
     * метод сравнивает значение target id с id в массиве products, если айдишники совпадают, то пушит продукт в массив товаров в корзине
     * НУЖНО СДЕЛАТЬ ПРОВЕРКУ, ПРИ КОТОРОЙ, ЕСЛИ ТОВАР ОДИНАКОВЫЙ, ТО НЕ ПУШИЛСЯ СНОВА, А ИЗМЕНЯЛОСЬ КОЛИЧЕСТВО ТОВАРА, вот только такого свойства как количество у меня пока нету)))
     * @param target
     * @param catalogProducts
     * @param cartData
     * @private
     */
    _pushCatalogProductInCartData(target, catalogProducts, cartData){

        catalogProducts.forEach(item => {
            if (parseInt(target.getAttribute('data-id')) === item.id){
                cartData.push(item)
                console.log(cartData)
            }
        })
    }
}

class CartItem extends Item{

}




/**
 * Управляющий класс каталога, при инициализации принимает в себя один аргумент selector
 */

class Catalog {
    data = []
    products = []
    container = null
    outerData = []

    constructor(selector, selectCartData) {
        this.container = document.querySelector(selector)
        this.outerData = selectCartData
    }

    /**
     * Инициализирующий метод, через нее всё запускаю, две метода fetchData и render (каталога) можно было вынести в конструктор, но я решил сделать init
     */

    init(){
        this._fetchData()
        this._render()
        setTimeout(()=>{
            console.log(this._getProductsPrice())
        }, 3000)

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
                img: 'img/catprod_1.jpg',
                qty: 3

            },
            {
                title: 'Name 2',
                id: 2,
                price: 200,
                img: 'img/catprod_2.jpg',
                qty: 6
            },
            {
                title: 'Name 3',
                id: 3,
                price: 100,
                img: 'img/catprod_3.jpg',
                qty: 6
            },
            {
                title: 'Name 4',
                id: 4,
                price: 87,
                img: 'img/catprod_4.jpg',
                qty: 4
            },
            {
                title: 'Name 5',
                id: 5,
                price: 195,
                img: 'img/catprod_5.jpg',
                qty: 9
            },
            {
                // title: 'Name 6',
                id: 6,
                // price: 87,
                // imgSrc: 'img/catprod_6.jpg',
                qty: 91
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
     * Метод подсчета суммы за все товары в каталоге, очень полезный метод, все же считают итоговую стоимость каталога
     * добавил проверку, если изначально в data были неполные данные и цены не было, то подставляется 0
     * @private
     */
    _getProductsPrice(defaultPrice = 0){
        return this.products.reduce((totalPrice, item) => {
            return  totalPrice += !item.price ? item.price = defaultPrice : item.price
        }, 0)
    }

    /**
     * Рендер каталога, перед тем как непосредственно рендерить вызывает метод getProducts, который заполняет пустой массив свойства products, затем пробегаюсь по этому массиву forEach-ем и добавляю в контейнер готовую разметку.
     * @private
     */

    _render(){
        this._getProducts()
        this.products.forEach(product => this.container.insertAdjacentHTML('beforeend', product.render()))
        const addButtonListener = new ProductItem(this.container)
        addButtonListener.addEventHandler(this.container, this.outerData ,this.products)

    }




}






/**
 * класс корзины
 */

class Cart {
    container = null
    dataFormCatalog = [] // dataFormCatalog - тот товар, что прилетит из каталога
    products = [] // products - продукт класс, который будет соответствовать корзине

    constructor(selector) {
        this.container = document.querySelector(selector)
    }

    /**
     * инициализация корзины, здесь вызываются все необходимые для функционала методы
     */

    init(){

    }

    /**
     * рендер пустой корзины
     * @private
     */

    _renderEmptyCart(){

    }

    /**
     * получить массив продуктов соответствующих корзине
     * @private
     */

    _getProducts(){

    }

    /**
     * отрисовать корзину, здесь будет вызван метод _renderEmptyCart если корзина пуста
     * @private
     */

    _renderCart(){

    }

    /**
     * увеличение количества товара
     * @private
     */

    _increaseQuantity(){

    }

    /**
     * уменьшение количества товара
     * @private
     */

    _decreaseQuantity(){

    }

    /**
     * ивент, в зависимости от того, на какую кнопку нажимаем (добавить 1 или убрать 1) будут вызывать методы _increaseQuantity или _decreaseQuantity
     * @private
     */

    _PlusOrMinusQuantityEvent(){

    }

    /**
     * метод очистки корзины, должен очищать корзину и вызывать метод _renderCart, тот в свою очередь делает проверку на то, что корзина пуста и вызывает метод _renderEmptyCart
     * @private
     */

    _clearCart(){

    }

    /**
     * метод подсчета корзины
     * @private
     */

    _getTotalPrice(){

    }

}

class ProductItemForBasket{

}
const onlineCart = new Cart('.cart')
const list = new Catalog('.productWraps',onlineCart.dataFormCatalog, '.button')
list.init()













