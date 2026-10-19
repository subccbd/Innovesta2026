# INNOVESTA 2026 — Official Landing Page & Event Hub

> **Organized by Southern University Bangladesh Computer Club (SUBCC)**  
> **In Collaboration with the Department of CSE & CSIT, Southern University Bangladesh**  
> *"Empowering Innovation, Honoring Legacy"* • *"Celebrating Code, Culture & Community"*

---

## 📅 Event Overview

- **Dates:** November 3 & November 5, 2026
- **Venue:** Southern University Bangladesh (Main Campus, New/471, University Road, Arefin Nagar, Chattogram)
- **Current Student Fee:** **1,000 BDT** (All-Access Pass, Paid to Batch Representative)
- **Farewell Fee:** **1,500 BDT** (Farewell Pass, Paid via bKash Send Money)
- **Payment Deadline:** **17th October, 2026**
- **Form Submission Deadline:** **27th October, 2026**
- **Official Contact:** `subccctg@gmail.com`

---

## 🚀 How to Run & Preview

The landing page is built with pure, modern web standards (Tailwind CSS, Lucide Icons, clean vanilla JavaScript, and responsive CSS glassmorphism). It can be opened directly or served locally:

### Option 1: Direct File Open
Double click `index.html` in your file explorer to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Web Server
If you prefer a local server:
```bash
# Using Node / npx
npm start
# or
npx serve -l 3000 .

# Or using Python
npm run serve
# or
python -m http.server 3000
```
Then visit `http://localhost:3000`.

---

## 🔗 How to Connect Your Google Forms

All registration URLs are centralized in **[`js/registration-links.js`](file:///d:/SUBCC/Innovesta%202026%20Landing%20Page/js/registration-links.js)**. 

When your Google Forms are ready, open `js/registration-links.js` and paste your links into the corresponding fields:

```javascript
links: {
  // 1. Main Register For Innovesta 2026 (1,000 BDT - Current Students Pass)
  mainRegistration: "https://forms.google.com/YOUR_MAIN_FORM_LINK",

  // 2. Alumni Farewell Registration (1,500 BDT - Farewell Pass via bKash)
  alumniFarewell: "https://forms.google.com/YOUR_ALUMNI_FORM_LINK",

  // Segment-Specific Competition Forms
  segments: {
    programmingContest: "https://forms.google.com/YOUR_PROGRAMMING_FORM_LINK",
    projectShowcasing: "https://forms.google.com/YOUR_PROJECT_SHOWCASE_FORM_LINK",
    roboSoccer: "https://forms.google.com/YOUR_ROBO_SOCCER_FORM_LINK",
    itQuiz: "https://forms.google.com/YOUR_IT_QUIZ_FORM_LINK",
    freeFire: "https://forms.google.com/YOUR_FREE_FIRE_FORM_LINK",
    eFootball: "https://forms.google.com/YOUR_EFOOTBALL_FORM_LINK",
    consoleGaming: "https://forms.google.com/YOUR_CONSOLE_GAMING_FORM_LINK"
  }
}
```

Once updated, every button on the site will automatically redirect participants to your actual Google Forms!

---

## 💳 Payment & Verification Workflows

### Method A: Current Students (1,000 BDT)
1. **Step 1:** Pay **1,000 BDT in cash** directly to your assigned **Batch Representative** before **October 17, 2026** to confirm registration.
2. **Step 2:** Collect physical payment receipt or verification serial number.
3. **Step 3:** Fill out and submit the online registration form with your serial number before **October 27, 2026**.
4. **Step 4:** SUBCC verifies offline payment with your batch representative and issues credentials.

### Method B: Farewell Registrations (1,500 BDT)
1. **Step 1:** Pay **1,500 BDT** via **bKash Send Money** according to the instructions inside the registration form before **October 17, 2026**.
2. **Step 2:** Save your bKash Transaction ID (TrxID) and screenshot the payment.
3. **Step 3:** Fill out and submit the Alumni Farewell Google Form with your TrxID before **October 27, 2026**.
4. **Step 4:** SUBCC verifies the bKash TrxID and confirms your Alumni Farewell Pass.

---

## 📂 Project Structure

```
├── index.html                  # Main Landing Page & Event Hub
├── package.json                # Project scripts
├── README.md                   # Documentation & setup guide
├── css/
│   └── style.css               # Cyber-tech theme, animations & glassmorphism
├── js/
│   ├── main.js                 # Countdown, filters, modals, event interactions
│   └── registration-links.js   # Centralized Google Forms configuration
├── assets/
│   ├── logos/                  # Official SUBCC, Innovesta, CSE, CSIT logos
│   └── images/                 # Optimized teaser posters & banner previews
├── Logos/                      # Original high-res source logos
└── Data/                       # Original event posters, PDFs & proposal
```

