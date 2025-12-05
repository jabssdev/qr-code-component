# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![QR Code Component Screenshot](./src/assets/images/screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/yourusername/qr-code-component)
- Live Site URL: [Live Demo](https://yourusername.github.io/qr-code-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- Flexbox
- Mobile-first workflow
- Custom font loading with @font-face (Outfit font)
- Modern CSS units (rem, dvh)
- Webpack 5 - Module bundler
- html-loader - For processing HTML templates
- MiniCssExtractPlugin - For CSS extraction
- Webpack Dev Server - For local development

### What I learned

Through this project, I strengthened my understanding of several key concepts:

**1. CSS Custom Properties for Theming**

I learned how to effectively use CSS variables to maintain consistent colors throughout the design, making the code more maintainable:

```css
:root {
	--color-white: hsl(0, 0%, 100%);
	--color-slate-300: hsl(212, 45%, 89%);
	--color-slate-500: hsl(216, 15%, 48%);
	--color-slate-900: hsl(218, 44%, 22%);
}
```

**2. Modern CSS Units**

Using `62.5%` font-size on the root element for easier rem calculations, and `100dvh` for full viewport height:

```css
:root {
	font-size: 62.5%; /* 1rem = 10px */
}

body {
	min-height: 100dvh;
}
```

**3. Webpack Configuration**

I learned how to configure Webpack from scratch, including:

- Setting up loaders for CSS, HTML, and assets
- Configuring asset modules for images and fonts
- Using `html-loader` to process images in HTML templates
- Implementing content hashing for production builds
- Setting up Webpack Dev Server for local development

```javascript
{
	test: /\.html$/,
	use: [{
		loader: "html-loader",
		options: {
			sources: {
				list: [{
					tag: "img",
					attribute: "src",
					type: "src",
				}],
			},
		},
	}],
}
```

### Continued development

In future projects, I want to continue focusing on:

- **JavaScript Frameworks**: Learning React and Angular to build more interactive and dynamic user interfaces
- **Advanced Webpack**: Exploring code splitting, lazy loading, and optimization techniques
- **CSS Methodologies**: Deepening my understanding of BEM, CSS Modules, or styled-components
- **Responsive Design**: Improving my skills with CSS Grid and advanced responsive patterns
- **Accessibility**: Implementing ARIA attributes and ensuring keyboard navigation works flawlessly
- **Build Tools**: Exploring Vite and other modern build tools as alternatives to Webpack

### Useful resources

- [Webpack Documentation](https://webpack.js.org/concepts/) - Essential for understanding how to configure Webpack properly. The guides on asset modules and loaders were particularly helpful.
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Great visual reference for Flexbox properties and centering techniques.
- [MDN Web Docs: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - Comprehensive guide on using CSS variables effectively.
- [web.dev: Font Best Practices](https://web.dev/font-best-practices/) - Helped me understand `font-display: swap` and variable fonts.
- [Webpack html-loader](https://webpack.js.org/loaders/html-loader/) - Critical for understanding how to process HTML files and their assets in Webpack.

## Author

- Linkedin - [@jabssdev](https://www.linkedin.com/in/jabssdev/)
- Frontend Mentor - [@jabssdev](https://www.frontendmentor.io/profile/jabssdev)
- Instagram - [@jabssdev](https://www.instagram.com/jabssdev/)
