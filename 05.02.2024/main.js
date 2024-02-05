// let elem = document.querySelector('.example')
// console.log (elem.offsetTop)
// console.log (elem.offsetLeft)
// console.log (elem.clientTop)
// console.log (elem.clientLeft)
// console.log (elem.offsetWidth)
// console.log (elem.clientWidth)
// console.log (elem.offsetHeight)
// console.log (elem.clientHeight)
// console.log (elem.scrollTop)
// console.log (elem.)


// №1
//
// document.getElementById('elem').classList.add('www');
// document.getElevar elem = document.getElementById('elem');
// if (elem.classList.contains('www')) 
// {
//     elem.classList.remove('www');
// }
// else {
//     elem.classList.add('www');
// }
// let hasClass = document.getElementById('elem').classList.contains('www');
// console.log(hasClass);
// let classCount = document.getElementById('elem').classList.length;
// console.log(classCount);
// let elem = document.getElementById('elem');
// for (var i = 0; i < elem.classList.length; i++) {
//     alert(elem.classList[i]);
// }

// №2
//
// let elem = document.getElementById('elem');

// №3
//
// document.getElementById('elem').addEventListener('click', function() {
//     console.log(this.tagName);
// });
// document.getElementById('elem').addEventListener('click', function() {
//     console.log(this.tagName.toLowerCase());
// });
// let elems = document.getElementsByClassName('www');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].textContent += elems[i].tagName.toLowerCase();
// }

// №4
//
// let ol = document.querySelector('ol');
// let li = document.createElement('li');
// li.textContent = 'пункт';
// ol.appendChild(li);

// let ul = document.querySelector('ul');
// let array = ['элемент1', 'элемент2', 'элемент3'];

// for (var i = 0; i < array.length; i++) {
//     var li = document.createElement('li');
//     li.textContent = array[i];
//     ul.appendChild(li);
// }

// №5
//
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');

// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');

// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');

// №6
//
// document.querySelector('button').addEventListener('click', function() {
//     let parent = document.getElementById('parent');
//     let child = document.getElementById('child');
//     parent.removeChild(child);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let ol = document.querySelector('ol');
//     ol.removeChild(ol.lastElementChild);
// });

// document.getElementById('element').addEventListener('click', function() {
//     this.remove();
// });

// document.querySelector('ol').addEventListener('click', function(e) {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// });

// document.querySelector('button').addEventListener('click', function() {
//     let input = document.querySelector('input');
//     let clone = input.cloneNode(true); 
//     input.parentNode.appendChild(clone);
// });

// :Потомки
// let elem = document.getElementById('elem');
// let firstChild = elem.firstElementChild;
// firstChild.style.color = 'red';

// let elem = document.getElementById('elem');
// let lastChild = elem.lastElementChild;
// lastChild.style.color = 'red';

// let elem = document.getElementById('elem');
// let children = elem.children;
// for (var i = 0; i < children.length; i++) {
//     children[i].textContent += '!';
// }

// :Соседи
// let elem = document.getElementById('elem');
// let previousSibling = elem.previousElementSibling;
// if (previousSibling) {
//     previousSibling.textContent += '!';
// }

// let elem = document.getElementById('elem');
// let nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//     nextSibling.textContent += '!';
// }

// let elem = document.getElementById('elem');
// let nextNextSibling = elem.nextElementSibling.nextElementSibling;
// if (nextNextSibling) {
//     nextNextSibling.textContent += '!';
// }

// Родители
// let elem = document.getElementById('elem');
// let parent = elem.parentElement;
// parent.style.color = 'red';

// let elem = document.getElementById('elem');
// let grandparent = elem.parentElement.parentElement;
// if (grandparent) {
//     grandparent.style.color = 'red';
// }

// На величину границы
// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let borderTopWidth = elem.style.borderTopWidth;
//     console.log(borderTopWidth);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let borderLeftWidth = elem.style.borderLeftWidth;
//     console.log(borderLeftWidth);
// });

// На полный размер элемента
// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let width = elem.offsetWidth;
//     console.log(width);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let height = elem.offsetHeight;
//     console.log(height);
// });

// На размер элемента без границ, но с padding
// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let width = elem.clientWidth;
//     console.log(width);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let height = elem.clientHeight;
//     console.log(height);
// });

//  Практика с getComputedStyle
// let elem = document.getElementById('elem');
// let style = window.getComputedStyle(elem);

// let width = parseFloat(style.width);
// let height = parseFloat(style.height);

// console.log('Ширина: ' + width + 'px');
// console.log('Высота: ' + height + 'px');

// Прокрутка элемента
// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     console.log(elem.scrollTop);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     console.log(elem.scrollLeft);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = 100;
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop += 100;
// });

// Прокрутка элемента
// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     console.log(elem.scrollHeight);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     console.log(elem.scrollWidth);
// });

// document.querySelector('button').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight - 100;
// });

// Прокрутка страницы
// document.querySelector('button').addEventListener('click', function() {
//     console.log(window.pageYOffset);
// });

// document.querySelector('button').addEventListener('click', function() {
//     console.log(window.pageXOffset);
// });
// Прокрутка страницы
// document.querySelector('button').addEventListener('click', function() {
//     window.scrollTo(300, 500);
// });

// document.querySelector('button').addEventListener('click', function() {
//     window.scrollBy(0, 300);
// });

Практика
document.querySelector('button').addEventListener('click', function() {
    window.scrollTo(0, document.documentElement.scrollHeight);
});

document.querySelector('button').addEventListener('click', function() {
    window.scrollBy(0, 400);
});

document.querySelector('button').addEventListener('click', function() {
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
        window.scrollTo(0, 100);
    }
});

document.getElementById('elem').addEventListener('click', function() {
    this.style.width = (this.offsetWidth * 2) + 'px';
    this.style.height = (this.offsetHeight * 2) + 'px';
});



