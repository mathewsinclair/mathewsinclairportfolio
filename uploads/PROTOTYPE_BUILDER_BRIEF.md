# HMRC Self Assessment Prototype Brief

## Project Overview
Build a functional interaction design prototype demonstrating how clear messaging and confirmation flows can reduce user anxiety during HMRC Self Assessment tax return submission.

**Target User:** Self-employed individuals filing tax returns via third-party software (e.g., Sage)  
**Platform:** HMRC online submission journey  
**Design System:** GDS (GOV.UK Design System)  
**Scope:** Two key screens in the submission flow

---

## The Problem (Research-Backed)

### User Friction Points
Users experience emotional friction when submitting Self Assessment returns, specifically during re-authentication:

1. **Confusion**: User authorized via secure OAuth earlier. Why enter credentials again? Mental model mismatch.
2. **Distrust**: No explanation of why raw credentials are needed. User questions if it's safe.
3. **Uncertainty**: No clear confirmation that submission actually worked. Users call HMRC to check.
4. **Anxiety**: Process feels opaque. User doesn't understand state or next steps.

### Research Evidence
- **HMRC Customer Experience & Perceptions Survey 2025** (Verian, fieldwork Sept-Nov 2025):
  - Only 49% find HMRC online services easy to use
  - Only 36% trust the system prevents mistakes
  - Qualitative interviews reveal emotional difficulty: "been in tears" over returns
  - Recurring theme: "lack of clear confirmation that submission went through"

- **HMRC Research Report 743: Customer Perceptions of Personalised Digital Prompts** (NatCen, Jan 2024):
  - Generic prompts ignored by experienced users
  - Specific prompts perceived as accusatory, triggering stress
  - No in-form mechanism to dispute incorrect pre-filled data

### Where Friction Lives in the Flow
Current HMRC submission flow:
1. User completes tax return in third-party software
2. Clicks "Submit to HMRC"
3. Software redirects to HMRC login
4. User enters Government Gateway credentials
5. **← FRICTION POINT: User doesn't understand WHY or if it's safe**
6. Submission happens
7. **← FRICTION POINT: No clear confirmation; user unsure if it worked**

---

## The Solution: Messaging + Confirmation Layer

### Interaction Design Approach
Fix the friction by addressing:
1. **Information scent** – User understands what's happening and why
2. **Trust signals** – Clear reassurance about security
3. **State feedback** – Explicit confirmation of success
4. **Mental model alignment** – Explain the difference between OAuth (earlier) and credential submission

### Two Screens to Build

#### Screen 1: "Verify Your Identity to Submit"
**Purpose:** Explain WHY credentials are needed; build trust before asking for password

**Key messaging:**
- "To submit your Self Assessment tax return to HMRC, we need to verify you're the account holder."
- "You'll enter your Government Gateway password here — the same password you used to authorize Sage earlier."

**Trust-building elements:**
- Notification banner: "This connection is secure"
  - ✓ Your password is encrypted
  - ✓ This connection is HMRC-approved
  - ✓ We only use this to verify submission (18-month connection)

**Help section (expandable):**
- Explain the difference: OAuth (earlier, secure, scoped) vs. credential submission (this step, also secure)
- Plain language explanation: "Earlier, you authorized Sage using a secure method called OAuth... Now, to submit, we need to verify you're the account holder."

**Form elements:**
- Government Gateway username (pre-filled, disabled)
- Government Gateway password (input field)
- Button: "Verify and submit"

**GDS Components to use:**
- `govuk-heading-xl` for main heading
- `govuk-notification-banner` for reassurance box
- `govuk-details` for expandable help
- `govuk-form-group` for username/password fields
- `govuk-input` for text inputs
- `govuk-button` for submit

---

#### Screen 2: "Submission Successful"
**Purpose:** Crystal-clear confirmation; reduce anxiety about whether it worked

**Key messaging:**
- Success banner: "✓ Your tax return has been submitted"

**Submission reference box:**
- Bold: "SA2026-ABC123-XYZ"
- Timestamp: "Submitted: 14 July 2026 at 14:32"
- Copy instruction: "Keep this reference for your records."

**What happens next section:**
- Clear timeline: "HMRC will:"
  - Send you a confirmation email within 2 hours
  - Process your return within 4–6 weeks
  - Notify you of any issues or next steps
- Reassurance: "You can check your submission status in your HMRC account at any time."

**Navigation:**
- Button: "Go to my HMRC account"
- This links back to Screen 1 (or could link to a dashboard showing submission history)

**GDS Components to use:**
- `govuk-notification-banner govuk-notification-banner--success` for success message
- Custom box styling for reference number (green border, light background)
- `govuk-list govuk-list--bullet` for next steps
- `govuk-button` for navigation

---

## Design Principles

### Interaction Design Focus (Not Visual Design)
This prototype demonstrates interaction design thinking, not visual polish. Prioritize:

1. **Clarity over beauty** – Message trumps styling
2. **User mental models** – Explain the "why" of each step
3. **State visibility** – User always knows where they are and what happens next
4. **Accessibility** – Use semantic HTML, ARIA labels, keyboard navigation
5. **Consistency** – Use GDS components as-is; no custom styling

### Accessibility Requirements
- All form fields labeled correctly
- Success message announced to screen readers
- Expandable help is keyboard-accessible
- Color is not the only signal (✓ check marks, not just green)
- Text contrast meets WCAG AA

### User Research Insight
Sage's implementation shows that good messaging ("HMRC-approved system") reduces friction even with context-switching. Your prototype should show that clear, reassuring messaging is the primary interaction design fix.

---

## Technical Specification

### Technology Stack
- **HTML5** for structure
- **GDS CSS** (via CDN: https://cdn.jsdelivr.net/npm/govuk-frontend@5.4.0/dist/govuk-frontend.min.css)
- **GDS JavaScript** (via CDN: same version)
- No build tools required; works in any browser

### File Structure
```
hmrc-prototype/
├── screen-1-verify-identity.html
├── screen-2-success.html
└── README.md (optional: document the prototype)
```

### Navigation Flow
- Screen 1: Contains button linking to Screen 2 (href="screen-2-success.html")
- Screen 2: Contains button linking back to Screen 1 (href="screen-1-verify-identity.html")
- This allows user to walk through the flow

### Browser Compatibility
- Modern browsers (Chrome, Safari, Firefox, Edge)
- Mobile-responsive (use GDS grid system: `govuk-grid-row`, `govuk-grid-column-two-thirds`)

---

## Interaction Design Rationale

### Why This Fixes the Friction

**Before (Current HMRC flow):**
- User asked for credentials with no explanation
- No confirmation that submission worked
- User anxiety: "Did it go through?"

**After (Your prototype):**
- User understands WHY credentials needed (explained on Screen 1)
- User feels reassured it's safe (notification banner with security signals)
- User gets explicit confirmation (Screen 2 success message + reference number)
- User knows next steps (clear timeline on Screen 2)

**Result:** Reduced anxiety, increased trust, lower support burden (fewer "did it work?" calls to HMRC)

---

## Success Criteria

Your prototype successfully demonstrates:
- ✓ Two-screen flow using GDS components
- ✓ Clear, accessible messaging addressing the identified friction
- ✓ State clarity (user knows submission was successful)
- ✓ Trust-building language (explains security, HMRC-approved)
- ✓ Accessible form inputs and navigation
- ✓ Real user research (HMRC reports) backing the design decisions

---

## Documentation Requirements

When complete, document:
1. **Problem statement** – What user friction did you identify?
2. **Research basis** – Which HMRC research reports support this?
3. **Solution approach** – Why these two screens? What interaction patterns did you use?
4. **Design decisions** – Why did you word it this way? Why this messaging order?
5. **Accessibility** – How does the prototype work for different users (screen readers, keyboard navigation, mobile)?
6. **Next steps** – How would you test this with real users?

---

## Deliverables

1. Two working HTML files (Screen 1 & Screen 2)
2. CASE_STUDY.md documenting the problem, research, solution, and design thinking
3. This brief (PROTOTYPE_BUILDER_BRIEF.md)
4. Research notes linking to HMRC reports and Sage observations

**Ready to build. Questions?**
