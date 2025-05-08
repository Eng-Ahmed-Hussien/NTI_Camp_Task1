// Tailwind CSS configuration
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5CF6',
          dark: '#A78BFA'
        }
      }
    }
  }
};

// Theme Management
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

function updateHeaderBackground() {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add(
      'shadow-lg',
      html.classList.contains('dark') ? 'bg-gray-800/95' : 'bg-white/95',
      'backdrop-blur-sm'
    );
  } else {
    header.classList.remove(
      'shadow-lg', 'bg-white/95', 'bg-gray-800/95', 'backdrop-blur-sm'
    );
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else if (savedTheme === 'light') {
    html.classList.remove('dark');
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
  updateHeaderBackground();
}

function toggleTheme() {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  updateHeaderBackground();
}

// Function to show  SweetAlert PopUp
function showSweetAlert() {
  const isDarkMode = html.classList.contains('dark');

  Swal.fire({
    title: '<span class="font-bold">Meta Version</span>',
    html: `
      <div class="space-y-4">
        <p>This is the <span class="font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}">Meta Version</span>.</p>
        <p>Please check back later for updates <span class="lightning">⚡</span></p>
        <div class="pt-3">
          <div class="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div class="h-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} w-[60%] rounded-full"></div>
          </div>
          <p class="text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}">Development: 60% complete</p>
        </div>
      </div>
    `,
    background: isDarkMode ? '#1F2937' : '#ffffff',
    color: isDarkMode ? '#F3F4F6' : '#1F2937',
    backdrop: `rgba(0,0,0,0.4)`,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    showConfirmButton: true,
    confirmButtonText: 'Got it!',
    confirmButtonColor: isDarkMode ? '#2563EB' : '#3B82F6',
    timer: 10000,
    timerProgressBar: true,
    customClass: {
      popup: 'rounded-xl border border-blue-200 dark:border-blue-700',
      title: 'text-xl',
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Initialize theme before SweetAlert
  initializeTheme();

  // Show SweetAlert
  showSweetAlert();

  // Initialize AOS animations
  AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });

  // Add event listeners
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('mobile-menu-open');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.remove('mobile-menu-open');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('mobile-menu-open');
      if (menuIcon) menuIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  });

  // Scroll effect
  window.addEventListener('scroll', updateHeaderBackground);
});

// Add a button to show  alert again 
if (document.getElementById('show-alert-button')) {
  document.getElementById('show-alert-button').addEventListener('click', showSweetAlert);
}