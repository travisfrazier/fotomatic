// Modal Sign Up Form and Validation
const button = document.querySelector('#button');
const modalContent = document.querySelector('.modal-container');


button.onclick = function() {
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

// Code to send to server



// jQuery Animations 
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 900 });

sr.reveal('.foo-2', { 
  duration: 1200
});

sr.reveal('.foo-3', { 
  duration: 1500
});

sr.reveal('.foo-4', { 
  duration: 1800,
});

sr.reveal('.foo-5', { 
  duration: 2100 
});

sr.reveal('.foo-6', { 
    duration: 2400 
});

sr.reveal('.foo', {
    duration: 1000
});