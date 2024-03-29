/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//    reset: true
});

sr.reveal('.section-title',{});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{delay: 200}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

/*===== SKILLS BARS PROGRESSIONS =====*/

async function ProgessivesBars() {
    ProgessivesPercent(95,"skills__html__percent");
    document.getElementById('skills__html').style.animation = "progress_1 0.7s ease-in-out forwards";
    await sleep(100);
    ProgessivesPercent(85,"skills__css__percent");
    document.getElementById('skills__css').style.animation = "progress_2 0.7s ease-in-out forwards";
    await sleep(100);
    ProgessivesPercent(65,"skills__js__percent");
    document.getElementById('skills__js').style.animation = "progress_3 0.7s ease-in-out forwards";
    await sleep(100);
    ProgessivesPercent(85,"skills__ux__percent");
    document.getElementById('skills__ux').style.animation = "progress_4 0.7s ease-in-out forwards";
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function ProgessivesPercent(percent, element) {
    var section = document.getElementById(element);
                for(var i = 0;i < percent;i++){
                    section.textContent = (i+1)+'%';
                    await sleep(2);
            }
}

/*==================== LIGHT & DARK MODE SWITCH ====================*/
// Element
var darkmodeBtn = document.getElementById("darkmode-btn");
var btnIcon = document.getElementById("btn-icon");
var bgMask = document.getElementById("bg-mask");
var mainBg = document.getElementById("main");

// Element Content
var darkColor = "#0e0e0e";
var lightColor = "#fff";

var bgDark = "#191919";
var bgLight = "#f2f2f2";

// Status
var status = 0; // 0 = Light mode, 1 = Dark mode
var duration = 400;

function switchMode() {

    if (status == 0) {

        bgMask.style.backgroundColor = darkColor;
        setTimeout(function() {
            mainBg.style.backgroundColor = darkColor;
        }, duration);
        btnIcon.setAttribute("class", "bx bx-moon");
        btnIcon.style.color = lightColor;
        darkmodeBtn.style.backgroundColor = bgDark;
        
        status = 1;

    } else if (status == 1) {

        bgMask.style.backgroundColor = lightColor;
        setTimeout(function() {
            mainBg.style.backgroundColor = lightColor;
        }, duration);
        btnIcon.setAttribute("class", "fas fa-sun fa-2x");
        btnIcon.style.color = darkColor;
        darkmodeBtn.style.backgroundColor = bgLight;

        status = 0;

    }

    restartAnimation();

}

function restartAnimation() {

    bgMask.classList.remove("animation");
    void bgMask.offsetWidth;
    bgMask.classList.add("animation");
    
}