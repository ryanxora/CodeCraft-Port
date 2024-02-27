$(document).ready(function () {
    const hamburger = $(".hamburger");
    const navMenu = $(".nav-menu");

    hamburger.on("click", function () {
        hamburger.toggleClass("active");
        navMenu.toggleClass("active");
    });

    $(".nav-item").on("click", function () {
        hamburger.removeClass("active");
        navMenu.removeClass("active");
    });






    
});



// typing animation
const subtitleElement = document.querySelector('.hero-subtitle');
        const texts = ["Passionate WEB DEVELOPER", "Passionate UI/UX DESIGNER"];
        let textIndex = 0;

        function typeWriter(index) {
            if (index < texts[textIndex].length) {
                subtitleElement.innerHTML = texts[textIndex].substring(0, index + 1);
                requestAnimationFrame(() => typeWriter(index + 1));
            } else {
                // Wait for a pause before starting the next text
                setTimeout(() => {
                    textIndex = (textIndex + 1) % texts.length;
                    typeWriter(0);
                }, 3000); // Change to the desired pause duration in milliseconds
            }
        }

        // Start the typing animation
        typeWriter(0);




// download cv


function downloadCV() {
    // Create an invisible link element
    var link = document.createElement('a');
    link.href = '/cv/fakecv.txt'; // Replace with the actual path to your file
    link.download = 'fakecv.txt'; // Replace with the desired file name

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}





