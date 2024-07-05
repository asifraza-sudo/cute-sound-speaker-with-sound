function playSound() {
    const sound = document.getElementById('cuteSound');
    const speaker = document.querySelector('.speaker');
    speaker.classList.add('bouncing');
    sound.play();
    sound.onended = () => {
        speaker.classList.remove('bouncing');
    };
}
