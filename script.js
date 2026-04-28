// HAMBURGER MENI

const hamburger = document.querySelector(".hamburger_meni");
const podMeni = document.querySelector(".pod_meni");

hamburger.addEventListener("click", () => {
    podMeni.classList.toggle("otvoren");
    hamburger.classList.toggle("aktivan");
})

// ANIMACIJA NA VRH

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress_vrednost");
    let pos = window.scrollY;
    
    let calcHeight = document.body.scrollHeight-window.innerHeight;
    let scrollValue = Math.round((pos*100)/ calcHeight);
    
    if(pos > 100) {
        scrollProgress.style.opacity="1";
        scrollProgress.style.pointerEvents="auto";
        scrollProgress.style.transform="scale(1)"
    } else {
        scrollProgress.style.opacity="0";
        scrollProgress.style.pointerEvents="auto";
        scrollProgress.style.transform="scale(0.9)"
    }

    scrollProgress.style.background = `conic-gradient(#0F83D6 ${scrollValue}%, #B5DEF2 ${scrollValue}%)`;

    console.log(calcHeight);
}

window.addEventListener("load", () => {
    calcScrollValue();
})

window.addEventListener("scroll", () => {
    calcScrollValue();
})

// ANIMACIJA POJAVA

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('pojava');
        }
    })
})

const skriveniElementi = document.querySelectorAll('.skriven');
skriveniElementi.forEach((el) => observer.observe(el));

// AGENDA

const stavke = document.querySelectorAll(".agenda_stavka");

stavke.forEach(stavka => {
    stavka.addEventListener("click", function() {
        const detalji = this.nextElementSibling;

        document.querySelectorAll(".agenda_detalji").forEach(el => {
            if (el != detalji) {
                el.classList.remove("otvoreno");
            }
        })

        detalji.classList.toggle("otvoreno");
    })
})

// MODAL

var modal = document.getElementById("modal");

var btn = document.getElementById("potvrda");

var span = document.getElementsByClassName("zatvori") [0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// TIMELINE EFEKAT

const progress = document.querySelector(".timeline_progress");
const dot = document.querySelector(".timeline_tacka");
const timeline = document.querySelector(".timeline");

function updateTimeLine() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = scrollTop / docHeight;

    const timelineHeight = window.innerHeight;

    progress.style.height = scrollPercent * timelineHeight + "px";
    dot.style.top = scrollPercent * lineHeight + "px";
}

window.addEventListener("scroll", updateTimeLine);
window.addEventListener("load", updateTimeLine);