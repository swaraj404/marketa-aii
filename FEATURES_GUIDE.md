# Complete Guide to Customizing the Features Section

## 📋 Table of Contents
1. [Overall Structure](#overall-structure)
2. [Feature Data Configuration](#feature-data-configuration)
3. [Layout & Spacing](#layout--spacing)
4. [Left Section Components](#left-section-components)
5. [Right Section Components](#right-section-components)
6. [Colors & Styling](#colors--styling)
7. [Dimensions & Sizing](#dimensions--sizing)
8. [Common Customizations](#common-customizations)

---

## Overall Structure

The Features section (`GettingStarted.jsx`) has this hierarchy:

```
GettingStarted Component
├── features[] array (data for all 6 features)
├── getColorClasses() function (icon background colors)
├── getButtonColorClasses() function (button styles)
└── Main Render
    └── Loop through features.map()
        ├── Left Section (Text Content)
        └── Right Section (UI Mock)
```

---

## Feature Data Configuration

### Location: Lines 4-171 (features array)

Each feature object has this structure:

```javascript
{
  step: 1,                    // Feature number (1-6)
  title: "AI Chatbot",       // Main heading
  subtitle: "Marketing",      // Subheading in orange
  description: "Text...",     // Paragraph description
  bullets: ["...", "..."],    // Bullet points (3 items)
  icon: Bot,                  // Icon component (not used currently)
  mockTitle: "Title",         // Title inside the right mock
  mockDescription: "Text",    // Description in right mock
  mockIcons: [                // 3 icons at top of right mock
    { Icon: Bot, color: "orange" },
    { Icon: Lock, color: "white" },
    { Icon: Shield, color: "orange" }
  ],
  mockButtons: [              // 6 buttons in 2x3 grid
    { label: "Text", icon: Users, active: true },
    { label: "Text", icon: Target, disabled: true }
  ]
}
```

### How to Modify:

**Change text content:**
```javascript
title: "Your New Title",
subtitle: "Your Subtitle",
description: "Your description text here",
```

**Change bullet points:**
```javascript
bullets: [
  "First bullet point",
  "Second bullet point", 
  "Third bullet point"
],
```

**Change right mock icons (3 icons):**
```javascript
mockIcons: [
  { Icon: YourIcon1, color: "orange" },  // First icon
  { Icon: YourIcon2, color: "white" },   // Middle icon
  { Icon: YourIcon3, color: "orange" }   // Last icon
],
```

**Change buttons (6 buttons):**
```javascript
mockButtons: [
  { label: "Button 1", icon: IconName, active: true },     // Top left
  { label: "Button 2", icon: IconName, active: true },     // Top right
  { label: "Button 3", icon: IconName, active: true },     // Middle left
  { label: "Button 4", icon: IconName, disabled: true },   // Middle right (grayed out)
  { label: "Button 5", icon: IconName, active: true },     // Bottom left
  { label: "Button 6", icon: IconName, disabled: true }    // Bottom right (grayed out)
]
```

---

## Layout & Spacing

### Main Container (Line 184-186)
```javascript
<div className="max-w-[1600px] mx-auto px-8 lg:px-16 min-h-screen flex items-center">
```

**Customize:**
- `max-w-[1600px]` - Maximum width of entire section
- `px-8 lg:px-16` - Side padding (8 on mobile, 16 on desktop)
- `min-h-screen` - Each feature takes full screen height

### Grid Layout (Line 187)
```javascript
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full py-16">
```

**Customize:**
- `lg:grid-cols-2` - 2 columns on large screens (left + right)
- `gap-16 lg:gap-24` - Space between left and right (16 on tablet, 24 on desktop)
- `py-16` - Top and bottom padding

---

## Left Section Components

### 1. Step Indicator (Lines 191-200)

```javascript
<div className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
    <span className="text-orange-500 font-semibold">{feature.step}</span>
  </div>
  <div className="flex-1 h-px bg-gray-800 max-w-[100px]"></div>
  <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
    Step {feature.step} of {features.length}
  </div>
</div>
```

**Customize:**
- `w-12 h-12` - Size of numbered circle
- `border-2 border-orange-500` - Border thickness and color
- `max-w-[100px]` - Length of line after circle
- `text-xs` - Size of "Step X of 6" text

### 2. Main Title (Lines 203-207)

```javascript
<div>
  <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-4">
    {feature.title}
  </h1>
  <p className="text-xl text-orange-500 font-light">{feature.subtitle}</p>
</div>
```

**Customize:**
- `text-5xl lg:text-6xl` - Title size (5xl on mobile, 6xl on desktop)
- `font-light` - Font weight (light/normal/medium/semibold/bold)
- `mb-4` - Space below title
- `text-xl text-orange-500` - Subtitle size and color

### 3. Description (Lines 210-212)

```javascript
<p className="text-xl text-gray-400 leading-relaxed">
  {feature.description}
</p>
```

**Customize:**
- `text-xl` - Text size
- `text-gray-400` - Text color
- `leading-relaxed` - Line height (tight/snug/normal/relaxed/loose)

### 4. Bullet Points (Lines 215-222)

```javascript
<ul className="space-y-3 text-gray-400">
  {feature.bullets.map((bullet, i) => (
    <li key={i} className="flex items-start gap-3">
      <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
      <span>{bullet}</span>
    </li>
  ))}
</ul>
```

**Customize:**
- `space-y-3` - Space between bullets
- `text-gray-400` - Bullet text color
- `w-2 h-2` - Size of orange dot
- `bg-orange-500` - Dot color
- `mt-2` - Vertical position of dot
- `gap-3` - Space between dot and text

### 5. CTA Button (Lines 225-229) - Currently Commented Out

```javascript
<div>
  <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-colors">
    Explore Feature
  </button>
</div>
```

**Customize:**
- `px-8 py-4` - Button padding (horizontal, vertical)
- `bg-orange-500` - Button background color
- `hover:bg-orange-600` - Hover color
- `text-black` - Button text color
- `rounded-lg` - Border radius (sm/md/lg/xl/2xl)

---

## Right Section Components

### 1. Outer Container (Line 233-234)

```javascript
<div className="relative w-full max-w-[1080px] mx-auto">
  <div className="relative bg-linear-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden aspect-680/700">
```

**Customize:**
- `max-w-[1080px]` - Maximum width of the box
- `aspect-680/700` - Width to height ratio (680 wide, 700 tall)
- `rounded-2xl` - Corner roundness (lg/xl/2xl/3xl)
- `border-gray-800` - Border color
- `from-gray-900 to-gray-950` - Gradient background

### 2. Browser Chrome (Lines 236-242)

```javascript
<div className="bg-gray-900/50 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
  <div className="flex items-center gap-2">
    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
  </div>
</div>
```

**Customize:**
- `py-3` - Header height
- `gap-2` - Space between dots
- `w-2.5 h-2.5` - Size of dots
- `bg-gray-700` - Dot color

### 3. Inner Modal Container (Lines 245-246)

```javascript
<div className="p-8">
  <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
```

**Customize:**
- First `p-8` - Outer padding around modal
- Second `p-6` - Inner padding of modal content
- `rounded-xl` - Corner roundness
- `bg-gray-800/50` - Background color with opacity
- `border-gray-700` - Border color

### 4. Progress Dots (Lines 248-254)

```javascript
<div className="flex items-center justify-center gap-2 mb-6">
  <div className={`w-2 h-2 rounded-full ${feature.step === 1 ? 'bg-white' : 'bg-gray-600'}`}></div>
  <div className="flex-1 h-px bg-gray-700 max-w-[50px]"></div>
  <div className={`w-2 h-2 rounded-full ${feature.step === 2 ? 'bg-white' : 'bg-gray-600'}`}></div>
  <div className="flex-1 h-px bg-gray-700 max-w-[50px]"></div>
  <div className={`w-2 h-2 rounded-full ${feature.step >= 3 ? 'bg-white' : 'bg-gray-600'}`}></div>
</div>
```

**Customize:**
- `w-2 h-2` - Size of progress dots
- `bg-white` - Active dot color
- `bg-gray-600` - Inactive dot color
- `max-w-[50px]` - Length of connecting lines
- `mb-6` - Space below progress indicators

### 5. Icon Row (Lines 257-268)

```javascript
<div className="flex items-center justify-center gap-3 mb-6">
  {feature.mockIcons.map((item, i) => (
    <React.Fragment key={i}>
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${getColorClasses(item.color)}`}>
        <item.Icon className="w-7 h-7" />
      </div>
      {i < feature.mockIcons.length - 1 && (
        <div className="flex-1 h-px bg-gray-700 max-w-8"></div>
      )}
    </React.Fragment>
  ))}
</div>
```

**Customize:**
- `gap-3` - Space between icon boxes
- `w-14 h-14` - Size of icon boxes
- `rounded-lg` - Corner roundness
- `w-7 h-7` - Size of icons inside boxes
- `max-w-8` - Length of connecting lines between icons
- `mb-6` - Space below icon row

### 6. Title & Description (Lines 271-275)

```javascript
<h3 className="text-center text-base font-medium mb-1.5">{feature.mockTitle}</h3>
<p className="text-center text-xs text-gray-400 mb-6">
  {feature.mockDescription}
</p>
```

**Customize:**
- `text-base` - Title size (xs/sm/base/lg/xl)
- `font-medium` - Title weight
- `mb-1.5` - Space between title and description
- `text-xs` - Description size
- `text-gray-400` - Description color
- `mb-6` - Space below description

### 7. Button Grid (Lines 278-288)

```javascript
<div className="grid grid-cols-2 gap-3">
  {feature.mockButtons.map((button, i) => (
    <button
      key={i}
      className={`${getButtonColorClasses(button.disabled)} border rounded-lg p-4 transition-all duration-200 flex items-center justify-center gap-2 ${button.disabled ? '' : 'hover:border-orange-500/50'}`}
      disabled={button.disabled}
    >
      <button.icon className="w-5 h-5" />
      <span className="font-medium text-sm">{button.label}</span>
    </button>
  ))}
</div>
```

**Customize:**
- `grid-cols-2` - Number of columns (always 2 for 6 buttons)
- `gap-3` - Space between buttons
- `p-4` - Button padding
- `rounded-lg` - Button corner roundness
- `w-5 h-5` - Icon size inside buttons
- `text-sm` - Button text size
- `gap-2` - Space between icon and text
- `hover:border-orange-500/50` - Hover border color

### 8. Action Buttons (Lines 291-298)

```javascript
<div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-700">
  <button className="text-sm text-gray-400 hover:text-white transition-colors">
    {feature.step > 1 ? 'Back' : 'Skip'}
  </button>
  <button className="text-sm text-gray-400 hover:text-white transition-colors">
    {feature.step < features.length ? 'Continue' : 'Finish'}
  </button>
</div>
```

**Customize:**
- `mt-6 pt-5` - Top margin and padding
- `text-sm` - Text size
- `text-gray-400` - Default text color
- `hover:text-white` - Hover text color
- Change button text logic as needed

### 9. Glow Effects (Lines 303-307)

```javascript
{/* Ambient Glow */}
<div className="absolute inset-0 bg-linear-to-tr from-orange-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>

{/* Outer Glow Effect */}
<div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl -z-10"></div>
```

**Customize:**
- `from-orange-500/5` - Glow color and opacity
- `-inset-4` - How far glow extends beyond box (-2/-4/-8/-12)
- `blur-2xl` - Blur amount (lg/xl/2xl/3xl)
- `rounded-3xl` - Glow shape roundness

---

## Colors & Styling

### Color Functions (Lines 173-183)

```javascript
const getColorClasses = (color) => {
  const colors = {
    orange: "bg-orange-500/10 text-orange-500",
    white: "bg-white/10 text-white"
  };
  return colors[color] || colors.orange;
};
```

**To add more colors:**
```javascript
const colors = {
  orange: "bg-orange-500/10 text-orange-500",
  white: "bg-white/10 text-white",
  blue: "bg-blue-500/10 text-blue-500",      // Add this
  green: "bg-green-500/10 text-green-500",   // Add this
  red: "bg-red-500/10 text-red-500"          // Add this
};
```

### Button States (Lines 185-190)

```javascript
const getButtonColorClasses = (disabled) => {
  if (disabled) {
    return "bg-gray-900/30 border-gray-800 opacity-40 cursor-not-allowed";
  }
  return "bg-gray-900/50 hover:bg-gray-900/80 border-gray-700 hover:border-orange-500/50";
};
```

**Customize:**
- Disabled: `bg-gray-900/30` - Background, `opacity-40` - Transparency
- Active: `bg-gray-900/50` - Default background
- Active Hover: `hover:bg-gray-900/80` - Hover background, `hover:border-orange-500/50` - Hover border

---

## Dimensions & Sizing

### Quick Reference Table

| Component | Current Size | Property | Line |
|-----------|-------------|----------|------|
| Step circle | 48px (w-12 h-12) | Width/Height | 193 |
| Main title | 60px (text-6xl) | Font size | 204 |
| Subtitle | 20px (text-xl) | Font size | 207 |
| Description | 20px (text-xl) | Font size | 210 |
| Bullet dot | 8px (w-2 h-2) | Width/Height | 218 |
| Right box max width | 1080px | Max width | 233 |
| Right box aspect ratio | 680:700 | Aspect ratio | 234 |
| Browser dots | 10px (w-2.5 h-2.5) | Width/Height | 238 |
| Progress dots | 8px (w-2 h-2) | Width/Height | 249 |
| Icon boxes | 56px (w-14 h-14) | Width/Height | 260 |
| Icons inside boxes | 28px (w-7 h-7) | Width/Height | 261 |
| Button icon | 20px (w-5 h-5) | Width/Height | 285 |
| Button text | 14px (text-sm) | Font size | 286 |

---

## Common Customizations

### 1. Change Overall Color Scheme

Replace all instances of:
- `orange-500` with `your-color-500`
- `orange-600` with `your-color-600`

### 2. Make Box Bigger/Smaller

Change line 233:
```javascript
max-w-[1080px]  // Change this number (current: 1080px)
```

Change line 234:
```javascript
aspect-680/700  // Change ratio (width/height)
```

### 3. Add More Buttons (Currently 6)

In features array, add more button objects:
```javascript
mockButtons: [
  // ... existing 6 buttons
  { label: "Button 7", icon: IconName, active: true },
  { label: "Button 8", icon: IconName, active: true }
]
```

Then change grid columns (line 278):
```javascript
grid-cols-2  // Change to grid-cols-3 or grid-cols-4
```

### 4. Change Number of Features

Add or remove objects from the `features` array (lines 4-171). The component will automatically adjust.

### 5. Remove Progress Dots

Delete or comment out lines 248-254

### 6. Remove Icon Row

Delete or comment out lines 257-268

### 7. Make Text Bigger/Smaller

Use Tailwind size classes:
- `text-xs` (12px)
- `text-sm` (14px)
- `text-base` (16px)
- `text-lg` (18px)
- `text-xl` (20px)
- `text-2xl` (24px)
- `text-3xl` (30px)
- `text-4xl` (36px)
- `text-5xl` (48px)
- `text-6xl` (60px)

### 8. Change Spacing

Padding/Margin classes:
- `p-2` = 8px padding
- `p-4` = 16px padding
- `p-6` = 24px padding
- `p-8` = 32px padding
- `m-2` = 8px margin
- `m-4` = 16px margin
- `gap-2` = 8px gap
- `gap-4` = 16px gap

### 9. Change Border Radius

- `rounded-sm` = 2px
- `rounded-md` = 6px
- `rounded-lg` = 8px
- `rounded-xl` = 12px
- `rounded-2xl` = 16px
- `rounded-3xl` = 24px
- `rounded-full` = 9999px (circle)

---

## Tips for Making Changes

1. **Test One Change at a Time**: Make small changes and save to see the effect
2. **Use Browser DevTools**: Inspect elements to see exact computed styles
3. **Keep Consistency**: Use the same spacing/sizing patterns throughout
4. **Backup First**: Copy the file before major changes
5. **Use Variables**: Consider creating CSS variables for commonly used values
6. **Mobile First**: Test changes on mobile sizes (< 768px)

---

## Need Help?

If you want to make a specific change, tell me:
1. **What** you want to change (e.g., "button size")
2. **Where** it is (left section, right section, specific component)
3. **How** you want it to look (bigger, smaller, different color, etc.)

I'll give you the exact line numbers and code to change!
