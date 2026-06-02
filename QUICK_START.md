# Quick Start Guide 🚀

Get your portfolio personalized in minutes! Follow these steps to replace the placeholder content with your information.

## 🎯 Priority Checklist (5 Minutes)

### 1. Update Your Name (2 min)

Search and replace "Your Name" in these files:
- `ModernHero.tsx` - Line 51
- `ModernFooter.tsx` - Lines 62, 117

### 2. Update Social Links (1 min)

In `ModernHero.tsx` (lines 113-115) and `ModernFooter.tsx` (lines 55-57):
```tsx
{ icon: Github, href: 'https://github.com/YOURUSERNAME' },
{ icon: Linkedin, href: 'https://linkedin.com/in/YOURPROFILE' },
{ icon: Mail, href: 'mailto:YOUR.EMAIL@example.com' },
```

### 3. Update Contact Info (2 min)

In `ModernContact.tsx` (lines 28-44):
```tsx
{
  icon: Mail,
  label: 'Email',
  value: 'your.email@example.com',  // ← Change this
  href: 'mailto:your.email@example.com',  // ← And this
},
{
  icon: Phone,
  label: 'Phone',
  value: '+1 (555) 123-4567',  // ← Change this
  href: 'tel:+15551234567',  // ← And this
},
{
  icon: MapPin,
  label: 'Location',
  value: 'San Francisco, CA',  // ← Change this
},
```

---

## 📝 Content Customization (30 Minutes)

### Hero Section (`ModernHero.tsx`)

**Job Title** (Line 69):
```tsx
<h2 className="text-2xl md:text-3xl text-gray-300">
  Full Stack Developer  // ← Change to your title
</h2>
```

**Introduction** (Lines 76-80):
```tsx
<p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
  Your personal introduction here. Keep it 2-3 sentences.
  Mention your expertise and what makes you unique.
</p>
```

**Stats Card** (Lines 126-143):
Update these to reflect your experience:
```tsx
{ label: 'Years Experience', value: '6+' },  // ← Your years
{ label: 'Projects Completed', value: '50+' },  // ← Your projects
{ label: 'Happy Clients', value: '30+' },  // ← Your clients
{ label: 'Code Commits', value: '5000+' },  // ← Your commits
```

**Tech Stack Pills** (Line 149):
```tsx
{['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'].map((tech, index) => (
  // ← Replace with YOUR tech stack
```

---

### About Section (`ModernAbout.tsx`)

**Main Description** (Lines 42-45):
```tsx
<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
  Write 2-3 sentences about yourself, your passion, and your approach to development.
</p>
```

**Your Journey** (Lines 83-94):
Replace the two paragraphs with your actual story.

**Experience Stats** (Lines 97-107):
```tsx
{ value: '6+', label: 'Years Coding' },  // ← Update
{ value: '50+', label: 'Projects Built' },  // ← Update
```

---

### Skills Section (`ModernSkills.tsx`)

Update the skill categories and proficiency levels (Lines 5-43):

```tsx
const skillCategories = [
  {
    title: 'Frontend',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95 },  // ← 0-100%
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  // ... add or remove categories as needed
];
```

**Tech Pills** (Line 100):
```tsx
{['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB', 'GraphQL'].map(
  // ← Replace with your full tech stack
```

---

### Projects Section (`ModernProjects.tsx`)

This is the most important section! Replace all 6 projects with your actual work (Lines 7-52):

```tsx
{
  title: 'Your Project Name',
  description: 'Brief description highlighting the problem solved and impact',
  image: 'https://images.unsplash.com/photo-xxx',  // ← Replace with your screenshot
  tags: ['React', 'Node.js', 'MongoDB', 'AWS'],  // ← Actual tech used
  gradient: 'from-blue-500 to-cyan-500',
  stats: { users: '10K+', growth: '+45%' },  // ← Real metrics
  liveUrl: 'https://your-project.com',  // ← Live demo
  githubUrl: 'https://github.com/you/repo',  // ← Repository
},
```

**Adding Your Project Images:**
1. Save screenshots to `public/images/`
2. Use paths like: `image: '/images/my-project.png'`
3. Or use Unsplash for placeholders: `https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop`

**Project Tips:**
- Focus on your best 4-6 projects
- Include metrics (users, performance, revenue)
- Show variety in tech stack
- Link to live demos when possible

---

## 🎨 Style Customization

### Change Color Scheme

The portfolio uses purple/pink gradients. To change:

**Find and replace:**
- `from-purple-500 to-pink-500` → Your gradient
- `from-purple-600 to-pink-600` → Your gradient
- `text-purple-400` → Your color
- `bg-purple-500/20` → Your color

**Common Tailwind Gradients:**
- Blue/Cyan: `from-blue-500 to-cyan-500`
- Green/Emerald: `from-green-500 to-emerald-500`
- Orange/Red: `from-orange-500 to-red-500`
- Indigo/Purple: `from-indigo-500 to-purple-500`

### Adjust Spacing

All sections use `py-32` (vertical padding). To adjust:
- More space: `py-40` or `py-48`
- Less space: `py-24` or `py-20`

---

## 📸 Images Guide

### Where to Get Images

**For Project Screenshots:**
1. Use actual screenshots of your projects (BEST option)
2. Use browser mockup tools (Screely, Mockuphone)
3. Use high-quality stock photos as placeholders

**For Placeholder Images:**
- Unsplash: `https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop`
- Use our search: Browse Unsplash for relevant images

**Recommended Image Sizes:**
- Project cards: 800×600px minimum
- Hero section: 600×600px
- Profile photo: 400×400px

### How to Replace Images

**Option 1: Use Local Images**
```tsx
// 1. Put image in public/images/
// 2. Reference it:
image: '/images/my-project.png'
```

**Option 2: Use External URLs**
```tsx
image: 'https://your-cdn.com/image.jpg'
```

---

## 🔧 Advanced Customization

### Add a New Section

1. Create `src/app/components/YourSection.tsx`:
```tsx
import { motion } from 'motion/react';

export function YourSection() {
  return (
    <section id="your-section" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Add to `App.tsx`:
```tsx
import { YourSection } from './components/YourSection';

// Add in the component tree:
<YourSection />
```

3. Add to navigation in `ModernNavigation.tsx`:
```tsx
{ label: 'Your Section', id: 'your-section' },
```

### Modify Animations

All animations use Motion. Common properties:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}  // Starting state
  whileInView={{ opacity: 1, y: 0 }}  // Final state
  transition={{ duration: 0.6 }}  // Animation timing
  viewport={{ once: true }}  // Only animate once
  whileHover={{ scale: 1.05 }}  // Hover effect
>
```

---

## ✅ Final Checklist

Before launching your portfolio:

- [ ] Updated all instances of "Your Name"
- [ ] Added real email, phone, location
- [ ] Updated all social media links
- [ ] Customized introduction and about text
- [ ] Updated skill levels to reflect your abilities
- [ ] Added 4-6 real projects with descriptions
- [ ] Replaced project images with screenshots
- [ ] Updated stats to reflect your experience
- [ ] Tested all external links
- [ ] Checked on mobile devices
- [ ] Added your resume PDF to `/public/resume.pdf`
- [ ] Tested contact form
- [ ] Proofread all text for typos

---

## 🚀 Deployment Tips

When ready to deploy:

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy to:**
   - **Vercel** (Recommended for React)
   - **Netlify**
   - **GitHub Pages**
   - **Your own hosting**

3. **Before Deployment:**
   - Optimize images (compress them)
   - Test build locally
   - Check all links work
   - Test on multiple devices

---

## 💡 Pro Tips

1. **Keep It Updated** - Add new projects regularly
2. **Show Metrics** - Use real numbers to demonstrate impact
3. **Quality Over Quantity** - 4 great projects > 10 mediocre ones
4. **Mobile First** - Most visitors will view on mobile
5. **Fast Loading** - Optimize images and assets
6. **Personal Touch** - Make it uniquely yours!

---

## 🆘 Need Help?

Common issues and solutions:

**Problem:** Animations not working
- Solution: Check that Motion is imported correctly

**Problem:** Images not loading
- Solution: Ensure images are in `/public/` folder or use full URLs

**Problem:** Navigation not scrolling
- Solution: Verify section IDs match navigation items

**Problem:** Gradient not showing
- Solution: Check Tailwind class syntax

---

**Happy customizing! 🎉**

Make this portfolio yours and stand out from the crowd!
