const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerHTMl);

// for (let i = 0; i < parent.children.length; i++){
//     console.log(parent.children[i].innerHTML);
// }
parent.children[0].style.color = "orange"
parent.children[3].style.color = "green"

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day')
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log("NODES: ",parent.childNodes);