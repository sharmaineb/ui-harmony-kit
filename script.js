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

        .slider-container {
          max-width: 600px;
          margin: 20px auto;
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
      const imageUrls = ["imgs/image1.jpg", "imgs/image2.jpg", "imgs/image3.jpg", "imgs/image4.jpg", "imgs/image5.jpg"];
      let currentIndex = 0;

      function updateSlider() {
        const slide = document.createElement("div");
        slide.className = "slide";

        const image = new Image();
        image.src = imageUrls[currentIndex];

        image.style.width = "100%";
        image.style.height = "auto";

        slide.appendChild(image);
        sliderContainer.innerHTML = ""; 
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
          /* specific to the shadow DOM */
          :host {
            display: inline-block;
            width: 100%; 
          }

          button {
            padding: 10px 20px;
            background-color: #83adb5;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%; 
            font-size: 1em;
          }

          button:hover {
            background-color: #2980b9;
          }
        </style>
        <button><slot></slot></button>
      `;

      // attach event listeners
      this.shadowRoot.querySelector("button").addEventListener("click", () => {
        alert("✨ Yay!! Custom button clicked! Hope You Have a Good Holiday, Mitchell!! 🎉");
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
        /* specific to the shadow DOM */
        .accordion-item {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 10px; 
          margin-bottom: 5px;
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #000;
        }

        .accordion-header {
          padding: 10px;
          background-color: #fceee9;
          border-radius: 7px;
          cursor: pointer;
          margin-top: 15px;
          margin-bottom: 10px;
          font-size: 1em;
        }

        .accordion-content {
          padding: 10px;
          display: none;
          text-align: center;
          font-size: 1.3em;
        }

        .accordion-item.active .accordion-content {
          display: block;
        }
      </style>
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header">Click For Accordian Introduction</div>
          <div class="accordion-content">Accordions are useful when you want to toggle between hiding and showing a large amount of content.</div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">Conserve Space</div>
          <div class="accordion-content">
            Accordions are particularly useful when dealing with a large amount of content on a webpage. By initially hiding content and only revealing 
            it when a user chooses to interact with a specific section, accordions help conserve space on the screen. This is especially important in 
            responsive design or on mobile devices where screen real estate is limited. Users can focus on the content that is relevant to them without 
            feeling overwhelmed by information overload.
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">Enhances User Experience</div>
          <div class="accordion-content">
            Accordions improve the user experience by presenting information in a more organized and digestible manner. 
            Users can navigate through different sections of content without being overwhelmed by a lengthy page. The ability to expand and collapse 
            sections at will allows users to focus on the information they find most relevant. This interactive approach enhances engagement and provides 
            a more user-friendly experience, especially for pages with complex or detailed information.
          </div>
        </div>
        <slot></slot>
      </div>
    `;

    // attach event listeners
    const accordion = this.shadowRoot.querySelector(".accordion");
    accordion.addEventListener("click", (event) => {
      const item = event.target.closest(".accordion-item");
      if (item) {
        item.classList.toggle("active");
      }
    });
  }
}

customElements.define("my-accordion", MyAccordion);
});