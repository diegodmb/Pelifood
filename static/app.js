//Landing Page Animación
let nav = document.getElementById("navbar");
let logo = document.getElementById("logo");
let brand = document.getElementById("brand");
let page2 = document.getElementById("page2");
let test1 = document.getElementById("test1");

const br = gsap.timeline();
br.fromTo(".bg1", 3, { scale: 1.3, x: "-10%" }, { scale: 1, x: "0%", ease: Power2.easeOut });

//Sal Animation
sal();
//Navbar
//var prevScrollpos = window.pageYOffset;
//window.onscroll = function () {
//    var currentScrollPos = window.pageYOffset;
//    if (prevScrollpos > currentScrollPos) {
//        document.getElementById("navbar").style.top = "0";
//    } else {
//        document.getElementById("navbar").style.top = "-10vh";
//    }
//    prevScrollpos = currentScrollPos;
//}



// Burger

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-items");
    const navLinks = document.querySelectorAll(".nav-items li");
    //toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide()

//Scrolling Landing
window.addEventListener('scroll', () => {
    var value = window.scrollY;
    logo.style.top = value / 3 * 0.3 + 'vh';
    brand.style.top = value / 3 * 0.2 + 'vh';
    promo.style.top = value / 3 * 0.2 + 'vh';
    //page2.style.top = -value * 1.1 + 'px';
});

//Frases que cambian

var FrasesLanding = [
    'Devuélvele parte de su amor',
    'Dale la mejor alimentación,',
    'Comida nutritiva, balanceada y natural'];

var Funcion = setInterval(Frases(), 5000);

function Frases() {
    let var1 = setTimeout(Frase(1), 100);
    let var2 = setTimeout(Frase(2), 5000);
    let var3 = setTimeout(Frase(0), 10000);
}


function Frase(n) {
    let change = document.getElementById('msj');
    change.innerHTML = FrasesLanding[n];
    console.log(FrasesLanding[n]);
}
