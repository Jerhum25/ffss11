console.log("connecté !");

const menuMobile = document.querySelector('.menuMobile');
console.log(menuMobile);
const nav = document.querySelector('nav');
console.log(nav);
const lines = document.querySelector('.line');
console.log(lines);
const itemMenu = document.querySelectorAll('.itemMenu');
console.log(itemMenu);

menuMobile.addEventListener('click', function(){
    console.log("icone cliquée !");
    nav.classList.toggle('openMenu');
    // menuMobile.classList.toggle('iconeMenu');
    lines.classList.toggle('linesOpen');
});

// itemMenu.addEventListener('click', function(){
//     nav.classList.toggle('openMenu');
//     lines.classList.toggle('linesOpen');
// })

itemMenu.forEach(item => {
  item.addEventListener('click', function(){
    nav.classList.toggle('openMenu');
    lines.classList.toggle('linesOpen');
  })
});