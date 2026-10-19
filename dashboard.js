/* ==========================================================================
   AUTHENTIC VETOX.IO CONTROLLER & MULTILINGUAL (4-LANGUAGE) ENGINE
   ========================================================================== */

const vxTranslations = {
  ar: {
    login_discord: "تسجيل الدخول عبر ديسكورد",
    welcome_guest: "مرحباً بك في THRYN",
    crumb_profile: "الملف الشخصي",
    crumb_overview: "نظرة عامة",
    crumb_daily: "المكافأة اليومية",
    crumb_prof_custom: "تخصيص الملف الشخصي",
    crumb_rank_custom: "تخصيص بطاقة الرتبة",
    crumb_richest: "أغنى المستخدمين",
    crumb_keyboard: "قادة الخبرة",
    welcome_prefix: "مرحباً بعودتك",
    welcome_title: "مرحباً بعودتك Fragment،",
    welcome_desc: "احصل على نظرة شاملة لجميع أنشطتك في THRYN.",
    stat_balance: "رصيد Royals",
    stat_reputation: "السمعة",
    stat_rank: "الرتبة",
    stat_level: "المستوى",
    chart_title: "رصيد Royals",
    chart_desc: "تتبع رصيدك عبر الوقت",
    chart_period: "3 أشهر",
    tx_title: "سجل معاملات Royals",
    tx_desc: "النشاط الأخير",
    tx_empty: "لا توجد معاملات مسجلة",
    reward_ranking: "الترتيب",
    reward_start: "بداية الستريك",
    reward_end: "نهاية الستريك (0/7)",
    reward_claim_btn: "استلام المكافأة",
    reward_claimed: "تم الاستلام لهذا اليوم!",
    prof_title: "تخصيص الملف الشخصي",
    prof_desc: "خصّص ملفك الشخصي بخلفيات وصور فريدة",
    rank_title: "تخصيص بطاقة الرتبة",
    rank_desc: "خصّص بطاقة رتبتك بخلفيات وبانرات استثنائية",
    pill_backgrounds: "الخلفيات",
    pill_colors: "الألوان",
    sec_all_backgrounds: "جميع الخلفيات",
    settings_title: "الإعدادات",
    settings_devices: "الأجهزة",
    settings_devices_desc: "إدارة الأجهزة المسجلة في حسابك",
    device_current: "الحالي",
    settings_logout: "تسجيل الخروج",
    nav_main: "الرئيسية",
    nav_overview: "نظرة عامة",
    nav_daily: "المكافأة اليومية",
    nav_utilities: "الأدوات والتخصيص",
    nav_prof_custom: "تخصيص الحساب",
    nav_rank_custom: "تخصيص الرتبة",
    nav_leaderboard: "لوحة المتصدرين",
    nav_richest: "أغنى المستخدمين",
    nav_keyboard: "قادة الخبرة"
  },
  en: {
    login_discord: "Login with Discord",
    welcome_guest: "Welcome to THRYN",
    crumb_profile: "Profile",
    crumb_overview: "Overview",
    crumb_daily: "Daily Reward",
    crumb_prof_custom: "Profile Customization",
    crumb_rank_custom: "Rank Customization",
    crumb_richest: "Richest Users",
    crumb_keyboard: "Keyboard Brokers",
    welcome_prefix: "Welcome back",
    welcome_title: "Welcome back Fragment,",
    welcome_desc: "Get a comprehensive overview of all your THRYN activity.",
    stat_balance: "Royals Balance",
    stat_reputation: "Reputation",
    stat_rank: "Rank",
    stat_level: "Level",
    chart_title: "Royals Balance",
    chart_desc: "Track your Royals balance over time",
    chart_period: "3 Months",
    tx_title: "Royals Transactions",
    tx_desc: "Recent activity",
    tx_empty: "No transactions found",
    reward_ranking: "RANKING",
    reward_start: "Start Streak",
    reward_end: "End Streak (0/7)",
    reward_claim_btn: "Claim",
    reward_claimed: "Claimed Today!",
    prof_title: "Profile Customization",
    prof_desc: "Personalize your profile with unique avatars and customization items",
    rank_title: "Rank Customization",
    rank_desc: "Personalize your rank card with unique backgrounds",
    pill_backgrounds: "Backgrounds",
    pill_colors: "Colors",
    sec_all_backgrounds: "All Backgrounds",
    settings_title: "Settings",
    settings_devices: "Devices",
    settings_devices_desc: "Manage devices that are logged into your account",
    device_current: "Current",
    settings_logout: "Logout",
    nav_main: "MAIN",
    nav_overview: "Overview",
    nav_daily: "Daily Reward",
    nav_utilities: "UTILITIES",
    nav_prof_custom: "Profile Customization",
    nav_rank_custom: "Rank Customization",
    nav_leaderboard: "LEADERBOARD",
    nav_richest: "Richest Users",
    nav_keyboard: "Keyboard Brokers"
  },
  fr: {
    login_discord: "Connexion avec Discord",
    welcome_guest: "Bienvenue sur THRYN",
    crumb_profile: "Profil",
    crumb_overview: "Aperçu",
    crumb_daily: "Récompense quotidienne",
    crumb_prof_custom: "Personnalisation du profil",
    crumb_rank_custom: "Personnalisation du rang",
    crumb_richest: "Utilisateurs les plus riches",
    crumb_keyboard: "Courtiers de clavier",
    welcome_prefix: "Bon retour",
    welcome_title: "Bon retour Fragment,",
    welcome_desc: "Obtenez un aperçu complet de toutes vos activités.",
    stat_balance: "Solde Royals",
    stat_reputation: "Réputation",
    stat_rank: "Rang",
    stat_level: "Niveau",
    chart_title: "Solde Royals",
    chart_desc: "Suivez votre solde au fil du temps",
    chart_period: "3 Mois",
    tx_title: "Transactions Royals",
    tx_desc: "Activité récente",
    tx_empty: "Aucune transaction trouvée",
    reward_ranking: "CLASSEMENT",
    reward_start: "Début de série",
    reward_end: "Fin de série (0/7)",
    reward_claim_btn: "Réclamer",
    reward_claimed: "Réclamé aujourd'hui !",
    prof_title: "Personnalisation du profil",
    prof_desc: "Personnalisez votre profil avec des éléments uniques",
    rank_title: "Personnalisation du rang",
    rank_desc: "Personnalisez votre carte de rang avec des arrière-plans",
    pill_backgrounds: "Arrière-plans",
    pill_colors: "Couleurs",
    sec_all_backgrounds: "Tous les arrière-plans",
    settings_title: "Paramètres",
    settings_devices: "Appareils",
    settings_devices_desc: "Gérer les appareils connectés",
    device_current: "Actuel",
    settings_logout: "Déconnexion",
    nav_main: "PRINCIPAL",
    nav_overview: "Aperçu",
    nav_daily: "Récompense quotidienne",
    nav_utilities: "UTILITAIRES",
    nav_prof_custom: "Personnalisation du profil",
    nav_rank_custom: "Personnalisation du rang",
    nav_leaderboard: "CLASSEMENT",
    nav_richest: "Utilisateurs les plus riches",
    nav_keyboard: "Courtiers de clavier"
  },
  tr: {
    login_discord: "Discord ile Giriş Yap",
    welcome_guest: "THRYN'e Hoş Geldiniz",
    crumb_profile: "Profil",
    crumb_overview: "Genel Bakış",
    crumb_daily: "Günlük Ödül",
    crumb_prof_custom: "Profil Özelleştirme",
    crumb_rank_custom: "Rütbe Özelleştirme",
    crumb_richest: "En Zengin Kullanıcılar",
    crumb_keyboard: "Klavye Komisyoncuları",
    welcome_prefix: "Tekrar hoş geldin",
    welcome_title: "Tekrar hoş geldin Fragment,",
    welcome_desc: "Tüm THRYN etkinliklerinize kapsamlı bir genel bakış alın.",
    stat_balance: "Royals Bakiyesi",
    stat_reputation: "İtibar",
    stat_rank: "Rütbe",
    stat_level: "Seviye",
    chart_title: "Royals Bakiyesi",
    chart_desc: "Zaman içindeki Royals bakiyenizi takip edin",
    chart_period: "3 Ay",
    tx_title: "Royals İşlemleri",
    tx_desc: "Son etkinlikler",
    tx_empty: "İşlem bulunamadı",
    reward_ranking: "SIRALAMA",
    reward_start: "Seriye Başla",
    reward_end: "Seri Sonu (0/7)",
    reward_claim_btn: "Talep Et",
    reward_claimed: "Bugün Talep Edildi!",
    prof_title: "Profil Özelleştirme",
    prof_desc: "Profilinizi benzersiz öğelerle özelleştirin",
    rank_title: "Rütbe Özelleştirme",
    rank_desc: "Rütbe kartınızı benzersiz arka planlarla özelleştirin",
    pill_backgrounds: "Arka Planlar",
    pill_colors: "Renkler",
    sec_all_backgrounds: "Tüm Arka Planlar",
    settings_title: "Ayarlar",
    settings_devices: "Cihazlar",
    settings_devices_desc: "Hesabınıza bağlı cihazları yönetin",
    device_current: "Geçerli",
    settings_logout: "Çıkış Yap",
    nav_main: "ANA MENÜ",
    nav_overview: "Genel Bakış",
    nav_daily: "Günlük Ödül",
    nav_utilities: "ARAÇLAR",
    nav_prof_custom: "Profil Özelleştirme",
    nav_rank_custom: "Rütbe Özelleştirme",
    nav_leaderboard: "LİDERLİK TABLOSU",
    nav_richest: "En Zengin Kullanıcılar",
    nav_keyboard: "Klavye Komisyoncuları"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. State Management
  let currentLang = localStorage.getItem('thryn_preferred_lang') || 'en';
  let userBalance = parseInt(localStorage.getItem('vetox_royals_balance') || localStorage.getItem('vetox_vito_balance') || '500', 10);
  let streakCount = parseInt(localStorage.getItem('vetox_streak_count') || '0', 10);
  let lastClaimDay = localStorage.getItem('vetox_last_claim_day') || '';

  if (!Number.isFinite(userBalance)) userBalance = 500;
  if (!Number.isFinite(streakCount)) streakCount = 0;
  streakCount = Math.min(Math.max(streakCount, 0), 7);

  let ownedItems = [];
  try {
    ownedItems = JSON.parse(localStorage.getItem('vetox_owned_items') || '[]');
    if (!Array.isArray(ownedItems)) ownedItems = [];
  } catch (e) {
    ownedItems = [];
  }

  // Reset the streak when a day was missed
  if (lastClaimDay) {
    const last = new Date(lastClaimDay);
    if (!isNaN(last.getTime())) {
      const lastMidnight = new Date(last.getFullYear(), last.getMonth(), last.getDate());
      const todayMidnight = new Date();
      todayMidnight.setHours(0, 0, 0, 0);
      const diffDays = Math.round((todayMidnight - lastMidnight) / 86400000);
      if (diffDays > 1) {
        streakCount = 0;
        localStorage.setItem('vetox_streak_count', '0');
      }
    }
  }

  // 2. Language Switcher Engine
  const langBtn = document.getElementById('vx-lang-toggle');
  const langDropdown = document.getElementById('vx-lang-dropdown');
  const langOptions = document.querySelectorAll('.vx-lang-opt');
  const currentFlagImg = document.getElementById('vx-current-flag');
  const currentLangLabel = document.getElementById('vx-current-lang-name');

  const flagSvgs = {
    ar: `<svg viewBox="0 0 32 24" class="vx-flag-icon"><rect width="32" height="24" fill="#006c35"/><path d="M7 16h18v2H7z" fill="#fff"/></svg>`,
    en: `<svg viewBox="0 0 32 24" class="vx-flag-icon"><rect width="32" height="24" fill="#b22234"/><rect y="2.5" width="32" height="2" fill="#fff"/><rect y="6.5" width="32" height="2" fill="#fff"/><rect y="10.5" width="32" height="2" fill="#fff"/><rect y="14.5" width="32" height="2" fill="#fff"/><rect y="18.5" width="32" height="2" fill="#fff"/><rect width="13" height="12" fill="#3c3b6e"/></svg>`,
    fr: `<svg viewBox="0 0 32 24" class="vx-flag-icon"><rect width="10.6" height="24" fill="#002395"/><rect x="10.6" width="10.6" height="24" fill="#fff"/><rect x="21.2" width="10.8" height="24" fill="#ed2939"/></svg>`,
    tr: `<svg viewBox="0 0 32 24" class="vx-flag-icon"><rect width="32" height="24" fill="#e30a17"/><circle cx="12" cy="12" r="6" fill="#fff"/><circle cx="13.5" cy="12" r="4.8" fill="#e30a17"/></svg>`
  };

  const langNames = {
    ar: "العربية",
    en: "English",
    fr: "Français",
    tr: "Türkçe"
  };

  function setLanguage(lang) {
    if (!vxTranslations[lang]) return;
    currentLang = lang;
    localStorage.setItem('thryn_preferred_lang', lang);

    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }

    if (currentFlagImg) currentFlagImg.innerHTML = flagSvgs[lang];
    if (currentLangLabel) currentLangLabel.textContent = langNames[lang];

    const dict = vxTranslations[lang];
    document.querySelectorAll('[data-vx-i18n]').forEach(el => {
      const key = el.getAttribute('data-vx-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    updateBreadcrumbs();
  }

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
        langDropdown.classList.remove('open');
      }
    });

    langOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const selected = opt.getAttribute('data-lang');
        setLanguage(selected);
        langDropdown.classList.remove('open');
      });
    });
  }

  // 3. Navigation & Breadcrumb System
  const navBtns = document.querySelectorAll('.vx-nav-btn[data-view]');
  const viewPanels = document.querySelectorAll('.vx-panel');
  const currentCrumbEl = document.getElementById('vx-crumb-active');
  let activeViewKey = 'overview';

  const crumbKeys = {
    'overview': 'crumb_overview',
    'daily-reward': 'crumb_daily',
    'profile-custom': 'crumb_prof_custom',
    'rank-custom': 'crumb_rank_custom',
    'lead-richest': 'crumb_richest',
    'lead-keyboard': 'crumb_keyboard'
  };

  function updateBreadcrumbs() {
    if (currentCrumbEl && crumbKeys[activeViewKey]) {
      const dict = vxTranslations[currentLang] || vxTranslations.en;
      currentCrumbEl.textContent = dict[crumbKeys[activeViewKey]];
    }
  }

  window.switchVetoxView = function(viewKey) {
    viewPanels.forEach(p => p.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));

    const targetPanel = document.getElementById(`vx-view-${viewKey}`);
    if (targetPanel) targetPanel.classList.add('active');

    const targetBtn = document.querySelector(`.vx-nav-btn[data-view="${viewKey}"]`);
    if (targetBtn) targetBtn.classList.add('active');

    activeViewKey = viewKey;
    updateBreadcrumbs();
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.vx-nav-btn[data-view]');
    if (btn) {
      const viewKey = btn.getAttribute('data-view');
      if (viewKey) switchVetoxView(viewKey);
    }
  });

  // Check URL parameter for view routing (e.g. ?view=daily-reward)
  const initialViewParam = new URLSearchParams(window.location.search).get('view');
  if (initialViewParam && crumbKeys[initialViewParam]) {
    switchVetoxView(initialViewParam);
  }

  // 4. Balance Sync
  const balanceCounterEl = document.getElementById('vx-balance-counter');
  function updateBalanceDisplay() {
    if (balanceCounterEl) {
      balanceCounterEl.textContent = userBalance.toLocaleString();
    }
    localStorage.setItem('vetox_royals_balance', userBalance.toString());
  }
  updateBalanceDisplay();

  // 5. Transactions Logging
  const txContainer = document.getElementById('vx-tx-container');
  const txEmptyState = document.getElementById('vx-tx-empty');

  function recordTransaction(name, amount) {
    if (!txContainer) return;
    if (txEmptyState) txEmptyState.style.display = 'none';

    const isPositive = amount > 0;
    const sign = isPositive ? '+' : '-';
    const now = new Date();
    const timeStr = `${now.getDate()}/${now.getMonth() + 1} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const row = document.createElement('div');
    row.className = 'vx-tx-item';
    row.innerHTML = `
      <div>
        <div style="font-weight: 700; color: #fff; font-size: 0.88rem;">${name}</div>
        <div style="font-size: 0.72rem; color: #525766;">${timeStr}</div>
      </div>
      <div style="font-weight: 800; font-size: 0.9rem; color: ${isPositive ? '#22c55e' : '#ef4444'};">
        ${sign}${Math.abs(amount)} Royals
      </div>
    `;

    txContainer.insertBefore(row, txContainer.firstChild);
  }

  // 6. Daily Reward 7-Day Streak Claim Logic
  const btnClaim = document.getElementById('vx-btn-claim');
  const streakEndLabel = document.getElementById('vx-streak-end-count');
  const streakNodes = document.querySelectorAll('.vx-streak-node');

  function updateStreakVisuals() {
    const dict = vxTranslations[currentLang] || vxTranslations.en;
    if (streakEndLabel) {
      const template = dict.reward_end || 'End Streak (0/7)';
      streakEndLabel.textContent = template.replace('0/7', `${streakCount}/7`);
    }
    streakNodes.forEach((node, idx) => {
      node.classList.remove('active', 'completed');
      if (idx < streakCount) {
        node.classList.add('completed');
      } else if (idx === streakCount) {
        node.classList.add('active');
      }
    });
  }

  function updateClaimButton() {
    if (!btnClaim) return;
    const dict = vxTranslations[currentLang] || vxTranslations.en;
    const claimedToday = lastClaimDay === new Date().toDateString();
    btnClaim.textContent = claimedToday
      ? (dict.reward_claimed || 'Claimed Today!')
      : (dict.reward_claim_btn || 'Claim');
    btnClaim.disabled = claimedToday;
  }

  updateStreakVisuals();
  updateClaimButton();

  if (btnClaim) {
    btnClaim.addEventListener('click', () => {
      const reward = 250;
      userBalance += reward;
      updateBalanceDisplay();

      streakCount = (streakCount >= 7) ? 1 : streakCount + 1;
      localStorage.setItem('vetox_streak_count', streakCount.toString());
      lastClaimDay = new Date().toDateString();
      localStorage.setItem('vetox_last_claim_day', lastClaimDay);

      updateStreakVisuals();
      updateClaimButton();
      recordTransaction('Claim Daily Reward', reward);

      showToast(`🎉 +${reward} Royals added! Streak: ${streakCount}/7`, 'success');
    });
  }

  // 7. Store Buy/Equip Handlers
  function saveOwnedItems() {
    try {
      localStorage.setItem('vetox_owned_items', JSON.stringify(ownedItems));
    } catch (e) {}
  }

  const storeCards = document.querySelectorAll('.vx-item-card[data-price]');
  storeCards.forEach(card => {
    const title = card.getAttribute('data-title') || 'Customization Item';

    if (ownedItems.includes(title)) {
      card.setAttribute('data-owned', 'true');
    }

    card.addEventListener('click', () => {
      const price = parseInt(card.getAttribute('data-price') || '500', 10);
      const isOwned = card.getAttribute('data-owned') === 'true';

      if (isOwned) {
        showToast(`Equipped "${title}" to your profile!`, 'info');
      } else {
        if (userBalance >= price) {
          userBalance -= price;
          updateBalanceDisplay();
          card.setAttribute('data-owned', 'true');
          if (!ownedItems.includes(title)) {
            ownedItems.push(title);
            saveOwnedItems();
          }
          recordTransaction(`Purchased: ${title}`, -price);
          showToast(`Successfully purchased "${title}" for ${price} Royals!`, 'success');
        } else {
          showToast(`Not enough Royals! Need ${price} Royals.`, 'error');
        }
      }
    });
  });

  // 8. Settings Modal Logic (Screenshot 5)
  const settingsBtn = document.getElementById('vx-open-settings');
  const settingsModal = document.getElementById('vx-settings-modal');
  const closeSettingsBtn = document.getElementById('vx-close-settings');

  if (settingsBtn && settingsModal) {
    settingsBtn.addEventListener('click', () => {
      settingsModal.classList.add('open');
    });
  }

  if (closeSettingsBtn && settingsModal) {
    closeSettingsBtn.addEventListener('click', () => {
      settingsModal.classList.remove('open');
    });
  }

  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) {
        settingsModal.classList.remove('open');
      }
    });
  }

  
  // =========================================================================
  // 10. DISCORD AUTHENTICATION & GUEST STATE CONTROLLER
  // =========================================================================
  function getDiscordAuthUser() {
    // 1. URL parameters (e.g. from Discord Bot or OAuth redirect)
    const params = new URLSearchParams(window.location.search);
    const urlUser = params.get('username') || params.get('user');
    const urlAvatar = params.get('avatar');
    const urlId = params.get('discord_id') || params.get('id');

    if (urlUser) {
      const authData = {
        username: urlUser,
        avatar: urlAvatar || 'https://cdn.discordapp.com/embed/avatars/0.png',
        discordId: urlId || '',
        isLoggedIn: true
      };
      try {
        localStorage.setItem('thryn_discord_user', JSON.stringify(authData));
      } catch (e) {}
      return authData;
    }

    // 2. Local storage
    try {
      const stored = JSON.parse(localStorage.getItem('thryn_discord_user') || 'null');
      if (stored && stored.isLoggedIn && stored.username) {
        return stored;
      }
    } catch (e) {}

    // 3. Not logged in (Default natural state)
    return null;
  }

  function applyDiscordAuthState(user) {
    const avatarImg = document.getElementById('vx-sidebar-avatar');
    const avatarPlaceholder = document.getElementById('vx-avatar-placeholder');
    const guestSlot = document.getElementById('vx-guest-slot');
    const authSlot = document.getElementById('vx-auth-slot');
    const usernameEl = document.getElementById('vx-sidebar-username');
    const welcomePrefix = document.getElementById('vx-welcome-prefix');
    const welcomeUsername = document.getElementById('vx-welcome-username');

    if (user && user.isLoggedIn && user.username) {
      // LOGGED IN VIA DISCORD
      if (avatarImg && user.avatar) {
        avatarImg.src = user.avatar;
        avatarImg.style.display = 'block';
      }
      if (avatarPlaceholder) avatarPlaceholder.style.display = 'none';

      if (usernameEl) usernameEl.textContent = user.username;
      if (guestSlot) guestSlot.style.display = 'none';
      if (authSlot) authSlot.style.display = 'flex';

      const dict = vxTranslations[currentLang] || vxTranslations.en;
      if (welcomePrefix) welcomePrefix.textContent = dict.welcome_prefix || 'Welcome back';
      if (welcomeUsername) {
        welcomeUsername.textContent = ` ${user.username},`;
        welcomeUsername.style.display = 'inline';
      }
    } else {
      // NOT LOGGED IN (NATURAL EMPTY GUEST STATE)
      if (avatarImg) {
        avatarImg.src = '';
        avatarImg.style.display = 'none';
      }
      if (avatarPlaceholder) avatarPlaceholder.style.display = 'flex';

      if (guestSlot) guestSlot.style.display = 'block';
      if (authSlot) authSlot.style.display = 'none';

      const dict = vxTranslations[currentLang] || vxTranslations.en;
      if (welcomePrefix) welcomePrefix.textContent = dict.welcome_guest || 'Welcome to THRYN';
      if (welcomeUsername) {
        welcomeUsername.textContent = '';
        welcomeUsername.style.display = 'none';
      }
    }
  }

  let discordUser = getDiscordAuthUser();
  applyDiscordAuthState(discordUser);

  // Hook into setLanguage to re-apply translation for welcome message
  const originalSetLanguage = setLanguage;
  setLanguage = function(lang) {
    originalSetLanguage(lang);
    updateStreakVisuals();
    updateClaimButton();
    applyDiscordAuthState(discordUser);
  };

  // Login Button Handler - Redirects to Real Discord OAuth2
  const discordLoginBtn = document.getElementById('vx-btn-discord-login');
  if (discordLoginBtn) {
    discordLoginBtn.addEventListener('click', () => {
      const clientId = '1504983246809595937';
      const redirectUri = encodeURIComponent('http://localhost:3000/dashboard.html');
      window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=identify`;
    });
  }

  // Handle Discord OAuth2 Implicit Callback from URL Hash (#access_token=...)
  async function handleDiscordOAuthCallback() {
    const rawHash = window.location.hash.substring(1);
    if (!rawHash) return;

    const hashParams = new URLSearchParams(rawHash);
    const accessToken = hashParams.get('access_token');
    const tokenType = hashParams.get('token_type') || 'Bearer';

    if (accessToken) {
      showToast('Authenticating with Discord...', 'info');
      try {
        const resp = await fetch('https://discord.com/api/users/@me', {
          headers: { Authorization: `${tokenType} ${accessToken}` }
        });
        if (resp.ok) {
          const uData = await resp.json();
          const avatarUrl = uData.avatar
            ? `https://cdn.discordapp.com/avatars/${uData.id}/${uData.avatar}.png?size=256`
            : `https://cdn.discordapp.com/embed/avatars/${(BigInt(uData.id) >> 22n) % 6n}.png`;
          const displayName = uData.global_name || uData.username;

          discordUser = {
            username: displayName,
            avatar: avatarUrl,
            discordId: uData.id,
            isLoggedIn: true
          };
          localStorage.setItem('thryn_discord_user', JSON.stringify(discordUser));
          history.replaceState(null, '', window.location.pathname + window.location.search);
          applyDiscordAuthState(discordUser);
          showToast(`🎉 Logged in as ${displayName}!`, 'success');
        } else {
          showToast('Failed to authenticate with Discord.', 'error');
        }
      } catch (err) {
        console.error('Discord OAuth error:', err);
        showToast('Discord connection error.', 'error');
      }
    }
  }

  handleDiscordOAuthCallback();

  // Public API for Bot / Discord Webhook login
  window.loginWithDiscord = function(userObj) {
    if (!userObj || !userObj.username) return;
    discordUser = {
      username: userObj.username,
      avatar: userObj.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png',
      discordId: userObj.id || '',
      isLoggedIn: true
    };
    try {
      localStorage.setItem('thryn_discord_user', JSON.stringify(discordUser));
    } catch (e) {}
    applyDiscordAuthState(discordUser);
    showToast(`Logged in as ${discordUser.username}`, 'success');
  };

  window.logoutDiscord = function() {
    discordUser = null;
    try {
      localStorage.removeItem('thryn_discord_user');
      localStorage.removeItem('thryn_user');
    } catch (e) {}
    applyDiscordAuthState(null);
    showToast('Logged out successfully', 'info');
  };

  // Settings modal logout link must clear the session before navigating away
  const modalLogoutLink = document.getElementById('vx-modal-logout');
  if (modalLogoutLink) {
    modalLogoutLink.addEventListener('click', () => {
      window.logoutDiscord();
    });
  }

  // 9. Toast Engine
  window.showToast = function(msg, type = 'info') {
    const shelf = document.getElementById('vx-toast-shelf');
    if (!shelf) return;

    const toast = document.createElement('div');
    toast.className = 'vx-toast';
    if (type === 'error') {
      toast.style.borderColor = '#ef4444';
      toast.style.color = '#fca5a5';
    } else if (type === 'success') {
      toast.style.borderColor = '#22c55e';
      toast.style.color = '#86efac';
    }
    toast.textContent = msg;

    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  };

  // Set initial language
  setLanguage(currentLang);
});
