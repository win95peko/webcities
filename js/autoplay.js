// Reproducción automática después de 1 segundo
setTimeout(() => {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.muted = false;
        audio.loop = true;
        audio.play().catch(err => console.log('Audio autoplay:', err));
    }
}, 1000);

// También habilitar con sonido al primer clic
document.addEventListener('click', function enableAudio() {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.muted = false;
        audio.loop = true;
        audio.play().catch(err => console.log('Audio play error:', err));
    }
}, { once: true });

// Asegurar que el loop esté habilitado cuando el audio está listo
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.loop = true;
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play();
        });
    }
});

