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

function handleRegistrationClick(targetKey) {
  const config = window.INNOVESTA_CONFIG || {};
  let url = '';
  let title = 'Registration';

  if (targetKey === 'main') {
    url = config.links?.mainRegistration || '';
    title = 'Innovesta 2026 - Main All-Access Pass Registration';
  } else if (targetKey === 'alumni') {
    url = config.links?.alumniFarewell || '';
    title = 'Innovesta 2026 - Alumni Farewell Registration';
  } else if (config.links?.segments && config.links.segments[targetKey]) {
    url = config.links.segments[targetKey];
    title = formatSegmentTitle(targetKey);
  }

  // Check if link is a real custom Google Form (not just empty or default placeholder)
  const isCustomConfigured = url && url.length > 25 && !url.endsWith('forms.google.com/') && !url.endsWith('#');

  if (isCustomConfigured) {
    // Open Google Form in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    // Open the informative Registration Hub Modal
    openRegistrationNoticeModal(title, targetKey, url);
  }
}

function formatSegmentTitle(key) {
  const names = {
    programmingContest: 'Programming Contest (Southern University Only)',
    projectShowcasing: 'Project Showcasing (Inter-University)',
    roboSoccer: 'Robo Soccer (Inter-University)',
    itQuiz: 'IT Quiz (Inter-University)',
    freeFire: 'Free Fire LAN Tournament (Inter-University)',
    eFootball: 'E-Football Tournament (Online, Inter-University)',
    consoleGaming: 'Console Gaming: Street Fighter (Southern University Only)'
  };
  return names[key] || 'Segment Registration';
}

/**
 * Registration Notice Modal (Shown when organizer has yet to replace placeholder or when reviewing steps)
 */
function openRegistrationNoticeModal(title, targetKey, currentUrl) {
  const modal = document.getElementById('reg-notice-modal');
  const modalTitle = document.getElementById('reg-modal-title');
  const directBtn = document.getElementById('reg-modal-direct-btn');
  const modalBadge = document.getElementById('reg-modal-badge');
  const modalBody = document.getElementById('reg-modal-body');

  if (!modal) return;

  if (modalTitle) modalTitle.textContent = title;

  if (directBtn) {
    directBtn.href = currentUrl || 'https://forms.google.com/';
  }

  const interUniKeys = ['roboSoccer', 'projectShowcasing', 'itQuiz', 'freeFire', 'eFootball'];
  const southernOnlyKeys = ['programmingContest', 'consoleGaming'];

  // Tailor content based on registration category
  if (targetKey === 'alumni') {
    if (modalBadge) {
      modalBadge.textContent = 'Farewell Pass • 1,500 BDT';
      modalBadge.className = 'text-xs uppercase tracking-wider text-rose-400 font-bold';
    }
    if (modalBody) {
      modalBody.innerHTML = `
        <p class="text-slate-300 text-sm">
          Farewell registrations must be confirmed by paying <strong class="text-rose-400 font-bold">1,500 BDT</strong> via <strong class="text-white">bKash Send Money</strong>:
        </p>

        <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 space-y-2 text-xs text-slate-200">
          <div class="flex items-center justify-between pb-2 border-b border-rose-500/20">
            <span class="text-rose-300 font-semibold">bKash Send Money Number:</span>
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-white text-sm">01610181160</span>
              <button type="button" onclick="copyToClipboard('01610181160', 'bKash Number Copied!')" class="text-cyan-400 hover:text-white underline text-[11px]">Copy</button>
            </div>
          </div>
          <div class="flex items-start gap-2 pt-1">
            <span class="text-rose-400 font-bold">1.</span>
            <span>Send <strong class="text-white">1,500 BDT</strong> via bKash <strong>Send Money</strong> to the number above by <strong class="text-rose-300">Oct 17, 2026</strong>.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-rose-400 font-bold">2.</span>
            <span>Save your <strong class="text-white">Transaction ID (TrxID)</strong> and screenshot the confirmation.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-rose-400 font-bold">3.</span>
            <span>Fill out the Farewell Google Form with your TrxID before <strong class="text-cyan-300">Oct 27, 2026</strong>.</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200">
          ℹ️ <strong>For Organizers / Admin:</strong> To link your official Alumni Farewell Google Form, open <code class="text-white bg-slate-800 px-1.5 py-0.5 rounded">js/registration-links.js</code> and paste the URL under <code class="text-white bg-slate-800 px-1.5 py-0.5 rounded">alumniFarewell</code>.
        </div>
      `;
    }
  } else if (interUniKeys.includes(targetKey)) {
    if (modalBadge) {
      modalBadge.textContent = '🌐 Inter-University Competition';
      modalBadge.className = 'text-xs uppercase tracking-wider text-cyan-400 font-bold';
    }
    if (modalBody) {
      modalBody.innerHTML = `
        <p class="text-slate-300 text-sm">
          Open to students from <strong class="text-white">all universities across Bangladesh</strong>!
        </p>

        <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-2.5 text-xs text-slate-200">
          <div class="flex items-center justify-between pb-2 border-b border-cyan-500/20">
            <span class="text-cyan-300 font-semibold">bKash Send Money:</span>
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-white text-sm">01610181160</span>
              <button type="button" onclick="copyToClipboard('01610181160', 'bKash Number Copied!')" class="text-cyan-400 hover:text-white underline text-[11px]">Copy</button>
            </div>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">&bull;</span>
            <span><strong>Payment Method:</strong> Students from other universities pay their segment fee via <strong>bKash Send Money</strong>.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">&bull;</span>
            <span><strong>Segment Fee:</strong> Entry fees for this contest will be announced directly inside the official registration form.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">&bull;</span>
            <span>Save your <strong>bKash Transaction ID (TrxID)</strong> and submit it inside the segment registration form.</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
          🏛️ <strong>For Southern University Students:</strong> If you hold the <strong class="text-white">1,000 BDT All-Access Student Pass</strong>, this competition is <strong class="text-cyan-400">100% Free</strong> with zero additional entry fee!
        </div>
      `;
    }
  } else if (southernOnlyKeys.includes(targetKey)) {
    if (modalBadge) {
      modalBadge.textContent = '🏛️ Southern University Only (CSE & CSIT)';
      modalBadge.className = 'text-xs uppercase tracking-wider text-amber-400 font-bold';
    }
    if (modalBody) {
      modalBody.innerHTML = `
        <p class="text-slate-300 text-sm">
          This competition is open exclusively to students of <strong class="text-white">Southern University Bangladesh (Dept. of CSE &amp; CSIT)</strong>.
        </p>

        <div class="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-200">
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">&bull;</span>
            <span>Included <strong>100% Free</strong> with your <strong class="text-white">1,000 BDT All-Access Student Pass</strong>.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">&bull;</span>
            <span>Pay 1,000 BDT in cash directly to your assigned <strong>Batch Representative</strong> by Oct 17, 2026.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">&bull;</span>
            <span>Submit the registration form with your receipt serial before Oct 27, 2026.</span>
          </div>
        </div>
      `;
    }
  } else {
    // Current Student Pass (targetKey === 'main')
    if (modalBadge) {
      modalBadge.textContent = 'Current Student Pass • 1,000 BDT';
      modalBadge.className = 'text-xs uppercase tracking-wider text-cyan-400 font-bold';
    }
    if (modalBody) {
      modalBody.innerHTML = `
        <p class="text-slate-300 text-sm">
          Current Southern University students must pay <strong class="text-cyan-400 font-bold">1,000 BDT</strong> directly to their <strong class="text-white">Batch Representative</strong> to confirm their registration:
        </p>

        <div class="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-200">
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">1.</span>
            <span>Pay <strong class="text-white">1,000 BDT in cash</strong> directly to your assigned <strong>Batch Representative</strong> by <strong class="text-rose-300">Oct 17, 2026</strong>.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">2.</span>
            <span>Collect your <strong class="text-white">payment receipt or serial number</strong> from them.</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold">3.</span>
            <span>Fill out the registration Google Form with your serial number before <strong class="text-cyan-300">Oct 27, 2026</strong>.</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200">
          ℹ️ <strong>For Organizers / Admin:</strong> To link your official Google Form, open <code class="text-white bg-slate-800 px-1.5 py-0.5 rounded">js/registration-links.js</code> and paste the URL in the designated field.
        </div>
      `;
    }
  }

  modal.classList.remove('modal-hidden');
  document.body.classList.add('overflow-hidden');
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
    title: "Programming Contest (Southern University Only)",
    badge: "Southern CSE & CSIT Only",
    isInterUni: false,
    date: "Day 1: November 3, 2026",
    venue: "CSE Computer Labs, Southern University",
    teamSize: "Individual / Team of up to 3",
    fee: "Free with 1,000 BDT Student Pass",
    description: "Exclusive algorithmic showdown for students of Southern University Bangladesh (Dept. of CSE & CSIT). Test your algorithmic thinking, problem-solving, and implementation speed.",
    highlights: [
      "Rigorous problem set prepared by veteran competitive programmers",
      "Live dynamic scoreboard and balloon distribution",
      "Prestigious awards, crests, and certificates for top podium finishers"
    ],
    targetKey: "programmingContest"
  },
  projectShowcasing: {
    title: "Project Showcasing (Inter-University)",
    badge: "Open to All Universities",
    isInterUni: true,
    date: "November 3 & November 5, 2026",
    venue: "Main Campus Tech Exhibit Arena",
    teamSize: "1 to 4 Members per team",
    fee: "bKash (Fee announced in form) / Free for Southern Pass Holders",
    description: "Display innovative software, AI/ML models, IoT systems, and robotics hardware before high-profile industry judges, venture mentors, and corporate sponsors. Open to teams from all universities across Bangladesh!",
    highlights: [
      "Open to university student teams from across Bangladesh",
      "Live booth exhibit open to 1,000+ attendees",
      "Direct pitching session to corporate tech recruiters & judges",
      "Exclusive mentor feedback and awards for Best Innovation & Design"
    ],
    targetKey: "projectShowcasing"
  },
  roboSoccer: {
    title: "Robo Soccer (Inter-University)",
    badge: "Open to All Universities",
    isInterUni: true,
    date: "Day 1: November 3, 2026",
    venue: "Robotics Combat Arena, Ground Floor",
    teamSize: "2 to 4 Members per bot team",
    fee: "bKash (Fee announced in form) / Free for Southern Pass Holders",
    description: "High-octane robotic soccer showdown! Build, pilot, and maneuver custom-engineered wireless soccer bots to dominate possession and strike goals in a tense, enclosed stadium. Open to all universities!",
    highlights: [
      "Open to university engineering & robotics teams nationwide",
      "Custom regulations compliant with national robo soccer standards",
      "High-speed wireless communication and obstacle navigation",
      "Huge cheering crowd and live stadium commentary"
    ],
    targetKey: "roboSoccer"
  },
  itQuiz: {
    title: "IT Quiz (Inter-University)",
    badge: "Open to All Universities",
    isInterUni: true,
    date: "Day 1: November 3, 2026",
    venue: "Auditorium / Seminar Hall",
    teamSize: "Teams of 2",
    fee: "bKash (Fee announced in form) / Free for Southern Pass Holders",
    description: "Put your technical knowledge to the ultimate test. Topics span algorithms, CS fundamentals, cybersecurity, tech history, breakthrough AI developments, and emerging hardware. Open to students from all universities!",
    highlights: [
      "Open to 2-member teams from all Bangladeshi universities",
      "Rapid buzzer rounds, visual tech clues, and sudden-death questions",
      "Exciting cash awards and trophies"
    ],
    targetKey: "itQuiz"
  },
  freeFire: {
    title: "Free Fire LAN Tournament (Inter-University)",
    badge: "Open to All Universities",
    isInterUni: true,
    date: "Prelims Online • LAN Finals Nov 3, 2026",
    venue: "Esports Arena, Campus Hall",
    teamSize: "Squad (4 Players + 1 Sub)",
    fee: "bKash (Fee announced in form) / Free for Southern Pass Holders",
    description: "Southern University's largest Free Fire tournament yet. Open to squads from all universities across Bangladesh! Qualify through high-intensity online brackets and fight for the ultimate championship live on campus.",
    highlights: [
      "Open to university squads across Bangladesh",
      "Official room matches with strict anti-cheat monitoring",
      "Live big-screen projection with real-time casting",
      "Champion trophy and official esports certificates"
    ],
    targetKey: "freeFire"
  },
  eFootball: {
    title: "E-Football Tournament (Online, Inter-University)",
    badge: "Open to All Universities",
    isInterUni: true,
    date: "Day 1 Online Matches",
    venue: "Online Competitive Bracket",
    teamSize: "1v1 Solo",
    fee: "bKash (Fee announced in form) / Free for Southern Pass Holders",
    description: "Test your tactical vision, pinpoint passing, and clutch goal-scoring in the official Innovesta E-Football tournament. Played online with live knockout brackets. Open to all university competitors nationwide!",
    highlights: [
      "Open to university students nationwide",
      "Official 1v1 competitive rule set",
      "Convenient online fixture scheduling",
      "Grand finals streamed to attendees"
    ],
    targetKey: "eFootball"
  },
  consoleGaming: {
    title: "Console Gaming: Street Fighter (Southern University Only)",
    badge: "Southern Students Only",
    isInterUni: false,
    date: "Day 1: November 3, 2026",
    venue: "Gaming Zone, Main Lounge",
    teamSize: "1v1 Solo",
    fee: "Free with 1,000 BDT Student Pass",
    description: "Classic fighting game mayhem on campus! Step up to the console controls to battle through a double-elimination Street Fighter tournament in the campus lounge.",
    highlights: [
      "Exclusively for Southern University students",
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

