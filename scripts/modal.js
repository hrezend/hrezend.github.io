/**
 * @author Hérson Rezende
 * @version 1.0
 * @file modal.js
 * @description Modal Functions
 */

function createModalMyGraduations() {
    var container = document.getElementById("container");
    var modal = document.createElement("div");
    var modalContent = document.createElement("div");
    var icon = document.createElement("i");
    var title = document.createElement("p");
    var buttonClose = document.createElement("button");

    modal.setAttribute("id", "modal-my-graduations");
    modal.setAttribute("class", "modal-container");

    modalContent.setAttribute("id", "modal-content");
    modalContent.setAttribute("class", "modal-content");

    icon.setAttribute("id", "modal-icon");
    icon.setAttribute("class", "fas fa-user-graduate");

    title.setAttribute("id", "modal-title");
    title.appendChild(document.createTextNode("Education"));

    buttonClose.setAttribute("id", "button-close-modal");
    buttonClose.setAttribute("class", "button-close-modal");
    buttonClose.appendChild(document.createTextNode("Dismiss"));

    /**
     * informações sobre o IFBA
     */
    var elementDiv1 = document.createElement("div");
    var elementSpan1 = document.createElement("span");
    var elementTitle1 = document.createElement("p");
    var elementDescription1 = document.createElement("h4");

    elementDiv1.setAttribute("id", "modal-list-element");
    elementDiv1.setAttribute("class", "modal-list-element");

    elementSpan1.appendChild(document.createTextNode("2015 - 2019"));
    elementTitle1.appendChild(document.createTextNode("COMPUTER TECHNICIAN"));
    elementDescription1.appendChild(document.createTextNode("Instituto Federal da Bahia - Santo Amaro, Brazil"));

    elementDiv1.appendChild(elementSpan1);
    elementDiv1.appendChild(elementTitle1);
    elementDiv1.appendChild(elementDescription1);

    /**
     * informações sobre a UFBA
     */
    var elementDiv2 = document.createElement("div");
    var elementSpan2 = document.createElement("span");
    var elementTitle2 = document.createElement("p");
    var elementDescription2 = document.createElement("h4");
 
    elementDiv2.setAttribute("id", "modal-list-element");
    elementDiv2.setAttribute("class", "modal-list-element");
 
    elementSpan2.appendChild(document.createTextNode("2019 - 2024"));
    elementTitle2.appendChild(document.createTextNode("B.SC. IN COMPUTER SCIENCE"));
    elementDescription2.appendChild(document.createTextNode("Universidade Federal da Bahia - Salvador, Brazil"));
 
    elementDiv2.appendChild(elementSpan2);
    elementDiv2.appendChild(elementTitle2);
    elementDiv2.appendChild(elementDescription2);

    modalContent.appendChild(icon);
    modalContent.appendChild(title);
    modalContent.appendChild(elementDiv1);
    modalContent.appendChild(elementDiv2);
    modalContent.appendChild(buttonClose);

    modal.appendChild(modalContent);

    container.appendChild(modal);

    // When the user clicks dismiss button of the modal, close it
    buttonClose.onclick = function() {
        modal.remove();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.remove();
        }
    }
}

function createModalMyExperiences() {
    var container = document.getElementById("container");
    var modal = document.createElement("div");
    var modalContent = document.createElement("div");
    var icon = document.createElement("i");
    var title = document.createElement("p");
    var buttonClose = document.createElement("button");

    modal.setAttribute("id", "modal-my-graduations");
    modal.setAttribute("class", "modal-container");

    modalContent.setAttribute("id", "modal-content");
    modalContent.setAttribute("class", "modal-content");

    icon.setAttribute("id", "modal-icon");
    icon.setAttribute("class", "fas fa-history");

    title.setAttribute("id", "modal-title");
    title.appendChild(document.createTextNode("Work Experience"));

    buttonClose.setAttribute("id", "button-close-modal");
    buttonClose.setAttribute("class", "button-close-modal");
    buttonClose.appendChild(document.createTextNode("Dismiss"));

    /**
     * informações sobre STI-UFBA
     */
    var elementDiv1 = document.createElement("div");
    var elementSpan1 = document.createElement("span");
    var elementTitle1 = document.createElement("p");
    var elementDescription1 = document.createElement("h4");

    elementDiv1.setAttribute("id", "modal-list-element");
    elementDiv1.setAttribute("class", "modal-list-element");

    elementSpan1.appendChild(document.createTextNode("January 2021 - January 2022"));
    elementTitle1.appendChild(document.createTextNode("Test Analyst - Trainee"));
    elementDescription1.appendChild(document.createTextNode("Superintêndencia de Tecnologia da Informação"));

    elementDiv1.appendChild(elementSpan1);
    elementDiv1.appendChild(elementTitle1);
    elementDiv1.appendChild(elementDescription1);

    /**
     * informações sobre a FORD
     */
    var elementDiv2 = document.createElement("div");
    var elementSpan2 = document.createElement("span");
    var elementTitle2 = document.createElement("p");
    var elementDescription2 = document.createElement("h4");
 
    elementDiv2.setAttribute("id", "modal-list-element");
    elementDiv2.setAttribute("class", "modal-list-element");
 
    elementSpan2.appendChild(document.createTextNode("January 2022 - June 2022"));
    elementTitle2.appendChild(document.createTextNode("Software Developer - Trainee"));
    elementDescription2.appendChild(document.createTextNode("Ford Motor Company"));
 
    elementDiv2.appendChild(elementSpan2);
    elementDiv2.appendChild(elementTitle2);
    elementDiv2.appendChild(elementDescription2);

    modalContent.appendChild(icon);
    modalContent.appendChild(title);
    modalContent.appendChild(elementDiv1);
    modalContent.appendChild(elementDiv2);
    modalContent.appendChild(buttonClose);

    modal.appendChild(modalContent);

    container.appendChild(modal);

    // When the user clicks dismiss button of the modal, close it
    buttonClose.onclick = function() {
        modal.remove();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.remove();
        }
    }
}

function createModalMyLanguages() {
    var container = document.getElementById("container");
    var modal = document.createElement("div");
    var modalContent = document.createElement("div");
    var icon = document.createElement("i");
    var title = document.createElement("p");
    var buttonClose = document.createElement("button");

    modal.setAttribute("id", "modal-my-graduations");
    modal.setAttribute("class", "modal-container");

    modalContent.setAttribute("id", "modal-content");
    modalContent.setAttribute("class", "modal-content");

    icon.setAttribute("id", "modal-icon");
    icon.setAttribute("class", "fas fa-language");

    title.setAttribute("id", "modal-title");
    title.appendChild(document.createTextNode("Languages"));

    buttonClose.setAttribute("id", "button-close-modal");
    buttonClose.setAttribute("class", "button-close-modal");
    buttonClose.appendChild(document.createTextNode("Dismiss"));

    /**
     * informações sobre portugues
     */
    var elementDiv1 = document.createElement("div");
    elementDiv1.setAttribute("id", "modal-list-element");
    elementDiv1.setAttribute("class", "modal-list-element");

    var elementTitle1 = document.createElement("p");
    elementTitle1.appendChild(document.createTextNode("Brazilian Portuguese"));

    var elementDescription1 = document.createElement("h4");
    elementDescription1.appendChild(document.createTextNode("Native Proficiency"));

    elementDiv1.appendChild(elementTitle1);
    elementDiv1.appendChild(elementDescription1);

    /**
     * informações sobre ingles
     */
    var elementDiv2 = document.createElement("div");
    elementDiv2.setAttribute("id", "modal-list-element");
    elementDiv2.setAttribute("class", "modal-list-element");
 
    var elementTitle2 = document.createElement("p");
    elementTitle2.appendChild(document.createTextNode("English"));

    var elementDescription2 = document.createElement("h4");
    elementDescription2.appendChild(document.createTextNode("Avanced Proficiency"));
 
    elementDiv2.appendChild(elementTitle2);
    elementDiv2.appendChild(elementDescription2);


    modalContent.appendChild(icon);
    modalContent.appendChild(title);
    modalContent.appendChild(elementDiv1);
    modalContent.appendChild(elementDiv2);
    modalContent.appendChild(buttonClose);

    modal.appendChild(modalContent);

    container.appendChild(modal);

    // When the user clicks dismiss button of the modal, close it
    buttonClose.onclick = function() {
        modal.remove();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.remove();
        }
    }
}