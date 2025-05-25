import spectacularSmoothie from "./spectacular-smoothie-bar.png";

export const addContactContent = () => {
    const contentDiv = document.querySelector(".content");

    // ADD MAIN TITLE
    const mainTitle = document.createElement("h1");
    mainTitle.textContent = "Contact";
    mainTitle.setAttribute("id", "content-title");
    contentDiv.appendChild(mainTitle);

    // ADD VISIT US CONTENT
    const visitTitle = document.createElement("h2");
    visitTitle.textContent = "Visit us";
    contentDiv.appendChild(visitTitle);

    const visitUs = document.createElement("div");
    visitUs.setAttribute("class", "location-container");

    // Add image container
    const imgContainer = document.createElement("div");
    const locationImg = document.createElement("img");
    locationImg.setAttribute("src", spectacularSmoothie);
    imgContainer.appendChild(locationImg);
    visitUs.appendChild(imgContainer);

    // Add contact info container
    const gridContactContainer = document.createElement("div");
    const contactContainer = document.createElement("div");
    const address = document.createElement("div");
    address.textContent = "123 Plae Grownd Stret";
    contactContainer.appendChild(address);
    const location = document.createElement("div");
    location.textContent = "Toronto, Ontario M3C 3B7";
    contactContainer.appendChild(location);
    const phoneNum = document.createElement("div");
    phoneNum.textContent = "P: 647-637-9987";
    contactContainer.appendChild(phoneNum);
    gridContactContainer.appendChild(contactContainer);

    visitUs.appendChild(gridContactContainer);
    contentDiv.appendChild(visitUs);

    // ADD SEND MESSAGE CONTENT
    const sendMessageTitle = document.createElement("h2");
    sendMessageTitle.textContent = "Send us a message";
    contentDiv.appendChild(sendMessageTitle);

    // Add send message form
    const formContainer = document.createElement("div");
    formContainer.setAttribute("class", "form-container");
    const messageForm = document.createElement("form");
    messageForm.setAttribute("method", "");
    messageForm.setAttribute("action", "");
    messageForm.setAttribute("id", "send-message");

    // Create form row 1
    const formRow1 = document.createElement("div");
    formRow1.setAttribute("class", "form-row");

    // Create first name container
    const firstNameContainer = document.createElement("div");
    const firstNameLabel = document.createElement("label");
    firstNameLabel.setAttribute("for", "firstName");
    firstNameLabel.textContent = "First Name";
    firstNameContainer.appendChild(firstNameLabel);
    const firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("id", "firstName");
    firstNameInput.setAttribute("placeholder", "Bob");
    firstNameInput.setAttribute("required", "");
    firstNameContainer.appendChild(firstNameInput);
    formRow1.appendChild(firstNameContainer);

    // Create last name container
    const lastNameContainer = document.createElement("div");
    const lastNameLabel = document.createElement("label");
    lastNameLabel.setAttribute("for", "lastName");
    lastNameLabel.textContent = "Last Name";
    lastNameContainer.appendChild(lastNameLabel);
    const lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("id", "lastName");
    lastNameInput.setAttribute("placeholder", "Smith");
    lastNameInput.setAttribute("required", "");
    lastNameContainer.appendChild(lastNameInput);
    formRow1.appendChild(lastNameContainer);
    messageForm.appendChild(formRow1);

    // Create form row 2
    const formRow2 = document.createElement("div");
    formRow2.setAttribute("class", "form-row");

    // Create email container
    const emailContainer = document.createElement("div");
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email";
    emailContainer.appendChild(emailLabel);
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "bob@gmail.com");
    emailInput.setAttribute("required", "");
    emailContainer.appendChild(emailInput);
    formRow2.appendChild(emailContainer);

    // Create phone number container
    const phoneContainer = document.createElement("div");
    const phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "phoneNumber");
    phoneLabel.textContent = "Phone Number";
    phoneContainer.appendChild(phoneLabel);
    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("id", "phoneNumber");
    phoneInput.setAttribute("placeholder", "6474435567");
    phoneInput.setAttribute("required", "");
    phoneContainer.appendChild(phoneInput);
    formRow2.appendChild(phoneContainer);
    messageForm.appendChild(formRow2);

    // Create form row 3
    const formRow3 = document.createElement("div");
    formRow3.setAttribute("class", "form-row");

    // Create message input container
    const messageContainer = document.createElement("div");
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message";
    messageContainer.appendChild(messageLabel);
    const messageTextArea = document.createElement("textarea");
    messageTextArea.setAttribute("name", "message");
    messageTextArea.setAttribute("id", "message");
    messageTextArea.setAttribute("required", "");
    messageContainer.appendChild(messageTextArea);
    formRow3.appendChild(messageContainer);
    messageForm.appendChild(formRow3);

    formContainer.appendChild(messageForm);

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("class", "form-submit");
    submitButton.setAttribute("form", "send-message");
    submitButton.textContent = "Send Message";
    formContainer.appendChild(submitButton);

    contentDiv.appendChild(formContainer);
};
