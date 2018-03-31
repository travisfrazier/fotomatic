// Modal Sign Up Form and Validation
const buttonOne = document.querySelector('#button');
const buttonTwo = document.querySelector('#buttonTwo');
const modalContent = document.querySelector('.modal-container');


buttonOne.onclick = function() {
  modalContent.style.display = 'block';
};
 
buttonTwo.onclick = function() {
  console.log('hey');
  modalContent.style.display = 'block';
};

// Email Validation 
function emailValidate() {
  const email = document.forms["email-form"]["email"].value.trim();

  if (!email) {
    alert('Please enter your email address');
    return false;
  }
}

// Image Slider begin
let sliderImages = document.querySelectorAll('.sign-up-section');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
// Represent what slide is displaying 
let current = 0;


//Sets all slides to display none
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Starts slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block'; 
}

// Previous slide 
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Next slide 
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

//Move left
arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Move right
arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// End image slider 

