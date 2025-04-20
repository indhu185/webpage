document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav ul li .nav-list').forEach(function (item) {
        // console.log(item.innerHTML)

        item.addEventListener('click', function (event) {
            event.preventDefault();
            // change the navbgar background color
            document.getElementsByClassName('nav')[0].style.backgroundColor = '#FFFFFF';
            document.getElementsByClassName('nav')[0].style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
            const target = item.getAttribute('href');
            const targetElement = document.querySelector(target);
            const node = document.querySelector('.checkporgress');

            if (target === '#home') {
                // Show all sections
                document.getElementsByClassName('nav')[0].style.backgroundColor = '#f9ece6';
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

// This helps to automate the carousel when the document is loaded

// setting  a initial value for the current slide
let currentSlide = 0;


// 0 +1 = 1 ,2,3 ;
function nextSlide() {

    //1 
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// This helps to automate the carousel when the document is loaded.F
// document.addEventListener('DOMContentLoaded', () => {
//     automateCarousel();
// });

// function automateCarousel() {
//     setInterval(() => {
//         nextSlide();
//     }, 4000);
// }


// index is the parameter that is passed to the function  =1
function showSlide(index) {

    // output = Node lists(0,1,2,3,4,5) - this is the list of all the slides

    // Array is kind of datastructure - 0 

    const slides = document.querySelectorAll('.carousel-item');

    // 1  and 2 values 
    console.log("Node list", slides);

    // 1,2

    // output format either true else false 
    if (index >= slides.length) {
        currentSlide = 0;
    }
    else {
        // 1 
        // validity checking
        currentSlide = index;
    }
    //This creates the sliding effect. (1 and 2)
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}




// Testimonial portion - javascript


// This helps to automate the carousel when the document is loaded
document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        NextTestmonial();
    }, 3000);
});

let currenIndexValue = 0;

function NextTestmonial() {
    showTestimonial(currenIndexValue++);
};


function PreviousTestmonial() {
    showTestimonial(currenIndexValue--);
};

document.addEventListener('DOMContentLoaded', function () {
    showTestimonial(currenIndexValue);
});





function showTestimonial(index) {
    const TestimonialCardItems = document.querySelectorAll('.testimonial-card');


    console.log("TestimonialCardItems", TestimonialCardItems);

    TestimonialCardItems.forEach((card, i) => {
        if (index >= TestimonialCardItems.length) {
            currenIndexValue = 0;
        } else {
            card.style.display = i === index ? 'block' : 'none';
        }
    });
}