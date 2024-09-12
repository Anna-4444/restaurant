import "./home-styles.css";

export function pageLoad () {

    const content = document.querySelector("#content");
    const main = document.querySelector("main");

    //clear out old html and styles
    content.innerHTML = '';
    content.classList.remove("aboutContentStyles", "menuContentStyles");
    main.classList.remove("aboutMainStyles", "menuMainStyles");

    //create the home page elements
    const restaurantName = document.createElement("h1");
    
    //add text to the home page elements
    restaurantName.innerText = "restaurant";
  
    //append the elements and their css styles
    content.append(restaurantName);
    main.classList.add("homeMainStyles");
};


