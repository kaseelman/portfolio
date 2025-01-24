document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-button');

    function toggleModal() {
        modal.classList.toggle('show');
        overlay.classList.toggle('show');
        document.body.classList.toggle('modal-open');
    }

    hamburger.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    overlay.addEventListener('click', toggleModal);
});
