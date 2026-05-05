
# Dev By Dre | FlexFolio Portfolio

## Overview
**Dev By Dre** is the professional portfolio website for **Andres Ramirez | Senior Front-End Engineer | UI/UX Architect**. This portfolio showcases precision-engineered digital solutions, featured projects, and professional services.

Built with modern web technologies including TailwindCSS, Webpack, and vanilla JavaScript, this site demonstrates expertise in frontend development, UI/UX architecture, and performance optimization.

**Principal:** Andres Ramirez
**Brand:** Dev By Dre
**Purpose:** Professional portfolio for job hunting and client acquisition
**LinkedIn:** [in/andresramirezdev](https://linkedin.com/in/andresramirezdev)

## Featured Projects
- Graham Healthcare Group
- Clarus Care
- CSI Pharmacy
- Vidalta Homes
- Hello Jams
- World of Hyatt
- Tripster
- Cleveland Clinic Yoga Portal
- Mayo Civic Center
- RP Funding Center

## Prerequisites
Before you start, ensure you have the following installed:
- **Node.js** (v16 or higher) and **npm** - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - Visual Studio Code recommended - [Download](https://code.visualstudio.com/)

## Quick Start

### Clone the Repository
```bash
git clone https://github.com/gattodigital/flexfolio.git
cd flexfolio
```

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run watch
```

The development server will start with hot-reloading enabled. Your site will be available at the local development URL.

## Project Structure
```
flexfolio/
├── src/                    # Source files
│   ├── index.html         # Main HTML file
│   ├── index.js           # Main JavaScript entry point
│   └── styles.css         # TailwindCSS styles
├── dist/                  # Build output (generated)
├── webpack.config.js      # Webpack configuration
├── tailwind.config.js     # TailwindCSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Project dependencies and scripts
```

## Development

### Available Scripts

#### Development Mode
```bash
npm run watch
```
Runs Webpack in watch mode with hot-reloading for development.

#### Build for Production
```bash
NODE_ENV=production npx webpack --mode production
```
Creates an optimized production build in the `dist/` directory with:
- Minified HTML, CSS, and JavaScript
- Content hash filenames for cache busting
- Optimized assets and performance

#### Build CSS (Standalone)
```bash
npm run build-css
```
Compiles TailwindCSS in watch mode (outputs to `dist/styles.css`).

### Development Workflow

1. **Make Changes**: Edit files in the `src/` directory
2. **Auto-Rebuild**: Webpack automatically rebuilds on file changes
3. **Preview**: Check your changes in the browser
4. **Commit**: Use Git to commit your changes

### Key Technologies

- **Webpack 5**: Module bundler and build tool
- **TailwindCSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **Babel**: JavaScript transpilation for browser compatibility
- **MiniCssExtractPlugin**: Extracts CSS into separate files for production

## Building for Production

### Create Production Build
```bash
NODE_ENV=production npx webpack --mode production
```

This command:
1. Sets environment to production
2. Minifies all HTML, CSS, and JavaScript
3. Adds content hashes to filenames for cache busting
4. Optimizes images and assets
5. Outputs everything to the `dist/` directory

### Build Output
The `dist/` folder will contain:
- `index.html` - Minified HTML
- `bundle.[hash].js` - Minified and optimized JavaScript
- `styles.[hash].css` - Minified and optimized CSS
- All assets referenced in your code

## Deployment to Hostinger

### Prerequisites
- Hostinger hosting account with File Manager or FTP access
- Domain configured in Hostinger

### Deployment Steps

#### Method 1: Using File Manager (Recommended)
1. **Build the project**:
   ```bash
   NODE_ENV=production npx webpack --mode production
   ```

2. **Access Hostinger File Manager**:
   - Log in to Hostinger control panel
   - Navigate to File Manager

3. **Upload files**:
   - Navigate to `public_html` directory (or your domain's root directory)
   - Upload all files from the `dist/` directory
   - Ensure `index.html` is in the root

4. **Set permissions** (if needed):
   - Files: 644
   - Directories: 755

#### Method 2: Using FTP
1. **Build the project**:
   ```bash
   NODE_ENV=production npx webpack --mode production
   ```

2. **Connect via FTP**:
   - Use an FTP client (FileZilla, Cyberduck, etc.)
   - Get FTP credentials from Hostinger control panel
   - Connect to your server

3. **Upload files**:
   - Navigate to `public_html` or your domain folder
   - Upload all contents from `dist/` directory

4. **Verify deployment**:
   - Visit your domain to confirm the site is live

#### Method 3: Using Git (Advanced)
1. **Set up Git on Hostinger** (if available):
   - SSH into your Hostinger server
   - Navigate to your domain directory

2. **Clone and build**:
   ```bash
   git clone https://github.com/gattodigital/flexfolio.git
   cd flexfolio
   npm install
   NODE_ENV=production npx webpack --mode production
   ```

3. **Move build files**:
   ```bash
   cp -r dist/* ../public_html/
   ```

### Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile devices
- [ ] Check all links and navigation
- [ ] Verify contact form functionality
- [ ] Test social media links
- [ ] Validate SSL certificate is active
- [ ] Check website performance with Google PageSpeed Insights
- [ ] Verify SEO meta tags are rendering correctly

### Custom Domain Setup
1. Point your domain to Hostinger nameservers:
   - ns1.dns-parking.com
   - ns2.dns-parking.com

2. Configure domain in Hostinger control panel

3. Enable SSL certificate (Let's Encrypt - free)

4. Set up 301 redirects (www to non-www or vice versa)

## Customization Guide

### Updating Personal Information

#### Update LinkedIn Profile
Edit `src/index.html` line 382 to update the LinkedIn URL:
```html
<a href="https://linkedin.com/in/andresramirezdev" class="social-link">
```

#### Update Brand Name
The site uses "Dev By Dre" as the brand name and "Andres Ramirez" as the principal name. To update:
- **Navigation**: `src/index.html` line 39
- **Hero Section**: `src/index.html` lines 75, 80
- **Footer**: `src/index.html` line 413
- **Page Title**: `src/index.html` line 11

#### Add Projects
To add the featured projects, edit the Work section in `src/index.html` (starting around line 236). Use the existing project structure as a template.

Projects to add:
- Graham Healthcare Group
- Clarus Care
- CSI Pharmacy
- Hello Jams
- Cleveland Clinic Yoga Portal
- Mayo Civic Center
- RP Funding Center

### Styling and Theme

#### Color Scheme
The site uses a dark theme with gold accents. Colors are defined in `src/styles.css`:
- Background: `#09090b`
- Text: `#f0efed`
- Accent/Gold: `#c9a84c`

To modify colors, update the CSS custom properties in `src/styles.css`.

#### Typography
The site uses system fonts for performance. To change fonts, update the font-family declarations in `src/styles.css`.

## Troubleshooting

### Common Issues

#### Build Errors
If you encounter build errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Port Already in Use
If the development server port is occupied:
```bash
# Kill the process using port 8080 (or your port)
lsof -ti:8080 | xargs kill -9
```

#### CSS Not Updating
If TailwindCSS changes aren't reflected:
```bash
# Clear dist folder and rebuild
rm -rf dist
npm run watch
```

#### Production Build Issues
If production build fails:
```bash
# Ensure NODE_ENV is set correctly
export NODE_ENV=production
npx webpack --mode production
```

### Browser Compatibility
The site is optimized for modern browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

For older browser support, additional polyfills may be required.

## Performance Optimization

### Best Practices Implemented
- **Code Splitting**: Webpack automatically splits code for optimal loading
- **Asset Optimization**: Images and assets are optimized during build
- **CSS Extraction**: CSS is extracted into separate files for better caching
- **Cache Busting**: Content hashes ensure fresh content after updates
- **Minification**: HTML, CSS, and JavaScript are minified in production
- **Tree Shaking**: Unused code is removed from the final bundle

### Performance Tips
1. **Optimize Images**: Use WebP format and compress images before adding
2. **Lazy Load**: Consider lazy loading for below-the-fold images
3. **CDN**: Use a CDN for static assets if deploying to Hostinger
4. **Caching**: Configure server-side caching headers in Hostinger

## Git Workflow

### Making Changes
```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes
# ... edit files ...

# Stage and commit
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin feature/your-feature-name
```

### Updating from Main
```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Switch back to your branch
git checkout feature/your-feature-name

# Merge main into your branch
git merge main
```

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with TailwindCSS utilities
- **JavaScript (ES6+)**: Vanilla JavaScript for interactions
- **Webpack 5**: Module bundling and build automation
- **TailwindCSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing and optimization
- **Babel**: JavaScript transpilation

### Development Tools
- **webpack-dev-server**: Development server with hot reload
- **MiniCssExtractPlugin**: CSS extraction for production
- **HtmlWebpackPlugin**: HTML generation and optimization
- **Autoprefixer**: Automatic vendor prefix addition

## License
All rights reserved © Andres Ramirez

## Contact
- **Email**: hello@devbydre.com
- **LinkedIn**: [in/andresramirezdev](https://linkedin.com/in/andresramirezdev)
- **GitHub**: [gattodigital](https://github.com/gattodigital)
- **Website**: [devbydre.com](https://devbydre.com)

## Support
For questions or issues with the project:
1. Check this README for documentation
2. Review the code comments in source files
3. Contact via email or LinkedIn

---

**Built with precision by Andres Ramirez | Dev By Dre**
