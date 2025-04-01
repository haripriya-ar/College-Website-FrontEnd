document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.courses');

    courses.forEach(course => {
        course.addEventListener('mouseenter', () => {
            course.style.transform = 'scale(1.05)';
            course.style.transition = 'transform 0.3s';
        });

        course.addEventListener('mouseleave', () => {
            course.style.transform = 'scale(1)';
        });
    });
});
