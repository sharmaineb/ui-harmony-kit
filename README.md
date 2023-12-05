# UI Harmony Kit

[Link To Web Component](https://sharmaineb.github.io/ui-harmony-kit/)

This project showcases the implementation of three web components: a Slider/Carousel, a Custom Button, and an Accordion. These components are designed to enhance the user interface and provide modular, reusable elements for web development.

## Components

### 1. **Slider/Carousel Component (my-slider)**

The Slider/Carousel component is designed to display a series of images in a carousel format. It automatically transitions between images at regular intervals, providing an engaging and dynamic visual element.

#### Usage:

```html
<my-slider></my-slider>
```

### 2. **Custom Button Component (my-button)**

The Custom Button component offers a customizable button with a clean design. It supports user-defined content and provides a pleasant visual experience. Additionally, the button expands to the full width of its container.

#### Usage:

```html
<my-button>Click me</my-button>
```

### 3. **Accordion Component (my-accordion)**

The Accordion component organizes content in a collapsible format, saving space and providing a clean user interface. It allows users to toggle between hiding and showing large amounts of content, improving the overall readability of a webpage.

#### Usage:

```html
<my-accordion>
  <my-accordion-item>
    <div slot="header">Section 1</div>
    <div slot="content">Content for Section 1</div>
  </my-accordion-item>
  <!-- add more accordion items here as needed! -->
</my-accordion>
```

### 4. **Accordion Item Component (my-accordion-item)**

The Accordion Item component is a child component of the Accordion. It represents each individual item within the Accordion, consisting of a header and corresponding content.

#### Usage:

```html
<my-accordion-item>
  <div slot="header">Section 1</div>
  <div slot="content">Content for Section 1</div>
</my-accordion-item>
<!-- add more accordion items here as needed! -->
```

Absolutely! Here's the "How to Use" section written in markdown:

## How to Use

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/sharmaineb/ui-harmony-kit.git
   ```

2. Include the `script.js` file in your HTML document:

   ```html
   <script defer src="script.js"></script>
   ```

3. Integrate the desired components into your HTML markup as explained in the component-specific usage sections.

   ```html
   <!-- Slider/Carousel component -->
   <my-slider></my-slider>

   <!-- Custom Button component -->
   <my-button>Click me</my-button>

   <!-- Accordion component -->
   <my-accordion>
     <my-accordion-item>
       <div slot="header">Section 1</div>
       <div slot="content">Content for Section 1</div>
     </my-accordion-item>
     <!-- add more accordion items here as needed! -->
   </my-accordion>
   ```

5. Customize the content, styles, and event handling as needed for your specific project.

6. Open the HTML file in a web browser to see the web components in action!

Happy coding!