/**
 * Blog Content Data Store
 * Categories:
 * 1. Healing
 * 2. Spirituality
 * 3. Lifestyle and wellness
 * 4. Women
 * 5. Ancestral healing
 * 6. Literature and movies
 * 7. Religion and mythology
 * 8. Culture
 * 9. Psychology
 * 10. Philosophy
 * 11. Relationships
 * 12. Miscellaneous
 * 
 * Note: Musings is removed as requested.
 * Includes Resources & Offerings section modeled after leading holistic/happiness blogs.
 */

const CATEGORIES = [
  { id: 'all', name: 'All Stories', icon: 'sparkles' },
  { id: 'healing', name: 'Healing', icon: 'heart-pulse' },
  { id: 'spirituality', name: 'Spirituality', icon: 'sun' },
  { id: 'lifestyle-wellness', name: 'Lifestyle and wellness', icon: 'leaf' },
  { id: 'women', name: 'Women', icon: 'flower' },
  { id: 'ancestral-healing', name: 'Ancestral healing', icon: 'tree-pine' },
  { id: 'literature-movies', name: 'Literature and movies', icon: 'film' },
  { id: 'religion-mythology', name: 'Religion and mythology', icon: 'flame' },
  { id: 'culture', name: 'Culture', icon: 'globe' },
  { id: 'psychology', name: 'Psychology', icon: 'brain' },
  { id: 'philosophy', name: 'Philosophy', icon: 'compass' },
  { id: 'relationships', name: 'Relationships', icon: 'users' },
  { id: 'miscellaneous', name: 'Miscellaneous', icon: 'feather' },
  { id: 'resources-offerings', name: 'Resources & Offerings', icon: 'gem', highlight: true }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Somatic Unwinding: Releasing Stored Emotional Trauma from the Body",
    slug: "somatic-unwinding-releasing-trauma",
    category: "healing",
    categoryName: "Healing",
    readTime: "7 min read",
    date: "Sep 22, 2026",
    author: {
      name: "Dr. Elena Vance",
      role: "Somatic Psychotherapist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Trauma does not merely live in our memories; it settles into our fascial tissues, breath patterns, and autonomic nervous system. Here is how gentle somatic movement restores equilibrium.",
    featured: true,
    tags: ["Somatic Therapy", "Nervous System", "Vagus Nerve", "Mind-Body"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        When words fail, the body continues speaking in sensation, tightness, and posture. Traumatic events and prolonged stress leave energetic and physiological footprints that cognitive rationalization alone cannot reach.
      </p>

      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">The Biology of Stored Emotion</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Our autonomic nervous system constantly scans the environment for cues of safety and threat—a biological process known as neuroception. When fight-or-flight energy cannot be discharged, it is retained within the fascia and neuromuscular holding patterns. Through targeted breathwork and somatic shaking, we provide the organism permission to finish the truncated motor responses of the past.
      </p>

      <blockquote class="p-6 my-8 border-l-4 border-amber-600 bg-amber-50 dark:bg-stone-800/60 rounded-r-xl italic font-serif text-lg text-stone-800 dark:text-stone-200">
        "The body keeps the score, but through somatic reverence and patience, it also maps the sanctuary of our return."
      </blockquote>

      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">Three Gentle Daily Somatic Micro-Practices</h3>
      <ul class="list-disc list-inside space-y-3 text-stone-700 dark:text-stone-300 mb-6">
        <li><strong>Vagal Sigh:</strong> Inhale deeply through the nose, take an extra micro-puff of air at the top, and release with a long audible sigh.</li>
        <li><strong>Fascial Rocking:</strong> Gentle rhythmic rocking of the hips while lying supine to signal safety to the brainstem.</li>
        <li><strong>Bilateral Self-Holding:</strong> Placing one hand over the heart and the other cupping the opposite rib cage to recreate physiological containment.</li>
      </ul>
    `,
    relatedOfferingId: "offering-1"
  },
  {
    id: 2,
    title: "Awakening the Quiet Witness: A Guide to Non-Dual Awareness in Daily Life",
    slug: "awakening-quiet-witness-non-dual-awareness",
    category: "spirituality",
    categoryName: "Spirituality",
    readTime: "9 min read",
    date: "Sep 18, 2026",
    author: {
      name: "Tenzin K.",
      role: "Contemplative Scholar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Beyond the turbulent stream of thought lies a silent, luminous backdrop of pure perception. How recognizing the witness transforms anxiety into quiet grace.",
    featured: false,
    tags: ["Meditation", "Advaita", "Presence", "Consciousness"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        Most spiritual searchers spend years attempting to silence their thoughts. Yet stillness is not the absence of thought, but the unshakeable presence in which thoughts rise and subside like gentle waves upon an ocean.
      </p>

      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">You Are the Sky, Not the Weather</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        In the non-dual traditions of Kashmir Shaivism and Dzogchen, consciousness is likened to infinite space. Clouds—whether joyful, anxious, or weary—pass through without ever staining the sky. When we shift from being identified with mental narratives to recognizing the space of awareness itself, suffering naturally dissolves.
      </p>

      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">The Self-Inquiry Practice</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Whenever you feel overwhelmed, gently ask yourself: <em>"What in me is aware of this thought right now?"</em> Turn your attention around 180 degrees back onto the one who perceives.
      </p>
    `,
    relatedOfferingId: "offering-2"
  },
  {
    id: 3,
    title: "Circadian Architecture: Aligning Modern Living with Biological Light",
    slug: "circadian-architecture-biological-light",
    category: "lifestyle-wellness",
    categoryName: "Lifestyle and wellness",
    readTime: "6 min read",
    date: "Sep 15, 2026",
    author: {
      name: "Mira Solis",
      role: "Integrative Wellness Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Light is the primal zeitgeber of human vitality. Discover how morning photon intake and evening darkness hygiene restore deep hormonal harmony.",
    featured: false,
    tags: ["Sleep", "Circadian Rhythm", "Longevity", "Biohacking"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        We have enclosed our lives within climate-controlled, artificially illuminated boxes. In doing so, we have severed our cells from the primordial rhythm of the sun and stars.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">The Melatonin-Cortisol Axis</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Within 30 minutes of waking, stepping outside and viewing natural daylight without sunglasses activates intrinsically photosensitive retinal ganglion cells (ipRGCs). This resets the suprachiasmatic nucleus, timed to trigger natural melatonin release approximately 14 hours later.
      </p>
    `,
    relatedOfferingId: "resource-1"
  },
  {
    id: 4,
    title: "The Sovereign Feminine: Reclaiming Cyclical Wisdom in a Linear World",
    slug: "sovereign-feminine-cyclical-wisdom",
    category: "women",
    categoryName: "Women",
    readTime: "8 min read",
    date: "Sep 11, 2026",
    author: {
      name: "Ananya Roy",
      role: "Author & Women's Circle Keeper",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Modern productivity demands constant summer. Here is how honoring the internal seasons of the menstrual and life cycles restores creative sovereign power.",
    featured: false,
    tags: ["Cyclical Living", "Feminine Archetypes", "Ritual", "Hormones"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        Patriarchal society operates on a 24-hour solar cycle: wake, sprint, conquer, sleep, repeat. Yet the feminine physiology moves to the slower, oceanic tide of lunar and infradian cycles.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">The Four Inner Seasons</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Inner Winter (Menstruation/Rest), Inner Spring (Follicular/Visioning), Inner Summer (Ovulatory/Expression), and Inner Autumn (Luteal/Discernment). When women honor these seasons, burnout transforms into renewable creativity.
      </p>
    `,
    relatedOfferingId: "offering-3"
  },
  {
    id: 5,
    title: "The Epigenetics of Grace: Healing the Intergenerational Nervous System",
    slug: "epigenetics-grace-healing-intergenerational-trauma",
    category: "ancestral-healing",
    categoryName: "Ancestral healing",
    readTime: "11 min read",
    date: "Sep 07, 2026",
    author: {
      name: "Marcus Thorne",
      role: "Systemic Constellator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    excerpt: "We do not begin with our birth. The joys, migrations, and unresolved silences of our lineage echo in our DNA. How family constellation work reconciles the ancestral ledger.",
    featured: true,
    tags: ["Ancestral Lineage", "Epigenetics", "Constellations", "Family Systems"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        Modern molecular genetics now substantiates what indigenous traditions have known across millennia: trauma leaves epigenetic methylation tags on gametes and receptor genes that transmit stress phenotypes across three to four generations.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">The Orders of Love</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        When an ancestor was exiled, silenced, or buried in grief, their unresolved weight often seeks expression through a descendant who unknowingly carries their symptom as an act of unconscious loyalty. In ancestral lineage healing, we re-establish rightful dignity to those who came before.
      </p>
    `,
    relatedOfferingId: "offering-1"
  },
  {
    id: 6,
    title: "Cinematic Cathedrals: Tarkovsky, Myth, and the Search for Transcendence",
    slug: "cinematic-cathedrals-tarkovsky-myth",
    category: "literature-movies",
    categoryName: "Literature and movies",
    readTime: "8 min read",
    date: "Aug 30, 2026",
    author: {
      name: "Claire Beaumont",
      role: "Film Theorist & Essayist",
      avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
    excerpt: "In an era of hyper-accelerated digital montage, the deliberate, contemplative long-takes of Andrei Tarkovsky and Béla Tarr offer a sanctuary of cinematic prayer.",
    featured: false,
    tags: ["Cinema", "Tarkovsky", "Aesthetics", "Storytelling"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        "Art is a meta-language," wrote Andrei Tarkovsky in <em>Sculpting in Time</em>, "by means of which people try to communicate with one another; to impart information about themselves and assimilate the experiences of others."
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">Sculpting in Time as Sacred Rite</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Where commercial cinema aims to provoke rapid dopamine release, contemplative cinema suspends time. The viewer is invited to inhabit the frame, observing water dripping into stagnant pools, wind bending long grass in Solaris, and the sacred yearning of Stalker.
      </p>
    `,
    relatedOfferingId: "resource-3"
  },
  {
    id: 7,
    title: "The Wounded Healer Archetype: From Chiron to the Vedic Ashvins",
    slug: "wounded-healer-archetype-chiron-ashvins",
    category: "religion-mythology",
    categoryName: "Religion and mythology",
    readTime: "10 min read",
    date: "Aug 24, 2026",
    author: {
      name: "Dr. Elena Vance",
      role: "Mythologist & Depth Analyst",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Every sacred mythology preserves a deity or teacher whose capacity to cure others is born directly from an incurable, tender wound.",
    featured: false,
    tags: ["Mythology", "Archetypes", "Chiron", "Vedic Wisdom"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        In Greek lore, Chiron, the wisest of the centaurs, master of medicine and herbal lore, was struck by an arrow coated in the venom of the Hydra. Being immortal, he could not die; yet he could not be cured.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">Where the Wound Becomes Medicine</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Similarly, in Vedic mythology, the twin Ashvins descend into the dark ocean to heal what the celestial gods consider broken. Myth reminds us that our vulnerabilities are not deficiencies to be erased, but the exact gate through which empathy enters.
      </p>
    `,
    relatedOfferingId: "resource-2"
  },
  {
    id: 8,
    title: "Tea, Silence, and the Craft of Slow Hospitality Across Continents",
    slug: "tea-silence-slow-hospitality-culture",
    category: "culture",
    categoryName: "Culture",
    readTime: "7 min read",
    date: "Aug 19, 2026",
    author: {
      name: "Kaito Tanaka",
      role: "Cultural Anthropologist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
    excerpt: "From the Chanoyu tea rooms of Uji to the mint tea terraces of Fez, how traditional cultures elevate simple hospitality into an art of sacred presence.",
    featured: false,
    tags: ["Tea Culture", "Hospitality", "Ritual", "Slow Living"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        In our hyper-connected frenzy, genuine hospitality has become a rarity. Yet throughout human history, preparing a hot infusion for a stranger was the universal gesture that turned potential adversaries into kin.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">Ichigo Ichie: One Time, One Meeting</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        The Japanese concept of <em>Ichigo Ichie</em> instructs the tea master and guest that this exact moment, this shared cup of matcha, will never occur again in the history of the universe.
      </p>
    `,
    relatedOfferingId: "resource-1"
  },
  {
    id: 9,
    title: "Internal Family Systems: Befriending Your Inner Exiles and Protectors",
    slug: "internal-family-systems-befriending-parts",
    category: "psychology",
    categoryName: "Psychology",
    readTime: "9 min read",
    date: "Aug 14, 2026",
    author: {
      name: "Dr. Elena Vance",
      role: "Somatic Psychotherapist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
    excerpt: "We are not a monolithic self. We are an ecosystem of inner parts. Understanding the managers, firefighters, and wounded exiles allows authentic Self-leadership to emerge.",
    featured: true,
    tags: ["IFS", "Psychotherapy", "Inner Child", "Shadow Work"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        Have you ever felt an inner battle where one part of you desperately wants to write your book, while another binge-watches television until midnight? You are not broken—you are an internal ecosystem.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">The 8 C's of Self-Energy</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Developed by Dr. Richard Schwartz, IFS posits that at our core lies an undamaged, luminous Self characterized by: Curiosity, Calm, Clarity, Compassion, Confidence, Courage, Creativity, and Connectedness.
      </p>
    `,
    relatedOfferingId: "resource-2"
  },
  {
    id: 10,
    title: "Amor Fati: The Stoic and Nietzschean Art of Loving What Happens",
    slug: "amor-fati-stoic-nietzsche-loving-fate",
    category: "philosophy",
    categoryName: "Philosophy",
    readTime: "8 min read",
    date: "Aug 09, 2026",
    author: {
      name: "Julian Brooks",
      role: "Philosopher & Classicist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80",
    excerpt: "To merely tolerate adversity is passive endurance. To actively love fate—every obstacle, heartbreak, and unforeseen detour—is the pinnacle of philosophical liberation.",
    featured: false,
    tags: ["Stoicism", "Nietzsche", "Ethics", "Resilience"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        Marcus Aurelius famously observed: "The impediment to action advances action. What stands in the way becomes the way." Centuries later, Friedrich Nietzsche took this further with <em>Amor Fati</em>.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">Not Resignation, but Radical Affirmation</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Amor Fati does not ask us to put on forced toxic positivity. Rather, it demands that we see reality as an untamed raw material from which courage and character are forged.
      </p>
    `,
    relatedOfferingId: "offering-2"
  },
  {
    id: 11,
    title: "Relational Attunement: Cultivating Conscious Attachment and Secure Intimacy",
    slug: "relational-attunement-conscious-attachment",
    category: "relationships",
    categoryName: "Relationships",
    readTime: "9 min read",
    date: "Aug 03, 2026",
    author: {
      name: "Mira Solis",
      role: "Couples & Relational Coach",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
    excerpt: "True intimacy is not the absence of friction, but the willingness to repair rupture with open curiosity rather than defensive withdrawal.",
    featured: false,
    tags: ["Attachment Styles", "Communication", "Vulnerability", "Intimacy"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        Every conflict in a partnership is fundamentally a nervous system dialogue seeking the same answer: <em>"Are you there for me? Am I safe with you?"</em>
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">Rupture and Repair: The Golden Cycle</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        Research into attachment reveals that secure couples do not fight less; they repair faster and with greater tenderness. Moving from defense to vulnerability is the true alchemy of love.
      </p>
    `,
    relatedOfferingId: "offering-1"
  },
  {
    id: 12,
    title: "The Art of the Marginal Note: Solitude, Pens, and the Joy of Analog Artifacts",
    slug: "art-marginal-note-solitude-analog",
    category: "miscellaneous",
    categoryName: "Miscellaneous",
    readTime: "5 min read",
    date: "Jul 28, 2026",
    author: {
      name: "Claire Beaumont",
      role: "Essayist",
      avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    excerpt: "In praise of dog-eared margins, fountain pen ink shading on heavy cotton paper, and the slow, eccentric habits of the curious mind.",
    featured: false,
    tags: ["Marginalia", "Slow Living", "Writing", "Reflections"],
    content: `
      <p class="lead text-lg leading-relaxed text-stone-700 dark:text-stone-300 mb-6">
        Marginalia—the scribbles in book margins—is history's quietest ongoing conversation. In the margins, we are private, honest, and entirely ourselves.
      </p>
      <h3 class="text-2xl font-serif font-semibold text-stone-900 dark:text-amber-100 mt-8 mb-4">Tangible Presence in an Ephemeral Web</h3>
      <p class="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
        When we underline a sentence with a real graphite pencil, our hand marks time. Years later, reopening that book allows us to meet our past self across the chasm of years.
      </p>
    `,
    relatedOfferingId: "resource-3"
  }
];

// Resources and Offerings Dataset (as found in Optimal Happiness and premium wellness blogs)
const RESOURCES_AND_OFFERINGS = {
  freeResources: [
    {
      id: "resource-1",
      type: "Free Guide",
      title: "The Ancestral Lineage & Somatic Harmony Workbook",
      description: "A 32-page guided self-reflection workbook with somatic nervous system trackers, genogram mapping prompts, and nightly integration rituals.",
      format: "PDF Interactive Guide",
      downloads: "14,800+ downloads",
      icon: "book-open",
      badge: "Free Download",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
      actionText: "Download Free Workbook",
      actionModal: "download-modal",
      features: [
        "Somatic vagal nerve tone checklist",
        "3-generation family resilience map",
        "Printable journal pages & nightly prompts"
      ]
    },
    {
      id: "resource-2",
      type: "Audio Immersion",
      title: "7 Sacred Contemplations: Audio Meditation Series",
      description: "High-fidelity audio journeys exploring non-dual stillness, nervous system regulation, and heart-centered ancestral grounding.",
      format: "Audio MP3 & FLAC + Transcripts",
      downloads: "21,500+ listeners",
      icon: "headphones",
      badge: "Streaming & Download",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80",
      actionText: "Listen to Audio Samples",
      actionModal: "audio-modal",
      features: [
        "Binaural ambient soundscapes at 432Hz",
        "Includes morning awakening & bedtime deep release",
        "Zero ads, instant digital access"
      ]
    },
    {
      id: "resource-3",
      type: "Interactive Tool",
      title: "The Holistic Archetype & Wellness Diagnostic Quiz",
      description: "An introspective 2-minute questionnaire designed to map your dominant mental state, current energetic season, and tailored healing pathway.",
      format: "Interactive Web Quiz",
      downloads: "35,000+ completed",
      icon: "sparkles",
      badge: "Interactive Tool",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
      actionText: "Take Diagnostic Quiz",
      actionModal: "quiz-modal",
      features: [
        "10 targeted psycho-somatic questions",
        "Customized PDF report generated instantly",
        "Recommended reading list tailored to your archetype"
      ]
    }
  ],
  offerings: [
    {
      id: "offering-1",
      type: "1-on-1 Sanctuary",
      title: "Ancestral & Somatic Restorative Immersion",
      subtitle: "Bespoke 90-Minute Private Virtual or In-Person Intensive",
      description: "A deeply held container combining somatic experiencing, systemic family constellation inquiries, and energetic boundary restoration.",
      duration: "90 Minutes",
      investment: "$280 / session",
      badge: "Limited Monthly Openings",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
      features: [
        "Comprehensive intake & ancestral trauma review",
        "Live guided somatic release & nervous system recalibration",
        "Personalized integration audio track recorded during session",
        "7 days of direct voice note support via Signal/WhatsApp"
      ],
      ctaText: "Apply / Inquire for Session"
    },
    {
      id: "offering-2",
      type: "Mentorship",
      title: "The Sovereign Mind: 6-Week Contemplative Mentorship",
      subtitle: "Depth Psychology, Philosophical Solitude & Daily Presence",
      description: "For leaders, thinkers, and seekers desiring to embody philosophical discernment, overcome spiritual bypassing, and ground profound insight into everyday action.",
      duration: "6 Weeks (Bi-weekly sessions)",
      investment: "$1,250 full tuition",
      badge: "Next Cohort: Autumn 2026",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      features: [
        "Six 60-minute intensive 1-on-1 dialogues",
        "Curated readings from Stoic, Advaitic & Jungian traditions",
        "Weekly written self-inquiry assignments with detailed feedback",
        "Lifetime access to all future audio immersions"
      ],
      ctaText: "Explore Mentorship Syllabus"
    },
    {
      id: "offering-3",
      type: "Sacred Circle",
      title: "Women's Infradian Rhythm & Sacred Council",
      subtitle: "Monthly Virtual Sanctuary for Cyclical Living & Sisterhood",
      description: "Gather with conscious women around new and full moons to harmonize with natural chronobiology, share authentic wisdom, and undo the modern exhaustion of chronic busyness.",
      duration: "Monthly Membership",
      investment: "$45 / month",
      badge: "Community Gathering",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      features: [
        "Two live 90-minute moon gatherings per month",
        "Seasonal cycle planning workshops",
        "Private community sanctuary forum (no social media needed)",
        "Library of over 40+ guided audio practices"
      ],
      ctaText: "Join the Council Circle"
    }
  ]
};
