// Selectors
const mouse = document.querySelector(".cursor");
const mouseTxt = document.querySelector('.cursor-text');
const logo = document.getElementById('logo');
const menu = document.querySelector('.burger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const navBar = document.querySelector('.nav-bar');

// Functions
cursor = (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
};

activeCursor = (e) => {
  const item = e.target;
  (item.classList.contains('burger')) ? mouse.classList.add('nav-active') :  mouse.classList.remove('nav-active');

  if (item.classList.contains('explore')) {
    mouse.classList.add('explore-active');
    mouseTxt.innerText = 'Tap';
  } else {
    mouse.classList.remove('explore-active');
    mouseTxt.innerText = '';
  }
};

navToggle = () => {
  if (menu.classList.toggle('active')) {
    navBar.classList.add('open');
    logo.style.color = '#000';
    line1.style.background = '#000';
    line2.style.background = '#000';
    document.body.classList.add('hide');
  } else {
    navBar.classList.remove('open');
    logo.style.color = '#FFF';
    line1.style.background = '#FFF';
    line2.style.background = '#FFF';
    document.body.classList.remove('hide')
  }
}

// Events Listeners
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
menu.addEventListener('click', navToggle);
