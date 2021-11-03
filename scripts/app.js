const icons = ["fab fa-html5", "fab fa-css3", "fab fa-java", "fab fa-js", "fab fa-node-js", "fab fa-react", "fas fa-database", "fab fa-docker", "fab fa-git-alt", "fab fa-trello"];
var count = 0;

function changeIconsTechnologies(){
    //var random = Math.floor(Math.random() * icons.length);
    var icon = document.getElementById("fab-technologies");

    icon.setAttribute("class", icons[count]);
    count++;

    if(count >= icons.length){
        count = 0;
    }
}

setInterval(changeIconsTechnologies, 2000);