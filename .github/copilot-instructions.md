# Portfolio Website Development Guidelines

## Project Overview
Modern, dynamic React portfolio website showcasing professional profile, projects, skills, and experience with smooth animations and responsive design.

## Technology Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Package Manager**: npm

## Key Features
1. Responsive design (mobile, tablet, desktop)
2. Smooth scroll animations with Framer Motion
3. Dark theme with gradient backgrounds
4. Interactive project showcase
5. Skills categorization
6. Experience timeline
7. Education section
8. Contact information with social links
9. Mobile-friendly navigation menu

## File Structure
```
src/
├── components/
│   ├── Navbar.tsx - Navigation with mobile menu
│   ├── Hero.tsx - Hero section with call-to-actions
│   ├── About.tsx - About section with features
│   ├── Experience.tsx - Work experience with timeline
│   ├── Projects.tsx - Project showcase cards
│   ├── Skills.tsx - Technical skills and certifications
│   ├── Education.tsx - Education details
│   ├── Contact.tsx - Contact section with social links
│   └── Footer.tsx - Footer with navigation
├── data/
│   └── resume.ts - All resume and portfolio data
├── App.tsx - Main application component
├── index.css - Global styles with Tailwind
└── main.tsx - React entry point
```

## Development Guidelines

### Component Development
- Use functional components with hooks
- Implement Framer Motion animations for smooth interactions
- Ensure mobile responsiveness using Tailwind breakpoints
- Add proper TypeScript typing for props
- Use semantic HTML elements

### Data Management
- All content stored in `src/data/resume.ts`
- Update resume data to change portfolio content
- Maintain data structure consistency

### Styling
- Use Tailwind CSS utility classes
- Custom animations in `tailwind.config.js`
- Dark theme with slate colors
- Blue accent color (#3b82f6)

### Performance
- Lazy load components if needed
- Optimize images and assets
- Use CSS animations instead of JavaScript where possible
- Code split for production builds

## Customization

### Update Your Information
Edit `src/data/resume.ts`:
```typescript
export const resumeData = {
  name: "Your Name",
  email: "your.email@example.com",
  // Add your projects, skills, education, etc.
}
```

### Modify Colors
Update `tailwind.config.js` theme colors:
```javascript
colors: {
  primary: "#0f172a",
  secondary: "#1e293b",
  accent: "#3b82f6",
}
```

### Add/Remove Sections
- Create new components in `src/components/`
- Import in `App.tsx`
- Add navigation link in `Navbar.tsx`

## Build and Deployment

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deployment Options
1. **Netlify**: Connect GitHub repo, auto-deploy
2. **Vercel**: Similar to Netlify
3. **GitHub Pages**: Manual or CI/CD deployment
4. **Traditional Hosting**: Upload dist/ folder via FTP

## Best Practices
1. Keep component files focused and single-responsibility
2. Use meaningful variable and function names
3. Add comments for complex logic
4. Test responsive design on multiple devices
5. Optimize images before adding to project
6. Keep animations smooth and not distracting
7. Ensure good color contrast for accessibility
8. Update portfolio regularly with new projects

## Common Tasks

### Add a New Project
1. Add project object to `resumeData.projects` in `resume.ts`
2. Include all required fields: title, description, technologies, github, demo, features
3. Projects automatically render in Projects section

### Add a New Skill
1. Add skill item to appropriate category in `resumeData.skills`
2. Skills display automatically with styling

### Update Social Links
Modify social links in `resumeData`:
```typescript
github: "your-github-url",
linkedin: "your-linkedin-url",
email: "your-email"
```

### Customize Animations
Edit Framer Motion props in components:
```typescript
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

## Troubleshooting

### Styles not applying
- Check Tailwind CSS is imported
- Verify `tailwind.config.js` is correct
- Clear cache: `npm run dev`

### Animations not smooth
- Check component mount/unmount
- Verify Framer Motion imports
- Use `whileHover` and `whileInView` correctly

### Build errors
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct
- Check Node.js version (16+)

## Resources
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Contact
For questions about the portfolio setup, refer to the README.md file.
