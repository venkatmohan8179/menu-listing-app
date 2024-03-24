const menu = [
  {
    id: 1,
    title: "ghee idly",
    category: "breakfast",
    price: 120,
    img: "./images/item-1.jpg",
    desc: `Quick delicious and a very filling South Indian breakfast Ghee Sambar Idli,We personally love using ghee..`,
  },
  {
    id: 2,
    title: "Indian thali",
    category: "lunch",
    price: 100,
    img: "./images/item-2.jpg",
    desc: `A balanced meal. From a nutritional point of view, Indian thali is a balanced meal providing carbs, protein, vitamins, minerals.`,
  },
  {
    id: 3,
    title: "chocolate milkshake",
    category: "shakes",
    price: 140,
    img: "./images/item-3.jpeg",
    desc: `Chocolate Milkshake summer long. Use either chocolate or vanilla ice cream (or strawberry if you prefer!) as your base.`,
  },
  {
    id: 4,
    title: "poori",
    category: "breakfast",
    price: 80,
    img: "./images/item-4.jpg",
    desc: `Poori is a puffed deep fried breakfast dish that's very popular in Southern India. Often served with potato masala, `,
  },
  {
    id: 5,
    title: "south indian meals",
    category: "lunch",
    price: 140,
    img: "./images/item-5.jpg",
    desc: `South Indian food is full of vitamins A, C, and K, as well as iron, magnesium, and calcium. It is also predominantly and is high in fiber, `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 120,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "ghee dosa",
    category: "breakfast",
    price: 80,
    img: "./images/item-7.jpg",
    desc: `Ghee dosa is a traditional South Indian breakfast dish made with a thin batter spread on a hot pan,Ghee adds flavor and crispiness. `,
  },
  {
    id: 8,
    title: "dum biryani",
    category: "lunch",
    price: 450,
    img: "./images/item-8.jpg",
    desc: `The meat is flavoured with ginger, garlic, red chili, cumin, garam masala, fried onion and curd and Tasty is so spicy.  `,
  },
  {
    id: 9,
    title: "blueberry Milkshake",
    category: "shakes",
    price: 270,
    img: "./images/item-9.jpeg",
    desc: `This blueberry milkshake is made with ice cream, milk and frozen blueberries and is perfect for a hot day..`,
  },
  {
    id: 10,
    title: "roti with chiken",
    category: "dinner",
    price: 50,
    img: "./images/item-10.jpeg",
    desc: `Roti is a flatbread that is often eaten with curry in India because its soft texture makes it ideal for soaking up sauces and gravies.`,
  },
  {
    id:11,
    title:"chapati",
    category:"dinner",
    price:60,
    img:"./images/item-11.jpg",
    desc: `Chapati and phulka is an unleavened flatbread that originated in the Indus valley civilization and is a staple in India.`,
  },
];


const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


window.addEventListener('DOMContentLoaded',function(){
  displayMenuItems(menu)
  displayMenuButtons();
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">rs-${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
  const categories = menu.reduce(function(values,item){
    if(!values.includes(item.category))
    {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
  );

  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`}).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');

filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category)
      {
        return menuItem;
      }
    });
    if(category === 'all')
    {
      displayMenuItems(menu);
    }
    else
    {
      displayMenuItems(menuCategory);
    }
  });
});
}