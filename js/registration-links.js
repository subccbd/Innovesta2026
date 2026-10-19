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

  registrationDeadline: "30th October, 2026",
  paymentDeadline: "30th October, 2026",
  formDeadline: "27th October, 2026",
  contactEmail: "subccctg@gmail.com",

  // Payment Methods
  paymentInfo: {
    // CSE & CSIT Students: Cash to Batch Representative
    cseCsitStudents: {
      fee: "1,000 BDT",
      method: "Cash Payment to Batch Representative",
      instructions: "For students of Dept. of CSE & Dept. of CSIT. Pay 1,000 BDT in cash directly to your batch representative to confirm your registration. Collect your payment receipt or serial number and submit the form before October 27, 2026."
    },
    // Farewell Registrations: bKash Send Money
    farewell: {
      fee: "1,500 BDT",
      method: "bKash Send Money",
      bkashNumber: "01610181160",
      instructions: "Send 1,500 BDT via bKash Send Money to the designated number. Keep the Transaction ID (TrxID) and screenshot, then fill out the farewell form before October 27, 2026."
    },
    // Open Competitions: Inter-University & Other Southern Departments
    openCompetitions: {
      fee: "Per-segment fee (stated in Google Form)",
      method: "bKash Send Money to 01610181160",
      instructions: "For students from other universities and students from other departments within Southern University (non-CSE/CSIT). Pay the individual contest entry fee via bKash Send Money to 01610181160 and submit the TrxID in the contest form."
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
    // 1. Southern CSE & CSIT Students Festival Registration (1,000 BDT to Batch Rep)
    mainRegistration: "https://forms.gle/QyK7xbq6gfpCm2Y29",

    // 2. Farewell Students (Outgoing Batch) Registration (1,500 BDT via bKash)
    alumniFarewell: "https://forms.gle/aY9GQFuZG6a84gYh9",
    farewellStudents: "https://forms.gle/aY9GQFuZG6a84gYh9",

    // 3. Alumni Association Registration
    alumniAssociation: "https://forms.gle/CCAgFcktVxyTgtNq6",

    // 4. Graduated Students Registration
    graduatedStudents: "https://forms.gle/EWipNSYFqHY1KsYNA",

    // 5. Stall & Booth Registration
    stallRegistration: "https://forms.gle/8G6v3Rw7HyUPNsSE7",

    // ---------------------------------------------------------------------
    // SEGMENT-SPECIFIC COMPETITION REGISTRATIONS (GOOGLE FORMS)
    // Single universal registration form per competition segment.
    // Replace URL when organizers publish the corresponding Google Form.
    // ---------------------------------------------------------------------
    segments: {
      // 1. Competitive Programming
      programmingContest: {
        title: "Competitive Programming",
        url: "https://forms.gle/3ix56u1nXaaLXA9j9"
      },

      // 2. Robo Soccer
      roboSoccer: {
        title: "Robo Soccer",
        url: "https://forms.gle/YPXdUV6CL8gJSAXZA"
      },

      // 3. Project Showcasing — Idea Hunt
      projectShowcasing: {
        title: "Project Showcasing — Idea Hunt",
        url: "https://forms.gle/QJBghn53PMm37fQy7"
      },

      // 4. IT Quiz
      itQuiz: {
        title: "IT Quiz",
        url: "https://forms.gle/nFArLbMBLxA492tn8"
      },

      // 5. Free Fire LAN Tournament
      freeFire: {
        title: "Free Fire LAN Tournament",
        url: "coming-soon.html?segment=Free%20Fire%20LAN%20Tournament"
      },

      // 6. E-Football Tournament
      eFootball: {
        title: "E-Football Tournament",
        url: "coming-soon.html?segment=E-Football%20Tournament"
      },

      // 7. Console Gaming: Street Fighter
      consoleGaming: {
        title: "Console Gaming: Street Fighter",
        url: "coming-soon.html?segment=Console%20Gaming%3A%20Street%20Fighter"
      },

      // 8. Alumni Association Registration
      alumniAssociation: {
        title: "Alumni Association Registration",
        url: "https://forms.gle/CCAgFcktVxyTgtNq6"
      },

      // 9. Farewell Students Registration
      farewellStudents: {
        title: "Farewell Students",
        url: "https://forms.gle/aY9GQFuZG6a84gYh9"
      },

      // 10. Graduated Students Registration
      graduatedStudents: {
        title: "Graduated Students",
        url: "https://forms.gle/EWipNSYFqHY1KsYNA"
      },

      // 11. Stall & Booth Registration
      stallRegistration: {
        title: "Stall & Booth Registration",
        url: "https://forms.gle/8G6v3Rw7HyUPNsSE7"
      }
    }
  }
};

// Export to window for global access
window.INNOVESTA_CONFIG = INNOVESTA_CONFIG;
