# Shadow Effects - Visual Guide & Examples
**Quick Visual Reference for All Shadow Effects Applied**

---

## 📸 INPUT FIELD VISUAL EXAMPLES

### Default Input Field
```
┌─────────────────────────────────────┐
│ Patient Name                        │  ← Subtle shadow underneath
├─────────────────────────────────────┤
│  Enter patient full name            │
└─────────────────────────────────────┘
      ▼ ▼ ▼  subtle shadow
```
**Shadow:** `0 2px 8px rgba(0, 0, 0, 0.08)`

### Focused Input Field (User Clicks)
```
╔════════════════════════════════════╗
║ Patient Name                       ║  ← Blue focus ring
╠════════════════════════════════════╣
║ | cursor here                      ║  ← Darker shadow
║ |                                  ║
║ |                                  ║
╚════════════════════════════════════╝
    ▼ ▼ ▼ ▼ enhanced shadow (blue tint)
```
**Shadow:** `0 0 0 3px rgba(14, 74, 124, 0.1), 0 2px 12px rgba(0, 0, 0, 0.12)`

---

## 🔘 BUTTON VISUAL EXAMPLES

### Primary Button (Blue) - Default State
```
┌─────────────────┐
│ Next: Step 2    │  ← Clear shadow underneath
└─────────────────┘
    ▼ ▼ ▼ ▼
  blue shadow
```
**Shadow:** `0 4px 12px rgba(14, 74, 124, 0.15)`

### Primary Button - Hover State
```
    ↑ ↑ ↑ ↑ Button lifts up 2px
┌─────────────────┐
│ Next: Step 2    │  ← Darker, stronger shadow
└─────────────────┘
  ▼ ▼ ▼ ▼ ▼ ▼
  stronger blue shadow
```
**Shadow:** `0 6px 16px rgba(14, 74, 124, 0.2)`  
**Transform:** `translateY(-2px)`

### Primary Button - Click/Active State
```
┌─────────────────┐
│ Next: Step 2    │  ← Button pressed down
└─────────────────┘
  ▼ ▼ subtle shadow
  (returned to normal position)
```
**Shadow:** `0 2px 8px rgba(14, 74, 124, 0.15)`  
**Transform:** `translateY(0)`

---

### Secondary Button (Gray) - Default State
```
┌─────────────────┐
│ Back            │  ← Subtle shadow
└─────────────────┘
  ▼ ▼ subtle shadow
```
**Shadow:** `0 2px 8px rgba(0, 0, 0, 0.06)`

### Secondary Button - Hover State
```
  ↑ ↑ Button lifts up
┌─────────────────┐
│ Back            │  ← More pronounced shadow
└─────────────────┘
  ▼ ▼ ▼ ▼ gray shadow
```
**Shadow:** `0 4px 12px rgba(0, 0, 0, 0.08)`  
**Transform:** `translateY(-2px)`

### Secondary Button - Click/Active State
```
┌─────────────────┐
│ Back            │  ← Button pressed in
└─────────────────┘
  ▼ minimal shadow
```
**Shadow:** `0 1px 4px rgba(0, 0, 0, 0.06)`  
**Transform:** `translateY(0)`

---

## 📋 BILLING PAGE EXAMPLES

### Step 1 - Patient Information Card
```
╔═══════════════════════════════════════════╗
║ Patient Information                       ║
║                                           ║
║ Patient Name *                            ║
║ ┌─────────────────────────────────────┐  ║
║ │                                     │  ║ ← Shadow on input
║ └─────────────────────────────────────┘  ║
║   ▼ ▼ ▼ subtle shadow                   ║
║                                           ║
║ Contact Number                            ║
║ ┌─────────────────────────────────────┐  ║
║ │                                     │  ║ ← Shadow on input
║ └─────────────────────────────────────┘  ║
║   ▼ ▼ ▼ subtle shadow                   ║
║                                           ║
║ ┌──────────────────┐  ┌───────────────┐ ║
║ │ Next: Select     │  │ Cancel        │ ║ ← Shadows on buttons
║ │ Services         │  │               │ ║
║ └──────────────────┘  └───────────────┘ ║
║   ▼ ▼ ▼ ▼ blue      ▼ ▼ gray         ║
╚═══════════════════════════════════════════╝
```

### Step 2 - Services Selection Card
```
╔═══════════════════════════════════════════╗
║ Select Services                           ║
║                                           ║
║ ┌─────────────────────────┐  ┌─────────┐║
║ │ Type test name...       │  │Browse...││ ← Shadows on all
║ └─────────────────────────┘  └─────────┘║
║   ▼ ▼ ▼ input shadow        ▼ ▼ button ║
║                                           ║
║ Discount Amount                           ║
║ ┌─────────────────────────────────────┐  ║
║ │                                     │  ║ ← Shadow on input
║ └─────────────────────────────────────┘  ║
║   ▼ ▼ ▼ shadow                          ║
║                                           ║
║ ┌──────────────────┐  ┌───────────────┐ ║
║ │ ← Back           │  │ Finalize      │ ║
║ └──────────────────┘  │ Payment       │ ║
║                       │ Confirm       │ ║
║                       │               │ ║
║                       └───────────────┘ ║
║   ▼ ▼ secondary    ▼ ▼ ▼ ▼ primary   ║
╚═══════════════════════════════════════════╝
```

### Step 3 - Payment Information Card
```
╔═══════════════════════════════════════════╗
║ Payment Information                       ║
║                                           ║
║ Payment Method *                          ║
║ ┌─────────┐ ┌─────────┐ ┌─────────┐    ║
║ │  💵     │ │  💳     │ │ 🏦      │    ║
║ │ Cash    │ │ POS     │ │Transfer │    ║
║ └─────────┘ └─────────┘ └─────────┘    ║
║   (shadow effect on hover)               ║
║                                           ║
║ Amount Paid (for Installment)             ║
║ ┌─────────────────────────────────────┐  ║
║ │                                     │  ║ ← Shadow on input
║ └─────────────────────────────────────┘  ║
║   ▼ ▼ ▼ subtle shadow                   ║
║                                           ║
║ ┌─────────────────┐  ┌──────────────┐  ║
║ │ ← Back          │  │ Complete &   │  ║
║ │                 │  │ Print Receipt│  ║
║ └─────────────────┘  └──────────────┘  ║
║   ▼ ▼ secondary  ▼ ▼ ▼ primary       ║
╚═══════════════════════════════════════════╝
```

---

## 🎬 ANIMATION SEQUENCE

### Button Interaction Flow
```
Default State        Hover State          Click/Active State
┌──────────┐        ┌──────────┐         ┌──────────┐
│ BUTTON   │   →    │  BUTTON  │    →   │  BUTTON  │
└──────────┘        └──────────┘        └──────────┘
▼▼▼▼ shadow         ▼▼▼▼▼▼ darker        ▼▼ light shadow
                    ↑ lifts up           ↓ pressed down
                    (translateY -2px)    (translateY 0)
                    
Duration: 0.2s smooth transition between each state
```

### Input Focus Progression
```
Unfocused            Click Inside         Type Text
┌──────────┐         ┌──────────┐         ┌──────────┐
│          │    →    │ | cursor │    →   │ text...  │
└──────────┘         └──────────┘        └──────────┘
▼▼▼ normal shadow    ▼▼▼▼ enhanced      ▼▼▼▼ enhanced
                     ring + dark shadow  ring + dark shadow
                     (blue focus ring)   (maintains)
```

---

## 🎨 COLOR SPECIFICATIONS

### Shadow Colors

#### Input Fields
- **Default:** Pure black at 8% opacity → Very subtle
- **Focus:** Pure black at 12% opacity → Slightly more visible

#### Primary Buttons (Blue)
- **Default:** Blue (#0E4A7C) tinted at 15% opacity → Professional depth
- **Hover:** Blue (#0E4A7C) tinted at 20% opacity → More prominent
- **Active:** Blue (#0E4A7C) tinted at 15% opacity → Returned to default

#### Secondary Buttons (Gray)
- **Default:** Pure black at 6% opacity → Very subtle
- **Hover:** Pure black at 8% opacity → Slightly more visible
- **Active:** Pure black at 6% opacity → Returned to default

---

## 📐 SHADOW DISTANCE & BLUR

| Element | Type | X-Offset | Y-Offset | Blur Radius |
|---------|------|----------|----------|-------------|
| Input | Normal | 0px | 2px | 8px |
| Input | Focus | 0px | 2px | 12px |
| Primary Button | Normal | 0px | 4px | 12px |
| Primary Button | Hover | 0px | 6px | 16px |
| Primary Button | Active | 0px | 2px | 8px |
| Secondary Button | Normal | 0px | 2px | 8px |
| Secondary Button | Hover | 0px | 4px | 12px |
| Secondary Button | Active | 0px | 1px | 4px |

---

## ⚡ TRANSITION TIMING

All shadow changes and animations use:
- **Duration:** 0.2 seconds
- **Timing Function:** Linear (uniform speed)
- **Trigger:** Hover, Focus, Active states

This creates a smooth, professional feel without being slow or sluggish.

---

## 🔍 WHAT TO LOOK FOR

### In the Billing Page
1. ✅ Patient Name, Contact inputs have subtle shadows
2. ✅ Service Search field has shadow
3. ✅ Discount input has shadow
4. ✅ Amount Paid field (Step 3) has shadow
5. ✅ All buttons (Next, Finalize, Back, Cancel) have blue/gray shadows
6. ✅ Buttons lift up when you hover over them
7. ✅ Shadow gets stronger on hover
8. ✅ Buttons return to normal when you click

### Across the Entire App
1. ✅ Every form field has a subtle shadow
2. ✅ Every button has a shadow
3. ✅ Consistent shadow effects everywhere
4. ✅ Smooth hover animations
5. ✅ Professional, modern appearance

---

## 🎯 BEFORE & AFTER COMPARISON

### BEFORE (No Shadows)
```
[Input Field]           [Button]
│ ← Flat appearance      │ ← Unclear if clickable
│ ← No visual depth      │ ← Same on hover
│ ← Blends with bg       │ ← No feedback
```

### AFTER (With Shadows)
```
[Input Field]           [Button]
    ▼ ▼ ▼                   ▼ ▼ ▼ ▼
    ↑ ← Clear depth         ↑ ← Obvious clickable
    ↑ ← Stands out          ↑ ← Lifts on hover
    ↑ ← Professional        ↑ ← Interactive feedback
```

---

## 📱 RESPONSIVE BEHAVIOR

Shadows work perfectly on:
- ✅ Mobile phones (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)
- ✅ Large monitors (1920px+)
- ✅ 19" square monitors (1280×1024)

The shadow effects scale proportionally and remain visible on all screen sizes.

---

## ✨ FINAL RESULT

The application now has:
- **Professional appearance** with standard shadow effects
- **Clear visual hierarchy** between primary and secondary buttons
- **Interactive feedback** that responds to user actions
- **Consistent styling** across the entire application
- **Smooth animations** that enhance user experience

All achieved through global CSS changes with zero impact on HTML or JavaScript structure.

---

**Visual Implementation Status: COMPLETE ✅**
