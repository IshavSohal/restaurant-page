import frozenSmoothie from "./smoothies/frozen-smoothie.jpg";
import mangoSmoothie from "./smoothies/mango-smoothie.jpg";
import berrySmoothie from "./smoothies/berry-smoothie.jpg";

export const addHomeContent = () => {
    const contentDiv = document.querySelector(".content");

    // ADD MAIN TITLE
    const mainTitle = document.createElement("h1");
    mainTitle.textContent = "Spectacular Smoothie Bar";
    mainTitle.setAttribute("id", "content-title");
    contentDiv.appendChild(mainTitle);

    // ADD IMAGES
    const imagesDiv = document.createElement("div");
    imagesDiv.setAttribute("class", "smoothie-images");
    const frozenImg = document.createElement("img");
    frozenImg.setAttribute("src", frozenSmoothie);
    imagesDiv.appendChild(frozenImg);
    const mangoImg = document.createElement("img");
    mangoImg.setAttribute("src", mangoSmoothie);
    imagesDiv.appendChild(mangoImg);
    const berryImg = document.createElement("img");
    berryImg.setAttribute("src", berrySmoothie);
    imagesDiv.appendChild(berryImg);
    contentDiv.appendChild(imagesDiv);

    // ADD ABOUT US SECTION
    const aboutUsDiv = document.createElement("div");
    aboutUsDiv.setAttribute("class", "content-section aboutus-content");
    const aboutUsTitle = document.createElement("h2");
    aboutUsTitle.textContent = "About Us";
    aboutUsDiv.appendChild(aboutUsTitle);
    const aboutUsInfo = document.createElement("p");
    aboutUsInfo.textContent =
        "At Spectacular Smoothie Bar, we believe a great smoothie starts with \
    great ingredients.That’s why we use only the finest, freshest produce and \
    premium superfoods in every blend.  Our commitment to quality and customer \
    satisfaction drives everything we do—from our handcrafted recipes to our warm, \
    welcoming service. Whether you're fueling up for the day or treating yourself \
    to something refreshing, we’re here to make every visit spectacular.";
    aboutUsDiv.appendChild(aboutUsInfo);
    contentDiv.appendChild(aboutUsDiv);

    // ADD HOURS SECTION
    const hoursDiv = document.createElement("div");
    hoursDiv.setAttribute("class", "content-section hours-content");
    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";
    hoursDiv.appendChild(hoursTitle);

    // Create table
    const hoursTable = document.createElement("table");
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach((day) => {
        const row = document.createElement("tr");
        const header = document.createElement("th");
        header.textContent = day;
        row.appendChild(header);
        const cell = document.createElement("td");
        cell.textContent = day === "Saturday" ? "9am - 11pm" : day === "Sunday" ? "9am - 9pm" : "8am - 8pm";
        row.appendChild(cell);
        hoursTable.appendChild(row);
    });
    hoursDiv.appendChild(hoursTable);
    contentDiv.appendChild(hoursDiv);
};
