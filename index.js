const readmore = document.querySelector('#readmore');
const readmoreBtn = document.querySelector('#readmoreBtn');

const btnClick = () => {
  readmore.classList.remove('hidden');
  readmoreBtn.classList.add('hidden');
};
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    if (nav.classList.contains('md:bg-transparent')) {
      nav.classList.remove('md:bg-transparent');
    } else {
      return;
    }
  } else {
    nav.classList.add('md:bg-transparent');
  }
});
const menu = (name) => {
  // if (name === 'work') {
  //   const workMenu = document.getElementById('workMenu');
  //   workMenu.classList.toggle('hidden');
  // }
  const idName = name + 'Menu';
  const element = document.getElementById(idName);
  element.classList.toggle('hidden');
};
