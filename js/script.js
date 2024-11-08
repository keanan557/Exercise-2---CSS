// Function to filter images based on the selected category
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    
    // If 'all' is selected, show all images
    if (c === "all") c = "";
    
    // Loop through all images and hide/show based on the selected category
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("show");
        if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");
    }
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
btnContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn")) {
        // Remove 'active' class from all buttons
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].classList.remove("active");
        }
        // Add 'active' class to the clicked button
        e.target.classList.add("active");
    }
});

// Show all images by default when the page loads
filterSelection("all");
