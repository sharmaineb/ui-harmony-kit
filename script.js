document.addEventListener("DOMContentLoaded", function () {
    // slider/carousel component
    const slider = document.querySelector(".slider");
    let currentIndex = 0;
  
    function showSlide(index) {
      const newTransformValue = -index * 100 + "%";
      slider.style.transform = "translateX(" + newTransformValue + ")";
    }
  
    // custom button
    const customButton = document.querySelector(".custom-button");
  
    customButton.addEventListener("click", function () {
      alert("Custom button clicked!");
      // add more here later
    });
  
    // accordion component
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(function (item) {
      const header = item.querySelector(".accordion-header");
  
      header.addEventListener("click", function () {
        item.classList.toggle("active");
  
        const content = item.querySelector(".accordion-content");
        if (item.classList.contains("active")) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });
  
    // automatic slide change for slider
    function autoChangeSlide() {
      currentIndex = (currentIndex + 1) % slider.children.length;
      showSlide(currentIndex);
    }
  
    // change slide every 3 seconds 
    setInterval(autoChangeSlide, 3000);
  });
  