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
  // 9. Digital Business Card: High-Res PNG & vCard Generator
  // ====================================================
  const downloadCardBtn = document.getElementById('downloadCardBtn');
  const saveVCardBtn = document.getElementById('saveVCardBtn');

  // Client-Side Canvas High-Res Visiting Card Generator (1200 x 700 px)
  const generateHighResCardPNG = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Rich dark background
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 700);
    bgGrad.addColorStop(0, '#060910');
    bgGrad.addColorStop(0.5, '#020305');
    bgGrad.addColorStop(1, '#0c121e');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 700);

    // 2. Gold Border Frame & Corner Accents
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D4AF37';
    ctx.strokeRect(30, 30, 1140, 640);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#FBF5B7';
    ctx.strokeRect(40, 40, 1120, 620);

    // Corner Ornaments
    const drawCorner = (x, y, dx, dy) => {
      ctx.beginPath();
      ctx.moveTo(x, y + dy * 30);
      ctx.lineTo(x, y);
      ctx.lineTo(x + dx * 30, y);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#D4AF37';
      ctx.stroke();
    };
    drawCorner(50, 50, 1, 1);
    drawCorner(1150, 50, -1, 1);
    drawCorner(50, 650, 1, -1);
    drawCorner(1150, 650, -1, -1);

    // 3. Draw Logo Emblem on Left
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    logoImg.src = 'assets/logo.jpg';

    logoImg.onload = () => {
      // Circular logo clip
      ctx.save();
      ctx.beginPath();
      ctx.arc(230, 350, 140, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(logoImg, 90, 210, 280, 280);
      ctx.restore();

      // Golden ring around logo
      ctx.beginPath();
      ctx.arc(230, 350, 142, 0, Math.PI * 2);
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#D4AF37';
      ctx.stroke();

      // 4. Text Content on Right
      // Studio Name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
      ctx.fillText('ANAND FASHION STUDIO', 420, 140);

      // Gold Slogan & Managing Director
      ctx.fillStyle = '#D4AF37';
      ctx.font = 'bold 20px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('CAPTURING STYLE & MOMENTS • EST. 2010', 420, 180);

      ctx.fillStyle = '#F3E5AB';
      ctx.font = 'bold 21px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('Managing Director: Anand Nallagatla', 420, 218);

      // Divider Line
      const divGrad = ctx.createLinearGradient(420, 235, 1100, 235);
      divGrad.addColorStop(0, '#D4AF37');
      divGrad.addColorStop(0.7, '#C1121F');
      divGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = divGrad;
      ctx.fillRect(420, 235, 680, 3);

      // Studio Services
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '18px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('📸 Royal Wedding Photography & Candid Cinematography', 420, 280);
      ctx.fillText('🎥 4K Aerial Drone Coverage & Traditional Telugu Muhurtham', 420, 318);
      ctx.fillText('🖼️ In-Studio Photo Framing & Personalized Gift Articles', 420, 356);
      ctx.fillText('⚡ Express 5-Minute Passport & Biometric Visa Prints', 420, 394);

      // Contact Numbers & Email & Official Website
      ctx.fillStyle = '#D4AF37';
      ctx.font = 'bold 21px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('📞 Call / WhatsApp: +91 9246080201  |  +91 9553545324', 420, 435);

      ctx.fillStyle = '#93C5FD';
      ctx.font = 'bold 18px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('✉️ Email: anandfashionstudio@gmail.com', 420, 470);

      ctx.fillStyle = '#FDE047';
      ctx.font = 'bold 18px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('🌐 Official Website: anandfashionstudio.in', 420, 502);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '16px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('📍 Address: 21/478, Palempapaiah St, Opp. Sivaram Dum Biryani, Kadapa - 516001', 420, 534);

      ctx.fillStyle = '#FBF5B7';
      ctx.font = 'bold 14px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('⭐ Google & ReviewSmart: reviewsmart.online/r/anand-fashion-studio-bf84', 420, 566);

      // Bottom Tech Partner with Logo
      const partnerImg = new Image();
      partnerImg.crossOrigin = 'anonymous';
      partnerImg.src = 'assets/momo_it_logo.png';
      
      partnerImg.onload = () => {
        ctx.save();
        ctx.drawImage(partnerImg, 420, 615, 34, 34);
        ctx.restore();

        ctx.fillStyle = '#94A3B8';
        ctx.font = 'bold 15px "Plus Jakarta Sans", Arial, sans-serif';
        ctx.fillText('Official Technology Partner: MOMO IT TECHNOLOGIES (momoittechnologies.com)', 465, 638);
        triggerDownload();
      };

      partnerImg.onerror = () => {
        ctx.fillStyle = '#94A3B8';
        ctx.font = 'bold 15px "Plus Jakarta Sans", Arial, sans-serif';
        ctx.fillText('Official Technology Partner: MOMO IT TECHNOLOGIES (momoittechnologies.com)', 420, 638);
        triggerDownload();
      };

      const triggerDownload = () => {
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'Anand_Fashion_Studio_Kadapa_Visiting_Card.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
    };

    // Fallback if logo image fails
    logoImg.onerror = () => {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'Anand_Fashion_Studio_Kadapa_Visiting_Card.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  };

  if (downloadCardBtn) {
    downloadCardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadCardBtn.innerHTML = '<span>⏳ Generating High-Res Card...</span>';
      setTimeout(() => {
        generateHighResCardPNG();
        downloadCardBtn.innerHTML = '<span>✓ Card Downloaded!</span>';
        setTimeout(() => {
          downloadCardBtn.innerHTML = '<span>📥 Download High-Res Card (PNG)</span>';
        }, 2500);
      }, 300);
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

  // D. 1-Tap Instagram Smart Follow Launcher (iOS, Android, Desktop)
  const openInstagramProfile = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const username = 'anand_fashion_studio_kdp';
    const webUrl = `https://www.instagram.com/${username}/`;
    const appUri = `instagram://user?username=${username}`;
    const ua = (navigator.userAgent || navigator.vendor || window.opera || '').toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/i.test(ua);

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
  };

  // Attach click listener to all 1-tap Instagram follow buttons & links
  document.querySelectorAll('[data-action="instagram-follow"]').forEach((btn) => {
    btn.addEventListener('click', openInstagramProfile);
  });

});

