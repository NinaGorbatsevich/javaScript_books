let books = document.querySelectorAll('.book')
books[2].before(books[5])
books[5].before(books[3])
books[3].before(books[4])
books[4].before(books[0])
books[0].before(books[1])

let image = document.querySelector('body');
image.style.backgroundImage = 'url("image/you-dont-know-js.jpg")'


let changeText = document.querySelector('.book3')
changeText.textContent = 'Книга3. this и Прототипы Объектов'

const delElement = document.querySelector('.adv')
delElement.remove()

let book2 = document.querySelectorAll('.book-2 ul li')
book2[2].before(book2[9])
book2[9].before(book2[7])
book2[7].before(book2[5])
book2[5].before(book2[4])
book2[4].before(book2[8])
book2[8].before(book2[6])
book2[6].before(book2[3])
book2[3].before(book2[1])
book2[1].before(book2[0])

let book5 = document.querySelectorAll('.book-5 ul li')
book5[10].before(book5[8])
book5[8].before(book5[5])
book5[5].before(book5[7])
book5[7].before(book5[6])
book5[6].before(book5[2])
book5[2].before(book5[4])
book5[4].before(book5[3])
book5[3].before(book5[9])
book5[9].before(book5[1])

let book6 = document.querySelector('.book-6 ul')
let li = document.createElement('li')
li.textContent = "Глава 8: За пределами ES6"
book6.append(li)

let book6li = document.querySelectorAll('.book-6 ul li')
book6li[9].before(book6li[10])