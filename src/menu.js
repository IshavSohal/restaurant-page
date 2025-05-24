import frozenSmoothie from "./smoothies/frozen-smoothie.jpg";
import mangoSmoothie from "./smoothies/mango-smoothie.jpg";
import berrySmoothie from "./smoothies/berry-smoothie.jpg";
import chocolateSmoothie from "./smoothies/chocolate-smoothie.png";
import greenSmoothie from "./smoothies/green-smoothie.jpg";

export const addMenuContent = () => {
    const contentDiv = document.querySelector(".content");

    // ADD MAIN TITLE
    const mainTitle = document.createElement("h1");
    mainTitle.textContent = "Menu";
    mainTitle.setAttribute("id", "content-title");
    contentDiv.appendChild(mainTitle);

    // ADD MENU CONTAINER
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("class", "menu-container");

    // STORE MENU ITEMS IN ARRAY
    const menuItems = [
        {
            name: "Berry Power Burst Smoothie",
            image: berrySmoothie,
            description:
                "Feel the berry blitz—blue, black and red super‑fruits whipped into a vibrant, protein‑powered purple rush",
            prices: {
                small: "$5.25",
                medium: "$6.50",
                large: "$7.75",
            },
            ingredients: [
                "Frozen berries (strawberry, raspberry, blackberry, blueberry)",
                "Ripe bananas",
                "Plain low-fat greek yogurt",
                "Unsweetened almond milk",
                "Wildflower honey",
                "Crushed ice",
            ],
        },
        {
            name: "Frosted Sunrise Swirl",
            image: frozenSmoothie,
            description:
                "Sip the taste of summer—frosty strawberries, sun‑golden peaches, and velvety Greek yogurt blitzed into one vibrant burst of refreshment.",
            prices: {
                small: "$5.25",
                medium: "$6.50",
                large: "$7.75",
            },
            ingredients: [
                "Frozen strawberries",
                "Ripe bananas",
                "Frozen peach slices",
                "Plain low-fat greek yogurt",
                "Fresh orange juice",
                "Wildflower honey",
                "Crushed ice",
            ],
        },
        {
            name: "Tropical Mango Glow Smoothie",
            image: mangoSmoothie,
            description:
                "Escape to the tropics in one creamy sip—ripe mango, banana and a kiss of coconut blended into pure sunshine",
            prices: {
                small: "$5.50",
                medium: "$6.75",
                large: "$8.00",
            },
            ingredients: [
                "Frozen mango chunks",
                "Ripe bananas",
                "Plain low-fat greek yogurt",
                "Chilled coconut water",
                "Pinch of ground tumeric",
                "Crushed ice",
            ],
        },
        {
            name: "Choco-Nutter Blitz Smoothie",
            image: chocolateSmoothie,
            description:
                "Indulge your inner choc-lover—creamy banana, roasted peanut butter and dark-rich cocoa whipped into a protein-packed dessert you can sip!",
            prices: {
                small: "$5.75",
                medium: "$7.25",
                large: "$8.75",
            },
            ingredients: [
                "Ripe bananas",
                "Natural peanut butter",
                "Unsweetened cocoa powder",
                "Plain low-fat greek yogurt",
                "Unsweetened almond milk",
                "Wildflower honey",
                "Dark chocolate shavings",
            ],
        },
        {
            name: "Island Green Revive Smoothie",
            image: greenSmoothie,
            description:
                "Refresh from the inside out—pineapple-sweet, kale-green power blended into a tropical reset you can sip.",
            prices: {
                small: "$5.50",
                medium: "$6.75",
                large: "$8.00",
            },
            ingredients: [
                "Frozen pineapple chunks",
                "Frozen ripe bananas",
                "Plain low-fat greek yogurt",
                "Fresh kale leaves",
                "Chilled coconut water",
                "Grated ginger",
                "Lime juice",
                "Crushed ice",
            ],
        },
    ];

    // ADD MENU ITEMS
    menuItems.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.setAttribute("class", "menu-item");

        // Add smoothie title
        const itemTitle = document.createElement("h2");
        itemTitle.textContent = item.name;
        itemContainer.appendChild(itemTitle);

        // Add smoothie image
        const itemImage = document.createElement("img");
        itemImage.setAttribute("src", item.image);
        itemContainer.appendChild(itemImage);

        // Add smoothie description
        const itemDescription = document.createElement("div");
        itemDescription.setAttribute("class", "item-description");
        itemDescription.textContent = item.description;
        itemContainer.appendChild(itemDescription);

        // ADD ADDITIIONAL SMOOTHIE INFO DROPDOWN
        const itemDropdown = document.createElement("details");
        itemDropdown.setAttribute("class", "items-info");

        // Add dropdown title
        const dropdownTitle = document.createElement("summary");
        dropdownTitle.textContent = "More Info";
        itemDropdown.appendChild(dropdownTitle);

        // Add pricing info
        const pricingTitle = document.createElement("h3");
        pricingTitle.textContent = "Pricing";
        itemDropdown.appendChild(pricingTitle);

        // Add pricing info table
        const pricingTable = document.createElement("table");

        // Add pricing info table headers
        const pricingTableHeaders = document.createElement("tr");
        const pricingSmallHeader = document.createElement("th");
        pricingSmallHeader.textContent = "Small (350mL)";
        pricingTableHeaders.appendChild(pricingSmallHeader);
        const pricingMediumHeader = document.createElement("th");
        pricingMediumHeader.textContent = "Medium (500mL)";
        pricingTableHeaders.appendChild(pricingMediumHeader);
        const pricingLargeHeader = document.createElement("th");
        pricingLargeHeader.textContent = "Large (650mL)";
        pricingTableHeaders.appendChild(pricingLargeHeader);
        pricingTable.appendChild(pricingTableHeaders);

        // Add pricing info table values
        const pricingTableValues = document.createElement("tr");
        const pricingSmallValue = document.createElement("td");
        pricingSmallValue.textContent = item.prices.small;
        pricingTableValues.appendChild(pricingSmallValue);
        const pricingMediumValue = document.createElement("td");
        pricingMediumValue.textContent = item.prices.medium;
        pricingTableValues.appendChild(pricingMediumValue);
        const pricingLargeValue = document.createElement("td");
        pricingLargeValue.textContent = item.prices.large;
        pricingTableValues.appendChild(pricingLargeValue);
        pricingTable.appendChild(pricingTableValues);

        itemDropdown.appendChild(pricingTable);

        // Add item ingredient info
        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.textContent = "Ingredients";
        itemDropdown.appendChild(ingredientsTitle);

        // Add item ingredient list
        const ingredientsList = document.createElement("ul");
        item.ingredients.forEach((ingredient) => {
            const ingredientListItem = document.createElement("li");
            ingredientListItem.textContent = ingredient;
            ingredientsList.appendChild(ingredientListItem);
        });
        itemDropdown.appendChild(ingredientsList);

        itemContainer.appendChild(itemDropdown);
        menuContainer.appendChild(itemContainer);
        contentDiv.appendChild(menuContainer);
    });
};
