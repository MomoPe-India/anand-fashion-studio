/**
 * Anand Fashion Studio - Interactive Web Application Engine
 * Phone: +91 9553545324
 * Studio: Opposite Sivaram Dum Biryani, Krishna Circle Road, Kadapa
 * ReviewSmart AI Portal: https://www.reviewsmart.online/r/anand-fashion-studio-bf84
 * Technology Partner: MOMO IT TECHNOLOGIES (https://www.momoittechnologies.com)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ====================================================
  // 1. Bilingual Language Switcher (English <-> Telugu)
  // ====================================================
  const langToggleBtn = document.getElementById('langToggleBtn');
  let currentLang = localStorage.getItem('afs_lang') || 'en';

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('afs_lang', lang);

    document.querySelectorAll('[data-en]').forEach(el => {
      const enText = el.getAttribute('data-en');
      const teText = el.getAttribute('data-te');
      if (lang === 'te' && teText) {
        el.innerHTML = teText;
      } else if (enText) {
        el.innerHTML = enText;
      }
    });

    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'en' ? 'తెలుగు' : 'English';
      langToggleBtn.title = lang === 'en' ? 'Switch to Telugu' : 'Switch to English';
    }
  };

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'te' : 'en');
    });
  }
  applyLanguage(currentLang);


  // ====================================================
  // 2. Mobile Navigation Drawer & Navbar Blur
  // ====================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navbar = document.getElementById('navbar');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('shadow-xl', 'bg-brand-darker/95');
    } else {
      navbar?.classList.remove('shadow-xl');
    }
  });


  // ====================================================
  // 3. Interactive Portfolio Category Filter
  // ====================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-brand-gold', 'text-slate-950');
        b.classList.add('bg-brand-card', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-brand-gold', 'text-slate-950');
      btn.classList.remove('bg-brand-card', 'text-slate-300');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden-item');
        } else {
          item.classList.add('hidden-item');
        }
      });
    });
  });


  // ====================================================
  // 4. Native HTML5 Lightbox Modal
  // ====================================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxEnquireBtn = document.getElementById('lightboxEnquireBtn');
  const closeLightbox = document.getElementById('closeLightbox');

  if (lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const highResSrc = item.getAttribute('data-src');
        const captionText = item.getAttribute('data-caption') || 'Anand Fashion Studio Portfolio';

        lightboxImg.src = highResSrc;
        lightboxCaption.textContent = captionText;

        const encodedMsg = encodeURIComponent(
          `Hello Anand Fashion Studio, I saw this work from your website gallery: "${captionText}". I'd like to enquire about similar photography/framing.`
        );
        lightboxEnquireBtn.href = `https://wa.me/919553545324?text=${encodedMsg}`;

        lightboxModal.showModal();
      });
    });

    closeLightbox?.addEventListener('click', () => {
      lightboxModal.close();
    });

    lightboxModal.addEventListener('click', (event) => {
      const rect = lightboxModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        lightboxModal.close();
      }
    });
  }


  // ====================================================
  // 5. In-Studio Custom Framing & Photo Gifts
  // ====================================================
  // Custom photo framing, lamination, and personalized gifts are available directly
  // at Anand Fashion Studio's Kadapa workshop (Opposite Sivaram Dum Biryani).



  // ====================================================
  // 6. ReviewSmart AI Live Review Generator Simulator
  // ====================================================
  const aiServiceSelect = document.getElementById('aiReviewService');
  const aiGenerateBtn = document.getElementById('aiGenerateBtn');
  const aiReviewResults = document.getElementById('aiReviewResults');
  const copyToast = document.getElementById('copyToast');

  const reviewTemplates = {
    'wedding': [
      "We hired Anand Fashion Studio for our wedding in Kadapa, and they were phenomenal! The candid shots, 4K video teaser, and drone coverage captured every Muhurtham moment perfectly. Truly Kadapa's premier wedding photography team!",
      "Opposite Sivaram Dum Biryani on Krishna Circle Road, Anand Fashion Studio is simply the best. Their team was punctual, respectful of our traditions, and delivered the luxury photo albums right on time. 5 stars all the way!",
      "Superb wedding cinematography by Anand Fashion Studio! The picture sharpness, natural colors, and polite crew made our special day unforgettable. Recommended to all families in Kadapa and Rayalaseema."
    ],
    'framing': [
      "Best photo framing shop in Kadapa town! Got a frameless acrylic wall frame made for our anniversary, and the diamond polish and print clarity look like royal luxury decor. Very reasonable price too!",
      "I ordered 3 large wooden frames for my living room from Anand Fashion Studio. Termite-proof, non-fading archival prints, and completed in just 24 hours. Highly satisfied!",
      "Top-tier custom framing and personalized photo gifts in Kadapa. The team gave great advice on frame border choices and delivered with pristine glass finish."
    ],
    'prewedding': [
      "Had an extraordinary pre-wedding shoot with Anand Studio around scenic spots near Kadapa! The photographer guided our poses naturally and the sunset cinematic reel got hundreds of compliments from our friends.",
      "Creative concepts, energetic photographers, and top-tier camera gear. Anand Fashion Studio created magic for our pre-wedding photoshoot. Best studio in Krishna Circle Kadapa!",
      "Loved their patience and drone angles during our outdoor shoot. If you are getting married in Kadapa, Anand Fashion Studio is your one-stop choice."
    ],
    'baby': [
      "Anand Fashion Studio made our baby's 1st birthday shoot and seemantham memorable! Very gentle with the baby, cute props, and lovely studio lighting. Thank you!",
      "Sweetest portraits of our newborn baby! Clean indoor studio in Kadapa, hygienic props, and beautiful photo frames delivered promptly.",
      "Fantastic milestone photography for kids and family functions. Reasonable packages and warm hospitality."
    ],
    'passport': [
      "Needed emergency passport photos with strict visa specifications. Anand Studio gave high-grade biometric prints in just 5 minutes! Super fast and professional in Krishna Circle.",
      "Quick passport photo prints, polite staff, and clean digital copies sent right to my WhatsApp. Great service in Kadapa."
    ]
  };

  if (aiGenerateBtn && aiReviewResults) {
    aiGenerateBtn.addEventListener('click', () => {
      const service = aiServiceSelect ? aiServiceSelect.value : 'wedding';
      const templates = reviewTemplates[service] || reviewTemplates['wedding'];

      aiReviewResults.innerHTML = '';
      templates.forEach((reviewText, idx) => {
        const card = document.createElement('div');
        card.className = 'p-4 rounded-xl bg-brand-dark border border-brand-border/80 hover:border-brand-gold/60 transition-all flex flex-col justify-between';
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between text-amber-400 text-xs mb-2">
              <span>★★★★★ Verified Suggestion ${idx + 1}</span>
              <span class="text-slate-500 text-[10px]">ReviewSmart AI</span>
            </div>
            <p class="text-xs text-slate-200 leading-relaxed italic mb-4">"${reviewText}"</p>
          </div>
          <div class="flex items-center justify-between gap-2 pt-2 border-t border-brand-border/40">
            <button class="copy-review-btn px-3 py-1.5 rounded-lg bg-brand-gold/20 hover:bg-brand-gold text-brand-gold hover:text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5" data-text="${encodeURIComponent(reviewText)}">
              <span>📋 1-Tap Copy</span>
            </button>
            <a href="https://www.reviewsmart.online/r/anand-fashion-studio-bf84" target="_blank" rel="noopener noreferrer" 
               class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all">
              <span>Post on ReviewSmart →</span>
            </a>
          </div>
        `;
        aiReviewResults.appendChild(card);
      });

      aiReviewResults.querySelectorAll('.copy-review-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const rawText = decodeURIComponent(btn.getAttribute('data-text') || '');
          navigator.clipboard.writeText(rawText).then(() => {
            btn.innerHTML = '<span>✓ Copied!</span>';
            setTimeout(() => {
              btn.innerHTML = '<span>📋 1-Tap Copy</span>';
            }, 2000);

            if (copyToast) {
              copyToast.classList.remove('hidden');
              setTimeout(() => copyToast.classList.add('hidden'), 3000);
            }
          });
        });
      });
    });
  }


  // ====================================================
  // 6b. Muhurtham Date Availability Checker (2026–2027 Season)
  // ====================================================
  const muhurthamDateInput = document.getElementById('muhurthamDateInput');
  const muhurthamCeremonySelect = document.getElementById('muhurthamCeremonySelect');
  const muhurthamVenueInput = document.getElementById('muhurthamVenueInput');
  const muhurthamStatusIcon = document.getElementById('muhurthamStatusIcon');
  const muhurthamStatusTitle = document.getElementById('muhurthamStatusTitle');
  const muhurthamStatusDesc = document.getElementById('muhurthamStatusDesc');
  const muhurthamWhatsappBtn = document.getElementById('muhurthamWhatsappBtn');

  if (muhurthamDateInput && muhurthamWhatsappBtn) {
    // Set minimum date to today so past dates cannot be selected
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    muhurthamDateInput.min = todayStr;

    // Suggest a default date ~14 days out if not set
    const defaultDate = new Date();
    defaultDate.setDate(today.getDate() + 14);
    muhurthamDateInput.value = defaultDate.toISOString().split('T')[0];

    const updateMuhurthamStatus = () => {
      const selectedDateVal = muhurthamDateInput.value;
      const selectedCeremony = muhurthamCeremonySelect?.value || 'Wedding Muhurtham (లగ్నం / ముహూర్తం)';
      const venueVal = muhurthamVenueInput?.value.trim() || 'Kadapa / Rayalaseema';

      let formattedDateStr = 'Proposed Date';

      if (selectedDateVal) {
        const parts = selectedDateVal.split('-');
        if (parts.length === 3) {
          const dateObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
          const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
          formattedDateStr = dateObj.toLocaleDateString('en-IN', options);
        }
      }

      if (muhurthamStatusTitle && muhurthamStatusDesc) {
        muhurthamStatusTitle.innerHTML = `🟢 Senior Crew Slots Active for ${formattedDateStr}`;
        muhurthamStatusDesc.textContent = `Anand Fashion Studio is currently accepting bookings for ${selectedCeremony} in ${venueVal}. Muhurtham dates in Rayalaseema fill 2–4 months in advance!`;
      }

      // Generate pre-filled WhatsApp inquiry message
      const msg = 
`*Wedding Muhurtham Slot Enquiry - Anand Fashion Studio*
-----------------------------------------------------
📅 *Proposed Date:* ${formattedDateStr} (${selectedDateVal})
🕉️ *Ceremony / Occasion:* ${selectedCeremony}
🏛️ *Mandapam / Venue:* ${venueVal}
-----------------------------------------------------
_Hello Anand Fashion Studio! I checked Muhurtham slot availability on your website. Please confirm if Managing Director Anand Nallagatla and senior cinematography crew are available on this date and send wedding package details._`;

      muhurthamWhatsappBtn.href = `https://wa.me/919553545324?text=${encodeURIComponent(msg)}`;
    };

    muhurthamDateInput.addEventListener('change', updateMuhurthamStatus);
    muhurthamCeremonySelect?.addEventListener('change', updateMuhurthamStatus);
    muhurthamVenueInput?.addEventListener('input', updateMuhurthamStatus);

    updateMuhurthamStatus();
  }


  // ====================================================
  // 7. Interactive Wedding Package Customizer
  // ====================================================
  const weddingCheckboxes = document.querySelectorAll('.wedding-addon');
  const weddingEstimateTotal = document.getElementById('weddingEstimateTotal');
  const weddingPackageWhatsappBtn = document.getElementById('weddingPackageWhatsappBtn');

  const updateWeddingTotal = () => {
    if (!weddingEstimateTotal || !weddingPackageWhatsappBtn) return;

    let total = 25000;
    const selectedItems = [];

    weddingCheckboxes.forEach(cb => {
      if (cb.checked) {
        const cost = parseInt(cb.getAttribute('data-cost') || '0', 10);
        total += cost;
        selectedItems.push(`${cb.getAttribute('data-name')} (+₹${cost.toLocaleString('en-IN')})`);
      }
    });

    weddingEstimateTotal.textContent = `₹${total.toLocaleString('en-IN')}`;

    const dateVal = (muhurthamDateInput && muhurthamDateInput.value) 
      ? `\n📅 *Target Event Date:* ${muhurthamDateInput.value}` 
      : '';

    const pkgMsg = 
`*Custom Wedding Package Enquiry - Anand Fashion Studio*
-----------------------------------------------------
💍 *Estimated Budget:* ~₹${total.toLocaleString('en-IN')}${dateVal}
📋 *Selected Ceremonies & Equipment:*
${selectedItems.length > 0 ? selectedItems.map(item => ` • ${item}`).join('\n') : ' • Standard Full Day Wedding Coverage'}
📍 *Location:* Kadapa / Rayalaseema
-----------------------------------------------------
_Hello Anand Fashion Studio! I configured this custom wedding package on your website. Please check date availability and send an official quote._`;

    weddingPackageWhatsappBtn.href = `https://wa.me/919553545324?text=${encodeURIComponent(pkgMsg)}`;
  };

  weddingCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateWeddingTotal);
  });
  updateWeddingTotal();


  // ====================================================
  // 8. Kadapa Landmark Distance & Directions Selector
  // ====================================================
  const landmarkBtns = document.querySelectorAll('.landmark-btn');
  const landmarkDistanceText = document.getElementById('landmarkDistanceText');
  const landmarkTimeText = document.getElementById('landmarkTimeText');
  const landmarkDirectionText = document.getElementById('landmarkDirectionText');

  const landmarkData = {
    'krishna': {
      dist: '150 meters',
      time: '1 min walk',
      desc: 'Head south on Krishna Circle Road towards Madras Road. Anand Studio is located directly Opposite Sivaram Dum Biryani.'
    },
    'sevenroads': {
      dist: '1.2 km',
      time: '3 mins by bike / auto',
      desc: 'From Seven Roads Circle, take Madras Road straight to Krishna Circle. We are right opposite Sivaram Dum Biryani.'
    },
    'busstand': {
      dist: '2.1 km',
      time: '5 mins driving',
      desc: 'From Kadapa RTC Main Bus Station, drive via RTC Complex Road towards Krishna Circle.'
    },
    'railway': {
      dist: '3.6 km',
      time: '8 mins driving',
      desc: 'From Kadapa Railway Station, head via Station Road to Madras Road & Krishna Circle.'
    },
    'rims': {
      dist: '4.8 km',
      time: '10 mins driving',
      desc: 'From RIMS Kadapa, take Kadapa-Tirupati Highway into Madras Road towards Krishna Circle.'
    }
  };

  landmarkBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      landmarkBtns.forEach(b => {
        b.classList.remove('bg-brand-gold', 'text-slate-950');
        b.classList.add('bg-brand-dark', 'text-slate-300');
      });
      btn.classList.add('bg-brand-gold', 'text-slate-950');
      btn.classList.remove('bg-brand-dark', 'text-slate-300');

      const key = btn.getAttribute('data-landmark') || 'krishna';
      const info = landmarkData[key];

      if (info && landmarkDistanceText && landmarkTimeText && landmarkDirectionText) {
        landmarkDistanceText.textContent = info.dist;
        landmarkTimeText.textContent = info.time;
        landmarkDirectionText.textContent = info.desc;
      }
    });
  });


  // ====================================================
  // 9. Digital Business Card: High-Res Front/Back PNG & vCard Generator
  // ====================================================
  const downloadFrontCardBtn = document.getElementById('downloadFrontCardBtn');
  const downloadBackCardBtn = document.getElementById('downloadBackCardBtn');
  const downloadBothCardsBtn = document.getElementById('downloadBothCardsBtn');
  const downloadFrontCardTopBtn = document.getElementById('downloadFrontCardTopBtn');
  const downloadBackCardTopBtn = document.getElementById('downloadBackCardTopBtn');
  const downloadCardBtn = document.getElementById('downloadCardBtn');
  const saveVCardBtn = document.getElementById('saveVCardBtn');

  // Helper to load image as Promise
  const loadImageAsync = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  };

  // Helper to trigger file download from canvas
  const triggerCanvasDownload = (canvas, filename) => {
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // ----------------------------------------------------
  // Front Side Generator (1400 x 800 px, Print-Ready 300 DPI)
  // ----------------------------------------------------
  const generateFrontCardPNG = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1400;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Rich dark gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 1400, 800);
    bgGrad.addColorStop(0, '#060911');
    bgGrad.addColorStop(0.5, '#020306');
    bgGrad.addColorStop(1, '#0d1424');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1400, 800);

    // Subtle radial gold shine in center
    const radGlow = ctx.createRadialGradient(700, 320, 20, 700, 320, 480);
    radGlow.addColorStop(0, 'rgba(212, 175, 55, 0.12)');
    radGlow.addColorStop(0.5, 'rgba(212, 175, 55, 0.03)');
    radGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = radGlow;
    ctx.fillRect(0, 0, 1400, 800);

    // 2. Gold Border Frame & Inner Hairline Accent
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D4AF37';
    ctx.strokeRect(35, 35, 1330, 730);

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(251, 245, 183, 0.45)';
    ctx.strokeRect(47, 47, 1306, 706);

    // Corner Ornaments
    const drawCorner = (x, y, dx, dy) => {
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 35);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 35, y);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#D4AF37';
      ctx.stroke();

      ctx.fillStyle = '#FBF5B7';
      ctx.beginPath();
      ctx.arc(x + dx * 12, y + dy * 12, 3, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCorner(60, 60, 1, 1);
    drawCorner(1340, 60, -1, 1);
    drawCorner(60, 740, 1, -1);
    drawCorner(1340, 740, -1, -1);

    // 3. Top Header Strip
    ctx.textAlign = 'left';
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('✦ OFFICIAL VISITING CARD', 75, 88);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#94A3B8';
    ctx.font = 'bold 15px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('EST. 2010 • KADAPA, ANDHRA PRADESH', 1325, 88);

    // Subtle divider line
    const headDiv = ctx.createLinearGradient(75, 110, 1325, 110);
    headDiv.addColorStop(0, 'rgba(212, 175, 55, 0.1)');
    headDiv.addColorStop(0.5, 'rgba(212, 175, 55, 0.5)');
    headDiv.addColorStop(1, 'rgba(212, 175, 55, 0.1)');
    ctx.fillStyle = headDiv;
    ctx.fillRect(75, 110, 1250, 2);

    // 4. Center Logo Emblem
    const logoImg = await loadImageAsync('assets/logo.jpg');
    if (logoImg) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(700, 275, 95, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(logoImg, 605, 180, 190, 190);
      ctx.restore();

      // Outer gold ring around logo
      ctx.beginPath();
      ctx.arc(700, 275, 98, 0, Math.PI * 2);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#D4AF37';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(700, 275, 105, 0, Math.PI * 2);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#FBF5B7';
      ctx.stroke();
    }

    // 5. Center Typography
    ctx.textAlign = 'center';

    // Studio Name with Metallic Gold Gradient
    const nameGrad = ctx.createLinearGradient(400, 440, 1000, 440);
    nameGrad.addColorStop(0, '#FFFFFF');
    nameGrad.addColorStop(0.3, '#FBF5B7');
    nameGrad.addColorStop(0.7, '#D4AF37');
    nameGrad.addColorStop(1, '#FFFFFF');
    ctx.fillStyle = nameGrad;
    ctx.font = 'bold 52px "Playfair Display", Georgia, serif';
    ctx.fillText('ANAND FASHION STUDIO', 700, 440);

    // Slogan
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 20px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('CAPTURING STYLE & MOMENTS', 700, 485);

    // Core Specializations
    ctx.fillStyle = '#E2E8F0';
    ctx.font = '19px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('Royal Wedding Photography  •  Candid Cinematography  •  4K Aerial Drone Coverage', 700, 530);

    ctx.fillStyle = '#CBD5E1';
    ctx.font = '16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('Custom In-Studio Photo Framing & Gifts  •  5-Minute Instant Visa Prints', 700, 565);

    // Centered Gold Divider Bar
    const divGrad = ctx.createLinearGradient(350, 605, 1050, 605);
    divGrad.addColorStop(0, 'transparent');
    divGrad.addColorStop(0.2, '#D4AF37');
    divGrad.addColorStop(0.8, '#D4AF37');
    divGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = divGrad;
    ctx.fillRect(350, 605, 700, 3);

    // 6. Bottom Bar
    ctx.fillStyle = 'rgba(212, 175, 55, 0.35)';
    ctx.fillRect(75, 680, 1250, 1.5);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#CBD5E1';
    ctx.font = 'bold 17px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('✉️ anandfashionstudio@gmail.com', 75, 725);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 19px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('🌐 anandfashionstudio.in', 700, 725);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#CBD5E1';
    ctx.font = 'bold 17px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('📍 Kadapa, Andhra Pradesh - 516001', 1325, 725);

    triggerCanvasDownload(canvas, 'Anand_Fashion_Studio_Visiting_Card_FRONT.png');
  };

  // ----------------------------------------------------
  // Back Side Generator (1400 x 800 px, Print-Ready 300 DPI)
  // ----------------------------------------------------
  const generateBackCardPNG = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1400;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Helper for rounded rect compatibility
    const pathRoundRect = (x, y, w, h, r) => {
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, r);
      } else {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
      }
    };

    // 1. Matching rich dark gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 1400, 800);
    bgGrad.addColorStop(0, '#060911');
    bgGrad.addColorStop(0.5, '#020306');
    bgGrad.addColorStop(1, '#0d1424');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1400, 800);

    // 2. Gold Border Frame & Inner Hairline Accent
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D4AF37';
    ctx.strokeRect(35, 35, 1330, 730);

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(251, 245, 183, 0.45)';
    ctx.strokeRect(47, 47, 1306, 706);

    // Corner Ornaments
    const drawCorner = (x, y, dx, dy) => {
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 35);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 35, y);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#D4AF37';
      ctx.stroke();

      ctx.fillStyle = '#FBF5B7';
      ctx.beginPath();
      ctx.arc(x + dx * 12, y + dy * 12, 3, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCorner(60, 60, 1, 1);
    drawCorner(1340, 60, -1, 1);
    drawCorner(60, 740, 1, -1);
    drawCorner(1340, 740, -1, -1);

    // 3. Top Header Strip
    ctx.textAlign = 'left';
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 32px "Playfair Display", Georgia, serif';
    ctx.fillText('ANAND FASHION STUDIO', 75, 88);

    ctx.fillStyle = '#F3E5AB';
    ctx.font = 'bold 19px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('Anand Nallagatla — Managing Director', 75, 120);

    // Right Trust Badge
    ctx.save();
    ctx.fillStyle = 'rgba(212, 175, 55, 0.12)';
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.lineWidth = 1.5;
    pathRoundRect(1020, 68, 305, 48, 8);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#FDE047';
    ctx.font = 'bold 15px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('★ 14+ YEARS OF TRUST ★', 1172, 98);

    // Divider line below header
    const headDiv = ctx.createLinearGradient(75, 145, 1325, 145);
    headDiv.addColorStop(0, '#D4AF37');
    headDiv.addColorStop(0.7, '#C1121F');
    headDiv.addColorStop(1, '#D4AF37');
    ctx.fillStyle = headDiv;
    ctx.fillRect(75, 145, 1250, 2);

    // 4. Two Main Content Columns
    // Left Box: Specializations (x=75, w=590, y=165 to 640)
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.lineWidth = 1;
    pathRoundRect(75, 165, 590, 480, 12);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 22px "Playfair Display", Georgia, serif';
    ctx.fillText('📸  STUDIO SPECIALIZATIONS', 100, 208);

    ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.fillRect(100, 222, 540, 1.5);

    const services = [
      '✦  Royal Telugu Wedding Photography & Muhurtham',
      '✦  4K Cinematic Aerial Drone & Pre-Weddings',
      '✦  Candid Cinematography & Storytelling Teasers',
      '✦  Custom In-House Photo Framing & Luxury Albums',
      '✦  Instant 5-Minute Passport & Biometric Visa Prints',
      '✦  Maternity, Kids & High-Fashion Portfolios',
      '✦  Corporate & Commercial Event Coverage'
    ];

    ctx.fillStyle = '#E2E8F0';
    ctx.font = '17px "Plus Jakarta Sans", Arial, sans-serif';
    services.forEach((service, index) => {
      ctx.fillText(service, 100, 268 + index * 52);
    });

    // Right Box: Direct Contacts & Location (x=735, w=590, y=165 to 640)
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.lineWidth = 1;
    pathRoundRect(735, 165, 590, 480, 12);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 22px "Playfair Display", Georgia, serif';
    ctx.fillText('📞  DIRECT CONTACT & LOCATION', 760, 208);

    ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.fillRect(760, 222, 540, 1.5);

    // Hotline
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('📞 Hotlines / WhatsApp :', 760, 260);

    ctx.fillStyle = '#FDE047';
    ctx.font = 'bold 20px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('+91 9246080201  |  +91 9553545324', 760, 288);

    // Email
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('✉️ Official Email :', 760, 328);

    ctx.fillStyle = '#E2E8F0';
    ctx.font = '18px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('anandfashionstudio@gmail.com', 760, 354);

    // Website
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('🌐 Official Website :', 760, 394);

    ctx.fillStyle = '#93C5FD';
    ctx.font = 'bold 18px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('https://anandfashionstudio.in', 760, 420);

    // Address
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('📍 Studio Address :', 760, 460);

    ctx.fillStyle = '#E2E8F0';
    ctx.font = '17px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('21/478, Palempapaiah Street, Kadapa - 516001', 760, 486);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '15px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('(Opp. Sivaram Dum Biryani, Krishna Circle Road, AP)', 760, 510);

    // Reviews
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('⭐ Google & ReviewSmart Ratings :', 760, 548);

    ctx.fillStyle = '#FDE047';
    ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('reviewsmart.online/r/anand-fashion-studio-bf84', 760, 574);

    // 5. Bottom Partner Strip
    ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.fillRect(75, 675, 1250, 1.5);

    const partnerImg = await loadImageAsync('assets/momo_it_logo.png');
    if (partnerImg) {
      ctx.save();
      ctx.drawImage(partnerImg, 75, 700, 38, 38);
      ctx.restore();
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#CBD5E1';
    ctx.font = 'bold 15px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('Technology Partner: MOMO IT TECHNOLOGIES (momoittechnologies.com)', 125, 726);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 14px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('PRINT-READY 300 DPI • DOUBLE-SIDED CARD', 1325, 726);

    triggerCanvasDownload(canvas, 'Anand_Fashion_Studio_Visiting_Card_BACK.png');
  };

  // Wire Download Handlers
  const handleFrontDownload = async (btn) => {
    const originalText = btn ? btn.innerHTML : '';
    if (btn) btn.innerHTML = '<span>⏳ Generating Front...</span>';
    await generateFrontCardPNG();
    if (btn) {
      btn.innerHTML = '<span>✓ Front Downloaded!</span>';
      setTimeout(() => { btn.innerHTML = originalText; }, 2500);
    }
  };

  const handleBackDownload = async (btn) => {
    const originalText = btn ? btn.innerHTML : '';
    if (btn) btn.innerHTML = '<span>⏳ Generating Back...</span>';
    await generateBackCardPNG();
    if (btn) {
      btn.innerHTML = '<span>✓ Back Downloaded!</span>';
      setTimeout(() => { btn.innerHTML = originalText; }, 2500);
    }
  };

  if (downloadFrontCardBtn) {
    downloadFrontCardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleFrontDownload(downloadFrontCardBtn);
    });
  }

  if (downloadFrontCardTopBtn) {
    downloadFrontCardTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleFrontDownload(downloadFrontCardTopBtn);
    });
  }

  if (downloadBackCardBtn) {
    downloadBackCardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleBackDownload(downloadBackCardBtn);
    });
  }

  if (downloadBackCardTopBtn) {
    downloadBackCardTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleBackDownload(downloadBackCardTopBtn);
    });
  }

  if (downloadBothCardsBtn) {
    downloadBothCardsBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const originalText = downloadBothCardsBtn.innerHTML;
      downloadBothCardsBtn.innerHTML = '<span>⏳ Generating Front Side...</span>';
      await generateFrontCardPNG();
      
      downloadBothCardsBtn.innerHTML = '<span>⏳ Generating Back Side...</span>';
      await new Promise(r => setTimeout(r, 600));
      await generateBackCardPNG();

      downloadBothCardsBtn.innerHTML = '<span>✓ Both Sides Downloaded!</span>';
      setTimeout(() => { downloadBothCardsBtn.innerHTML = originalText; }, 3000);
    });
  }

  if (downloadCardBtn) {
    downloadCardBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (downloadBothCardsBtn) {
        downloadBothCardsBtn.click();
      } else {
        await generateFrontCardPNG();
      }
    });
  }

  // vCard (.vcf) Generator for One-Tap Mobile Contact Saving
  if (saveVCardBtn) {
    saveVCardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const vCardContent = 
`BEGIN:VCARD
VERSION:3.0
N:Nallagatla;Anand;;;
FN:Anand Nallagatla
ORG:Anand Fashion Studio
TITLE:Managing Director & Master Photographer
EMAIL;TYPE=INTERNET:anandfashionstudio@gmail.com
TEL;TYPE=CELL,VOICE,PREF:+919246080201
TEL;TYPE=WORK,VOICE:+919553545324
ADR;TYPE=WORK:;;21/478, Palempapaiah Street, Opp. Sivaram Dum Biryani, Krishna Circle Road;Kadapa;Andhra Pradesh;516001;India
URL;TYPE=WORK:https://anandfashionstudio.in
URL:https://anandfashionstudio.in
URL;TYPE=Instagram:https://instagram.com/anand_fashion_studio_kdp
X-SOCIALPROFILE;type=instagram:https://instagram.com/anand_fashion_studio_kdp
NOTE:Managing Director: Anand Nallagatla. 14+ Years in Kadapa. Royal Wedding Photography, 4K Drone, Pre-Wedding Shoots & Custom Photo Framing. Instagram: @anand_fashion_studio_kdp | Website: anandfashionstudio.in | Tech Partner: MOMO IT TECHNOLOGIES.
END:VCARD`;

      const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Anand_Nallagatla_Anand_Fashion_Studio.vcf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }


  // ====================================================
  // 10. General WhatsApp Price Enquiry Builder Form
  // ====================================================
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const service = document.getElementById('serviceType').value;
      const date = document.getElementById('eventDate').value.trim() || 'To be decided';
      const notes = document.getElementById('enquiryMessage').value.trim() || 'Please share available packages and pricing.';

      const message = 
`*New Enquiry - Anand Fashion Studio Kadapa*
---------------------------------------
👤 *Client Name:* ${name}
📞 *Contact Number:* ${phone}
📸 *Service Required:* ${service}
📅 *Preferred Date:* ${date}
💬 *Notes / Requirements:* ${notes}
---------------------------------------
_Sent via Anand Fashion Studio Web App_
_Technology Partner: MOMO IT TECHNOLOGIES_`;

      const whatsappUrl = `https://wa.me/919553545324?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // ====================================================
  // 11. Progressive Web App (PWA) Engine & Install Experience
  // ====================================================
  
  // A. Register Service Worker with Scope Verification
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('[AFS PWA] Service Worker registered successfully with scope:', reg.scope);

          // Listen for new service worker updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  showNetworkToast('⚡ App updated! Refresh for the latest photography features.', 'online');
                }
              });
            }
          });
        })
        .catch((err) => {
          console.warn('[AFS PWA] Service Worker registration failed:', err);
        });
    });
  }

  // B. PWA Installation Triggers & Banners
  let deferredPrompt = null;
  const pwaInstallBtn = document.getElementById('pwaInstallBtn');
  const pwaInstallBtnMobile = document.getElementById('pwaInstallBtnMobile');
  const pwaInstallBanner = document.getElementById('pwaInstallBanner');
  const pwaBannerInstallBtn = document.getElementById('pwaBannerInstallBtn');
  const pwaBannerDismissBtn = document.getElementById('pwaBannerDismissBtn');
  const pwaCloseBanner = document.getElementById('pwaCloseBanner');
  const iosInstallModal = document.getElementById('iosInstallModal');
  const closeIosInstallModal = document.getElementById('closeIosInstallModal');

  const isIos = () => {
    const ua = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(ua);
  };

  const isInStandaloneMode = () => {
    return ('standalone' in window.navigator && window.navigator.standalone) ||
           window.matchMedia('(display-mode: standalone)').matches;
  };

  // If already running as an installed PWA, hide install buttons
  if (isInStandaloneMode()) {
    pwaInstallBtn?.classList.add('hidden');
    pwaInstallBtnMobile?.classList.add('hidden');
    pwaInstallBanner?.classList.add('hidden');
  }

  // Capture beforeinstallprompt event (Chromium, Edge, Android Chrome, Samsung Internet)
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    if (!isInStandaloneMode()) {
      if (pwaInstallBtn) pwaInstallBtn.classList.remove('hidden');
      if (pwaInstallBtnMobile) pwaInstallBtnMobile.classList.remove('hidden');

      // Check if user dismissed banner recently (within 3 days)
      const dismissedTime = localStorage.getItem('afs_pwa_banner_dismissed');
      const now = Date.now();
      if (!dismissedTime || now - parseInt(dismissedTime, 10) > 3 * 24 * 60 * 60 * 1000) {
        if (pwaInstallBanner) {
          setTimeout(() => {
            pwaInstallBanner.classList.remove('hidden');
          }, 2500);
        }
      }
    }
  });

  // Prompt trigger function
  const executePwaInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('[AFS PWA] User accepted installation prompt');
        if (pwaInstallBanner) pwaInstallBanner.classList.add('hidden');
      }
      deferredPrompt = null;
    } else if (isIos() && !isInStandaloneMode()) {
      if (iosInstallModal) {
        iosInstallModal.showModal();
      }
    } else {
      showNetworkToast('To install: Open your browser menu (⋮) and tap "Install App" or "Add to Home Screen".', 'info');
    }
  };

  // Attach click listeners to all install elements
  pwaInstallBtn?.addEventListener('click', executePwaInstall);
  pwaInstallBtnMobile?.addEventListener('click', executePwaInstall);
  pwaBannerInstallBtn?.addEventListener('click', executePwaInstall);

  // Banner dismiss handlers
  const dismissPwaBanner = () => {
    if (pwaInstallBanner) pwaInstallBanner.classList.add('hidden');
    localStorage.setItem('afs_pwa_banner_dismissed', Date.now().toString());
  };
  pwaBannerDismissBtn?.addEventListener('click', dismissPwaBanner);
  pwaCloseBanner?.addEventListener('click', dismissPwaBanner);
  closeIosInstallModal?.addEventListener('click', () => {
    iosInstallModal?.close();
  });
  iosInstallModal?.addEventListener('click', (e) => {
    if (e.target === iosInstallModal) {
      iosInstallModal.close();
    }
  });

  // Event fired when app is successfully installed
  window.addEventListener('appinstalled', () => {
    console.log('[AFS PWA] Anand Fashion Studio was successfully installed!');
    pwaInstallBtn?.classList.add('hidden');
    pwaInstallBtnMobile?.classList.add('hidden');
    pwaInstallBanner?.classList.add('hidden');
    showNetworkToast('✓ Anand Fashion Studio app successfully added to your phone!', 'online');
  });

  // C. Online / Offline Connectivity Detection & Floating Alerts
  const networkToast = document.getElementById('networkToast');
  let networkToastTimer = null;

  const showNetworkToast = (message, type = 'info') => {
    if (!networkToast) return;
    clearTimeout(networkToastTimer);

    networkToast.innerHTML = `<span>${message}</span>`;
    networkToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl transition-all duration-300 pointer-events-auto flex items-center gap-2 ';

    if (type === 'online') {
      networkToast.className += 'bg-emerald-600 text-white border border-emerald-400/40';
    } else if (type === 'offline') {
      networkToast.className += 'bg-amber-600 text-white border border-amber-400/50';
    } else {
      networkToast.className += 'bg-brand-card text-brand-gold border border-brand-gold/60';
    }

    networkToast.style.opacity = '1';
    networkToast.style.pointerEvents = 'auto';

    networkToastTimer = setTimeout(() => {
      networkToast.style.opacity = '0';
      networkToast.style.pointerEvents = 'none';
    }, 4500);
  };

  window.addEventListener('online', () => {
    showNetworkToast('✓ You are back online! Anand Fashion Studio live sync active.', 'online');
  });

  window.addEventListener('offline', () => {
    showNetworkToast('⚠️ You are offline. Cached portfolio & contact info remain available!', 'offline');
  });

  // D. 1-Tap Instagram Smart Follow Launcher with Dynamic Status Feedback
  const followBtn = document.getElementById("followBtn");
  const followBtnText = document.getElementById("followBtnText");
  const followBtnBadge = document.getElementById("followBtnBadge");
  const statusEl = document.getElementById("status");

  // Visual UI updater for Follow action
  const setFollowedState = (isFollowed, showPing = false) => {
    if (isFollowed) {
      if (followBtn) {
        followBtn.classList.remove('ig-btn-gradient');
        followBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-500', 'border', 'border-emerald-400/40');
      }
      if (followBtnText) followBtnText.textContent = 'Following @anand_fashion_studio_kdp';
      if (followBtnBadge) {
        followBtnBadge.textContent = '✓';
        followBtnBadge.className = 'text-xs bg-white/30 px-1.5 py-0.5 rounded-full font-black';
      }
      if (statusEl) {
        const pingDot = showPing ? '<span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>' : '<span class="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>';
        statusEl.innerHTML = `${pingDot}<span class="text-emerald-400 font-bold">Follow action triggered</span> <span class="text-slate-300">• Connected with Anand Fashion Studio!</span>`;
      }
      // Also update any other Instagram buttons on page
      document.querySelectorAll('[data-action="instagram-follow"]').forEach((btn) => {
        if (btn !== followBtn) {
          const badge = btn.querySelector('span:last-child');
          if (badge) badge.textContent = '✓ Following';
        }
      });
    }
  };

  // Restore follow status if previously triggered
  if (localStorage.getItem('afs_instagram_followed') === 'true') {
    setFollowedState(true, false);
  }

  const openInstagramProfile = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const username = 'anand_fashion_studio_kdp';
    const webUrl = `https://www.instagram.com/${username}/`;
    const appUri = `instagram://user?username=${username}`;
    const ua = (navigator.userAgent || navigator.vendor || window.opera || '').toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/i.test(ua);

    // Persist followed state and update UI
    localStorage.setItem('afs_instagram_followed', 'true');
    setFollowedState(true, true);

    showNetworkToast('✓ Follow action triggered! Opening Instagram to connect...', 'online');

    setTimeout(() => {
      if (isMobile) {
        const isAndroid = /android/i.test(ua);
        const isIos = /iphone|ipad|ipod/i.test(ua);

        if (isAndroid) {
          // Android Intent directed at official Instagram app with fallback to web
          const intentUrl = `intent://instagram.com/_u/${username}/#Intent;package=com.instagram.android;scheme=https;end`;
          window.location.href = intentUrl;
        } else if (isIos) {
          // iOS Safari deep link with 600ms fallback to web URL
          const start = Date.now();
          window.location.href = appUri;
          setTimeout(() => {
            if (Date.now() - start < 1200) {
              window.location.href = webUrl;
            }
          }, 600);
        } else {
          window.location.href = appUri;
        }
      } else {
        // Desktop: Open clean web profile in new tab
        window.open(webUrl, '_blank', 'noopener,noreferrer');
      }
    }, 250);
  };

  // Exact Customer integration snippet:
  followBtn?.addEventListener("click", () => {
    if (statusEl) statusEl.textContent = "Follow action triggered";
  });

  // Attach click listener to all 1-tap Instagram follow buttons & links
  document.querySelectorAll('[data-action="instagram-follow"]').forEach((btn) => {
    btn.addEventListener('click', openInstagramProfile);
  });

});

