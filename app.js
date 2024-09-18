// Añade interactividad al mover el mouse para rotar el ramo
document.addEventListener('mousemove', (event) => {
    const bouquet = document.querySelector('.bouquet');
    const xRotation = (event.clientY / window.innerHeight) * 360;
    const yRotation = (event.clientX / window.innerWidth) * 360;
    bouquet.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});
