import "./menu-styles.css";

export function menuLoad () {

    const content = document.querySelector("#content");
    const main = document.querySelector("main");

    //clear out old html and styles
    content.innerHTML = '';
    content.classList.remove("homeContentStyles", "aboutContentStyles");
    main.classList.remove("homeMainStyles", "aboutMainStyles");

    //create the menu page elements
    const menuTitle = document.createElement("h1");
    const menuDiv = document.createElement("div");

    //add text/html to the menu page elements
    menuTitle.innerText = "Menu";
    menuDiv.innerHTML =
        '<div class="menus"><section class="category"><h2 class="title">Burgers</h2><div class="block"><div class="item-and-price"><p class="item">The Smasher</p><p class="cost">$10</p></div><p class="description">Two smashed patties with cheese</p></div><div class="block"><div class="item-and-price"><p class="item">Patty Melt</p><p class="cost">$11</p></div><p class="description">Two patties with sauted onions and cheese served on texas toast</p></div><div class="block"><div class="item-and-price"><p class="item">Black Bean Burger</p><p class="cost">$9</p></div><p class="description">served with avocado</p></div></section><section class="category"><h2 class="title">Starters</h2><div class="block"><div class="item-and-price"><p class="item">Fried Banana Peppers</p><p class="cost">$8</p></div><p class="description">made with secret seasoning</p></div><div class="block"><div class="item-and-price"><p class="item">Fried Pickles</p><p class="cost">$8</p></div><p class="description">served with house made ranch</p></div><div class="block"><div class="item-and-price"><p class="item">Fried Mozz</p><p class="cost">$9</p></div><p class="description">served with house made red sauce</p></div></section><section class="category"><h2 class="title">Sides</h2><div class="block"><div class="item-and-price"><p class="item">Fries</p><p class="cost">$3</p></div><p class="description"></p></div><div class="block"><div class="item-and-price"><p class="item">Cheese Tots</p><p class="cost">$5</p></div><p class="description"></p></div><div class="block"><div class="item-and-price"><p class="item">Brussel Sprouts</p><p class="cost">$4</p></div><p class="description"></p></div></section></div>'

    //append the elements and their css styles
    content.append(menuTitle, menuDiv);
    content.classList.add("menuContentStyles")   
    main.classList.add("menuMainStyles");
    menuDiv.classList.add("menuDiv");

};