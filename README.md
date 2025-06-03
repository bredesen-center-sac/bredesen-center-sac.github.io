# SAC Website

A modern website built with Astro, shadcn/ui components, and FullCalendar integration for Google Calendar events.

## 🚀 Features

- **Astro Framework**: Fast, modern static site generator
- **shadcn/ui Components**: Beautiful, accessible component library
- **FullCalendar**: Interactive calendar with Google Calendar integration
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **GitHub Pages**: Automated deployment

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://reactjs.org/) - Component library
- [shadcn/ui](https://ui.shadcn.com/) - Component system
- [FullCalendar](https://fullcalendar.io/) - Calendar component
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/[YOUR_USERNAME]/sac-website.git
cd sac-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🎯 Google Calendar Integration

To integrate with Google Calendar:

1. **Get a Google Calendar API key**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google Calendar API
   - Create credentials (API key)

2. **Find your Google Calendar ID**:
   - Open Google Calendar
   - Go to Settings > Settings for my calendars
   - Select your calendar
   - Copy the Calendar ID from the "Integrate calendar" section

3. **Update the Calendar component**:
   ```astro
   <Calendar 
     client:load
     height="600px"
     googleCalendarApiKey="YOUR_API_KEY"
     googleCalendarId="YOUR_CALENDAR_ID"
   />
   ```

## 📝 Adding shadcn/ui Components

To add more shadcn/ui components:

1. Browse available components at [ui.shadcn.com](https://ui.shadcn.com/)
2. Copy the component code into `src/components/ui/`
3. Import and use in your Astro or React components

Example:
```tsx
import { Button } from '@/components/ui/button'

<Button variant="outline">Click me</Button>
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

1. **Update the Astro config**:
   - Edit `astro.config.mjs`
   - Replace `[YOUR_USERNAME]` with your GitHub username:
   ```js
   export default defineConfig({
     site: 'https://your-username.github.io',
     base: '/sac-website',
     // ...
   });
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[YOUR_USERNAME]/sac-website.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - The site will be deployed automatically

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── Calendar.tsx # FullCalendar component
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   │
│   ├── pages/
│   │   └── index.astro  # Main page
│   │
│   └── styles/
│       └── global.css   # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── astro.config.mjs
├── components.json      # shadcn/ui config
├── tailwind.config.mjs
└── tsconfig.json
```

## 🎨 Customization

### Themes
The project uses shadcn/ui's theming system. You can customize colors by editing CSS variables in `src/styles/global.css`.

### Components
Add new React components in `src/components/` or new Astro components as `.astro` files.

### Styling
Use Tailwind CSS classes throughout your components. The project is configured with shadcn/ui's design tokens.

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Astro Documentation](https://docs.astro.build/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [FullCalendar Documentation](https://fullcalendar.io/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
