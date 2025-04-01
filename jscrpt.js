document.getElementById('alumniContactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    let counter = 1;
    const size = slides[0].clientWidth;

    setInterval(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(${-size * counter}px)`;

        counter++;
        if (counter === slides.length) {
            counter = 0;
            setTimeout(() => {
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0px)`;
            }, 1000);
        }
    }, 3000);
