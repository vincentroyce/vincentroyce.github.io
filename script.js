//Reload Page
const reload = document.querySelector('.reload');
reload.addEventListener('click', () => {
    location.reload()
})

// Sending Email using EmailJS
const reachMe = document.querySelector('#reach-me');
const result = document.querySelector('.result');

function sendMail(e) {
    e.preventDefault()
    emailjs.sendForm('service_ycxg1kb', 'template_4b42bp9', '#reach-me', 'wGvKtM62y4QWD0bwG')
        .then(() => {
            result.style.color = 'green';
            result.textContent = 'Sent Successfully.✅'
            setTimeout(() => {
                result.textContent = ''
            }, 5000)
            reachMe.reset();
        }, () => {
            result.style.color = 'red';
            result.textContent = 'Sending Failed (Service Error).❌'
            setTimeout(() => {
                result.textContent = ''
            }, 5000)
            reachMe.reset();
        })
}
reachMe.addEventListener('submit', sendMail)

//Hamburger Menu 
const hamburgerMenu = document.querySelector('.hamburger-menu');
const firstLine = document.querySelector('.hamburger-menu :nth-child(1)');
const secondLine = document.querySelector('.hamburger-menu :nth-child(2)');
const thirdLine = document.querySelector('.hamburger-menu :nth-child(3)');
const navListContainer = document.querySelector('.navlist-container');
const hamburgerMenuList = document.querySelectorAll('.navlist-container li a');

hamburgerMenu.addEventListener('click', function () {
    firstLine.classList.toggle('line1-open');
    secondLine.classList.toggle('line2-open');
    thirdLine.classList.toggle('line3-open');
    navListContainer.classList.toggle('slider');
    if (navListContainer.style.display == 'flex') {
        navListContainer.style.display = ''
    } else {
        navListContainer.style.display = 'flex'
    }
})

hamburgerMenuList.forEach(value => {
    value.addEventListener('click', () => {
        firstLine.classList.toggle('line1-open');
        secondLine.classList.toggle('line2-open');
        thirdLine.classList.toggle('line3-open');
        navListContainer.classList.toggle('slider');
        if (firstLine.classList.contains('line1-open')) {
            navListContainer.style.display = 'flex'
        } else {
            navListContainer.style.display = ''
        }
    })
})

// Adding Class Animation Base on Intersection Observer

//About Section Animation 
var aboutHeadElement = document.querySelector('.aboutsection__wrapper h1')
var aboutParagraphElement = document.querySelector('.aboutsection__wrapper p')
var animationClassArray = ['showfromleft', 'showfromright'];
var aboutContentElements = [aboutHeadElement, aboutParagraphElement];
var aboutOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

function aboutCallback(classes) {
    return (entries, aboutObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var element = entry.target;
                element.classList.add(classes)
                aboutObserver.unobserve(element)
            }
        })
    }
}

for (i = 0; i < aboutContentElements.length; i++) {
    var classes = animationClassArray[i];
    var aboutObserver = new IntersectionObserver(aboutCallback(classes), aboutOptions)
    aboutObserver.observe(aboutContentElements[i])
}

// Skill Section Animation
var skillContentContainer = document.querySelectorAll('.skill-content__container')

var skillOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

var skillObserver = new IntersectionObserver(skillCallback, skillOptions)

function skillCallback(entries, skillObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var element = entry.target
            element.classList.add('fade')
            skillObserver.unobserve(element)
        }
    });
}

skillContentContainer.forEach(value => {
    skillObserver.observe(value)
})

//About Section Animation 
var experienceImg = document.querySelector('.experience-container__wrapper img')


var experienceImgOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

var experienceImgObserver = new IntersectionObserver(experienceImgCallback, experienceImgOptions)

function experienceImgCallback(entries, experienceImgObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var element = entry.target;
            element.classList.add('appear')
            experienceImgObserver.unobserve(element)
        }
    })
}
experienceImgObserver.observe(experienceImg)
var experienceContentChild = document.querySelector('.experience-content').children
var experienceContentOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

var experienceContentObserver = new IntersectionObserver(experienceContentCallback, experienceContentOptions)

function experienceContentCallback(entries, experienceContentObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var element = entry.target;
            element.classList.add('showfromright')
            experienceContentObserver.unobserve(element)
        }
    })
}

for (i = 0; i < experienceContentChild.length; i++) {
    experienceContentObserver.observe(experienceContentChild[i])
}