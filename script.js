// -------------------------------
// Дмитро & Ольга
// Wedding Invitation
// -------------------------------

const unlock = document.getElementById("unlock");
const music = document.getElementById("music");

const welcome = document.getElementById("welcome");
const photo = document.getElementById("photoSection");

// -------------------------------
// Розблокування
// -------------------------------

unlock.addEventListener("click", () => {

    music.play();

    unlock.style.transform = "scale(.9)";
    unlock.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        photo.style.display = "flex";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },800);

});

// -------------------------------
// Таймер
// -------------------------------

const weddingDate =
new Date("October 22, 2026 17:00:00").getTime();

function countdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);

const minutes = Math.floor(
(distance%(1000*60*60))/(1000*60)
);

const seconds = Math.floor(
(distance%(1000*60))/1000
);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

}

countdown();

setInterval(countdown,1000);

// -------------------------------
// Поява секцій
// -------------------------------

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

})

});

sections.forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(60px)";

section.style.transition="1.2s";

observer.observe(section);

});