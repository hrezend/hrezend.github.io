/**
 * @author Hérson Rezende (@hrezend)
 */

const icons = [
    "fab fa-css3", 
    "fab fa-java", 
    "fab fa-js", 
    "fab fa-node-js", 
    "fab fa-react", 
    "fas fa-database", 
    "fab fa-docker", 
    "fab fa-git-alt", 
    "fab fa-trello",
    "fab fa-discord",
    //include more icons after here
    "fab fa-html5",
];

var countIconcs = 0;

function changeIconsTechnologies(){
    //var random = Math.floor(Math.random() * icons.length);
    var icon = document.getElementById("fab-technologies");

    icon.setAttribute("class", icons[countIconcs]);
    icon.setAttribute("alt", icons[countIconcs]);
    countIconcs++;

    if(countIconcs >= icons.length){
        countIconcs = 0;
    }
}
setInterval(changeIconsTechnologies, 2000);

/**
 * 
 */

var posx = 0, posy = 0;

function moveButtonMyGraduations(){
    var div = document.getElementById("topics");
    var buttonMyGraduations = document.getElementById("my-graduations");
    var buttonMyExperiences = document.getElementById("my-experiences");
    var buttonMyLanguages = document.getElementById("my-languages");
    var buttonMyBestProjects = document.getElementById("my-best-projects");

    posx += 1;

    if(posx >= div.clientWidth - 100){
        posx = 0;
    }

    buttonMyGraduations.style = "left: " + posx +"px;" ;
}