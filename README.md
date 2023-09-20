<hr>

# online-store-JS
Старые уроки по JS 2021 года от GB.
<hr>

## **Урок 1. Вводный:**



### **Задачи к уроку 1:**

- Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
- Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
- *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?

### Решение к уроку 1:

- [Ссылка на решение преподавателя] (https://www.youtube.com/watch?v=Wmt6g7D1EkY&feature=youtu.be)
- Стили взяты из уроков по верстке
- Значения по умолчанию добавлены, немного упростил используя де структуризацию
- Происходит из-за того, что в момент преобразования массива в строку, значения массива перечисляются в строке через ",". 
Решается заменой разделителя с помощью метода строки "join"

## **Урок 2. ООП в JavaScript:**

- Посмотрели на классы в ES5. В рот их любить...
- Посмотрели на классы в ES6. Уже понятнее, но нужна практика
- Переписали первый урок через класс

### **Задачи к уроку 2:**

- Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
- Добавьте для Products метод, определяющий суммарную стоимость всех товаров.
- *Некая сеть фастфуда предлагает несколько видов гамбургеров: (Этого я пока делать не буду, хоть и надо, дополнительно потом залью)
  - Маленький (50 рублей, 20 калорий).
  - Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
  - С сыром (+10 рублей, +20 калорий).
  - С салатом (+20 рублей, +5 калорий).
  - С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

### Решение к уроку 2:

- [ссылка на решение преподавателя] (https://www.youtube.com/watch?v=9h7cW5_dw2w&feature=youtu.be)
- написал, как мне кажется, все необходимые методы для классов корзины и товара для корзины
- посчитал итоговую стоимость всех товаров на странице каталога
- дополнительное задание буду делать позже