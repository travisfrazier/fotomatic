// modal pop up form
const buttonOne = document.querySelector('#button');
const buttonTwo = document.querySelector('#buttonTwo');
const close = document.querySelector('#close');
const modalContent = document.querySelector('.modal-container');

// open modal desktop and mobile buttons
buttonOne.onclick = function() {
  modalContent.style.display = 'block';
};
 
buttonTwo.onclick = function() {
  modalContent.style.display = 'block';
};

// close modal form 
close.onclick = function() {
  modalContent.style.display = 'none';
}

// email sign up validation
function emailValidate() {
  const email = document.forms["email-form"]["email"].value.trim();

  if (!email) {
    alert('Please enter your email address');
    return false;
  }
}

// image slider variables 
const sliderImages = document.querySelectorAll('.sign-up-section');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
// represent what slide is displaying 
let current = 0;


//sets all slider images to display none
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// starts slider and sets first image to display
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block'; 
}

// previous slide 
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// next slide 
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// move left
arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// move right
arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
// end of image slider 