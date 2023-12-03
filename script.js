document.addEventListener("DOMContentLoaded", function () {
  // slider/carousel component
  class MySlider extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      // HTML structure inside the shadow root
      shadow.innerHTML = `
        <style>
        .slider {
          display: flex;
          overflow: hidden;
          width: 100%;
          transition: transform 0.5s ease-in-out; 
        }

        .slide {
          flex: 0 0 100%;
          overflow: hidden;
        }
      </style>
      <div class="slider"></div>
    `;

      // images 
      const sliderContainer = shadow.querySelector(".slider");
      const imageUrls = ["imgs/image1.jpg", "imgs/image2.jpg", "imgs/image3.jpg", "imgs/image4.jpg"];
      let currentIndex = 0;

      function updateSlider() {
        const slide = document.createElement("div");
        slide.className = "slide";

        const image = new Image();
        image.src = imageUrls[currentIndex];

        // customize later
        image.style.width = "100%";
        image.style.height = "auto";

        slide.appendChild(image);
        sliderContainer.innerHTML = ""; // Clear existing content
        sliderContainer.appendChild(slide);

        // increment index for the next image
        currentIndex = (currentIndex + 1) % imageUrls.length;
      }

      // initial call to set the first image
      updateSlider();

      // set interval to update the slider every three seconds
      setInterval(updateSlider, 3000);
    }
  }

  customElements.define("my-slider", MySlider);

  // button component
  class MyButton extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      // HTML structure inside the shadow root
      shadow.innerHTML = `
        <style>
          /* Styles specific to the shadow DOM */
          :host {
            display: inline-block;
          }

          button {
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #2980b9;
          }
        </style>
        <button><slot></slot></button>
      `;

      // attach event listeners
      this.shadowRoot.querySelector("button").addEventListener("click", () => {
        alert("Custom button clicked!");
        // add more later
      });
    }
  }

  customElements.define("my-button", MyButton);

  // accordion component
  class MyAccordion extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      // HTML structure inside the shadow root
      shadow.innerHTML = `
        <style>
          /* Styles specific to the shadow DOM */
          .accordion-item {
            border: 1px solid #ddd;
            margin-bottom: 5px;
          }

          .accordion-header {
            padding: 10px;
            background-color: #f1f1f1;
            cursor: pointer;
          }

          .accordion-content {
            padding: 10px;
            display: none;
          }

          .accordion-item.active .accordion-content {
            display: block;
          }
        </style>
        <div class="accordion">
          <slot></slot>
        </div>
      `;

      // attach event listeners
      const accordion = this.shadowRoot.querySelector(".accordion");
      accordion.addEventListener("click", (event) => {
        const header = event.target.closest(".accordion-header");
        if (header) {
          const item = header.parentElement;
          item.classList.toggle("active");

          const content = item.querySelector(".accordion-content");
          if (item.classList.contains("active")) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        }
      });
    }
  }

  customElements.define("my-accordion", MyAccordion);

  // accordion item component
  class MyAccordionItem extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      // HTML structure inside the shadow root
      shadow.innerHTML = `
        <style>
          /* Styles specific to the shadow DOM */
        </style>
        <div class="accordion-item">
          <div class="accordion-header"><slot name="header"></slot></div>
          <div class="accordion-content"><slot name="content"></slot></div>
        </div>
      `;
    }
  }

  customElements.define("my-accordion-item", MyAccordionItem);
});

  
  
  