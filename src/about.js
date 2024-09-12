import "./about-styles.css";
import spiceBowl from "./img/pexels-dapur-melodi.jpg";
import dough from "./img/pexels-vanmalidate.jpg";
import noodleBowl from "./img/pexels-valeriya.jpg";

export function aboutLoad () {

    const content = document.querySelector("#content");
    const main = document.querySelector("main");
   
    //clear out old html and styles
    content.innerHTML = '';
    content.classList.remove("homeContentStyles", "menuContentStyles")
    main.classList.remove("homeMainStyles", "menuMainStyles");

    //create the about page elements
    const restaurantName = document.createElement("h1");
    const aboutDiv = document.createElement("div");
    const imageDiv = document.createElement ("div");

    //create three images in figure tags and add them to the imageDiv
    const image1 = document.createElement ("img");
    image1.src = spiceBowl;
    const figure1 = document.createElement ("figure");
    figure1.append(image1);
    const image2 = document.createElement ("img");
    image2.src = dough;
    const figure2 = document.createElement ("figure");
    figure2.append(image2);
    const image3 = document.createElement ("img");
    image3.src = noodleBowl;
    const figure3 = document.createElement ("figure");
    figure3.append(image3);
    imageDiv.append(figure1, figure2, figure3);

    //add text/html to the about page elements
    restaurantName.innerText = "restaurant";
    aboutDiv.innerHTML = 
        '<h2>Welcome</h2> <p>We believe that great food is more than just a meal, it’s an experience. Nestled in the heart of [City/Neighborhood], our restaurant is a celebration of culinary excellence and warm hospitality.</p><h2>Our Story</h2> <p>Founded in [Year], [Restaurant Name] has been a cherished destination for food lovers seeking a unique dining experience. Our founder, [Founder’s Name], envisioned a place where quality ingredients, innovative recipes, and genuine service come together to create memorable moments.</p>'


    //append the elements and their css styles
    content.append(restaurantName, aboutDiv, imageDiv);
    content.classList.add("aboutContentStyles")
    main.classList.add("aboutMainStyles");
};