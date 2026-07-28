# My Design Process: HMRC Case Study

## Starting Point: Ambitious vs. Realistic

I initially wanted to redesign HMRC's entire authentication architecture—make it use OAuth for both data retrieval AND submission. That felt like "real" interaction design.

But then I realized: **I was designing for the system, not the user.**

The real friction isn't technical. It's emotional. Users don't care about OAuth vs. raw credentials. They care about: "Is this safe? Will it work? What happens now?"

That pivot changed everything.

---

## My Friction Points (Walking the Flow Myself)

### 1. The System Architecture is Opaque
I read the HMRC developer guide and couldn't understand when OAuth ended and credential submission began. The flow description says "Link Software" as one step, but actually uses two different authentication methods.

**Why this matters:** If I struggled to understand the flow from official documentation, users absolutely will too. The system doesn't make its own structure visible to users.

**Interaction design insight:** The problem isn't just UX. It's information architecture. Users can't see the mental model the system operates on.

---

### 2. No Clear Mental Model Diagram Existed
I had to piece together the flow from:
- Citizen-facing flowchart (register → get UTR → gather info → submit)
- Developer documentation (OAuth for data retrieval)
- Sage KB article (raw credentials for submission)
- Agent onboarding guide (5-step setup)

All from different sources. Users experience this fragmentation too—they don't get a unified picture upfront.

**Interaction design insight:** Without a clear model, users can't predict what happens next or why they're being asked to do something. No information scent.

---

### 3. The Credential Submission Step Was Vague
HMRC docs say "users authenticate to submit" but don't explain:
- Do users enter credentials once and it's stored?
- Do they enter them each submission?
- Can they revoke access later?
- Is this the same password they just used, or different?

**Why this matters:** This is the CORE friction point, and even the documentation doesn't explain it clearly.

**Interaction design insight:** The system doesn't communicate its own security model. Users are left guessing about a critical step.

---

### 4. Documentation Assumes Technical Knowledge
Terms used without explanation:
- "Document Submission Protocol" (technical, no user translation)
- "OAuth 2.0 grant authority flow" (jargon, no context)
- "Scoped token" vs. "raw credentials" (no explanation of why it matters)

**Why this matters:** Users experience jargon without context. They feel lost even when following official guidance.

**Interaction design insight:** There's a gap between how the system describes itself (technical) and how users need to understand it (human terms).

---

### 5. Agent Journey Complexity Stays Hidden
The five steps (agent code → agent services account → client account → client SA registration → authorization) don't map clearly in docs. It's unclear:
- Which steps the agent vs. client do
- Where they're stuck if one step fails
- Whether both need separate accounts

**Why this matters:** Multi-party flows create drop-off risk. If neither party knows where the blocker is, they give up.

**Interaction design insight:** No status model. Users can't see progress or understand why they're stuck.

---

## The Realization: I Can't Design a Solution Without Experiencing Friction

I spent time reading flows, watching YouTube walkthroughs, reading Sage's KB article. And I got confused. A lot.

**My confusion IS the research data.**

The gaps I noticed:
- System transparency
- Mental models
- Information scent
- State visibility
- Jargon without translation

...are the exact gaps real users hit.

---

## The Pivot: From Architecture to Messaging

**Original approach:** Redesign dual authentication (use OAuth for both steps)
- Ambitious
- Structural
- Required HMRC to rebuild their system

**Realized problem:** That's not where user friction lives

**New approach:** Design the messaging & confirmation layer (explain why, build trust, confirm success)
- Realistic
- Directly addresses emotional friction
- Can be implemented in current HMRC system
- Proven to work (Sage's messaging reduces friction despite same technical flow)

**Why this pivot matters:** As an interaction designer, I should design for users, not systems. And users don't need OAuth to understand. They need clarity and reassurance.

---

## What Sage Taught Me

I watched a YouTube walkthrough of Sage's HMRC integration. Sage does the exact same thing HMRC does—OAuth for data, credentials for submission. Same context-switching, same technical flow.

**But Sage's messaging makes it feel safe:**
- "HMRC-approved system"
- "Grant Sage authority" (sounds controlled, not scary)
- Clear confirmation when linking works

**Observation:** The technical flow isn't the problem. The lack of reassuring messaging is.

This proved my pivot was right. Users don't need a technical redesign. They need better communication about what's already happening.

---

## My Design Decisions (And Why)

### Screen 1: Explanation Before Asking for Credentials

**Decision:** Show a full explanation page before asking for password

**Why:** Users encounter the password field with no context. They don't know:
- Why they're being asked again
- Is this safe?
- What happens with their password?

**Interaction design thinking:** Reduce cognitive load. Prepare the user mentally before requesting sensitive information.

---

### Screen 1: The "This Connection is Secure" Banner

**Decision:** Explicit reassurance with checkmarks

**Why:** Users don't trust forms asking for passwords. They need proof:
- ✓ Your password is encrypted
- ✓ This connection is HMRC-approved
- ✓ We only use this to verify submission

**Interaction design thinking:** Use specific, concrete reassurances. Not generic ("it's secure"). Specific ("HMRC-approved, 18-month connection").

---

### Screen 1: Expandable "Why Do We Need This?" Section

**Decision:** Let users choose to learn more

**Why:** Some users want to understand the technical difference (OAuth vs. credentials). Others just want to submit. Let both self-serve.

**Interaction design thinking:** Don't force information on everyone. Offer it. Use progressive disclosure.

---

### Screen 2: Unique Reference Number

**Decision:** Generate a submission reference (SA2026-ABC123-XYZ)

**Why:** Users call HMRC asking "did my return go through?" A reference number gives them:
- Proof it worked
- Something to cite to support
- Confidence to move on

**Interaction design thinking:** Reduce anxiety through concrete proof. A reference number is more convincing than just "submitted."

---

### Screen 2: Clear Timeline ("What Happens Next")

**Decision:** Tell users exactly what HMRC will do and when

**Why:** Users don't know if they're done or if more steps are coming. Ambiguity creates anxiety.

- Send confirmation email within 2 hours (user has checkpoint to check)
- Process return within 4–6 weeks (sets expectations)
- Notify of issues (reduces worry about silent failure)

**Interaction design thinking:** State visibility. Always tell the user what happens next and when.

---

## Positioning: Interaction Designer, Not UX/UI

This case study is specifically about **interaction design**, not visual design or UI polish.

**What I showed:**
- User research methodology (read HMRC reports, watched actual flows, identified friction)
- Problem framing (emotional friction, not technical problems)
- Mental model thinking (why users get confused at each step)
- Interaction patterns (progressive disclosure, state feedback, reassurance)
- Accessibility consideration (keyboard, screen readers, semantic HTML)

**What I didn't focus on:**
- Custom visual styling (I used GDS as-is)
- Pixel-perfect design
- Complex animations
- "Making it look pretty"

**Why:** As an interaction designer, I think about how systems communicate with users through interaction. Visual design is secondary.

---

## What I'd Do With More Time

1. **Test with real users** – Self-employed people filing returns, observe their confusion
2. **Measure the fix** – Track support calls ("did my submission work?") before and after
3. **Accessibility audit** – Test with screen readers, keyboard navigation, mobile
4. **Agent flow redesign** – Apply the same clarity thinking to the 5-step agent onboarding
5. **Research the wider system** – Are there other friction points in the SA journey?

---

## Honest Assessment

**What I got right:**
- Identified a real, documented user problem
- Grounded it in HMRC's own research
- Designed a realistic solution
- Demonstrated interaction design thinking

**What was hard:**
- Understanding the technical flow without live access
- Balancing ambition (redesign the system) with realism (improve messaging)
- Not getting lost in perfectionism on visual design

**What I learned:**
- Friction isn't always where you think it is (I initially blamed architecture; it was messaging)
- Observing other people's solutions (Sage) teaches you a lot
- Confusion is research data
- Good interaction design is invisible (users just feel "less anxious")

---

## Why This Matters for TDS

This case study shows I can:
- **Research properly** – Use multiple sources, identify patterns, quote evidence
- **Think systemically** – Understand how information flows and mental models work
- **Pivot when needed** – Recognize when my first approach isn't right
- **Design for humans** – Focus on user emotions and mental models, not technical elegance
- **Communicate clearly** – Make complex systems understandable through messaging
- **Accept constraints** – Work within realistic system limitations instead of redesigning everything

That's what interaction design is.
