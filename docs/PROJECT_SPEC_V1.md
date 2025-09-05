# Summary Document – Version 1 (Complete with User Flows)

## 1. Global Vision

The platform is an ecosystem of services connecting **clients**, **service providers**, **training centers**, and **admins**. The mobile application is the core of the project (70%+ of users), with a web extension for training center management and administration.

### Main Objectives:

* Provide clients with accessible, reliable, and traceable services.
* Enable providers to access a constant flow of paid assignments.
* Ensure quality through the involvement of training centers and dispute management.
* Introduce a simple and sustainable network (MLM) system, limited to 2 generations.

---

## 2. Target Users

1. **Clients** (individuals, households, small businesses)
2. **Service providers** (freelancers certified by a center)
3. **Training centers** (web only)
4. **Super-admins** (moderation and supervision)

---

## 3. Authentication & Onboarding

* **Mobile (Clients & Providers):**

  * Phone + OTP (like Yango), no password.
  * Registration = simplified login.
* **Web (Centers & Admins):** classic login (email + password + 2FA).

---

## 4. User Journey (Mobile)

### 4.1. Client Journey

1. Open app → OTP login.
2. Create a job post: select category, description, duration or hourly rate.
3. Receive real-time notifications from available providers.
4. View profiles (badges, affiliated center, reputation).
5. Confirm a provider.
6. At the end of the job: confirm completion, rate the provider.
7. May open a dispute if non-compliance (escalated to the center).

### 4.2. Provider Journey

1. Open app → OTP login.
2. Click “Become a provider.”
3. Select a service category.
4. Choose a partner training center.
5. Attend and validate offline training at the center.
6. Return to the app → Badge activated on profile.
7. Top up account (credits via OM/MoMo) → required to receive jobs.
8. Switch to “Available.”
9. Receive a request → check details.
10. Submit a proposal.
11. If chosen → carry out the task.
12. Mark task as completed → remain available for next one.

### 4.3. Common Cases

* View network (up to 2 generations) in a tree structure.
* View dashboard (history, earnings, reputation).
* Real-time notifications (new job, validation, payment, dispute, system update).

---

## 5. Monetization & Payments

* **Client → Provider**: cash payment (default) or via platform (optional escrow V1.1).
* **Provider → Platform**: purchase credits via Orange Money / MoMo to stay active.
* Job amounts are predefined (fixed rate or hourly rate).
* Provider can withdraw earnings but must always maintain an active credit balance.

---

## 6. Dispute Management

* Client can report an issue.
* The affiliated center receives the claim, contacts both provider and client.
* Decision: sanction provider (loss of reputation, suspension) or client (restriction, exclusion).
* In major conflicts: escalation to **super-admin**.

---

## 7. Key Features (Mobile V1)

### Essential MVP

* OTP authentication.
* Job posting (client).
* Job reception and management (provider).
* Provider profiles with badges, reputation, and affiliated center.
* Credit purchase via OM/MoMo.
* Real-time push notifications.
* Rating system.
* Basic dispute management (report + transfer to center).
* 2-generation network visualization.
* Dashboard (history + reputation).
* Dark & Light mode.

### Optional / V1.1+

* Payment via escrow (client → platform → provider).
* Advanced gamification (bronze/silver/gold levels).
* Clients can suggest new categories.
* Offline mode (view history without connection).

---

## 8. Visual Identity

* **Unified** design (client and provider in the same app).
* Modern, user-friendly, simple style.
* **Light & Dark mode**.
* UX inspired by Uber/Yango (real-time, smooth).

---

## 9. Web (Centers & Admins)

* **Centers**: manage registrations, validate badges, monitor disputes.
* **Super-admins**: supervise centers, handle major disputes, moderate network, set categories/services.

---

## 10. Technical Architecture (Framework)

* **Mobile**: React Native / Flutter (to be determined by the tech team).
* **Backend**: NestJS.
* **Database**: PostgreSQL.
* **Containers**: Docker.
* **Real-time notifications**: WebSockets / Firebase.

---

## 11. MVP Prioritization

1. OTP authentication.
2. Basic client & provider flows (job post, job, validation).
3. Credit purchase via OM/MoMo.
4. Push notifications.
5. Provider profiles (badges + reputation).
6. 2-generation network.
7. Simple dispute management (client → center).

Optional (V1.1): escrow, advanced gamification, offline mode, category addition.

---

## 12. User Flows (Journey Diagrams)

### 12.1. Client Flow

```
[Open App] → [OTP Login] → [Create Job] → [Provider Notifications] → [View Profiles] → [Select Provider] → [Ongoing Job] → [Confirm End] → [Rate / Dispute]
```

### 12.2. Provider Flow

```
[Open App] → [OTP Login] → [Become Provider] → [Choose Category] → [Choose Center] → [Offline Training] → [Badge Validated] → [Top Up Credits] → [Activate Available] → [Receive Request] → [Make Proposal] → [Job Validated] → [Mark Completed] → [Back to Available]
```

### 12.3. Dispute Flow

```
[Client reports issue] → [Center notified] → [Center contacts provider + client] → [Decision made] → [Sanction provider OR client] → [Escalate to super-admin if needed]
```

### 12.4. Network Flow (MLM)

```
[User] → [Network Dashboard] → [Tree up to 2 Generations] → [View earnings / members]
```

---

## 13. Conclusion

This mobile V1 must provide a **smooth and user-friendly experience** for both clients and providers, inspired by mobility apps (Uber, Yango), while laying the foundation for a sustainable ecosystem (2G MLM network, certified training, structured dispute resolution). The web component (centers + super-admin) completes the ecosystem by ensuring quality, control, and scalability.

---

Would you like me to also reformat it into a **professional English product brief style** (more concise and business-oriented) rather than just a direct translation?
