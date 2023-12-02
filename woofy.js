burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.navList')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


function searchText() {
    var input = document.getElementById('search').value.toLowerCase();
    var sections = document.querySelectorAll('.searchable section');

    for (var i = 0; i < sections.length; i++) {
        var sectionContent = sections[i].innerHTML.toLowerCase();
        var regex = new RegExp(input, 'gi');
        sections[i].innerHTML = sections[i].innerHTML.replace(regex, function(match) {
            return '<span class="highlight">' + match + '</span>';
        });

        if (sectionContent.includes(input)) {
            var offsetTop = sections[i].offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            break; // Stop searching after scrolling to the first matched section
        }
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
