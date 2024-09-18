// Aquí puedes agregar más interacción si es necesario.
document.addEventListener('mousemove', (event) => {
    const container = document.querySelector('.flower-container');
    const xRotation = (event.clientY / window.innerHeight) * 360;
    const yRotation = (event.clientX / window.innerWidth) * 360;
    container.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

