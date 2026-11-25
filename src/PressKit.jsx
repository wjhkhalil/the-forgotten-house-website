// Press Kit page for The Forgotten House
// Accessible at /press

const pressInfo = {
  game: {
    title: "The Forgotten House",
    subtitle: "A Hidden-Object Mystery",
    genre: ["Hidden Object", "Puzzle", "Adventure", "Mystery", "Detective"],
    platforms: ["Android (Google Play)"],
    releaseDate: "November 6, 2026",
    price: "Free (with optional ads)",
    contentRating: "PEGI 7 (Implied Violence, Mild Violence, Fear)",
    ageRating: "10+",
    packageName: "com.theforgottenhouse.game",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.theforgottenhouse.game",
    websiteUrl: "https://theforgottenhouse.com",
    developer: "Wajeeha Khalil",
    publisher: "Wajeeha Khalil",
    contactEmail: "heyitswajeeha@gmail.com",
    location: "Gujranwala, Pakistan",
  },
  
  description: {
    short: "The Forgotten House is a story-driven hidden-object mystery where players investigate cursed houses to find clues and uncover secrets.",
    medium: "Step into The Forgotten House, a hauntingly beautiful hidden-object mystery where every shadow hides a secret, and every abandoned room tells a story. Investigate three haunted locations, solve environmental puzzles, and piece together the truth behind multiple disappearances.",
    long: `The Forgotten House is a story-driven hidden-object mystery game that takes players through three beautifully crafted, hand-painted locations: Ashworth Manor, Blackwater Boathouse, and Hollowmere Sanatorium. 

Each location contains multiple chapters filled with cleverly hidden objects, environmental puzzles, and story clues. Players must search detailed rooms, solve locks and codes, read riddles, and assemble evidence to uncover the truth behind the disappearances.

The game features unique chapter mechanics including fog, darkness, tides, frost, candles, mirrors, and X-rays, creating varied and engaging gameplay. A built-in hint system helps players who get stuck, while automatic saving and chapter scoring encourage completion and replayability.

With its atmospheric storytelling and relaxing pace, The Forgotten House is perfect for fans of hidden object games, mystery adventures, and gothic stories. The game is completely free to play, with optional ads that support development and provide additional hints.`
  },
  
  features: [
    "25 gripping chapters across 3 abandoned locations",
    "Hand-painted rooms filled with cleverly hidden objects",
    "Unique chapter mechanics including fog, darkness, tides, frost, candles, mirrors, and X-rays",
    "Story-driven investigation with journal to track discoveries",
    "Built-in hint system for when you're stuck",
    "Automatic saving - never lose your progress",
    "Chapter scoring with stars and best times",
    "Touch-friendly controls optimized for phones and tablets",
    "Play completely offline (ads require internet)",
    "No timers or rush - play at your own pace"
  ],
  
  locations: [
    {
      name: "Ashworth Manor",
      description: "A family estate, sealed in silence. The first door opens here, beginning your investigation into the disappearances.",
      chapters: "Multiple mystery-filled rooms"
    },
    {
      name: "Blackwater Boathouse", 
      description: "Where the tide carries old secrets in. A lakeside location holding mysteries beneath the water and in the storm-battered structure.",
      chapters: "Several water-themed investigations"
    },
    {
      name: "Hollowmere Sanatorium",
      description: "Its records were never meant to survive. The final location, filled with medical equipment, patient history, and unsettling secrets.",
      chapters: "Final chapters revealing the complete story"
    }
  ],
  
  story: {
    teaser: "Three abandoned houses sit quietly at the edge of a story no one wanted told. Search through dust, locked drawers, forgotten letters, and the possessions of people who vanished.",
    synopsis: `The Forgotten House tells a compelling story of mystery and disappearance. As players investigate Ashworth Manor, they uncover clues that lead them to Blackwater Boathouse and eventually to Hollowmere Sanatorium. Each location reveals pieces of a larger puzzle involving multiple disappearances and a secret that was never meant to be discovered.

The narrative unfolds through environmental storytelling - players find letters, read medical records, examine personal belongings, and piece together what happened to the missing people. The game avoids jump scares and timed pressure, instead focusing on atmospheric tension and the slow reveal of a haunting truth.

As players progress, they discover that the "forgotten house" of the title refers not to a single location, but to the interconnected stories of multiple abandoned places, each holding the key to understanding the fate of those who lived and worked there.`,
    themes: ["Mystery", "Investigation", "Memory", "Discovery", "Truth", "Consequences", "History", "Secrets"]
  },
  
  technical: {
    requirements: {
      os: "Android 5.0 (Lollipop) or higher",
      ram: "2GB recommended",
      storage: "100MB+ free space",
      permissions: ["Internet (for ads and updates)", "Vibration (optional)", "Advertising ID (for ad targeting)"]
    },
    engine: "Custom-built for mobile",
    controllerSupport: "Touch controls only",
    saveSystem: "Local device storage",
    offlinePlay: "Yes (complete game, ads require internet)"
  },
  
  artwork: {
    style: "Hand-painted, atmospheric, detailed",
    inspirations: ["Gothic architecture", "Victorian design", "Abandoned spaces", "Medical facilities", "Lakeside properties"],
    colorPalette: ["Deep blues (#07111d)", "Warm browns", "Rusty reds", "Aged whites", "Natural greens"],
    notableAssets: ["Manor interiors", "Boathouse scenes", "Sanatorium equipment", "Hidden objects", "Environmental puzzles"]
  },
  
  pressAssets: {
    statement: "High-resolution press assets available upon request. Contact heyitswajeeha@gmail.com with your media outlet and requirements.",
    available: [
      "Game logo in multiple resolutions",
      "Screenshots from all locations",
      "Device mockups",
      "Press release materials",
      "Developer photos",
      "Gameplay videos",
      "Trailer videos"
    ],
    usage: "All press assets are provided for editorial use only. Commercial use requires express permission."
  },
  
  awards: {
    pending: "As a new release, we're excited to see what players and critics think!",
    goals: ["Featured on Google Play", "Positive player reviews", "Coverage in mobile gaming media"]
  },
  
  quotes: {
    developer: "Creating The Forgotten House was a labor of love. I wanted to build a mystery game that respects the player's time and intelligence, with an atmosphere that rewards careful exploration.",
    mission: "Our mission is to create immersive, story-rich mobile games that offer more than just gameplay - they provide an experience, a journey, and a memory.",
    inspiration: "Inspired by classic point-and-click adventures and modern hidden object games, The Forgotten House combines the best of both worlds: deep storytelling and satisfying object hunting."
  }
};

const contactInfo = {
  primary: {
    name: "Wajeeha Khalil",
    title: "Developer & Publisher",
    email: "heyitswajeeha@gmail.com",
    phone: "+92 306 6119602",
    location: "Gujranwala, Pakistan",
    timezone: "UTC+5 (Pakistan Standard Time)"
  },
  press: {
    email: "heyitswajeeha@gmail.com",
    subjectLine: "PRESS INQUIRY: The Forgotten House",
    responseTime: "Typically within 24-48 hours",
    preferredContact: "Email"
  },
  media: {
    downloadUrl: "#",
    note: "Press kit downloads will be available soon. Please contact for immediate needs."
  }
};

const socialLinks = [
  { platform: "Play Store", url: "https://play.google.com/store/apps/details?id=com.theforgottenhouse.game", handle: "@theforgottenhouse" },
  { platform: "Website", url: "https://theforgottenhouse.com", handle: "theforgottenhouse.com" },
  { platform: "Email", url: "mailto:heyitswajeeha@gmail.com", handle: "heyitswajeeha@gmail.com" }
];

const downloadLinks = [
  {
    platform: "Google Play Store",
    url: "https://play.google.com/store/apps/details?id=com.theforgottenhouse.game",
    badgeUrl: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
    description: "Download for Android"
  }
];

export default function PressKit() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="/"><span>✦</span> The Forgotten House</a>
      <nav>
        <a href="/">Back to the house</a>
      </nav>
    </header>
    <main id="main" className="privacy section">
      <p className="eyebrow">For the press</p>
      <h1>The house tells its story to the world.</h1>
      <p className="privacy-date">Press Kit for Media Professionals</p>

      <section>
        <h2><span>01</span>Quick Information</h2>
        <div className="press-grid">
          <div>
            <h3>Game Basics</h3>
            <dl>
              <dt>Title</dt><dd>{pressInfo.game.title}</dd>
              <dt>Subtitle</dt><dd>{pressInfo.game.subtitle}</dd>
              <dt>Developer</dt><dd>{pressInfo.game.developer}</dd>
              <dt>Publisher</dt><dd>{pressInfo.game.publisher}</dd>
              <dt>Release Date</dt><dd>{pressInfo.game.releaseDate}</dd>
              <dt>Platforms</dt><dd>{pressInfo.game.platforms.join(', ')}</dd>
              <dt>Price</dt><dd>{pressInfo.game.price}</dd>
              <dt>Genre</dt><dd>{pressInfo.game.genre.join(', ')}</dd>
              <dt>Content Rating</dt><dd>{pressInfo.game.contentRating}</dd>
              <dt>Age Rating</dt><dd>{pressInfo.game.ageRating}</dd>
            </dl>
          </div>
          <div>
            <h3>Contact Information</h3>
            <dl>
              <dt>Primary Contact</dt><dd>{contactInfo.primary.name}</dd>
              <dt>Title</dt><dd>{contactInfo.primary.title}</dd>
              <dt>Email</dt><dd><a href={`mailto:${contactInfo.primary.email}`}>{contactInfo.primary.email}</a></dd>
              <dt>Phone</dt><dd>{contactInfo.primary.phone}</dd>
              <dt>Location</dt><dd>{contactInfo.primary.location}</dd>
              <dt>Timezone</dt><dd>{contactInfo.primary.timezone}</dd>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <h2><span>02</span>Game Description</h2>
        <div className="description-levels">
          <div>
            <h3>Short Description</h3>
            <p>{pressInfo.description.short}</p>
          </div>
          <div>
            <h3>Medium Description</h3>
            <p>{pressInfo.description.medium}</p>
          </div>
          <div>
            <h3>Long Description</h3>
            <p style={{whiteSpace: 'pre-line'}}>{pressInfo.description.long}</p>
          </div>
        </div>
      </section>

      <section>
        <h2><span>03</span>Key Features</h2>
        <ul className="feature-list">
          {pressInfo.features.map((feature, index) => (
            <li key={feature}><span>0{index + 1}</span>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2><span>04</span>Game Locations</h2>
        <div className="locations-grid">
          {pressInfo.locations.map((location, index) => (
            <div key={location.name} className="location-card">
              <h3><span>0{index + 1}</span>{location.name}</h3>
              <p>{location.description}</p>
              <p><em>{location.chapters}</em></p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2><span>05</span>Story & Themes</h2>
        <div>
          <h3>Teaser</h3>
          <p><em>{pressInfo.story.teaser}</em></p>
          <h3>Synopsis</h3>
          <p style={{whiteSpace: 'pre-line'}}>{pressInfo.story.synopsis}</p>
          <h3>Themes</h3>
          <ul>
            {pressInfo.story.themes.map((theme, index) => (
              <li key={theme}><span>0{index + 1}</span>{theme}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2><span>06</span>Technical Information</h2>
        <div className="press-grid">
          <div>
            <h3>System Requirements</h3>
            <dl>
              <dt>Operating System</dt><dd>{pressInfo.technical.requirements.os}</dd>
              <dt>RAM</dt><dd>{pressInfo.technical.requirements.ram}</dd>
              <dt>Storage</dt><dd>{pressInfo.technical.requirements.storage}</dd>
              <dt>Permissions</dt>
              <dd>
                <ul>
                  {pressInfo.technical.requirements.permissions.map((perm, index) => (
                    <li key={perm}><span>0{index + 1}</span>{perm}</li>
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
          <div>
            <h3>Technical Details</h3>
            <dl>
              <dt>Engine</dt><dd>{pressInfo.technical.engine}</dd>
              <dt>Controller Support</dt><dd>{pressInfo.technical.controllerSupport}</dd>
              <dt>Save System</dt><dd>{pressInfo.technical.saveSystem}</dd>
              <dt>Offline Play</dt><dd>{pressInfo.technical.offlinePlay}</dd>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <h2><span>07</span>Art & Design</h2>
        <div>
          <h3>Art Style</h3>
          <p>{pressInfo.artwork.style}</p>
          <h3>Inspirations</h3>
          <ul>
            {pressInfo.artwork.inspirations.map((insp, index) => (
              <li key={insp}><span>0{index + 1}</span>{insp}</li>
            ))}
          </ul>
          <h3>Color Palette</h3>
          <ul>
            {pressInfo.artwork.colorPalette.map((color, index) => (
              <li key={color}><span>0{index + 1}</span>{color}</li>
            ))}
          </ul>
          <h3>Notable Assets</h3>
          <ul>
            {pressInfo.artwork.notableAssets.map((asset, index) => (
              <li key={asset}><span>0{index + 1}</span>{asset}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2><span>08</span>Press Assets</h2>
        <div>
          <p>{pressInfo.pressAssets.statement}</p>
          <h3>Available Assets</h3>
          <ul>
            {pressInfo.pressAssets.available.map((asset, index) => (
              <li key={asset}><span>0{index + 1}</span>{asset}</li>
            ))}
          </ul>
          <p><em>{pressInfo.pressAssets.usage}</em></p>
        </div>
      </section>

      <section>
        <h2><span>09</span>Developer Quotes</h2>
        <div className="quotes-section">
          <blockquote>
            <p>{pressInfo.quotes.developer}</p>
            <footer>— {pressInfo.game.developer}</footer>
          </blockquote>
          <blockquote>
            <p>{pressInfo.quotes.mission}</p>
            <footer>— Mission Statement</footer>
          </blockquote>
          <blockquote>
            <p>{pressInfo.quotes.inspiration}</p>
            <footer>— Design Philosophy</footer>
          </blockquote>
        </div>
      </section>

      <section>
        <h2><span>10</span>Download & Links</h2>
        <div className="download-links">
          {downloadLinks.map((link, index) => (
            <div key={link.platform} className="download-badge">
              <a href={link.url} target="_blank" rel="noreferrer">
                <span>{link.description}</span>
              </a>
            </div>
          ))}
        </div>
        <h3>Social & Contact</h3>
        <ul>
          {socialLinks.map((social, index) => (
            <li key={social.platform}><span>0{index + 1}</span>({social.platform}): <a href={social.url} target="_blank" rel="noreferrer">{social.handle}</a></li>
          ))}
        </ul>
      </section>

      <section>
        <h2><span>11</span>Contact for Press Inquiries</h2>
        <div className="contact-section">
          <p>For press inquiries, interview requests, review copies, or any media-related questions, please contact:</p>
          <dl>
            <dt>Email</dt>
            <dd><a href={`mailto:${contactInfo.press.email}?subject=${encodeURIComponent(contactInfo.press.subjectLine)}`}>{contactInfo.press.email}</a></dd>
            <dt>Subject Line</dt>
            <dd><code>{contactInfo.press.subjectLine}</code></dd>
            <dt>Response Time</dt>
            <dd>{contactInfo.press.responseTime}</dd>
            <dt>Preferred Method</dt>
            <dd>{contactInfo.press.preferredContact}</dd>
          </dl>
          <p>Please include your media outlet, deadline, and specific request in your inquiry.</p>
        </div>
      </section>

      <div className="press-footer">
        <p><strong>Last Updated:</strong> November 6, 2026</p>
        <p><strong>Version:</strong> 1.0</p>
        <p>This press kit is maintained by {pressInfo.game.developer}. All information is accurate as of the last update date.</p>
      </div>
    </main>
    <footer>
      <a className="brand" href="/"><span>✦</span> The Forgotten House</a>
      <p>© {new Date().getFullYear()} The Forgotten House. All rights reserved. · <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a></p>
      <a href="/">Home ↑</a>
    </footer>
  </>;
}
