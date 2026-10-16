/**
 * =========================================================================
 * INNOVESTA 2026 - CLIENT INTERACTION SCRIPT
 * Clean, Minimal, Classy Event Hub Interactivity
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initNavigation();
  initSegmentFilters();
  initScheduleTabs();
  initFaqAccordion();
  initRegistrationHandlers();
  initModals();
});

/**
 * Live Countdown Timer to November 3, 2026 08:30:00 AM (BST / GMT+6)
 */
function initCountdown() {
  // Target: November 3, 2026, 08:30 AM Bangladesh Standard Time (UTC+6)
  const targetDate = new Date('2026-11-03T08:30:00+06:00').getTime();

  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      const statusNotice = document.getElementById('countdown-live-badge');
      if (statusNotice) statusNotice.textContent = 'Event In Progress / Live';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/**
 * Mobile Navigation Menu & Smooth Scroll
 */
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('translate-x-full');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Sticky header background blur change on scroll
  const header = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('bg-opacity-90', 'shadow-lg', 'shadow-black/50', 'border-b', 'border-white/10');
      header?.classList.remove('bg-opacity-60');
    } else {
      header?.classList.remove('bg-opacity-90', 'shadow-lg', 'shadow-black/50', 'border-white/10');
      header?.classList.add('bg-opacity-60');
    }
  });
}

/**
 * Filterable Segments
 */
function initSegmentFilters() {
  const filterBtns = document.querySelectorAll('.segment-tab');
  const cards = document.querySelectorAll('.segment-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active style
      filterBtns.forEach(b => b.classList.remove('active', 'border-cyan-400', 'text-cyan-400', 'bg-cyan-500/10'));
      btn.classList.add('active', 'border-cyan-400', 'text-cyan-400', 'bg-cyan-500/10');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category === filter || category.split(' ').includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * Schedule Tab Switcher (Day 1 vs Day 2)
 */
function initScheduleTabs() {
  const day1Btn = document.getElementById('tab-day-1');
  const day2Btn = document.getElementById('tab-day-2');
  const day1Content = document.getElementById('schedule-day-1');
  const day2Content = document.getElementById('schedule-day-2');

  if (!day1Btn || !day2Btn || !day1Content || !day2Content) return;

  day1Btn.addEventListener('click', () => {
    day1Btn.classList.add('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
    day1Btn.classList.remove('text-slate-400', 'border-white/10');
    day2Btn.classList.remove('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
    day2Btn.classList.add('text-slate-400', 'border-white/10');

    day1Content.classList.remove('hidden');
    day2Content.classList.add('hidden');
  });

  day2Btn.addEventListener('click', () => {
    day2Btn.classList.add('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
    day2Btn.classList.remove('text-slate-400', 'border-white/10');
    day1Btn.classList.remove('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
    day1Btn.classList.add('text-slate-400', 'border-white/10');

    day2Content.classList.remove('hidden');
    day1Content.classList.add('hidden');
  });
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !answer) return;

    trigger.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');

      // Close all
      items.forEach(other => {
        other.querySelector('.faq-answer')?.classList.add('hidden');
        const otherIcon = other.querySelector('.faq-icon');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/**
 * Centralized Registration Link Handler
 * Handles Google Forms opening and modal alerts when link is not yet plugged in.
 */
function initRegistrationHandlers() {
  document.querySelectorAll('[data-reg-target]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const target = button.getAttribute('data-reg-target');
      handleRegistrationClick(target);
    });
  });
}

function handleRegistrationClick(targetKey, audience = 'auto') {
  const config = window.INNOVESTA_CONFIG || {};

  // 1. Main Festival Registration Form
  if (targetKey === 'main') {
    const url = config.links?.mainRegistration || 'https://forms.gle/QyK7xbq6gfpCm2Y29';
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  // 2. Alumni Farewell -> Direct to farewell form
  if (targetKey === 'alumni') {
    const url = config.links?.alumniFarewell || 'https://forms.gle/aY9GQFuZG6a84gYh9';
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  // 3. Segment with custom Google Form
  if (config.links?.segments && config.links.segments[targetKey]) {
    const seg = config.links.segments[targetKey];
    let url = '';
    if (typeof seg === 'string') {
      url = seg;
    } else if (seg && typeof seg === 'object') {
      url = (audience === 'sub') ? (seg.subStudents || '') : (seg.external || '');
    }

    if (url && url.startsWith('http') && (url.includes('forms.gle/') || url.includes('docs.google.com/forms'))) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
  }

  // 4. All other registrations redirect directly to coming-soon.html (NO POPUPS)
  const segTitle = formatSegmentTitle(targetKey);
  const redirectUrl = `coming-soon.html?segment=${encodeURIComponent(segTitle)}&cat=${encodeURIComponent(audience)}`;
  window.location.href = redirectUrl;
}

function handleSegmentBranch(targetKey, audience, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  closeAllCardDropdowns();
  handleRegistrationClick(targetKey, audience);
}

function toggleCardDropdown(btn, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const parent = btn.closest('.relative');
  if (!parent) return;
  const dropdown = parent.querySelector('.card-dropdown');
  const chevron = btn.querySelector('.dropdown-chevron, svg, i');

  const isAlreadyOpen = dropdown && !dropdown.classList.contains('hidden');

  closeAllCardDropdowns();

  if (dropdown && !isAlreadyOpen) {
    dropdown.classList.remove('hidden');
    if (chevron) chevron.classList.add('rotate-180');
    const card = btn.closest('.glass-card');
    if (card) {
      card.style.zIndex = '40';
      card.classList.add('relative');
    }
  }
}

function closeAllCardDropdowns() {
  document.querySelectorAll('.card-dropdown').forEach(dd => {
    dd.classList.add('hidden');
  });
  document.querySelectorAll('.dropdown-chevron, .reg-dropdown-btn i, .reg-dropdown-btn svg').forEach(ch => {
    ch.classList.remove('rotate-180');
  });
  document.querySelectorAll('.glass-card').forEach(c => {
    c.style.zIndex = '';
  });
}

// Global click listener to close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.card-dropdown') && !e.target.closest('.reg-dropdown-btn')) {
    closeAllCardDropdowns();
  }
});

// Expose helpers globally
window.toggleCardDropdown = toggleCardDropdown;
window.handleSegmentBranch = handleSegmentBranch;
window.closeAllCardDropdowns = closeAllCardDropdowns;

function formatSegmentTitle(key) {
  const names = {
    programmingContest: 'Competitive Programming',
    projectShowcasing: 'Project Showcasing',
    roboSoccer: 'Robo Soccer',
    itQuiz: 'IT Quiz',
    freeFire: 'Free Fire LAN Tournament',
    eFootball: 'E-Football Tournament',
    consoleGaming: 'Console Gaming: Street Fighter'
  };
  return names[key] || 'Segment Registration';
}

/**
 * Registration Notice Modal (Shown when organizer has yet to replace placeholder or when reviewing steps)
 */
/**
 * Direct Registration Redirect (Popups removed per user request)
 */
function openRegistrationNoticeModal(title, targetKey, currentUrl, audience = 'auto') {
  handleRegistrationClick(targetKey, audience);
}

/**
 * Modals & Teaser Preview
 */
function initModals() {
  // Close buttons on all modals
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close when clicking overlay backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Segment Detail Card buttons
  document.querySelectorAll('[data-view-segment]').forEach(btn => {
    btn.addEventListener('click', () => {
      const segId = btn.getAttribute('data-view-segment');
      openSegmentDetails(segId);
    });
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.classList.add('modal-hidden');
  });
  document.body.classList.remove('overflow-hidden');
}

/**
 * Segment Detail Modal Data
 */
const SEGMENT_DETAILS = {
  programmingContest: {
    title: "Competitive Programming (All Southern University Students)",
    badge: "All Southern Students",
    isInterUni: false,
    date: "Day 1: November 3, 2026",
    venue: "CSE Computer Labs, Southern University",
    teamSize: "Individual / Team of up to 3",
    fee: "Included for CSE & CSIT Students / Open to all Southern Depts",
    description: "Flagship algorithmic problem-solving showdown open to all students of Southern University Bangladesh across all departments (CSE, CSIT, EEE, Civil, BBA, Pharmacy, Law, English, etc.).",
    highlights: [
      "Open to all students of Southern University Bangladesh",
      "Rigorous problem set prepared by veteran competitive programmers",
      "Live dynamic scoreboard and balloon distribution",
      "Prestigious awards, crests, and certificates for top podium finishers"
    ],
    targetKey: "programmingContest"
  },
  projectShowcasing: {
    title: "Project Showcasing (Open Competition)",
    badge: "Inter-University & Other Departments",
    isInterUni: true,
    date: "November 3 & November 5, 2026",
    venue: "Main Campus Tech Exhibit Arena",
    teamSize: "1 to 4 Members per team",
    fee: "Segment Fee via bKash / Included for Southern CSE & CSIT Students",
    description: "Display innovative software, AI/ML models, IoT systems, and robotics hardware before high-profile industry judges. Open to teams from all universities across Bangladesh as well as other departments of Southern University!",
    highlights: [
      "Open to university student teams nationwide and other Southern University departments",
      "Live booth exhibit open to 1,000+ attendees",
      "Direct pitching session to corporate tech recruiters & judges",
      "Exclusive mentor feedback and awards for Best Innovation & Design"
    ],
    targetKey: "projectShowcasing"
  },
  roboSoccer: {
    title: "Robo Soccer (Open Competition)",
    badge: "Inter-University & Other Departments",
    isInterUni: true,
    date: "Day 1: November 3, 2026",
    venue: "Robotics Combat Arena, Ground Floor",
    teamSize: "2 to 4 Members per bot team",
    fee: "Segment Fee via bKash / Included for Southern CSE & CSIT Students",
    description: "High-octane robotic soccer showdown! Build, pilot, and maneuver custom-engineered wireless soccer bots to dominate possession and strike goals in a tense stadium arena. Open nationwide and to other Southern departments!",
    highlights: [
      "Open to robotics teams from all universities and other Southern departments",
      "Custom regulations compliant with national robo soccer standards",
      "High-speed wireless communication and obstacle navigation",
      "Huge cheering crowd and live stadium commentary"
    ],
    targetKey: "roboSoccer"
  },
  itQuiz: {
    title: "IT Quiz (Open Competition)",
    badge: "Inter-University & Other Departments",
    isInterUni: true,
    date: "Day 1: November 3, 2026",
    venue: "Auditorium / Seminar Hall",
    teamSize: "Teams of 2",
    fee: "Segment Fee via bKash / Included for Southern CSE & CSIT Students",
    description: "Put your technical knowledge to the ultimate test. Topics span algorithms, CS fundamentals, cybersecurity, tech history, and breakthrough AI developments. Open to all universities and other Southern departments!",
    highlights: [
      "Open to 2-member teams from all universities and other Southern departments",
      "Rapid buzzer rounds, visual tech clues, and sudden-death questions",
      "Exciting cash awards and trophies"
    ],
    targetKey: "itQuiz"
  },
  freeFire: {
    title: "Free Fire LAN Tournament (Open Competition)",
    badge: "Inter-University & Other Departments",
    isInterUni: true,
    date: "Prelims Online • LAN Finals Nov 3, 2026",
    venue: "Esports Arena, Campus Hall",
    teamSize: "Squad (4 Players + 1 Sub)",
    fee: "Segment Fee via bKash / Included for Southern CSE & CSIT Students",
    description: "Flagship Free Fire tournament. Open to squads from all universities across Bangladesh as well as students from other departments within Southern University! Qualify through online brackets for live campus LAN finals.",
    highlights: [
      "Open to squads from all universities and other Southern departments",
      "Official room matches with strict anti-cheat monitoring",
      "Live big-screen projection with real-time casting",
      "Champion trophy and official esports certificates"
    ],
    targetKey: "freeFire"
  },
  eFootball: {
    title: "E-Football Tournament (Online, Open Competition)",
    badge: "Inter-University & Other Departments",
    isInterUni: true,
    date: "Day 1 Online Matches",
    venue: "Online Competitive Bracket",
    teamSize: "1v1 Solo",
    fee: "Segment Fee via bKash / Included for Southern CSE & CSIT Students",
    description: "Test your tactical vision, pinpoint passing, and clutch goal-scoring in the official Innovesta E-Football tournament. Played online with live knockout brackets. Open to all universities and other Southern departments!",
    highlights: [
      "Open to students from all universities and other Southern departments",
      "Official 1v1 competitive rule set",
      "Convenient online fixture scheduling",
      "Grand finals streamed to attendees"
    ],
    targetKey: "eFootball"
  },
  consoleGaming: {
    title: "Console Gaming: Street Fighter (CSE & CSIT Only)",
    badge: "Southern CSE & CSIT Only",
    isInterUni: false,
    date: "Day 1: November 3, 2026",
    venue: "Gaming Zone, Main Lounge",
    teamSize: "1v1 Solo",
    fee: "Included with 1,000 BDT Student Registration",
    description: "Classic fighting game mayhem on campus! Step up to the console controls to battle through a double-elimination Street Fighter tournament in the campus lounge.",
    highlights: [
      "Exclusively for Southern University CSE & CSIT students",
      "Ultra-low latency tournament displays",
      "Instant crowd hype and quick-fire rounds"
    ],
    targetKey: "consoleGaming"
  }
};

function openSegmentDetails(segId) {
  const data = SEGMENT_DETAILS[segId];
  if (!data) return;

  const modal = document.getElementById('segment-detail-modal');
  if (!modal) return;

  document.getElementById('seg-modal-title').textContent = data.title;
  document.getElementById('seg-modal-badge').textContent = data.badge;
  document.getElementById('seg-modal-date').textContent = data.date;
  document.getElementById('seg-modal-venue').textContent = data.venue;
  document.getElementById('seg-modal-team').textContent = data.teamSize;
  document.getElementById('seg-modal-fee').textContent = data.fee;
  document.getElementById('seg-modal-desc').textContent = data.description;

  const highlightsList = document.getElementById('seg-modal-highlights');
  if (highlightsList) {
    highlightsList.innerHTML = data.highlights.map(h => `
      <li class="flex items-start gap-2 text-slate-300 text-sm">
        <span class="text-cyan-400 mt-0.5">✦</span>
        <span>${h}</span>
      </li>
    `).join('');
  }

  const regBtn = document.getElementById('seg-modal-reg-btn');
  if (regBtn) {
    regBtn.setAttribute('data-reg-target', data.targetKey);
    // Remove old listeners and re-attach
    regBtn.onclick = (e) => {
      e.preventDefault();
      closeAllModals();
      handleRegistrationClick(data.targetKey);
    };
  }

  const subBtn = document.getElementById('seg-modal-sub-btn');
  const extBtn = document.getElementById('seg-modal-ext-btn');

  if (subBtn) {
    subBtn.href = `coming-soon.html?segment=${encodeURIComponent(data.title)}&cat=sub`;
    subBtn.target = "_self";
    subBtn.rel = "";
    subBtn.onclick = null;
  }

  if (extBtn) {
    if (data.targetKey === 'consoleGaming') {
      extBtn.classList.add('hidden');
    } else {
      extBtn.classList.remove('hidden');
      extBtn.href = `coming-soon.html?segment=${encodeURIComponent(data.title)}&cat=external`;
      extBtn.target = "_self";
      extBtn.onclick = null;
    }
  }

  modal.classList.remove('modal-hidden');
  document.body.classList.add('overflow-hidden');
}

/**
 * Copy to Clipboard Helper with Visual Toast
 */
function copyToClipboard(text, message = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    console.error('Fallback copy error', err);
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-slate-900/90 text-cyan-300 border border-cyan-400/40 backdrop-blur-md shadow-2xl text-sm font-medium transition-all duration-300 transform translate-y-10 opacity-0 flex items-center gap-2';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.remove('translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}

// Global copy helper
window.copyToClipboard = copyToClipboard;

