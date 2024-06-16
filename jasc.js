
    /*page transition between main and  mainreg*/
document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('a[href], button[data-link]');
    
    // Add fade-in class on page load
    document.body.classList.add('fade-in');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
            const href = target.getAttribute('href') || target.getAttribute('data-link');
            
            if (href) {
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match the duration of the CSS transition
            }
        });
    });
});

// JavaScript to toggle the 'clicked' class when a link is clicked
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'clicked' class from all links
            links.forEach(link => link.classList.remove('clicked'));
            // Add 'clicked' class to the clicked link
            this.classList.add('clicked');
        });
    });
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loaderContainer = document.getElementById('loader-container');
    const contentContainer = document.getElementById('content-container');
  
    // Show the loader initially
    loaderContainer.style.display = 'flex';
  
    // Blur the content initially
    contentContainer.style.filter = 'blur(5px)';
  
    // Simulate a delay (you can replace this with actual loading logic)
    setTimeout(function() {
      // Hide the loader
      loaderContainer.style.display = 'none';
  
      // Remove the blur effect from content
      contentContainer.style.filter = 'none';
    }, 3000); // Adjust the time as per your needs
  });
  


