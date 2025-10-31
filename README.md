# React Portfolio Website

A modern, responsive single-page portfolio website built with React.js. Features smooth scrolling navigation, animated components, and a clean design that showcases your skills and projects.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Modern UI**: Clean and professional design with animations
- **Interactive Components**: Animated skill bars, hover effects, and transitions
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Links to your social profiles

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Skills**: Technology stack with animated progress bars
4. **Projects**: Showcase of your work with project details and links
5. **Contact**: Contact form and information
6. **Footer**: Additional links and social media

## Technologies Used

- React.js 18
- CSS3 with modern features (Grid, Flexbox, Animations)
- Font Awesome icons
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Building for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized files ready for deployment.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Change name, title, and description
   - Update call-to-action button text

2. **About Section** (`src/components/About.js`):
   - Update personal description
   - Modify statistics (projects, experience, clients)

3. **Skills Section** (`src/components/Skills.js`):
   - Add/remove skills and their proficiency levels
   - Update skill categories

4. **Projects Section** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update project descriptions, technologies, and links

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information
   - Replace social media links

### Styling

- All component styles are in their respective `.css` files
- Global styles are in `src/index.css`
- Color scheme can be easily changed by updating CSS custom properties

### Images

Replace placeholder icons with actual images:
- Add your profile photo to the Hero and About sections
- Add project screenshots to the Projects section
- Update the favicon in `public/index.html`

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js
└── index.css
```

## Deployment

This project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!