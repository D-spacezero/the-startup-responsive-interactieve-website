const flashlight = document.querySelector('.flashlight');

/* zorgt dat class flashlight de mous volg op de pagina*/

document.addEventListener('mousemove', e => {
  flashlight.style.left = `${e.clientX}px`;
  flashlight.style.top = `${e.clientY}px`;
});
