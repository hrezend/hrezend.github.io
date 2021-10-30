const icons = ["fab fa-html5", "fab fa-css3", "fab fa-java", "fab fa-js", "fab fa-node-js", "fab fa-react", "fas fa-database", "fab fa-docker", "fab fa-git-alt", "fab fa-trello"];
var count = 0;

function changeIconsTechnologies(){
    var random = Math.floor(Math.random() * icons.length);
    var icon = document.getElementById("fab-technologies");

    icon.setAttribute("class", icons[count]);
    count++;

    if(count >= icons.length){
        count = 0;
    }
}

function introduzirVideoDosProjetos(){
    var divBackground = document.getElementById("background");
    var divProjects = document.getElementById("projects");
    var video = document.createElement("video");
    var source = document.createElement("source");

    video.setAttribute("id", "projects-video");
    video.setAttribute("width", "500");
    video.setAttribute("height", "240");
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("controls", "controls");
    video.setAttribute("poster", "media/images/background.png");
    video.volume = 0.2;
    video.currentTime = 0;

    source.setAttribute("src", "media/videos/projects.mp4");
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);
    divProjects.appendChild(video);
    divBackground.style.display = "none";
}

setInterval(changeIconsTechnologies, 2000);

//setTimeout(introduzirVideoDosProjetos, 2000);