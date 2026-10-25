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
  dates: "November 3 to 5, 2026",
  venue: "Southern University Bangladesh (Main Campus, Arefin Nagar, Chattogram)",
  
  // Fees Structure
  studentFee: "1,000 BDT",
  farewellFee: "1,500 BDT",

  contactEmail: "subccctg@gmail.com",

  // Payment Methods
  paymentInfo: {
    // CSE & CSIT Students: Cash to Batch Representative
    cseCsitStudents: {
      fee: "1,000 BDT",
      method: "Cash Payment to Batch Representative",
      instructions: "For students of Dept. of CSE & Dept. of CSIT. Pay 1,000 BDT in cash directly to your batch representative to confirm your registration. Collect your payment receipt or serial number and submit the form."
    },
    // Farewell Registrations: bKash Send Money
    farewell: {
      fee: "1,500 BDT",
      method: "bKash Send Money",
      instructions: "Send 1,500 BDT via bKash Send Money according to the form instructions. Keep the Transaction ID (TrxID) and screenshot, then fill out the farewell form."
    },
    // Open Competitions: Inter-University & Other Southern Departments
    openCompetitions: {
      fee: "Per-segment fee (stated in Google Form)",
      method: "bKash Send Money",
      instructions: "For students from other universities and students from other departments within Southern University (non-CSE/CSIT). Follow the payment instructions stated inside each competition form and submit the TrxID."
    }
  },

  // Representatives for Batch & Event Verification
  representatives: [
    // Batch 67
    { batch: "67", section: "B1", name: "Niloy", id: "666-65-27", phone: "01322560288" },
    { batch: "67", section: "B1", name: "Ayrin", id: "666-67-26", phone: "01835336826" },
    { batch: "67", section: "B2", name: "Bijoy Rudra", id: "666-67-51", phone: "01821902200" },
    { batch: "67", section: "B2", name: "Jannat", id: "666-67-60", phone: "01777463082" },
    { batch: "67", section: "B3", name: "Ifti", id: "666-67-130", phone: "01846631861" },
    { batch: "67", section: "B3", name: "Anindita", id: "032-67-01", phone: "01522141547" },

    // Batch 66
    { batch: "66", section: "NA", name: "Shaifullah", id: "666-66-01", phone: "01877921645" },
    { batch: "66", section: "NA", name: "Atifa", id: "666-66-17", phone: "01576608309" },

    // Batch 65
    { batch: "65", section: "B1", name: "Rafsan", id: "666-65-01", phone: "01516556310" },
    { batch: "65", section: "B1", name: "Marlin", id: "666-65-17", phone: "01998194384" },
    { batch: "65", section: "B1", name: "Rayhan", id: "666-65-42", phone: "01521226893" },
    { batch: "65", section: "B2", name: "Hassan", id: "666-65-77", phone: "01889868757" },
    { batch: "65", section: "B2", name: "Anik", id: "666-65-95", phone: "01795423375" },
    { batch: "65", section: "B2", name: "Tahasin", id: "666-65-109", phone: "01977660216" },
    { batch: "65", section: "B2", name: "Aklima", id: "666-65-102", phone: "01319014865" },

    // Batch 64
    { batch: "64", section: "NA", name: "Abir", id: "666-64-26", phone: "01772319830" },
    { batch: "64", section: "NA", name: "Jihan", id: "666-64-30", phone: "01308796619" },
    { batch: "64", section: "NA", name: "Ishita", id: "666-64-23", phone: "01818369543" },

    // Batch 63
    { batch: "63", section: "NA", name: "Aymon", id: "666-63-29", phone: "01897677045" },
    { batch: "63", section: "NA", name: "Maher", id: "666-63-43", phone: "01765920638" },
    { batch: "63", section: "NA", name: "Sadia", id: "666-63-60", phone: "01893043996" },

    // Batch 62
    { batch: "62", section: "NA", name: "Bayzid", id: "666-62-36", phone: "01613259996" },
    { batch: "62", section: "NA", name: "Dihan", id: "666-62-03", phone: "01533919817" },

    // Batch 61
    { batch: "61", section: "NA", name: "Diganta", id: "666-61-22", phone: "01749048044" },
    { batch: "61", section: "NA", name: "Prashanta", id: "666-61-38", phone: "01836404065" },
    { batch: "61", section: "NA", name: "Sanjida", id: "666-61-28", phone: "01854537326" },
    { batch: "61", section: "NA", name: "Sanim", id: "666-61-51", phone: "01827329174" },

    // Batch 60
    { batch: "60", section: "NA", name: "Munni", id: "666-60-40", phone: "01879382521" },
    { batch: "60", section: "NA", name: "Zarifa", id: "666-60-29", phone: "01531328184" },
    { batch: "60", section: "NA", name: "Arman", id: "666-60-25", phone: "01875323765" },
    { batch: "60", section: "NA", name: "Sakera", id: "666-60-23", phone: "01867654632" }
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
        status: "closed",
        closedMessage: "Registration for Programming Contest has been closed as deadline is reached. Best of luck for next contest.",
        url: ""
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
        url: "https://tinyurl.com/SUB-Edition"
      },

      // 6. E-Football Tournament
      eFootball: {
        title: "E-Football Tournament",
        url: "https://forms.gle/HrLAQY28ajXFMW5R7"
      },

      // 7. Console Gaming: Street Fighter
      consoleGaming: {
        title: "Console Gaming: Street Fighter",
        url: "https://forms.gle/HkZo22cnxwy7ZZAx6"
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
