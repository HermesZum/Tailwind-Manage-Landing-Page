/* Assigning the element with the id 'menu-btn' to the variable btn. */
const btn = document.getElementById('menu-btn');
/* Getting the element with the id 'menu' and assigning it to the variable nav. */
const nav = document.getElementById('menu');

/* Adding an event listener to the button. When the button is clicked, it toggles the class 'open' on the button. It also
toggles the class 'flex' and 'hidden' on the nav. */
btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});