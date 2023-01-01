var menu = [{
    id: 1,
    image: 'assets/images/cssAnimation.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9
},
{ 
    id: 2,
    image: 'assets/images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    id: 3,
    image: 'assets/images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{

    id: 4,
    image: 'assets/images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    id: 5,
    image: 'assets/images/javascriptDef.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    id: 6,
    image: 'assets/images/htmlTags.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    id: 7,
    image: 'assets/images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    id: 8,
    image: 'assets/images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    id: 9,
    image: 'assets/images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    id: 10,
    image: 'assets/images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    id: 11,
    image: 'assets/images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    id: 12,
    image: 'assets/images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    id: 13,
    image: 'assets/images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    id: 14,
    image: 'assets/images/cssColors.png',
    title: 'css colors',
    category: 'CSS',
    price: 29.9
},
{
    id: 15,
    image: 'assets/images/phpBasics.png',
    title: 'getting started with php',
    category: 'PHP',
    price: 15.9
},
{
    id: 16,
    image: 'assets/images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    id: 17,
    image: 'assets/images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    id: 18,
    image: 'assets/images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'PHP',
    price: 45.9
},
{
    id: 19,
    image: 'assets/images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
];

const sectioncenter =document.querySelector(".section-center");
const filterBtns =document.querySelectorAll('.filter-btn');
//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
});
// filter items
filterBtns.forEach(function(btn){
btn.addEventListener('click',function(e){
    const category =e.currentTarget.dataset.id;
    const menuCategory =menu.filter(function(menuItem){
        //console.log(menuItem.category)
        if(menuItem.category=== category){
            return menuItem;
        }
        
    })
   // console.log(menuCategory)
   if(category === 'ALL'){
    displayMenuItems(menu)
   }
   else{
    displayMenuItems(menuCategory)
   }
})
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item)
         return `<div class="section-center">
         <div class="b-game-card  " style="width: 20rem; margin-top: 5rem; height:12rem ;">
             <img class="card-img-top " src=${item.image} alt="${item.title}" >
             <div class="card-body">
                 <div class="card-text"><p style="text-align: center;">${item.title}<br><strong>${item.price}</strong></p></div>
             </div>
         </div>
       </div>`;
     });
     displayMenu =displayMenu.join("")
     sectioncenter.innerHTML=displayMenu
}
var priice = document.getElementById('price');
let tmpPrice = new Array();
price.addEventListener('change', function () {
  document.getElementById('menuBlock').innerHTML = '';

  let p = priice.value;
  document.getElementById('priceValue').innerHTML = p + '$';
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].price <= p) {
      tmpPrice.push(menu[i]);
    }
  }
  tmpPrice.forEach((n, i) => {
    if (i % 3 === 0) {
      divRow = document.createElement('div');
      divRow.setAttribute('class', 'row');
      document.getElementById('menuBlock').appendChild(divRow);
    }
    let html =
      '<div class="menuCard"><div class="menuImg"><img src="' +
      n.image +
      '" alt=""  style=" width="300" height="250" " ></div><div class="menuInfo"><p class="menuTitle">' +
      n.title +
      '</p><p class="mznuPrice">$' +
      n.price +
      '</p> </div></div>';

    divRow.innerHTML += html;
  });
  tmpPrice = [];
});