"use client";

import Script from "next/script";

export default function Scripts() {
  return (
    <>
      <Script id="tailwind-config" strategy="beforeInteractive">
        {`tailwind.config = {
          theme: {
            extend: {
              colors: {
                brand: {
                  dark: '#023a78',
                  blue: '#1e40af',
                  orange: '#f97316',
                  light: '#f0f9ff',
                  blueL: '#4075ae',
                  black: '#4075ae',
                }
              }
            }
          }
        }`}
      </Script>

      <Script id="mobile-menu" strategy="afterInteractive">
        {`
          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenuClose = document.getElementById('mobile-menu-close');
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileOverlay = document.getElementById('mobile-overlay');
          const mobileMenuLinks = mobileMenu.querySelectorAll('a');

          function openMobileMenu() {
            mobileMenu.classList.remove('mobile-menu-hidden');
            mobileMenu.classList.add('mobile-menu-visible');
            mobileOverlay.classList.remove('overlay-hidden');
            mobileOverlay.classList.add('overlay-visible');
            mobileMenuBtn.classList.add('hamburger-active');
            document.body.style.overflow = 'hidden';
          }

          function closeMobileMenu() {
            mobileMenu.classList.remove('mobile-menu-visible');
            mobileMenu.classList.add('mobile-menu-hidden');
            mobileOverlay.classList.remove('overlay-visible');
            mobileOverlay.classList.add('overlay-hidden');
            mobileMenuBtn.classList.remove('hamburger-active');
            document.body.style.overflow = 'auto';
          }

          mobileMenuBtn.addEventListener('click', openMobileMenu);
          mobileMenuClose.addEventListener('click', closeMobileMenu);
          mobileOverlay.addEventListener('click', closeMobileMenu);

          mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
          });

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('mobile-menu-hidden')) {
              closeMobileMenu();
            }
          });
        `}
      </Script>

      <Script id="countdown-smooth-scroll" strategy="afterInteractive">
        {`
          function startCountdown() {
            const countDownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000) + (30 * 60 * 1000) + (15 * 1000);

            const x = setInterval(function () {
              const now = new Date().getTime();
              const distance = countDownDate - now;

              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
              document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
              document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
              document.getElementById("seconds2").innerHTML = seconds < 10 ? "0" + seconds : seconds;

              if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
              }
            }, 1000);
          }

          window.onload = startCountdown;

          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
          });
        `}
      </Script>

      <Script id="multiselect" strategy="afterInteractive">
        {`
          let isOpen = false;

          function toggleMultiselect() {
            const options = document.getElementById('dropdownOptions');
            const icon = document.getElementById('dropdownIcon');
            isOpen = !isOpen;
            if (isOpen) {
              options.classList.add('open');
              icon.classList.add('rotate-180');
            } else {
              options.classList.remove('open');
              icon.classList.remove('rotate-180');
            }
          }

          function updateSelectedItems() {
            const checkboxes = document.querySelectorAll('.multiselect-checkbox');
            const selectedItemsContainer = document.getElementById('selectedItems');
            const selectedValuesInput = document.getElementById('selectedValues');
            const selectAllCheckbox = document.getElementById('selectAll');

            const selected = [];
            checkboxes.forEach(cb => { if (cb.checked) selected.push(cb.value); });

            selectAllCheckbox.checked = selected.length === checkboxes.length;

            if (selected.length === 0) {
              selectedItemsContainer.innerHTML = '<span class="text-gray-400" id="placeholderText">Select sub services...</span>';
            } else if (selected.length <= 3) {
              selectedItemsContainer.innerHTML = selected.map(item =>
                \`<span class="bg-brand-orange text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  \${item}
                  <button type="button" onclick="removeItem('\${item}')" class="hover:text-white font-bold">×</button>
                </span>\`
              ).join('');
            } else {
              selectedItemsContainer.innerHTML = \`<span class="bg-brand-orange text-white px-2 py-1 rounded text-sm">\${selected.length} selected</span>\`;
            }

            selectedValuesInput.value = selected.join(',');
          }

          function removeItem(value) {
            const checkbox = document.querySelector(\`.multiselect-checkbox[value="\${value}"]\`);
            if (checkbox) { checkbox.checked = false; updateSelectedItems(); }
          }

          function toggleSelectAll(event) {
            event.stopPropagation();
            const checkboxes = document.querySelectorAll('.multiselect-checkbox');
            const selectAllCheckbox = document.getElementById('selectAll');
            checkboxes.forEach(cb => { cb.checked = selectAllCheckbox.checked; });
            updateSelectedItems();
          }

          document.addEventListener('click', function (event) {
            const dropdown = document.getElementById('subServiceMultiselect');
            if (!dropdown.contains(event.target) && isOpen) {
              document.getElementById('dropdownOptions').classList.remove('open');
              document.getElementById('dropdownIcon').classList.remove('rotate-180');
              isOpen = false;
            }
          });

          document.getElementById('dropdownOptions').addEventListener('click', function (event) {
            event.stopPropagation();
          });
        `}
      </Script>
    </>
  );
}
