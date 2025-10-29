# Flarelax Hosting - Design System

## 🎨 Color Palette

### Primary Colors
- **Cyan**: `#22D3EE` (cyan-400) - Speed, Technology
- **Purple**: `#A855F7` (purple-500) - Premium, Trust
- **Pink**: `#EC4899` (pink-500) - Energy, Innovation
- **Blue**: `#3B82F6` (blue-500) - Reliability, Professional

### Background Colors
- **Primary Dark**: `#020617` (slate-950) - Main background
- **Secondary Dark**: `#0F172A` (slate-900) - Card backgrounds
- **Tertiary Dark**: `#1E293B` (slate-800) - Elevated surfaces

### Text Colors
- **Primary Text**: `#FFFFFF` (white) - Headlines, important text
- **Secondary Text**: `#E2E8F0` (slate-200) - Body text
- **Tertiary Text**: `#94A3B8` (slate-400) - Muted text, labels
- **Disabled Text**: `#64748B` (slate-500) - Disabled states

### Accent Colors
- **Success**: `#10B981` (green-500) - Success states, uptime indicators
- **Warning**: `#F59E0B` (amber-500) - Warning states
- **Error**: `#EF4444` (red-500) - Error states
- **Info**: `#06B6D4` (cyan-500) - Information states

## 📐 Typography

### Font Family
- **Primary**: `Inter` - Modern, clean, highly readable
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Font Weights
- **Light**: 300 - Large hero text
- **Regular**: 400 - Body text
- **Medium**: 500 - Subheadings
- **Semibold**: 600 - Important labels
- **Bold**: 700 - Buttons, strong emphasis
- **Extrabold**: 800 - Section headers
- **Black**: 900 - Hero headlines

### Font Sizes
- **Hero**: `5rem` (80px) - Main hero headline
- **Display**: `3.75rem` (60px) - Section headers
- **H1**: `3rem` (48px) - Page titles
- **H2**: `2.25rem` (36px) - Major sections
- **H3**: `1.875rem` (30px) - Subsections
- **H4**: `1.5rem` (24px) - Card titles
- **Body Large**: `1.25rem` (20px) - Lead paragraphs
- **Body**: `1rem` (16px) - Standard text
- **Small**: `0.875rem` (14px) - Labels, captions
- **Tiny**: `0.75rem` (12px) - Fine print

## 🎯 Component Styles

### Buttons

#### Primary Button
```jsx
className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-bold text-white text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
```

#### Secondary Button
```jsx
className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full font-bold text-white text-lg hover:bg-white/20 transition-all"
```

#### Link Button
```jsx
className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
```

### Cards

#### Glass Card
```jsx
className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
```

#### Elevated Card
```jsx
className="bg-gradient-to-br from-slate-900/98 via-purple-900/98 to-slate-900/98 backdrop-blur-3xl border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/30"
```

### Inputs

#### Text Input
```jsx
className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
```

## 🎭 Animation Guidelines

### Durations
- **Fast**: 150ms - Micro interactions (hover states)
- **Normal**: 300ms - Standard transitions
- **Slow**: 500ms - Complex animations
- **Very Slow**: 1000ms - Page transitions

### Easing Functions
- **Default**: `cubic-bezier(0.4, 0, 0.2, 1)` - Most animations
- **EaseOut**: `cubic-bezier(0, 0, 0.2, 1)` - Exit animations
- **EaseIn**: `cubic-bezier(0.4, 0, 1, 1)` - Enter animations
- **Spring**: For Framer Motion `{ type: "spring", stiffness: 500, damping: 30 }`

### Common Animations
- **Fade In**: `opacity: 0 → 1`
- **Slide Up**: `translateY(30px) → translateY(0)`
- **Scale**: `scale(0.95) → scale(1)`
- **Hover Lift**: `translateY(0) → translateY(-8px)`

## 🏗️ Layout System

### Spacing Scale
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Border Radius
- **sm**: 0.5rem (8px) - Small elements
- **md**: 0.75rem (12px) - Default
- **lg**: 1rem (16px) - Cards
- **xl**: 1.5rem (24px) - Large cards
- **2xl**: 2rem (32px) - Hero sections
- **full**: 9999px - Pills, buttons

### Container Widths
- **Max Width**: 1280px (7xl)
- **Content Width**: 1024px (5xl)
- **Text Width**: 768px (3xl)

## 🎨 Gradient Styles

### Primary Gradient
```css
background: linear-gradient(to right, #3B82F6, #8B5CF6, #EC4899);
```

### Background Gradient
```css
background: linear-gradient(to bottom right, #020617, #4C1D95, #020617);
```

### Text Gradient
```css
background: linear-gradient(to right, #22D3EE, #A855F7, #EC4899);
background-clip: text;
-webkit-text-fill-color: transparent;
```

## 🔍 Iconography

### Icon Sources
- **Heroicons** - Primary icon set (outline and solid variants)
- **Custom SVG** - Brand icons and logos

### Icon Sizes
- **xs**: 16px - Inline with text
- **sm**: 20px - Small buttons
- **md**: 24px - Default
- **lg**: 32px - Large buttons
- **xl**: 48px - Feature icons
- **2xl**: 64px - Hero icons

## 📱 Responsive Breakpoints

- **sm**: 640px - Mobile landscape
- **md**: 768px - Tablet
- **lg**: 1024px - Desktop
- **xl**: 1280px - Large desktop
- **2xl**: 1536px - Extra large screens

## 🎯 Brand Voice

### Tone
- **Professional** yet **approachable**
- **Confident** without being arrogant
- **Technical** but not overwhelming
- **Supportive** and **helpful**

### Key Messages
- ⚡ **Speed**: Lightning-fast deployment and performance
- 🛡️ **Reliability**: 99.9% uptime guarantee
- 💪 **Power**: Enterprise-grade infrastructure
- 🤝 **Support**: 24/7 expert assistance

## 🔐 Accessibility

### WCAG Compliance
- **Target**: WCAG 2.1 Level AA
- **Color Contrast**: Minimum 4.5:1 for normal text
- **Focus States**: Always visible and clear
- **Keyboard Navigation**: Full support
- **Screen Readers**: Semantic HTML and ARIA labels

### Best Practices
- Use semantic HTML elements
- Provide alt text for all images
- Ensure sufficient color contrast
- Support keyboard navigation
- Test with screen readers
