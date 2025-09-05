Here’s the complete English translation. I also packaged it into a Word file so you can share/comment easily: [Download the DOCX](sandbox:/mnt/data/translated_summary_v1_en.docx). If you want a Google Docs version or US/UK English style tweaks, say the word!

---

# Summary Document – Version 1 (Complete + Wireframes + Default Parameters)

## 1. Global Vision

The platform is a service ecosystem connecting **clients**, **service providers**, **training centers**, and **admins**. The mobile app is the core of the project (70%+ of users), with a web extension for training center management and administration.

---

## 2. Product Parameters & Rules (to lock for V1)

### 2.1 Dispatch & Veto

* **Client veto timer**: 30 sec (default).
* **Provider response timer**: 20 sec.
* **Max redispatch attempts**: 3 before abandonment.
* **Dispatch priority order**: proximity → relevant badge → reputation → availability → fairness (round-robin).
* **Max tolerated ETA**: 30 min (adaptable by category/area).

### 2.2 Anti-abuse & Sanctions

* **Client**: reason required after 3 successive refusals; max 5 refusals/day.
* **Provider**: reason required after 3 successive refusals; max 5 refusals/day.
* **Graduated sanctions**: warning → dispatch limitation (12h) → temporary suspension (72h).

### 2.3 Rating & Reputation

* Weighted average (recent missions count ×2).
* Score <3 triggers automatic investigation if repeated.
* Lost dispute: -1 reputation + warning.
* Official quality tags: Punctuality, Quality, Communication, Courtesy.

### 2.4 Categories & Pricing

* Fixed categories (plumbing, electricity, cleaning, training, etc.).
* Pricing: fixed or hourly (reference grids by category, e.g. cleaning 2,500 XAF/h).
* Photo upload limit: max 5 images, 5 MB each, JPG/PNG formats.

### 2.5 Map & Geolocation

* Provider: Google Maps (Mapbox fallback).
* Max dispatch radius: 10 km urban, 20 km rural.
* Min GPS accuracy: 30 m.
* Delay >15 min → “Report delay” button on client side.

### 2.6 Payments & Credits

* Packs: 1,000 XAF (3 missions), 3,000 XAF (10 missions), 5,000 XAF (20 missions).
* Credit expiry: 30 days.
* Payments via Orange Money & MoMo.
* Receipts generated (in-app), PDF planned V1.1.

### 2.7 Disputes

* Can be opened up to 48h after mission end.
* Center SLA: response within 72h.
* Accepted evidence: text, photo, video.
* Escalation to super-admin if center inactive or major conflict.

### 2.8 Gamification (Simple V1)

* Bronze: 10 validated missions, rating ≥3.5.
* Silver: 30 validated missions, rating ≥4.
* Gold: 60 validated missions, rating ≥4.5.
* Rewards: highlighted in dispatch (reputation weight +10%).

### 2.9 Internationalization

* V1 languages: FR + EN.
* Currency format: XAF.
* Date formats: DD/MM/YYYY (FR), MM/DD/YYYY (EN).

### 2.10 Accessibility & Performance

* Min touch target: 44px.
* AA contrast.
* Skeleton loaders on all lists.
* Offline read-only mode (history, profile).

### 2.11 Privacy & Compliance

* Number masking → calls via proxy (planned V1.1).
* Consent for location + notifications at OTP login.
* Data retention: 12 months (missions, disputes).

---

## 3. Textual Wireframes (Mobile)

*(see sections 2.1–2.16 already detailed in the previous version)*

---

## 4. Textual Wireframes (Web)

### 4.1 Center Portal

* Dashboard (pending badges, open disputes, stats).
* Training dossiers (registered/tested/validated).
* Badge validation.
* Disputes: evidence, decisions.

### 4.2 Super-Admin Portal

* Dispatch & anti-abuse rules (timers, thresholds, weighting).
* Categories/Services (CRUD).
* Moderation (fraud, suspensions).

---

## 5. Error States & System Messages

* Auth: “Invalid/expired OTP code,” “Too many attempts.”
* Network: “Unstable connection, try again.”
* GPS: “Location required for dispatch.”
* Payment: “MoMo/OM payment failed, check balance.”
* Dispatch: “No provider available, reschedule?”
* Anti-abuse: “Too many successive refusals, your account is temporarily limited.”

---

## 6. Designer Checklist

* Primary CTAs visible, timers clear (dispatch/veto).
* Map/ETA integrated (light/dark).
* **Empty/Loading/Error** states designed.
* Accessibility respected (touch targets, contrast).
* Multilingual FR/EN (anticipate label length).
* Show tutorials for Empty states.

---

## 7. Priority Screen Backlog

1. OTP onboarding.
2. Unified Client/Provider home.
3. Job creation (4 steps + recap).
4. Client dispatch/veto.
5. Mission tracking (client & provider).
6. Validation & rating.
7. Dispute (opening + timeline).
8. History list + detail.
9. Become provider (onboarding + center tracking).
10. Credits/Wallet.
11. Availability (switch).
12. Provider work order.
13. Navigation/execution.
14. Public + personal profile.
15. 2G network.
16. Notifications inbox.
17. Settings.

---

## 8. Closing

This enriched version includes **textual wireframes, product rules, default values, missing screens, and prioritized backlog**. It forms a comprehensive foundation for designing UI mockups (mobile-first), with concrete parameters that support design and UX decisions.

---

## 20. Default Parameters V1 (initial adjustable values)

> These values serve as the basis for UI mockups and early tests. They may be adjusted after field testing.

### 20.1 Timers & Dispatch

* **Client veto timer**: 30 s (auto-accept if no action)
* **Provider response timer**: 20 s (auto-decline after the deadline)
* **Redispatch attempts**: 3 (then propose reschedule)
* **Provider cooldown after 3 consecutive refusals**: 5 min (warning tooltip)
* **Client cooldown after 3 consecutive vetos**: 5 min (warning tooltip)
* **Client penalty-free cancellation window**: until the “EN ROUTE” state (after that, category-specific cancellation rules apply)

### 20.2 Matching Weighting (dispatch)

* **Distance/ETA**: 35%
* **Badge/category relevance**: 40%
* **Reputation (weighted average)**: 15%
* **Fairness (rotation/round-robin)**: 10%

> In case of a tie, priority goes to the provider with the **fewest missions** in the last 7 days.

### 20.3 SLA & Zones

* **Target max ETA**:

  * Urban: 15 min
  * Peri-urban: 30 min
* **Dispatch radius** (from client address):

  * Urban: 5 km
  * Peri-urban: 12 km
* **Auto zone switch**: if no urban provider, try peri-urban (1 attempt)

### 20.4 Anti-abuse (thresholds)

* **Client**: 5 vetos/day, 12/week → warning then temporary limit
* **Provider**: 8 refusals/day, 20/week → warning then temporary limit
* **Consecutive provider timeouts**: 3 → reminder “activate availability only when ready”
* **Baseless client reports**: 2 out of 10 missions → seriousness score drops (-10%)

---

## 21. Reputation, Rating & Gamification

* **Public rating**: displayed after **3 missions** minimum
* **Weighted average**: 70% last 20 missions / 30% older missions
* **Decay**: reviews older than 6 months weigh 50% less
* **Dispute impact**: lost dispute → -0.2 on average rating (min 1, max 5)
* **Quality tags** (closed list V1): Punctuality, Care, Communication, Professionalism, Instruction compliance
* **Gamification tiers** (simple V1):

  * Bronze: 10 missions, rating ≥4.0
  * Silver: 50 missions, rating ≥4.3
  * Gold: 150 missions, rating ≥4.6

> Non-financial V1 bonus: **slight dispatch priority** (+5% score) for Silver/Gold.

---

## 22. Categories & File Requirements

### 22.1 Initial Categories (V1)

* Plumbing, Electricity, Cleaning, Gardening, Painting, Air conditioning, Moving

### 22.2 Fields/Evidence per Category (examples)

* **Electricity**: photo of electrical panel; mandatory problem description
* **Plumbing**: photo of leak/installation; meter access if relevant
* **Moving**: floors, elevator yes/no, estimated volume

### 22.3 Media

* **Photos**: up to 6 photos, **3 MB** max each, JPG/PNG
* **Videos**: disabled in V1 (planned V1.1)

---

## 23. Payments & Credits (Provider)

### 23.1 Credit Packs (XAF)

* **Starter**: 2 missions – **1,000 XAF**
* **Standard**: 5 missions – **2,000 XAF**
* **Pro**: 12 missions – **4,000 XAF**
* **Business**: 30 missions – **9,000 XAF**

> V1: **no credit expiry**. Purchase/day limit: 3 packs.

### 23.2 Payment Methods

* **Orange Money**, **MoMo** (MTN Mobile Money)
* 2 automatic retries on failure (60 s apart), then error message

### 23.3 Refunds & Duplicates

* Duplicate detected (same operator reference) → **automatic refund** within 72h
* Failure after operator debit without applied credit → **automatic support ticket** opened

---

## 24. Disputes & Sanctions

### 24.1 Deadlines & SLA

* **Dispute opening**: up to **48h** after “Completed”
* **Center acknowledgment**: within **24h**
* **Center decision**: within **72h** (else auto escalation to super-admin)

### 24.2 Sanction Scale (catalog)

* **Provider**: warning → reputation loss (-0.2) → suspension 24h → suspension 7d → deactivation
* **Client**: warning → dispatch limitation (24h) → suspension 7d

### 24.3 Accepted Evidence

* Text, **photos** (EXIF kept), in-app message screenshots; **video** (V1.1)

---

## 25. Internationalization & Compliance

* Languages: **FR/EN** (selectable in Settings)
* Formats: **dd/mm/yyyy**, currency **XAF**
* Consents: location & notifications **mandatory** to send/receive dispatch
* Privacy: numbers **masked**, calls/messages via relay (if available V1.1)
* Audit log: sensitive actions (badge validation, sanctions) tracked

---

## 26. Ready-to-use System Texts (UI Copy)

### 26.1 Auth & Permissions

* **Invalid OTP**: “Invalid code. Check the code received and try again.”
* **Expired OTP**: “Code expired. Request a new code.”
* **Location permission**: “Location is required to propose the best provider.”

### 26.2 Dispatch & Veto (Client)

* **No provider available**: “No provider is available right now. Would you like to reschedule?”
* **Repeated veto**: “You refused several providers. To prevent abuse, your account will be temporarily limited.”

### 26.3 Job Order (Provider)

* **Insufficient credits**: “Top up credits to accept jobs.”
* **GPS disabled**: “Enable GPS to continue the mission.”
* **Timeout**: “Time elapsed. The job has been redispatched.”

### 26.4 Mission Tracking & Completion

* **Delay reported**: “We noted your delay. Please notify the client if needed.”
* **Completion confirmation**: “Do you confirm the mission is completed?”

### 26.5 Disputes

* **Case created**: “Your dispute has been recorded. The center will reply within 24h.”
* **Decision made**: “Decision: \[Summary]. You may appeal within 24h if needed.”

### 26.6 Payments

* **MoMo/OM failure**: “Payment not validated. Check your balance and try again.”
* **Refund**: “A refund has been initiated. Estimated delay: 72h.”

---

## 27. Updated Designer Checklist (with parameters)

* Include **visible timers** (veto/work order) and states *(loading/failure/timeout)*
* Visualize dispatch weighting (subtle indicators for internal QA)
* Clear maps in light/dark, ETA consistent with urban/peri-urban SLA
* Error templates **copy-ready** (section 26)
* FR/EN: plan for length, truncation, line breaks
* Educational **empty** states (client/provider home, 2G network, history)
* Accessibility: hit targets ≥44px, AA contrast, font sizes

---

## 28. Next Steps

1. Validate these **default values** with business/ops
2. Designer produces **mockups** using listed screens + parameters
3. Run **QA review** (timers, anti-abuse, maps) before prototyping

---

## 29. Assistant & Coaching Mode (Integrated Motivation)

> Objective: make the app a **supportive coach** that assists users in daily work, boosts engagement, and smooths supply/demand.

### 29.1 Conversational UX Principles

* **Tone**: positive, concrete, respectful (avoid guilt).
* **Cadence**: contextual micro-nudges, never intrusive.
* **Control**: default **opt-in** at onboarding with *granular settings* (challenges, reminders, revenue goals).
* **Relevance**: context-based messages (badge earned, empty schedule, demand peaks, local weather/rush hour).
* **Ethics**: no manipulation, easy exit: *“Disable for today”* / *“Reduce frequency”*.

### 29.2 Key Triggers (Provider)

* **Badge earned** → congratulations + propose **Planning Challenge** (see 29.4).
* **Morning (08:00)** → *Daily kick-off* (job/revenue forecast if available).
* **Empty slot** → suggestion to open more hours.
* **Demand peaks** (by category/area) → *“Open 2 h and earn about X XAF”*.
* **Assigned mission** → friendly reminder + ETA + *“Need help with navigation?”*.
* **Streak** (3, 7, 14 active days) → encouragement + micro-reward (e.g., slight dispatch boost).

### 29.3 Key Triggers (Client)

* **Post published** → *“We’ll take it from here, a pro is on the way”* + ETA.
* **Frequent veto** → guidance: *“Here’s how to read a profile in 10 s.”*
* **Mission end** → *“Thank you! Your review helps the whole community.”*

### 29.4 Planning Challenge (Provider)

* **Proposal** after badge: *“Plan your weekly slots (min 10 h). We prioritize dispatch in these windows.”*
* **Planner screen**: weekly grid (30 min/1 h slots), **CTA**: **SAVE MY SCHEDULE**.
* **Dispatch rule**: if *Planning Mode* active, +10% weight on time relevance.
* **Nudges**: *“3 h left to reach your weekly goal.”*

### 29.5 Additional Screens (textual wireframes)

1. **Assistant – Daily Kick-off (Provider)**

   * **Sections**: Message of the day (“Goal: 3 jobs”), *Open slots today*, *Demand forecast* (hot categories), *Earnings forecast* (range), *Quick CTAs*: **ACTIVATE AVAILABILITY**, *Open 2 h more*, *View route to first zone*.
   * **States**: Empty (no planning) → *“Plan 4 h to start strong”*; Network error → ~~Retry~~.

2. **Assistant – Badge Congratulations**

   * **Sections**: Confetti, personalized text, *Propose a challenge* (plan 10 h), **CTAs**: **START MY CHALLENGE**, *Later*.

3. **Assistant – Mission Reminders**

   * **Sections**: Map + ETA, *Departure reminder* (e.g., 20 min before), *Quality tip* (e.g., “Notify the client 5 min before”), **CTAs**: **NAVIGATE**, *Send message*.

4. **Assistant – Open More Hours**

   * **Sections**: *High demand detected 18–20 h*, *Potential earnings* (estimate), **CTA**: **OPEN 2 H**, *Ignore today*.

5. **Assistant – Daily Challenge**

   * **Sections**: *Challenge* (e.g., “Accept 2 cleaning jobs before 2 pm”), *Reward*: cosmetic badge + slight dispatch boost, **CTA**: **I ACCEPT**, *Later*.

6. **Assistant – End-of-Day Summary**

   * **Sections**: Jobs completed, today’s average rating, tips for tomorrow, **CTA**: **PLAN TOMORROW**.

### 29.6 Ready-to-use Copy (FR examples)

* **Badge congratulations**: “Bravo 🎉 You are now certified in *Electricity*. Launch your first challenge to boost your earnings!”
* **Kick-off**: “Good morning! Open 4 h today: demand for *Cleaning* is high from 10 am to 12 pm. Potential: \~3,000 XAF.”
* **Mission reminder**: “Heading to \[District X]? Notify the client 5 min before.”
* **Opening hours**: “A lot of requests 6–8 pm in your area. Open 2 h now?”
* **Streak**: “3 days in a row 👏 Keep going, you’re close to the *Regularity* badge!”

### 29.7 Assistance Settings

* **Max frequency**: 4 nudges/day (hard cap), minimum spacing 90 min.
* **Silence**: *Do Not Disturb* (e.g., 10 pm–7 am) by default.
* **Personalization**: enable/disable nudge categories (challenges, planning, revenue, quality).
* **Language**: FR/EN.

### 29.8 Measurement & A/B Testing

* **KPIs**: hours planned/day, availability open rate, job acceptance rate, arrival time, NPS, 7/28-day retention.
* **Experiments**: message variants (length, emojis), timing (before/after badge), incentives (streak vs. one-off challenge).

### 29.9 Technical Considerations

* Backend **rules & events** system (event bus): badge\_obtenu, pic\_demande, mission\_assignée, retard\_detecté…
* **Eligibility** engine (frequencies, caps, opt-in, language, Africa/Douala timezone).
* **Rich** push notifications (quick actions) + deep links to key screens.

---

## 30. Designer Checklist Update (Assistant)

* *Assistant* screens (6 screens) to **mock up** in light/dark.
* Libraries of **messages** (FR/EN) + variable placeholders (category, area, estimated earnings).
* User settings page: *Assistance & Coaching* (opt-in, frequency, nudge categories, DND).
* Visual styles for **rewards** (confetti, cosmetic badges) discreet and professional.

---

## 31. Short Roadmap (Assistant)

* **V1**: Daily Kick-off, Badge Congratulations + Planning Challenge, Mission Reminders, Open More Hours, End-of-Day recap.
* **V1.1**: Streaks, Daily Challenge, Proxy calls, simple ML-based dynamic earnings.
* **V1.2**: Slot recommendations via learning (weekly pattern, weather/local events), advanced contextualized messages.
