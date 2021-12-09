
/************dropdown btn************/
window.scrollTo(0, 0); 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
/**Burger**/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
/****AOS****/

/***Swiper Init***/

/***validate contact number input*/
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
/**scroll**/
const $navMenuHeader = document.querySelector('.navbar__header-bottom');
const $courseSection = document.querySelector('.course');
const $selectLang = document.querySelector('.select');
const $optionLang = document.querySelector(' .option');
const $optionLangTwo = document.querySelector(' .option-two');
const $optionLangThree = document.querySelector(' .option-three');
const $selOptLang = document.querySelector(' .selectopt');

window.addEventListener('scroll', () => {
    if (window.scrollY > $courseSection.getBoundingClientRect().top) {
        $navMenuHeader.classList.add('styled-bottom');
        $selectLang.classList.add('select-modify');
        $optionLang.classList.add('option-modify');
        $optionLangTwo.classList.add('option-modify');
        $optionLangThree.classList.add('option-modify');
        $selOptLang.classList.add('selectopt-modify');
    }
    else {
        $navMenuHeader.classList.remove('styled-bottom');
        $selectLang.classList.remove('select-modify');
        $optionLang.classList.remove('option-modify');
        $optionLangTwo.classList.remove('option-modify');
        $optionLangThree.classList.remove('option-modify');
        $selOptLang.classList.remove('selectopt-modify')
    }
})


const $sections = document.querySelectorAll('[data-bind]'),
      $dynamicTitle = document.querySelector('.result')

let $sectionsHeight = []
$sections.forEach($section => {
    $sectionsHeight.push($section.getBoundingClientRect().top)
})

window.addEventListener('scroll', (e) => {
    $sectionsHeight.forEach((item, idx) => {
        if (scrollY === 0) {
            $dynamicTitle.classList.remove('visible')
            $dynamicTitle.innerText = ''
        } else if (scrollY > item) {
            $dynamicTitle.classList.add('visible')
            $dynamicTitle.innerText = $sections[idx].dataset.title
        }
    })
})   