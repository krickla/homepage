# Cognitive Neuroscience Portfolio Website

A professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS for showcasing academic work, CV, Master's thesis, and blog content in cognitive neuroscience.

## Features

- **Home Section**: Professional introduction and research interests
- **CV Management**: Download your curriculum vitae (PDF support)
- **Thesis Showcase**: Display and download your Master's thesis
- **Blog Platform**: Share research insights and professional thoughts
- **Responsive Design**: Mobile-friendly and accessible across all devices
- **Dark Mode Support**: Built-in dark mode with Tailwind CSS
- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global Tailwind styles
├── public/
│   └── documents/          # CV and thesis PDFs
├── components/             # Reusable React components
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md               # This file
```

## Adding Your Content

### 1. Upload Documents

Place your CV and thesis PDFs in the `public/documents/` directory:
- `CV.pdf`
- `Masters_Thesis.pdf`

### 2. Edit Home Section

Update the introduction and research interests in `app/page.tsx`:
- Edit the welcome text
- Update research interests, skills, and experience

### 3. Customize CV Section

- Add your education and experience details
- Link to your CV file

### 4. Update Thesis Information

- Add your thesis title and abstract
- List key findings and methodology
- Link to your thesis PDF

### 5. Write Blog Posts

Expand the blog section with new articles:
- Add publication dates
- Write compelling summaries
- Consider expanding with individual blog post pages

## Customization

### Colors and Branding

Edit the color scheme in `tailwind.config.ts` and `app/globals.css` to match your preferred branding.

### Fonts

Change fonts in `app/layout.tsx` by modifying the `Inter` import from Google Fonts.

### Adding Pages

Create new pages by adding files to the `app/` directory. For example, create `app/contact/page.tsx` for a contact page.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

### Deploy to Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted servers

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: JavaScript library for UI
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality tool

## Tips for PhD Applications

- Keep your portfolio professional and updated
- Highlight your research interests clearly
- Include a well-written thesis abstract
- Use the blog to showcase your knowledge and communication skills
- Ensure all documents are properly formatted and current

## Contact

- Email: your.email@example.com
- [Add your social media or contact information]

## License

This project is open source and available under the MIT License.
