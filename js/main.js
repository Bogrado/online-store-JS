'use strict'


const catalogContainer = document.querySelector('.productWraps')
const itemsData = [
    {
        title: 'Name 1',
        id: 1,
        price: 2000,
        imgSrc: 'img/catprod_1.jpg'

    },
    {
        title: 'Name 2',
        id: 2,
        price: 200,
        imgSrc: 'img/catprod_2.jpg'
    },
    {
        title: 'Name 3',
        id: 3,
        price: 100,
        imgSrc: 'img/catprod_3.jpg'
    },
    {
        title: 'Name 4',
        id: 4,
        price: 87,
        imgSrc: 'img/catprod_4.jpg'
    },
    {
        title: 'Name 5',
        id: 4,
        price: 87,
        imgSrc: 'img/catprod_5.jpg'
    },
    {
        // title: 'Name 6',
        id: 4,
        // price: 87,
        // imgSrc: 'img/catprod_6.jpg'
    }
];

/**
 * простая функция рендера карточки, возвращает разметку, в параметрах функции используется де структуризация объекта
 * @param id
 * @param imgSrc
 * @param title
 * @param price
 * @returns
 */

const renderItem = ({id, imgSrc = 'img/default.jpeg', title = 'unknown', price = 100500}) => {
    return `
            <div class="product-wrap">
                <div class="product-item">
                    <img src="${imgSrc}" alt="${id}">
                    <div class="product-buttons">
                        <a href="#" class="button"> <i class="fas fa-shopping-cart"></i>Add to Cart</a>
                    </div>
                </div>
                <div class="product-title">
                    <a class="prName" href="#">${title}</a>
                    <span class="product-price">${price}$</span>
                </div>
            </div>    
            `
}
/**
 * Рендер карточек каталога через метод forEach, благодаря этому методу не возникает проблемы с отображением запятой, так как forEach не создает новый массив, а работает со значениями нынешнего.
 * @param header
 * @param data
 */
// const renderCatalogList = (header, data) => {
//     header.innerHTML = ''
//     data.forEach(item => header.innerHTML += renderItem(item))
// }

/**
 * Рендер карточек каталога через метод map, чтобы убрать запятые, применяется метод join с разделителем '' (без пробелов).
 * @param header
 * @param data
 */

const renderCatalogList = (header, data) =>{
    header.innerHTML = ''
    header.innerHTML = data.map(item => renderItem(item)).join('')
}

renderCatalogList(catalogContainer, itemsData)

