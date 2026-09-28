/**
 * Sanctuary & Mind Blog - Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    activeCategory: 'all',
    searchQuery: '',
    bookmarks: JSON.parse(localStorage.getItem('sanctuary_bookmarks') || '[]'),
    theme: localStorage.getItem('sanctuary_theme') || 'light',
    currentAudioPlaying: false
  };

  // DOM Elements
  const categoryTabsContainer = document.getElementById('category-tabs-container');
  const articlesGrid = document.getElementById('articles-grid');
  const featuredArticleSection = document.getElementById('featured-article-container');
  const searchInput = document.getElementById('search-input');
  const activeCategoryTitle = document.getElementById('active-category-title');
  const activeCategoryDesc = document.getElementById('active-category-desc');
  const articleCountBadge = document.getElementById('article-count-badge');
  const emptyState = document.getElementById('empty-state');
  const tabsScrollLeft = document.getElementById('tabs-scroll-left');
  const tabsScrollRight = document.getElementById('tabs-scroll-right');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const bookmarkCountEl = document.getElementById('bookmark-count');
  const readingProgressBar = document.getElementById('reading-progress');

  // Category descriptions dictionary
  const CATEGORY_META = {
    'all': {
      title: 'Sacred Archive & Essays',
      desc: 'Explore timeless contemplations spanning ancestral memory, psyche, spiritual insight, and the art of living deeply.'
    },
    'healing': {
      title: 'Somatic & Holistic Healing',
      desc: 'Reconnecting mind, nervous system, and body through embodied wisdom, trauma integration, and cellular restoration.'
    },
    'spirituality': {
      title: 'Contemplative Spirituality',
      desc: 'Direct inquiry into non-dual presence, sacred mysticism, inner silence, and the awakening of conscious awareness.'
    },
    'lifestyle-wellness': {
      title: 'Lifestyle and Wellness',
      desc: 'Harmonizing circadian rhythms, whole-food nourishment, restorative sleep, and sustainable holistic vitality.'
    },
    'women': {
      title: "Women's Wisdom & Cycles",
      desc: 'Honoring infradian biology, feminine archetypes, seasonal living, and sovereign sisterhood councils.'
    },
    'ancestral-healing': {
      title: 'Ancestral Healing & Lineage',
      desc: 'Epigenetic reconciliation, family constellations, releasing inherited grief, and honoring the elders.'
    },
    'literature-movies': {
      title: 'Literature and Movies',
      desc: 'Meditative cinema, transcendent literary narratives, poetic philosophy, and cinematic reflections.'
    },
    'religion-mythology': {
      title: 'Religion and Mythology',
      desc: 'Comparative sacred scripture, primordial myths, the wounded healer, and the symbolic language of the sacred.'
    },
    'culture': {
      title: 'Culture & Sacred Traditions',
      desc: 'Living ceremonies, slow hospitality, traditional arts, and global philosophical heritage.'
    },
    'psychology': {
      title: 'Depth Psychology & Mind',
      desc: 'Internal family systems, Jungian shadow exploration, archetype integration, and emotional resilience.'
    },
    'philosophy': {
      title: 'Philosophy & Ethics',
      desc: 'Stoic resilience, Amor Fati, existential lucidity, and contemplative frameworks for modern living.'
    },
    'relationships': {
      title: 'Relational Attunement',
      desc: 'Conscious attachment, compassionate boundary work, sacred vulnerability, and the sacred dance of intimacy.'
    },
    'miscellaneous': {
      title: 'Miscellaneous Inquiries',
      desc: 'Marginal notes, quiet vignettes, curious observations, and contemplative wanderings.'
    },
    'resources-offerings': {
      title: 'Resources & Sacred Offerings',
      desc: 'Downloadable self-inquiry workbooks, audio immersions, diagnostic quizzes, and bespoke 1-on-1 mentorship containers.'
    }
  };

  // Lucide Icons Map
  const ICON_SVGS = {
    'sparkles': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    'heart-pulse': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    'sun': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
    'leaf': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 20A7 7 0 014 13C4 9.134 7.134 6 11 6c4.5 0 8.5 2 9 8 0 3.866-3.134 7-7 7z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 21c3-3 7-5 10-5"/></svg>`,
    'flower': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C9.5 2 8 3.5 8 5.5S9.5 9 12 9s4-1.5 4-3.5S14.5 2 12 2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15c-2.5 0-4 1.5-4 3.5S9.5 22 12 22s4-1.5 4-3.5-1.5-3.5-4-3.5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 8C3.5 8 2 9.5 2 12s1.5 4 3.5 4 3.5-1.5 3.5-4-1.5-4-3.5-4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 8c-2 0-3.5 1.5-3.5 4s1.5 4 3.5 4 3.5-1.5 3.5-4-1.5-4-3.5-4z"/></svg>`,
    'tree-pine': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L4 12h4l-3 6h7v4h2v-4h7l-3-6h4L12 2z"/></svg>`,
    'film': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>`,
    'flame': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/></svg>`,
    'globe': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    'brain': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    'compass': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke-width="2"/></svg>`,
    'users': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
    'feather': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3L5 17l-2 4 4-2L21 5a2 2 0 00-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7l2 2"/></svg>`,
    'gem': `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3h12l4 6-10 12L2 9l4-6z"/></svg>`
  };

  // Initialize
  initTheme();
  renderCategoryTabs();
  renderArticles();
  renderResourcesAndOfferingsHub();
  setupEventListeners();
  updateBookmarkBadge();

  // Scroll Progress indicator
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (readingProgressBar) {
      readingProgressBar.style.width = scrolled + '%';
    }
  });

  // Render Tabs Navigation
  function renderCategoryTabs() {
    if (!categoryTabsContainer) return;
    categoryTabsContainer.innerHTML = '';

    CATEGORIES.forEach(cat => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.categoryId = cat.id;

      const isActive = state.activeCategory === cat.id;
      const count = getPostCountForCategory(cat.id);
      const iconSvg = ICON_SVGS[cat.icon] || '';

      // Tab styling
      let baseClasses = "tab-pill flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border cursor-pointer ";

      if (isActive) {
        if (cat.id === 'resources-offerings') {
          baseClasses += "bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-600 shadow-md shadow-amber-500/20";
        } else {
          baseClasses += "bg-stone-900 text-white border-stone-900 dark:bg-amber-100 dark:text-stone-900 dark:border-amber-100 shadow-sm";
        }
      } else {
        if (cat.highlight) {
          baseClasses += "bg-amber-50/80 text-amber-900 border-amber-200 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60";
        } else {
          baseClasses += "bg-white/90 text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900 dark:bg-stone-900/80 dark:text-stone-300 dark:border-stone-800 dark:hover:bg-stone-800";
        }
      }

      button.className = baseClasses;

      // Count badge
      let countBadgeHtml = '';
      if (cat.id === 'resources-offerings') {
        countBadgeHtml = `<span class="px-1.5 py-0.5 text-xs rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-amber-200/80 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200'} font-semibold">Hub</span>`;
      } else {
        countBadgeHtml = `<span class="px-2 py-0.5 text-xs rounded-full ${isActive ? 'bg-white/20 text-white dark:bg-stone-900/20 dark:text-stone-900' : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400'} font-sans">${count}</span>`;
      }

      button.innerHTML = `
        <span class="${isActive ? 'text-amber-300 dark:text-amber-700' : 'text-stone-400 dark:text-stone-500'}">${iconSvg}</span>
        <span>${cat.name}</span>
        ${countBadgeHtml}
      `;

      button.addEventListener('click', () => {
        selectCategory(cat.id);
      });

      categoryTabsContainer.appendChild(button);
    });
  }

  function getPostCountForCategory(catId) {
    if (catId === 'all') return BLOG_POSTS.length;
    if (catId === 'resources-offerings') return (RESOURCES_AND_OFFERINGS.freeResources.length + RESOURCES_AND_OFFERINGS.offerings.length);
    return BLOG_POSTS.filter(p => p.category === catId).length;
  }

  function selectCategory(catId) {
    state.activeCategory = catId;
    renderCategoryTabs();

    // Scroll active button into view nicely
    const activeBtn = categoryTabsContainer.querySelector(`[data-category-id="${catId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Update section metadata title and description
    const meta = CATEGORY_META[catId] || CATEGORY_META['all'];
    if (activeCategoryTitle) activeCategoryTitle.textContent = meta.title;
    if (activeCategoryDesc) activeCategoryDesc.textContent = meta.desc;

    // Render articles or trigger resources view
    if (catId === 'resources-offerings') {
      // Hide articles grid and hero, show and scroll smoothly to dedicated resources hub
      if (articlesGrid) articlesGrid.classList.add('hidden');
      if (featuredArticleSection) featuredArticleSection.classList.add('hidden');
      const resSection = document.getElementById('resources-offerings-section');
      if (resSection) {
        resSection.classList.remove('hidden');
        resSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (articleCountBadge) {
        articleCountBadge.textContent = `${RESOURCES_AND_OFFERINGS.freeResources.length + RESOURCES_AND_OFFERINGS.offerings.length} Curated Offerings`;
      }
    } else {
      if (articlesGrid) articlesGrid.classList.remove('hidden');
      if (featuredArticleSection) featuredArticleSection.classList.remove('hidden');
      renderArticles();
    }
  }

  // Render Articles & Featured Hero
  function renderArticles() {
    if (!articlesGrid) return;

    // Filter posts
    let filtered = BLOG_POSTS;

    if (state.activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === state.activeCategory);
    }

    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Update badge count
    if (articleCountBadge) {
      articleCountBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'Essay' : 'Essays'} Available`;
    }

    // Empty state
    if (filtered.length === 0) {
      articlesGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    } else {
      if (emptyState) emptyState.classList.add('hidden');
    }

    // Render Featured Article (Top article of list or featured flag)
    renderHeroArticle(filtered[0]);

    // Render rest of articles in grid
    const remainingPosts = filtered.slice(1);
    articlesGrid.innerHTML = '';

    remainingPosts.forEach(post => {
      const isBookmarked = state.bookmarks.includes(post.id);

      const card = document.createElement('article');
      card.className = "article-card group bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-2xl overflow-hidden flex flex-col justify-between";

      card.innerHTML = `
        <div>
          <!-- Thumbnail Container -->
          <div class="relative zoom-image-container aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800 cursor-pointer" onclick="window.SanctuaryApp.openArticleModal(${post.id})">
            <img 
              src="${post.image}" 
              alt="${post.title}" 
              loading="lazy"
              class="zoom-image w-full h-full object-cover transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
            
            <!-- Category Badge -->
            <span class="absolute top-4 left-4 backdrop-blur-md bg-stone-900/80 text-amber-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
              ${post.categoryName}
            </span>

            <!-- Bookmark Button -->
            <button 
              type="button"
              onclick="event.stopPropagation(); window.SanctuaryApp.toggleBookmark(${post.id})"
              class="absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-md bg-white/80 dark:bg-stone-900/80 hover:bg-white text-stone-700 dark:text-stone-200 flex items-center justify-center transition-transform active:scale-90 shadow-sm"
              title="${isBookmarked ? 'Remove Bookmark' : 'Save Bookmark'}"
            >
              <svg class="w-4 h-4 ${isBookmarked ? 'text-amber-600 fill-amber-600' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
            </button>
          </div>

          <!-- Content Details -->
          <div class="p-6">
            <div class="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400 mb-3">
              <span>${post.date}</span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                ${post.readTime}
              </span>
            </div>

            <h3 
              class="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug cursor-pointer mb-3"
              onclick="window.SanctuaryApp.openArticleModal(${post.id})"
            >
              ${post.title}
            </h3>

            <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed line-clamp-3 mb-4">
              ${post.excerpt}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${post.tags.slice(0, 3).map(tag => `
                <span class="text-[11px] font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-2 py-0.5 rounded-md">
                  #${tag}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Footer / Author & Read Action -->
        <div class="px-6 pb-6 pt-2 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between mt-auto">
          <div class="flex items-center gap-3">
            <img src="${post.author.avatar}" alt="${post.author.name}" class="w-8 h-8 rounded-full object-cover border border-amber-600/30">
            <div>
              <p class="text-xs font-semibold text-stone-900 dark:text-stone-200">${post.author.name}</p>
              <p class="text-[10px] text-stone-500">${post.author.role}</p>
            </div>
          </div>

          <button 
            type="button"
            onclick="window.SanctuaryApp.openArticleModal(${post.id})"
            class="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            Read Essay
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      `;

      articlesGrid.appendChild(card);
    });
  }

  // Hero Spotlight Article
  function renderHeroArticle(post) {
    if (!featuredArticleSection || !post) return;

    const isBookmarked = state.bookmarks.includes(post.id);

    featuredArticleSection.innerHTML = `
      <div class="group relative bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 rounded-3xl overflow-hidden shadow-xl shadow-stone-200/40 dark:shadow-black/60 grid grid-cols-1 lg:grid-cols-12 transition-all duration-500 hover:border-amber-500/40 dark:hover:border-amber-600/40">
        
        <!-- Image Column -->
        <div class="lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto min-h-[320px] lg:min-h-[460px] cursor-pointer" onclick="window.SanctuaryApp.openArticleModal(${post.id})">
          <img 
            src="${post.image}" 
            alt="${post.title}" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
          
          <!-- Badges on image -->
          <div class="absolute top-5 left-5 flex flex-wrap items-center gap-2">
            <span class="backdrop-blur-md bg-stone-900/85 text-amber-200 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-amber-500/30">
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              <span>Featured Spotlight</span>
            </span>
            <span class="backdrop-blur-md bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${post.readTime}</span>
            </span>
          </div>

          <div class="absolute bottom-5 left-5 right-5 text-white lg:hidden">
            <span class="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1 block">${post.categoryName}</span>
            <h3 class="text-xl font-serif font-bold text-white leading-snug line-clamp-2">${post.title}</h3>
          </div>
        </div>

        <!-- Content Column -->
        <div class="lg:col-span-5 p-7 lg:p-10 flex flex-col justify-between bg-stone-50/60 dark:bg-stone-900/60 backdrop-blur-md">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>${post.categoryName}</span>
              </span>
              <div class="flex items-center gap-2.5 text-xs text-stone-500 dark:text-stone-400">
                <span>${post.date}</span>
                <span>•</span>
                <span class="hidden sm:inline">${post.readTime}</span>
              </div>
            </div>

            <h2 
              class="text-2xl lg:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors leading-tight mb-4 cursor-pointer"
              onclick="window.SanctuaryApp.openArticleModal(${post.id})"
            >
              ${post.title}
            </h2>

            <p class="text-stone-600 dark:text-stone-300 text-sm lg:text-base leading-relaxed mb-6 font-normal">
              ${post.excerpt}
            </p>

            <div class="flex flex-wrap gap-2 mb-8">
              ${post.tags.map(t => `<span class="text-xs font-medium bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-3 py-1 rounded-full border border-stone-200 dark:border-stone-700">#${t}</span>`).join('')}
            </div>
          </div>

          <div class="pt-6 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img src="${post.author.avatar}" alt="${post.author.name}" class="w-11 h-11 rounded-full object-cover ring-2 ring-amber-500/30">
              <div>
                <h4 class="text-sm font-semibold text-stone-900 dark:text-white">${post.author.name}</h4>
                <p class="text-xs text-stone-500 dark:text-stone-400">${post.author.role}</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="window.SanctuaryApp.toggleBookmark(${post.id})"
                class="p-2.5 rounded-full border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition text-stone-700 dark:text-stone-200 cursor-pointer"
                title="Bookmark article"
              >
                <svg class="w-4 h-4 ${isBookmarked ? 'text-amber-600 fill-amber-600' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
              </button>

              <button 
                type="button"
                onclick="window.SanctuaryApp.openArticleModal(${post.id})"
                class="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white dark:bg-amber-100 dark:hover:bg-white dark:text-stone-900 text-xs font-semibold uppercase tracking-wider transition shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>Read Essay</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render "Resources & Offerings" Section (like in Optimal Happiness Blog)
  function renderResourcesAndOfferingsHub() {
    const freeResGrid = document.getElementById('free-resources-grid');
    const offeringsGrid = document.getElementById('offerings-grid');

    if (freeResGrid) {
      freeResGrid.innerHTML = RESOURCES_AND_OFFERINGS.freeResources.map(res => `
        <div class="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-2xl overflow-hidden flex flex-col justify-between transition hover:shadow-lg">
          <div>
            <div class="relative aspect-[16/9] overflow-hidden">
              <img src="${res.image}" alt="${res.title}" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${res.badgeColor}">
                ${res.badge}
              </span>
              <span class="absolute bottom-4 right-4 backdrop-blur-md bg-stone-950/70 text-white text-xs px-2.5 py-0.5 rounded-md">
                ${res.downloads}
              </span>
            </div>
            
            <div class="p-6">
              <div class="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold mb-2">${res.type} • ${res.format}</div>
              <h4 class="text-xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-snug">${res.title}</h4>
              <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">${res.description}</p>
              
              <ul class="space-y-2 mb-6">
                ${res.features.map(f => `
                  <li class="text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2">
                    <svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>${f}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button 
              type="button" 
              onclick="window.SanctuaryApp.openActionModal('${res.actionModal}', '${res.title}')"
              class="w-full py-3 px-4 rounded-xl bg-amber-50 dark:bg-stone-800 text-amber-900 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-stone-700 font-medium text-sm transition flex items-center justify-center gap-2 border border-amber-200/60 dark:border-stone-700"
            >
              <span>${res.actionText}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </button>
          </div>
        </div>
      `).join('');
    }

    if (offeringsGrid) {
      offeringsGrid.innerHTML = RESOURCES_AND_OFFERINGS.offerings.map(offering => `
        <div class="bg-white dark:bg-stone-900 border border-amber-200/70 dark:border-stone-800 rounded-3xl p-8 flex flex-col justify-between transition hover:shadow-xl relative overflow-hidden group">
          <div class="absolute -right-16 -top-16 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition"></div>
          
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-3 py-1 rounded-full ${offering.badgeColor}">
                ${offering.badge}
              </span>
              <span class="text-xs text-stone-500 font-medium">${offering.duration}</span>
            </div>

            <h4 class="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-1">${offering.title}</h4>
            <p class="text-xs text-amber-700 dark:text-amber-400 font-medium mb-4">${offering.subtitle}</p>
            <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6">${offering.description}</p>

            <div class="bg-stone-50 dark:bg-stone-800/60 rounded-2xl p-4 mb-6 border border-stone-100 dark:border-stone-800">
              <p class="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">What is included:</p>
              <ul class="space-y-2">
                ${offering.features.map(feat => `
                  <li class="text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2">
                    <svg class="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>${feat}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <div class="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <div>
              <span class="text-xs text-stone-400 block">Investment</span>
              <span class="text-lg font-serif font-bold text-stone-900 dark:text-white">${offering.investment}</span>
            </div>

            <button 
              type="button" 
              onclick="window.SanctuaryApp.openBookingModal('${offering.title}', '${offering.investment}')"
              class="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white dark:bg-amber-600 dark:hover:bg-amber-500 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <span>${offering.ctaText}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Search listener
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderArticles();
      });
    }

    // Scroll buttons for tabs
    if (tabsScrollLeft && categoryTabsContainer) {
      tabsScrollLeft.addEventListener('click', () => {
        categoryTabsContainer.scrollBy({ left: -240, behavior: 'smooth' });
      });
    }

    if (tabsScrollRight && categoryTabsContainer) {
      tabsScrollRight.addEventListener('click', () => {
        categoryTabsContainer.scrollBy({ left: 240, behavior: 'smooth' });
      });
    }

    // Theme toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Newsletter subscription form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input[type="email"]');
        if (input && input.value) {
          showToast(`Welcome! A sacred welcome email has been sent to ${input.value}.`);
          input.value = '';
        }
      });
    }
  }

  // Bookmarks management
  function toggleBookmark(postId) {
    const index = state.bookmarks.indexOf(postId);
    if (index > -1) {
      state.bookmarks.splice(index, 1);
      showToast("Article removed from your saved sanctuary.");
    } else {
      state.bookmarks.push(postId);
      showToast("Article saved to your personal sanctuary reading list.");
    }
    localStorage.setItem('sanctuary_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarkBadge();
    renderArticles();
  }

  function updateBookmarkBadge() {
    if (bookmarkCountEl) {
      bookmarkCountEl.textContent = state.bookmarks.length;
      bookmarkCountEl.classList.toggle('hidden', state.bookmarks.length === 0);
    }
  }

  // Theme Management
  function initTheme() {
    if (state.theme === 'dark' || (!('sanctuary_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    state.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('sanctuary_theme', state.theme);
    showToast(`Switched to ${state.theme} mode.`);
  }

  // Toast Notification System
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3800);
  }

  // Expose global methods for modal interactions
  window.SanctuaryApp = {
    toggleBookmark,
    selectCategory,
    openArticleModal: function(postId) {
      const post = BLOG_POSTS.find(p => p.id === postId);
      if (!post) return;

      const modal = document.getElementById('article-modal');
      const container = document.getElementById('article-modal-content');
      if (!modal || !container) return;

      const isBookmarked = state.bookmarks.includes(post.id);

      container.innerHTML = `
        <div class="relative">
          <div class="aspect-[21/9] w-full overflow-hidden bg-stone-900 rounded-t-3xl relative">
            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover opacity-90">
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
            
            <div class="absolute bottom-8 left-8 right-8 text-white">
              <span class="text-xs uppercase tracking-widest font-semibold text-amber-300 mb-2 inline-block">
                ${post.categoryName}
              </span>
              <h2 class="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-4">
                ${post.title}
              </h2>

              <div class="flex flex-wrap items-center gap-4 text-xs text-stone-300">
                <span class="flex items-center gap-2">
                  <img src="${post.author.avatar}" class="w-6 h-6 rounded-full object-cover">
                  ${post.author.name} (${post.author.role})
                </span>
                <span>•</span>
                <span>${post.date}</span>
                <span>•</span>
                <span>${post.readTime}</span>
              </div>
            </div>
          </div>

          <div class="p-8 lg:p-12 bg-white dark:bg-stone-900 rounded-b-3xl">
            <!-- Article Body -->
            <div class="prose prose-stone dark:prose-invert max-w-none text-base lg:text-lg">
              ${post.content}
            </div>

            <!-- Tags -->
            <div class="mt-10 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <div class="flex flex-wrap gap-2">
                ${post.tags.map(t => `<span class="text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-3 py-1 rounded-full">#${t}</span>`).join('')}
              </div>

              <div class="flex items-center gap-3">
                <button 
                  type="button"
                  onclick="window.SanctuaryApp.toggleBookmark(${post.id}); window.SanctuaryApp.openArticleModal(${post.id});"
                  class="px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-semibold flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                >
                  <svg class="w-4 h-4 ${isBookmarked ? 'text-amber-600 fill-amber-600' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                  <span>${isBookmarked ? 'Saved in Sanctuary' : 'Save Article'}</span>
                </button>

                <button 
                  type="button"
                  onclick="navigator.clipboard.writeText(window.location.href); window.SanctuaryApp.showToastMessage('Article link copied to clipboard!');"
                  class="px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-xs font-semibold text-stone-800 dark:text-stone-200 transition flex items-center gap-1.5"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                  Share
                </button>
              </div>
            </div>

            <!-- Cross-promotion for Offerings under the blog (as requested) -->
            <div class="mt-8 p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span class="text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold block mb-1">Deepen Your Journey</span>
                <h4 class="text-lg font-serif font-bold text-stone-900 dark:text-white">Explore our Sacred Offerings & Diagnostic Guides</h4>
                <p class="text-xs text-stone-600 dark:text-stone-400 mt-1">Discover customized 1-on-1 sessions, contemplative mentorships, and free reflection workbooks.</p>
              </div>
              <button 
                type="button" 
                onclick="window.SanctuaryApp.closeModal('article-modal'); window.SanctuaryApp.selectCategory('resources-offerings');"
                class="px-6 py-2.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs whitespace-nowrap shadow-sm"
              >
                View Resources & Offerings →
              </button>
            </div>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    },

    closeModal: function(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    },

    openActionModal: function(modalType, title) {
      if (modalType === 'download-modal') {
        const modal = document.getElementById('download-modal');
        const titleEl = document.getElementById('download-modal-title');
        if (titleEl) titleEl.textContent = title;
        if (modal) {
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }
      } else if (modalType === 'audio-modal') {
        const modal = document.getElementById('audio-modal');
        if (modal) {
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }
      } else if (modalType === 'quiz-modal') {
        const modal = document.getElementById('quiz-modal');
        if (modal) {
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
          window.SanctuaryApp.initQuiz();
        }
      }
    },

    openBookingModal: function(title, investment) {
      const modal = document.getElementById('booking-modal');
      const titleEl = document.getElementById('booking-service-title');
      const priceEl = document.getElementById('booking-service-price');
      if (titleEl) titleEl.textContent = title;
      if (priceEl) priceEl.textContent = investment;
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    },

    openBookmarksModal: function() {
      const modal = document.getElementById('bookmarks-modal');
      const list = document.getElementById('bookmarks-list');
      if (!modal || !list) return;

      const savedPosts = BLOG_POSTS.filter(p => state.bookmarks.includes(p.id));

      if (savedPosts.length === 0) {
        list.innerHTML = `
          <div class="text-center py-12 text-stone-500">
            <svg class="w-12 h-12 mx-auto mb-3 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            <p class="font-serif text-lg text-stone-700 dark:text-stone-300">Your Sanctuary is empty</p>
            <p class="text-xs text-stone-400 mt-1">Tap the bookmark ribbon on any essay to save it here for peaceful reflection.</p>
          </div>
        `;
      } else {
        list.innerHTML = savedPosts.map(post => `
          <div class="flex items-center justify-between p-4 bg-stone-50 dark:bg-stone-800/60 rounded-2xl border border-stone-200 dark:border-stone-800 gap-4">
            <div class="flex items-center gap-3 cursor-pointer" onclick="window.SanctuaryApp.closeModal('bookmarks-modal'); window.SanctuaryApp.openArticleModal(${post.id});">
              <img src="${post.image}" class="w-14 h-14 rounded-xl object-cover">
              <div>
                <span class="text-[10px] uppercase font-semibold text-amber-700 dark:text-amber-400">${post.categoryName}</span>
                <h5 class="text-sm font-serif font-bold text-stone-900 dark:text-white line-clamp-1">${post.title}</h5>
                <span class="text-[11px] text-stone-400">${post.readTime} • ${post.date}</span>
              </div>
            </div>
            <button 
              type="button"
              onclick="window.SanctuaryApp.toggleBookmark(${post.id}); window.SanctuaryApp.openBookmarksModal();"
              class="text-xs text-rose-500 hover:text-rose-700 p-2"
              title="Remove"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        `).join('');
      }

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    },

    initQuiz: function() {
      const container = document.getElementById('quiz-container');
      if (!container) return;

      container.innerHTML = `
        <div id="quiz-step-1" class="quiz-step">
          <p class="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">Question 1 of 3</p>
          <h4 class="text-xl font-serif font-bold text-stone-900 dark:text-white mb-4">When feeling depleted, where does your system call you?</h4>
          <div class="space-y-3">
            <button type="button" onclick="window.SanctuaryApp.answerQuiz('somatic')" class="w-full text-left p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-stone-800 transition text-sm text-stone-800 dark:text-stone-200">
              A) Into my body—stretching, breathing, or releasing tension in fascial muscles.
            </button>
            <button type="button" onclick="window.SanctuaryApp.answerQuiz('spiritual')" class="w-full text-left p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-stone-800 transition text-sm text-stone-800 dark:text-stone-200">
              B) Into silence—meditation, stillness, non-dual presence, or prayer.
            </button>
            <button type="button" onclick="window.SanctuaryApp.answerQuiz('ancestral')" class="w-full text-left p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-stone-800 transition text-sm text-stone-800 dark:text-stone-200">
              C) Into lineage & roots—understanding old family scripts and intergenerational patterns.
            </button>
          </div>
        </div>
      `;
    },

    answerQuiz: function(archetype) {
      const container = document.getElementById('quiz-container');
      if (!container) return;

      let resultHtml = '';
      if (archetype === 'somatic') {
        resultHtml = `
          <div class="text-center py-6">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h4 class="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-2">The Somatic Alchemist</h4>
            <p class="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto mb-6">Your physiology processes wisdom directly through sensation. Your current growth edge is vagal nerve regulation and conscious breath pacing.</p>
            <div class="p-4 bg-stone-50 dark:bg-stone-800/80 rounded-2xl mb-6 text-left border border-stone-200 dark:border-stone-700">
              <p class="text-xs uppercase font-semibold text-amber-700 dark:text-amber-400 mb-1">Recommended Pathway</p>
              <p class="text-sm font-bold text-stone-900 dark:text-white">Explore our "Healing" and "Lifestyle & Wellness" categories</p>
            </div>
            <button type="button" onclick="window.SanctuaryApp.closeModal('quiz-modal'); window.SanctuaryApp.selectCategory('healing');" class="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition">
              Explore Healing Essays →
            </button>
          </div>
        `;
      } else if (archetype === 'spiritual') {
        resultHtml = `
          <div class="text-center py-6">
            <div class="w-16 h-16 bg-amber-100 dark:bg-amber-950 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <h4 class="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-2">The Contemplative Seeker</h4>
            <p class="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto mb-6">You find deep sanctuary in non-dual awareness and the stillness of the quiet witness.</p>
            <div class="p-4 bg-stone-50 dark:bg-stone-800/80 rounded-2xl mb-6 text-left border border-stone-200 dark:border-stone-700">
              <p class="text-xs uppercase font-semibold text-amber-700 dark:text-amber-400 mb-1">Recommended Pathway</p>
              <p class="text-sm font-bold text-stone-900 dark:text-white">Explore our "Spirituality" and "Philosophy" essays</p>
            </div>
            <button type="button" onclick="window.SanctuaryApp.closeModal('quiz-modal'); window.SanctuaryApp.selectCategory('spirituality');" class="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition">
              Explore Spirituality Essays →
            </button>
          </div>
        `;
      } else {
        resultHtml = `
          <div class="text-center py-6">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-950 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L4 12h4l-3 6h7v4h2v-4h7l-3-6h4L12 2z"/></svg>
            </div>
            <h4 class="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-2">The Lineage Harmonizer</h4>
            <p class="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto mb-6">You are attuned to the ancestral threads and family constellation dynamics that shape human destiny.</p>
            <div class="p-4 bg-stone-50 dark:bg-stone-800/80 rounded-2xl mb-6 text-left border border-stone-200 dark:border-stone-700">
              <p class="text-xs uppercase font-semibold text-amber-700 dark:text-amber-400 mb-1">Recommended Pathway</p>
              <p class="text-sm font-bold text-stone-900 dark:text-white">Explore "Ancestral Healing" and "Religion & Mythology"</p>
            </div>
            <button type="button" onclick="window.SanctuaryApp.closeModal('quiz-modal'); window.SanctuaryApp.selectCategory('ancestral-healing');" class="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition">
              Explore Ancestral Essays →
            </button>
          </div>
        `;
      }

      container.innerHTML = resultHtml;
    },

    toggleAudioSample: function() {
      const btn = document.getElementById('play-audio-sample-btn');
      const waveBars = document.querySelectorAll('.audio-wave-anim');
      state.currentAudioPlaying = !state.currentAudioPlaying;

      if (state.currentAudioPlaying) {
        if (btn) btn.innerHTML = `<span>Pause Preview</span>`;
        waveBars.forEach(b => b.classList.add('wave-bar'));
        showToast("Playing 432Hz Sacred Contemplation Preview...");
      } else {
        if (btn) btn.innerHTML = `<span>Play Audio Sample (3:45)</span>`;
        waveBars.forEach(b => b.classList.remove('wave-bar'));
      }
    },

    showToastMessage: function(msg) {
      showToast(msg);
    }
  };
});
