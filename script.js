// Simple animation for the header
const header = document.querySelector('header');
header.style.opacity = '0';




setTimeout(() => {
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            header.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
    }, 100);
}, 500);