// ==========================================
// 1. STATE UTAMA APLIKASI (DUKUNG MULTI-TARGET)
// ==========================================
let appData = {
  allowance: 0,
  periodDays: 7,
  autoSavePercent: 10,
  targets: [],          // Menggunakan array untuk menampung banyak target
  activeTargetId: null, // ID target yang sedang dipilih untuk ditampilkan di Beranda
  savingsTotal: 0,
  expenses: [],
  streakDays: 0,
  lastStreakDate: null,
  isCelebrated: false
};

// Daftar Lencana Pencapaian
const BADGES = [
  { id: 'first_save', name: 'Nabung Perdana', icon: '🌱', reqStreak: 0 },
  { id: 'streak_3', name: 'Hemat 3 Hari', icon: '⚡', reqStreak: 3 },
  { id: 'streak_7', name: 'Master 7 Hari', icon: '👑', reqStreak: 7 }
];

// ==========================================
// 2. HELPER FORMAT RUPIAH OTOMATIS
// ==========================================
function formatRupiahInput(e) {
  let value = e.target.value.replace(/[^0-9]/g, '');
  if (value) {
    let numberVal = parseInt(value, 10);
    e.target.value = 'Rp ' + numberVal.toLocaleString('id-ID');
  } else {
    e.target.value = '';
  }
}

function parseRupiahValue(textValue) {
  if (!textValue) return 0;
  const cleanNumber = textValue.replace(/[^0-9]/g, '');
  return parseFloat(cleanNumber) || 0;
}

// ==========================================
// 3. INISIALISASI HALAMAN (DOM LOADED)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadData();
  registerEvents();
  initTabNavigation();
  render();
});

// ==========================================
// 4. NAVIGASI TAB BAWAH (BERANDA / TARGET)
// ==========================================
function initTabNavigation() {
  const navHomeBtn = document.getElementById('navHomeBtn');
  const navSettingsBtn = document.getElementById('navSettingsBtn');
  const tabHome = document.getElementById('tabHome');
  const tabSettings = document.getElementById('tabSettings');

  navHomeBtn.addEventListener('click', () => {
    navHomeBtn.classList.add('active');
    navSettingsBtn.classList.remove('active');
    tabHome.classList.add('active-tab');
    tabSettings.classList.remove('active-tab');
  });

  navSettingsBtn.addEventListener('click', () => {
    navSettingsBtn.classList.add('active');
    navHomeBtn.classList.remove('active');
    tabSettings.classList.add('active-tab');
    tabHome.classList.remove('active-tab');
  });
}

// ==========================================
// 5. FITUR TEMA (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem('sakuquest_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.textContent = theme === 'light' ? '☀️' : '🌙';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('sakuquest_theme', newTheme);
  updateThemeIcon(newTheme);
}

// ==========================================
// 6. PENYIMPANAN DATA (LOCALSTORAGE)
// ==========================================
function loadData() {
  const saved = localStorage.getItem('sakuquest_data');
  if (saved) {
    const parsed = JSON.parse(saved);
    appData = { ...appData, ...parsed };
    
    // Migrasi data lama (jika sebelumnya pengguna menggunakan target tunggal)
    if (!appData.targets) appData.targets = [];
    if (parsed.targetName && appData.targets.length === 0) {
      const oldTargetId = Date.now();
      appData.targets.push({
        id: oldTargetId,
        name: parsed.targetName,
        amount: parsed.targetAmount || 0,
        link: parsed.targetLink || ''
      });
      appData.activeTargetId = oldTargetId;
    }
  }
}

function saveData() {
  localStorage.setItem('sakuquest_data', JSON.stringify(appData));
  render();
}

// ==========================================
// 7. HANDLING FORM & EVENT LISTENERS
// ==========================================
function registerEvents() {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.onclick = toggleTheme;
  }

  const rupiahInputs = ['targetAmountInput', 'allowanceInput', 'expenseAmount'];
  rupiahInputs.forEach(id => {
    const inputEl = document.getElementById(id);
    if (inputEl) {
      inputEl.addEventListener('input', formatRupiahInput);
    }
  });

  // Form Tambah Target Impian (Mendukung Multi Target)
  const targetForm = document.getElementById('targetForm');
  if (targetForm) {
    targetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('targetNameInput').value;
      const amount = parseRupiahValue(document.getElementById('targetAmountInput').value);
      const link = document.getElementById('targetLinkInput').value;

      const newTarget = {
        id: Date.now(),
        name,
        amount,
        link
      };

      appData.targets.push(newTarget);
      
      // Jika belum ada target aktif, jadikan target baru ini sebagai yang aktif
      if (!appData.activeTargetId) {
        appData.activeTargetId = newTarget.id;
      }

      document.getElementById('targetNameInput').value = '';
      document.getElementById('targetAmountInput').value = '';
      document.getElementById('targetLinkInput').value = '';

      saveData();
      alert(`🎯 Target baru "${name}" berhasil ditambahkan!`);
    });
  }

  // Form Uang Saku & Auto-Save
  const allowanceForm = document.getElementById('allowanceForm');
  if (allowanceForm) {
    allowanceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const allowance = parseRupiahValue(document.getElementById('allowanceInput').value);
      const periodDays = parseInt(document.getElementById('periodSelect').value) || 1;
      const autoSavePercent = parseFloat(document.getElementById('autoSavePercent').value) || 0;

      const autoSavedAmount = (allowance * autoSavePercent) / 100;
      
      appData.allowance = allowance - autoSavedAmount;
      appData.periodDays = periodDays;
      appData.autoSavePercent = autoSavePercent;
      appData.savingsTotal += autoSavedAmount;

      saveData();
      alert(`💰 Uang saku diatur! Rp ${autoSavedAmount.toLocaleString('id-ID')} tersimpan.`);
    });
  }

  // Form Catat Pengeluaran
  const expenseForm = document.getElementById('expenseForm');
  if (expenseForm) {
    expenseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('expenseTitle').value;
      const amount = parseRupiahValue(document.getElementById('expenseAmount').value);

      appData.expenses.unshift({
        id: Date.now(),
        title,
        amount,
        date: new Date().toLocaleDateString('id-ID')
      });

      updateStreak();
      document.getElementById('expenseTitle').value = '';
      document.getElementById('expenseAmount').value = '';
      saveData();
    });
  }

  // Tombol Reset Data
  const resetBtn = document.getElementById('resetDataBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin menghapus seluruh data SakuQuest?')) {
        localStorage.removeItem('sakuquest_data');
        location.reload();
      }
    });
  }
}

// ==========================================
// 8. LOGIKA KALKULASI & STREAK
// ==========================================
function calculateDailyBudget() {
  if (appData.allowance <= 0) return 0;
  
  const totalSpent = appData.expenses.reduce((sum, item) => sum + item.amount, 0);
  const remainingBudget = appData.allowance - totalSpent;
  const dailyLimit = remainingBudget / appData.periodDays;

  return dailyLimit > 0 ? dailyLimit : 0;
}

function updateStreak() {
  const today = new Date().toLocaleDateString('id-ID');
  const todayExpenses = appData.expenses
    .filter(item => item.date === today)
    .reduce((sum, item) => sum + item.amount, 0);

  const dailyBudget = calculateDailyBudget();

  if (todayExpenses <= dailyBudget) {
    if (appData.lastStreakDate !== today) {
      appData.streakDays += 1;
      appData.lastStreakDate = today;
    }
  } else {
    appData.streakDays = 0;
    appData.lastStreakDate = today;
  }
}

// ==========================================
// 9. RENDER UI (PERBARUI TAMPILAN MULTI-TARGET)
// ==========================================
function render() {
  // Update Angka Ringkasan Saku
  const dailyBudget = calculateDailyBudget();
  document.getElementById('dailyBudgetDisplay').textContent = `Rp ${Math.round(dailyBudget).toLocaleString('id-ID')}`;
  document.getElementById('totalSavingsDisplay').textContent = `Rp ${appData.savingsTotal.toLocaleString('id-ID')}`;
  document.getElementById('streakCount').textContent = appData.streakDays;

  // Cari Target Aktif
  const activeTarget = appData.targets.find(t => t.id === appData.activeTargetId) || appData.targets[0] || null;

  // Render Target Aktif di Beranda Utama
  const targetNameEl = document.getElementById('targetNameDisplay');
  const targetAmountEl = document.getElementById('targetAmountDisplay');
  const targetProgressBar = document.getElementById('targetProgressBar');
  const targetProgressPercent = document.getElementById('targetProgressPercent');

  if (activeTarget) {
    if (activeTarget.link) {
      targetNameEl.innerHTML = `<a href="${activeTarget.link}" target="_blank" style="color: var(--primary); text-decoration: underline;">${activeTarget.name} 🔗</a>`;
    } else {
      targetNameEl.textContent = activeTarget.name;
    }

    targetAmountEl.textContent = `Rp ${appData.savingsTotal.toLocaleString('id-ID')} / Rp ${activeTarget.amount.toLocaleString('id-ID')}`;

    let progressPercent = 0;
    if (activeTarget.amount > 0) {
      progressPercent = Math.min(100, Math.round((appData.savingsTotal / activeTarget.amount) * 100));
    }

    targetProgressPercent.textContent = `${progressPercent}%`;
    if (targetProgressBar) {
      targetProgressBar.style.width = `${progressPercent}%`;
      if (progressPercent < 30) {
        targetProgressBar.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
      } else if (progressPercent <= 70) {
        targetProgressBar.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
      } else {
        targetProgressBar.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
      }
    }

    // Pesta Konfeti 100%
    if (progressPercent >= 100 && !appData.isCelebrated) {
      triggerRewardConfetti();
      appData.isCelebrated = true;
      localStorage.setItem('sakuquest_data', JSON.stringify(appData));
      
      setTimeout(() => {
        alert(`🎉 SELAMAT! Target kamu "${activeTarget.name}" senilai Rp ${activeTarget.amount.toLocaleString('id-ID')} SUDAH TERCAPAI! 🙌`);
      }, 400);
    }
  } else {
    targetNameEl.textContent = 'Belum Ada Target';
    targetAmountEl.textContent = 'Rp 0 / Rp 0';
    targetProgressPercent.textContent = '0%';
    if (targetProgressBar) targetProgressBar.style.width = '0%';
  }

  // Render Daftar Seluruh Target Kamu di Tab 2
  const targetListContainer = document.getElementById('targetListContainer');
  if (targetListContainer) {
    if (appData.targets.length === 0) {
      targetListContainer.innerHTML = '<div class="empty-msg">Belum ada target impian dibuat.</div>';
    } else {
      targetListContainer.innerHTML = appData.targets.map(target => {
        const isActive = activeTarget && activeTarget.id === target.id;
        let percent = 0;
        if (target.amount > 0) {
          percent = Math.min(100, Math.round((appData.savingsTotal / target.amount) * 100));
        }

        return `
          <div class="target-item-card ${isActive ? 'active-target' : ''}">
            <div class="target-item-header">
              <strong>${target.name} ${isActive ? '⭐ (Aktif)' : ''}</strong>
              <small>Rp ${appData.savingsTotal.toLocaleString('id-ID')} / Rp ${target.amount.toLocaleString('id-ID')} (${percent}%)</small>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${percent}%; background: ${percent < 30 ? '#ef4444' : percent <= 70 ? '#f59e0b' : '#10b981'};"></div>
            </div>
            <div class="target-actions-btn">
              ${!isActive ? `<button onclick="selectTarget(${target.id})" class="btn-small btn-select">Pilih Aktif</button>` : ''}
              <button onclick="deleteTarget(${target.id})" class="btn-small btn-delete">Hapus</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Render Badges
  const badgesContainer = document.getElementById('badgesContainer');
  if (badgesContainer) {
    badgesContainer.innerHTML = '';
    BADGES.forEach(badge => {
      const isUnlocked = appData.savingsTotal > 0 && appData.streakDays >= badge.reqStreak;
      const badgeEl = document.createElement('div');
      badgeEl.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
      badgeEl.innerHTML = `
        <span class="badge-icon">${badge.icon}</span>
        <div class="badge-name">${badge.name}</div>
      `;
      badgesContainer.appendChild(badgeEl);
    });
  }

  // Render Riwayat Transaksi
  const historyList = document.getElementById('historyList');
  if (historyList) {
    if (appData.expenses.length === 0) {
      historyList.innerHTML = '<li class="empty-msg">Belum ada pengeluaran dicatat.</li>';
    } else {
      historyList.innerHTML = appData.expenses.map(item => `
        <li class="history-item">
          <span>${item.title} <small style="color:var(--text-muted)">(${item.date})</small></span>
          <strong style="color:var(--danger)">- Rp ${item.amount.toLocaleString('id-ID')}</strong>
        </li>
      `).join('');
    }
  }
}

// Fungsi Memilih Target Aktif
function selectTarget(id) {
  appData.activeTargetId = id;
  appData.isCelebrated = false;
  saveData();
}

// Fungsi Menghapus Target
function deleteTarget(id) {
  if (confirm('Hapus target impian ini?')) {
    appData.targets = appData.targets.filter(t => t.id !== id);
    if (appData.activeTargetId === id) {
      appData.activeTargetId = appData.targets.length > 0 ? appData.targets[0].id : null;
    }
    saveData();
  }
}

// ==========================================
// 10. UTILITY (EFEK KONFETI)
// ==========================================
function triggerRewardConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
