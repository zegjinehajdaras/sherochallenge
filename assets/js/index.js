document.addEventListener('DOMContentLoaded', () => {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        keyboard: true,
        autoplay:false,
        hoverpause: true,
    });

    glide.mount();
});