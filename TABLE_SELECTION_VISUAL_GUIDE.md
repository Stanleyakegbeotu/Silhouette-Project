# Table Row Selection & Drag-to-Scroll - Visual Guide
**Step-by-Step Examples & Demonstrations**

---

## 🖱️ BASIC INTERACTION EXAMPLES

### Example 1: Select a Row

**Before Click:**
```
Inventory Page - Test List

┌─────────────────────────────────────┐
│ Test Name    │ Category │ Price    │
├─────────────────────────────────────┤
│ Blood Test   │ LAB      │ ₦5,000   │  ← User clicks here
│ CT Scan      │ CAR      │ ₦8,000   │
│ X-Ray        │ RAD      │ ₦3,000   │
└─────────────────────────────────────┘
```

**After Click:**
```
┌─────────────────────────────────────┐
│ Test Name    │ Category │ Price    │
├─────────────────────────────────────┤
┃ Blood Test   │ LAB      │ ₦5,000   ┃  ← Row is selected!
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  ↑ Blue background + left border
│ CT Scan      │ CAR      │ ₦8,000   │
│ X-Ray        │ RAD      │ ₦3,000   │
└─────────────────────────────────────┘
```

---

### Example 2: Drag to Scroll Right

**Initial State (Row Selected):**
```
Patient Records Page

┌──────────────────────────────────────┐
│ Patient Name │ PID │ Services │ Total│
├──────────────────────────────────────┤
┃ John Doe     │ P001│ Blood... │ 5000 ┃  ← Selected
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**User drags right (🖱️ →):**
```
Hold mouse button, drag right
       ↓
┌──────────────────────────────────────┐
│ │ Status │ Referred By │ Staff Name  │  ← More columns appear
├──────────────────────────────────────┤
┃ │ PAID   │ Dr. Smith   │ John        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
(table scrolled left to reveal right columns)
```

**User drags further right (🖱️ →→→):**
```
┌──────────────────────────────────────┐
│ Payment │ Date │ Time │ Actions      │  ← Even more columns!
├──────────────────────────────────────┤
┃ Full    │2026-│ 2:30 │ Print Edit   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

### Example 3: Drag to Scroll Left

**Current State (Scrolled Right):**
```
┌──────────────────────────────────────┐
│ Payment │ Date │ Time │ Actions      │
├──────────────────────────────────────┤
┃ Full    │ 2026 │ 2:30 │ Print Edit   ┃  ← Selected row
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**User drags left (🖱️ ←):**
```
Hold mouse button, drag left
       ↓
┌──────────────────────────────────────┐
│ Status │ Referred By │ Staff Name    │
├──────────────────────────────────────┤
┃ PAID   │ Dr. Smith   │ John          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
(table scrolled right to show middle columns)
```

**User drags further left (🖱️ ←←←):**
```
┌──────────────────────────────────────┐
│ Patient Name │ PID │ Services │ Total│
├──────────────────────────────────────┤
┃ John Doe     │ P001│ Blood... │ 5000 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
(back to original position)
```

---

## 📊 REAL-WORLD PAGE EXAMPLES

### Inventory Page

**Overview:**
```
┌─────────────────────────────────────────────────────────┐
│ Test/Service Management                                 │
├─────────────────────────────────────────────────────────┤
│ Test Name      Category  Price  Actions                 │
├─────────────────────────────────────────────────────────┤
│ ┌─ Blood Panel LAB      5000   Edit Delete ┐           │
│ │                                          │ ← Click to select
│ └──────────────────────────────────────────┘           │
│ │ Complete Blood Count             LAB    │ ← Can then drag
│ │ Urinalysis                      LAB    │  to see more
│ │ Lipid Panel                     LAB    │  details/options
│ │ ...                                    │
└─────────────────────────────────────────────────────────┘
```

**After Selection & Drag Right:**
```
Blue highlight shows selection
As user drags right:
  Original columns scroll off left
  Right-side action buttons come into full view
  User can now click Edit/Delete without scrollbar
```

---

### History Page (Admin Only)

**Overview:**
```
┌──────────────────────────────────────────────────────────┐
│ Application History Log                                  │
├──────────────────────────────────────────────────────────┤
│ Timestamp          User    Role    Action                │
├──────────────────────────────────────────────────────────┤
│ 2026-01-09 10:30  Admin   Admin   CREATE_BILLING      │
│ 2026-01-09 10:28  Staff1  User    UPDATE_INVENTORY    │ ← Select
│ 2026-01-09 10:25  Admin   Admin   DELETE_RECORD       │
│ ...                                                      │
└──────────────────────────────────────────────────────────┘
```

**Select Row & Drag Right:**
```
User clicks on 2nd row (CREATE_BILLING)
  ↓
Row shows blue highlight
  ↓
User drags right
  ↓
Details column becomes visible
Row stays selected with blue highlight
User can now see full action details
```

---

## 🎨 VISUAL STATE PROGRESSION

### Row State Lifecycle

```
STATE 1: NORMAL
┌─────────────────────────┐
│ Data  │ More Data │ Btn │  ← Regular appearance
└─────────────────────────┘

         ↓ User hovers

STATE 2: HOVER
┌─────────────────────────┐
│ Data  │ More Data │ Btn │  ← Subtle background change
└─────────────────────────┘  (slightly darker)

         ↓ User clicks

STATE 3: SELECTED
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Data  │ More Data │ Btn ┃  ← Blue background + border
┗━━━━━━━━━━━━━━━━━━━━━━━┛

    ↓ (stays selected)      ↓ (user drags)

STATE 3a: SELECTED & HOVER  STATE 3b: SELECTED & DRAGGING
(Same as selected)          (Same as selected, plus scroll)

         ↓ User clicks another row

STATE 1: NORMAL (new row selected instead)
```

---

## 🔄 COMPLETE INTERACTION SEQUENCE

### Full Workflow Example

**Step 1: View Page with Multiple Tables**
```
Analytics Page with 6 tables visible
Each table shows first 10 rows maximum
Some columns are cut off on the right
```

**Step 2: User Clicks on a Row**
```
User: "I want to see more details for this PR agent"
         ↓
     Click on row
         ↓
Row shows blue highlight
Left border turns blue
```

**Step 3: User Drags to Scroll**
```
User: "Let me see the referral numbers"
         ↓
Hold left mouse button
Drag mouse to the right
         ↓
Table scrolls left
More columns appear on right
Referral numbers now visible
```

**Step 4: User Sees All Information**
```
Now can see:
- Agent name (left)
- Phone number (middle)
- Referral count (right)
- Commission amount (far right)
All while row stays highlighted
```

**Step 5: User Selects Different Row**
```
User: "Now let me check another agent"
         ↓
Click on different row
         ↓
Previous row loses highlight
New row gets blue highlight
Table scrolls back to original position
Can now drag new row
```

---

## 💡 INTERACTION PATTERNS

### Pattern 1: Quick Selection
```
Click → Visual feedback → Move to next row
Fast, single action
```

### Pattern 2: Detailed Exploration
```
Click → Hold → Drag right → Release → Click next row
Detailed examination of row content
```

### Pattern 3: Rapid Browsing
```
Click → Glance → Click next → Glance → Click next
Quickly scan through multiple rows
```

### Pattern 4: Data Entry
```
Click → Scroll to Actions → Click Edit button → Edit
Efficient workflow for data modification
```

---

## 🎯 PAGE-SPECIFIC EXAMPLES

### Inventory Management
```
Visual Flow:
Click Test Name → Select row → Drag right → See Edit/Delete buttons → Click Edit
Result: Edit test details with full row visible
```

### PR Management
```
Visual Flow:
Click PR Agent → Select row → Drag right → See Hospital/Actions → View hospitals
Result: See all PR details and manage assignments
```

### Patient Records
```
Visual Flow:
Click Patient → Select row → Drag right → See all details → Click Print
Result: Print complete patient record with all information visible
```

### Analytics
```
Visual Flow:
Click PR Agent → Select row → Drag right → See commission amount → Verify data
Result: Detailed analytics view of agent performance
```

---

## ⚠️ EDGE CASES & SPECIAL SITUATIONS

### Situation 1: Click on Button in Row
```
Row has Edit button
User clicks Edit button
  ↓
Button click processed normally
Row NOT selected
Edit action executes
(No selection highlight appears)
```

### Situation 2: Click on Link in Row
```
Row has patient name link
User clicks patient name
  ↓
Link processed normally
Patient details open
Row NOT selected
(No selection highlight appears)
```

### Situation 3: Multiple Tables on Page
```
Analytics page with 6 tables
User selects row in table 1
  ↓
Table 1 row highlighted
User selects row in table 3
  ↓
Table 1 row loses highlight (independent)
Table 3 row gets highlight (independent)
No interference between tables
```

### Situation 4: Scroll to Table Edge
```
User drags table right until it can't scroll more
  ↓
Table stops at edge
Drag continues but table doesn't move
When user releases, everything returns to normal
```

---

## 📱 RESPONSIVE BEHAVIOR

### Mobile Device (Phone)
```
Table is narrow, many columns cut off

User taps row → Row highlights

User holds & drags right → Table scrolls to reveal columns

Works with touch scrolling gesture
```

### Tablet
```
Wider screen, some columns visible

User taps row → Highlights

User drags to see more → Smooth horizontal scroll

Excellent for viewing multiple columns
```

### Desktop
```
Wide screen, good column visibility

User clicks row → Smooth highlight

User drags → Table responds immediately

Optimal experience for detailed exploration
```

### 19" Square Monitor
```
1280×1024 resolution, many columns fit

User clicks row → Instant highlight

User drags left/right → Easy column navigation

Perfect for this specific use case
```

---

## 🎓 TEACHING USERS

### For New Users

**Show Them:**
1. "See these table rows? Click any row to highlight it"
2. "When a row is highlighted blue, you can drag it"
3. "Hold your mouse button and drag right to see more columns"
4. "Drag left to go back"
5. "Click a different row to select a new one"

### Key Teaching Points
- ✅ Visual feedback is clear (blue highlight)
- ✅ Interaction is familiar (click and drag)
- ✅ Works like other professional apps
- ✅ No special keyboard shortcuts needed
- ✅ Discoverable through normal usage

---

## 🎉 COMPLETE DEMONSTRATION

### Full App Experience

```
User opens Inventory page
  ↓
Sees table of tests with 5 visible columns
  ↓
Clicks on "Complete Blood Count" row
  ↓
Row background turns light blue
Left border turns dark blue
  ↓
User holds mouse and drags right
  ↓
Table scrolls, revealing Price and Action columns
  ↓
User can now see:
  ✓ Test Name (left - from before)
  ✓ Category (middle)
  ✓ Price (right - just appeared)
  ✓ Edit button (far right - now visible)
  ↓
User clicks Edit button (while still seeing full row)
  ↓
Edit dialog opens
Test details are ready for modification
  ↓
User completes edit and saves
  ↓
Back to inventory table
  ↓
User can drag another row or select a new one
```

---

## ✨ EXPECTED OUTCOMES

### What Users Will Experience
1. ✅ Intuitive table interaction
2. ✅ Clear visual feedback for selections
3. ✅ Smooth horizontal scrolling
4. ✅ Easy access to all table columns
5. ✅ Professional, modern interface

### Benefits They'll Notice
1. ✅ Faster data exploration
2. ✅ Better table navigation
3. ✅ Cleaner interface (no scrollbars blocking buttons)
4. ✅ More efficient workflows
5. ✅ Professional app feel

---

**Visual Guide Complete** ✅

Use these examples to understand and explain the feature to other users.
