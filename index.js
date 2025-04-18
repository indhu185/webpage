document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav ul li .nav-list').forEach(function (item) {

        console.log(item.innerHTML)
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const target = item.getAttribute('href');
            const targetElement = document.querySelector(target);
            const node = document.querySelector('.checkporgress');

            if (target === '#home') {
                // Show all sections
                document.querySelectorAll('section').forEach(function (section) {
                    section.style.display = 'block';
                });

                // Remove existing appended elements
                while (node.firstChild) {
                    node.removeChild(node.firstChild);
                }
            }
            else if (targetElement) {
                // Remove existing appended elements
                while (node.firstChild) {
                    node.removeChild(node.firstChild);
                }

                // Append the new target element and the footer portion
                node.appendChild(targetElement.cloneNode(true));
                node.appendChild(document.getElementById('footer-portion').cloneNode(true));

                // Hide all other sections
                document.querySelectorAll('section').forEach(function (section) {
                    if (section !== targetElement) {
                        section.style.display = 'none';
                    } else {
                        section.style.display = 'block';
                    }
                });
            }
        });
    });
});



// corousel portion - javascript

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
