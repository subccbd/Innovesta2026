/**
 * =========================================================================
 * INNOVESTA 2026 - REGISTRATION LINKS CONFIGURATION
 * Organized by Southern University Bangladesh Computer Club (SUBCC)
 * =========================================================================
 * 
 * INSTRUCTIONS FOR ORGANIZERS:
 * When your Google Forms are ready, simply replace the URLs below with your
 * actual Google Form links. All buttons and registration modals across the 
 * entire landing page will automatically use these links.
 * 
 * If a link is left empty ("" or "#"), clicking the button will show a 
 * friendly "Registration Link Opening Soon" notification.
 */

const INNOVESTA_CONFIG = {
  // Event Metadata
  eventName: "INNOVESTA 2026",
  organizer: "Southern University Bangladesh Computer Club (SUBCC)",
  dates: "November 3 & November 5, 2026",
  venue: "Southern University Bangladesh (Main Campus, Arefin Nagar, Chattogram)",
  
  // Fees Structure
  studentFee: "1,000 BDT",
  farewellFee: "1,500 BDT",

  paymentDeadline: "17th October, 2026",
  formDeadline: "27th October, 2026",
  contactEmail: "subccctg@gmail.com",

  // Payment Methods
  paymentInfo: {
    // Current Students: Cash to Batch Representative
    currentStudents: {
      fee: "1,000 BDT",
      method: "Cash Payment to Batch Representative",
      instructions: "Pay 1,000 BDT in cash directly to your batch representative to confirm your registration. Collect your payment receipt or serial number and submit the form before October 27, 2026."
    },
    // Farewell Registrations: bKash Send Money
    farewell: {
      fee: "1,500 BDT",
      method: "bKash Send Money",
      bkashNumber: "01610181160", // Replace with official bKash Send Money Number if different
      instructions: "Send 1,500 BDT via bKash Send Money to the designated number. Keep the Transaction ID (TrxID) and screenshot, then fill out the farewell form before October 27, 2026."
    }
  },

  // Representatives for Batch & Event Verification
  representatives: [
    {
      name: "Zihadul Islam",
      phone: "01610181160",
      role: "Event & Verification Representative",
      formattedPhone: "+880 1610-181160"
    },
    {
      name: "MD Farhad Hossen Imon",
      phone: "01852283056",
      role: "Event & Verification Representative",
      formattedPhone: "+880 1852-283056"
    },
    {
      name: "Diganta Das",
      phone: "01749048044",
      role: "Event & Verification Representative",
      formattedPhone: "+880 1749-048044"
    }
  ],

  // -----------------------------------------------------------------------
  // PRIMARY REGISTRATION LINKS (GOOGLE FORMS)
  // -----------------------------------------------------------------------
  links: {
    // 1. Main Register For Innovesta 2026 (1,000 BDT - Current Students All-Access Pass)
    // PASTE YOUR MAIN INNOVESTA 2026 GOOGLE FORM LINK HERE:
    mainRegistration: "https://forms.gle/NWAHsVR7KPWHEugj6",

    // 2. Alumni Farewell Registration (1,500 BDT - Farewell Pass via bKash Send Money)
    // PASTE YOUR ALUMNI FAREWELL GOOGLE FORM LINK HERE:
    alumniFarewell: "https://forms.google.com/",

    // ---------------------------------------------------------------------
    // SEGMENT-SPECIFIC COMPETITION REGISTRATIONS (GOOGLE FORMS)
    // ---------------------------------------------------------------------
    segments: {
      // 1. Programming Contest (Southern University Only - CSE & CSIT)
      programmingContest: "https://forms.google.com/",

      // 2. Project Showcasing (Inter-University)
      projectShowcasing: "https://forms.google.com/",

      // 3. Robo Soccer (Inter-University)
      roboSoccer: "https://forms.google.com/",

      // 4. IT Quiz (Inter-University)
      itQuiz: "https://forms.google.com/",

      // 5. Free Fire LAN Tournament (Inter-University)
      freeFire: "https://forms.google.com/",

      // 6. E-Football (Inter-University - Online)
      eFootball: "https://forms.google.com/",

      // 7. Console Gaming / Street Fighter (Southern University Only)
      consoleGaming: "https://forms.google.com/"
    }
  }
};

// Export to window for global access
window.INNOVESTA_CONFIG = INNOVESTA_CONFIG;
