// FAQ page for The Forgotten House
// Accessible at /faq

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I download the game?',
        a: <>
          <p>The Forgotten House is available for free on the Google Play Store. You can download it by:</p>
          <ol>
            <li>Visiting the <a href="https://play.google.com/store/apps/details?id=com.theforgottenhouse.game" target="_blank" rel="noreferrer">Play Store listing</a></li>
            <li>Clicking "Install" or "Download"</li>
            <li>Waiting for the download to complete (requires internet connection)</li>
            <li>Opening the game from your app drawer or home screen</li>
          </ol>
          <p>The game is completely free to download and play, with optional ads that help support development.</p>
        </>
      },
      {
        q: 'What devices are supported?',
        a: <>
          <p>The Forgotten House is designed for Android phones and tablets running Android 5.0 (Lollipop) and above. The game should work on most modern Android devices.</p>
          <p><strong>Recommended specifications:</strong></p>
          <ul>
            <li>Android 6.0 or higher</li>
            <li>2GB RAM or more</li>
            <li>At least 100MB of free storage space</li>
          </ul>
          <p>For the best experience, use a device with a larger screen size to better enjoy the detailed hand-painted rooms.</p>
        </>
      },
      {
        q: 'Is the game available on iOS?',
        a: <>
          <p>Currently, The Forgotten House is only available for Android on the Google Play Store. We do not have immediate plans for an iOS release, but we're monitoring demand.</p>
          <p>If you'd like to see the game on iPhone or iPad, please let us know through our contact email or by leaving feedback on the Play Store listing.</p>
        </>
      }
    ]
  },
  {
    category: 'Gameplay',
    questions: [
      {
        q: 'How do I play The Forgotten House?',
        a: <>
          <p>The Forgotten House is a hidden-object mystery game. Here's how to play:</p>
          <ol>
            <li><strong>Search Rooms</strong> - Tap on objects in the scene to find items from your list</li>
            <li><strong>Use Hints</strong> - If you're stuck, use the hint button to get help (limited uses between ads)</li>
            <li><strong>Solve Puzzles</strong> - Some objects require solving locks, codes, or environmental puzzles</li>
            <li><strong>Follow the Story</strong> - Use your journal to track clues and understand the mystery</li>
            <li><strong>Complete Chapters</strong> - Each room has multiple objectives to complete before moving on</li>
          </ol>
          <p>The game is designed to be relaxing and immersive. Take your time to explore each room thoroughly!</p>
        </>
      },
      {
        q: 'How do I use hints?',
        a: <>
          <p>You can use hints whenever you're stuck finding an object. Here's how they work:</p>
          <ul>
            <li>Each chapter provides a limited number of free hints</li>
            <li>Tap the hint button (usually a lightbulb or magnifying glass icon) to get help</li>
            <li>The game will highlight or point to an object you need to find</li>
            <li>Additional hints can sometimes be earned by watching optional video ads</li>
          </ul>
          <p><strong>Tip:</strong> Try to use hints sparingly! Completing chapters without hints earns you more stars.</p>
        </>
      },
      {
        q: 'How does the journal work?',
        a: <>
          <p>The journal is your companion throughout The Forgotten House. It helps you:</p>
          <ul>
            <li><strong>Track Story Clues</strong> - Collect and review important story elements and evidence</li>
            <li><strong>Remember Objectives</strong> - Keep track of what you need to find in each chapter</li>
            <li><strong>Store Keepsakes</strong> - Save special items you discover that tell the story</li>
            <li><strong>Review Progress</strong> - See which chapters you've completed and your star ratings</li>
          </ul>
          <p>Access your journal from the main menu or during gameplay (usually through a book or notebook icon).</p>
        </>
      },
      {
        q: 'What are the stars for?',
        a: <>
          <p>Stars are your reward for completing chapters efficiently. You can earn up to 3 stars per chapter based on:</p>
          <ul>
            <li><strong>★ First Star</strong> - Complete the chapter</li>
            <li><strong>★★ Second Star</strong> - Complete without using hints</li>
            <li><strong>★★★ Third Star</strong> - Complete quickly with minimal mistakes</li>
          </ul>
          <p>Stars are a great way to track your progress and challenge yourself to improve. You can revisit completed chapters anytime to try for more stars!</p>
        </>
      },
      {
        q: 'Can I replay chapters?',
        a: <>
          <p>Yes! You can replay any chapter you've already completed. This is great for:</p>
          <ul>
            <li>Trying to earn more stars</li>
            <li>Finding objects you missed</li>
            <li>Improving your completion time</li>
            <li>Simply enjoying the atmosphere and story again</li>
          </ul>
          <p>Your best scores and times are saved, so you can always track your improvement.</p>
        </>
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'Does the game require an internet connection?',
        a: <>
          <p>The Forgotten House is primarily an <strong>offline game</strong>. You can play through all chapters, find objects, solve puzzles, and enjoy the complete story without an internet connection.</p>
          <p>However, an internet connection is required for:</p>
          <ul>
            <li>Downloading the game from Play Store</li>
            <li>Watching ad-based hints (when available)</li>
            <li>Loading ads that support the free version</li>
            <li>Checking for game updates</li>
          </ul>
          <p>This means you can play on planes, in areas with poor connectivity, or anywhere you want to enjoy some offline gaming!</p>
        </>
      },
      {
        q: 'How do I save my progress?',
        a: <>
          <p>The Forgotten House automatically saves your progress! You don't need to manually save. The game saves:</p>
          <ul>
            <li>Which chapters you've completed</li>
            <li>Objects already found in unfinished rooms</li>
            <li>Your best scores and times</li>
            <li>Your journal entries and collected keepsakes</li>
            <li>Your settings (sound, music, vibration)</li>
          </ul>
          <p><strong>Important:</strong> Your progress is saved locally on your device. If you uninstall the game, clear its data, or switch to a new device, your progress will not transfer automatically.</p>
        </>
      },
      {
        q: 'How do I transfer my progress to a new device?',
        a: <>
          <p>Currently, The Forgotten House does not have cloud saving functionality. Your progress is stored locally on your device.</p>
          <p><strong>To transfer progress manually:</strong></p>
          <ol>
            <li>On your old device, locate the game's save files (usually in Android/data/com.theforgottenhouse.game/ or similar)</li>
            <li>Copy these files to your new device</li>
            <li>Place them in the same directory structure</li>
            <li>Grant the game necessary permissions on your new device</li>
          </ol>
          <p><strong>Note:</strong> This process varies by Android version and manufacturer. We recommend completing chapters on your current device before switching, or contact us for assistance.</p>
          <p>We're considering adding cloud save functionality in future updates based on player feedback.</p>
        </>
      },
      {
        q: 'Why are there ads in the game?',
        a: <>
          <p>The Forgotten House is a free game supported by advertisements. The ads help us continue developing and updating the game.</p>
          <p><strong>Ad Types in the Game:</strong></p>
          <ul>
            <li><strong>Optional Video Ads</strong> - Watch a short video to earn an additional hint when you're stuck</li>
            <li><strong>Interstitial Ads</strong> - Full-screen ads that may appear between some chapters (not during gameplay)</li>
          </ul>
          <p><strong>Important:</strong></p>
          <ul>
            <li>Ads are completely optional - you never <em>have</em> to watch them</li>
            <li>Ad-based hints are a convenience, not a requirement</li>
            <li>The game is fully playable without ever viewing an ad</li>
            <li>All ads are family-friendly and appropriate for our PEGI 7 rating</li>
          </ul>
          <p>If you prefer an ad-free experience, please let us know! Your feedback helps shape future updates.</p>
        </>
      },
      {
        q: 'Can I buy the game to remove ads?',
        a: <>
          <p>Currently, The Forgotten House does not offer a paid version to remove ads. The game is designed to be completely free to play.</p>
          <p>However, we understand that some players prefer an ad-free experience. Based on player demand, we may introduce:</p>
          <ul>
            <li>A one-time purchase to remove ads</li>
            <li>A premium version with additional content</li>
            <li>More ways to earn in-game benefits without ads</li>
          </ul>
          <p>Please leave feedback on the Play Store or contact us if you'd be interested in a paid/ad-free version!</p>
        </>
      }
    ]
  },
  {
    category: 'Locations & Story',
    questions: [
      {
        q: 'What are the three locations in the game?',
        a: <>
          <p>The Forgotten House takes you through three beautifully crafted locations, each with its own story and secrets:</p>
          <ol>
            <li>
              <strong>Ashworth Manor</strong> - A family estate, sealed in silence. The first door opens here, beginning your investigation into the disappearances.
            </li>
            <li>
              <strong>Blackwater Boathouse</strong> - Where the tide carries old secrets in. This lakeside location holds mysteries beneath the water and in the storm-battered structure.
            </li>
            <li>
              <strong>Hollowmere Sanatorium</strong> - Its records were never meant to survive. The final location, filled with medical equipment, patient history, and unsettling secrets.
            </li>
          </ol>
          <p>Each location has multiple chapters and unique game mechanics that reflect its atmosphere and story.</p>
        </>
      },
      {
        q: 'What is the story about?',
        a: <>
          <p>The Forgotten House tells a story of mystery, disappearance, and forgotten history. As you investigate:</p>
          <p>A family estate at Ashworth Manor holds the first clues to multiple disappearances. The Blackwater Boathouse reveals secrets tied to the lake and its tides. Finally, Hollowmere Sanatorium connects all the stories through medical records and the memories of patients who were never meant to be remembered.</p>
          <p>The complete story unfolds as you find objects, read documents, and piece together what happened to the missing people. Every discovery brings you closer to understanding the truth behind theThree abandoned houses.</p>
          <p>We won't spoil the full story here - it's much more rewarding to discover it for yourself through investigation!</p>
        </>
      },
      {
        q: 'How many chapters are there?',
        a: <>
          <p>The Forgotten House features <strong>25 chapters</strong> spread across the three main locations:</p>
          <ul>
            <li>Multiple chapters in Ashworth Manor</li>
            <li>Several chapters in Blackwater Boathouse</li>
            <li>The remaining chapters in Hollowmere Sanatorium</li>
          </ul>
          <p>Each chapter introduces new gameplay mechanics, story developments, and hidden objects to find. The chapters are designed to be completed in order, as the story builds upon your discoveries from previous rooms.</p>
        </>
      },
      {
        q: 'Are there more locations coming?',
        a: <>
          <p>The current version of The Forgotten House includes the three main locations (Ashworth Manor, Blackwater Boathouse, and Hollowmere Sanatorium) with 25 chapters total.</p>
          <p>We're always considering future updates based on player feedback. Potential additions could include:</p>
          <ul>
            <li>New standalone locations with additional chapters</li>
            <li>Expanded story content for existing locations</li>
            <li>New gameplay mechanics and puzzle types</li>
            <li>Additional collectibles and achievements</li>
          </ul>
          <p>Stay tuned to our Play Store listing and website for announcements about future updates!</p>
        </>
      }
    ]
  },
  {
    category: 'Settings & Controls',
    questions: [
      {
        q: 'How do I change the sound and music volume?',
        a: <>
          <p>You can adjust the sound and music settings from within the game:</p>
          <ol>
            <li>Open the main menu or pause menu</li>
            <li>Look for the "Settings" or "Options" button (usually a gear icon)</li>
            <li>Use the sliders to adjust:</li>
            <ul>
              <li><strong>Music Volume</strong> - Background music</li>
              <li><strong>Sound Effects</strong> - Game sounds and object interactions</li>
              <li><strong>Effects Volume</strong> - Specific sound effects</li>
              <li><strong>Vibration</strong> - Toggle haptic feedback on/off</li>
            </ul>
          </ol>
          <p>Your settings are automatically saved and will persist between game sessions.</p>
        </>
      },
      {
        q: 'How do I enable/disable vibration?',
        a: <>
          <p>Vibration adds gentle haptic feedback when you successfully find objects or complete actions. To enable or disable it:</p>
          <ol>
            <li>Open the game's settings menu (gear icon)</li>
            <li>Look for the "Vibration" or "Haptic Feedback" option</li>
            <li>Toggle it on or off</li>
          </ol>
          <p><strong>Note:</strong> Vibration requires that your device has vibration capabilities enabled at the system level. Check your phone's settings if vibration isn't working in the game.</p>
        </>
      },
      {
        q: 'Why does the game need the INTERNET permission?',
        a: <>
          <p>The Forgotten House requests the INTERNET permission for the following reasons:</p>
          <ul>
            <li><strong>Loading Ads</strong> - To display the advertisements that support the free game</li>
            <li><strong>Ad-Based Hints</strong> - To fetch optional video ads that you can watch for additional hints</li>
            <li><strong>Update Checks</strong> - To check for new game updates</li>
          </ul>
          <p><strong>Important Privacy Notes:</strong></p>
          <ul>
            <li>The game itself plays <strong>completely offline</strong> - you don't need internet to play</li>
            <li>No personal data is collected by us</li>
            <li>All data used by ads is handled by Google AdMob according to their privacy policy</li>
            <li>See our <a href="/privacy">Privacy Policy</a> for complete details</li>
          </ul>
        </>
      },
      {
        q: 'How do I reset the game?',
        a: <>
          <p>If you want to start over from the beginning, you have a few options:</p>
          <ol>
            <li><strong>Replay Individual Chapters</strong> - You can replay any completed chapter without affecting your overall progress</li>
            <li><strong>Clear Save Data</strong> (Most thorough):
              <ol>
                <li>Go to your Android device's Settings</li>
                <li>Find "Apps" or "Application Manager"</li>
                <li>Select "The Forgotten House" from the list</li>
                <li>Choose "Storage" then "Clear Data" or "Clear Storage"</li>
                <li>Confirm the action - this will completely reset the game</li>
              </ol>
            </li>
          </ol>
          <p><strong>Warning:</strong> Clearing data will permanently delete all your progress, including completed chapters, star ratings, and journal entries. This action cannot be undone.</p>
        </>
      }
    ]
  },
  {
    category: 'Contact & Support',
    questions: [
      {
        q: 'How do I report a bug or issue?',
        a: <>
          <p>We want to make sure your experience with The Forgotten House is as smooth as possible. If you encounter any bugs or issues, please:</p>
          <ol>
            <li><strong>Check this FAQ</strong> - Your question might already have an answer</li>
            <li><strong>Restart the App</strong> - Close and reopen the game to see if the issue persists</li>
            <li><strong>Update the Game</strong> - Make sure you're running the latest version from Play Store</li>
            <li><strong>Contact Us</strong> - If the problem continues, send us details at <a href="mailto:heyitswajeeha@gmail.com">heyitswajeeha@gmail.com</a></li>
          </ol>
          <p><strong>In your report, please include:</strong></p>
          <ul>
            <li>Your device model (e.g., Samsung Galaxy S22, Google Pixel 6)</li>
            <li>Android version (e.g., Android 13, Android 14)</li>
            <li>App version (found in Play Store listing or game settings)</li>
            <li>Description of the issue and steps to reproduce it</li>
            <li>Screenshots or screen recordings if possible</li>
          </ul>
          <p>We read every report and do our best to address issues quickly!</p>
        </>
      },
      {
        q: 'How do I leave feedback or suggestions?',
        a: <>
          <p>We love hearing from our players! Your feedback helps shape future updates and improvements. Here's how to share your thoughts:</p>
          <ul>
            <li><strong>Play Store Review</strong> - Leave a star rating and written review on our <a href="https://play.google.com/store/apps/details?id=com.theforgottenhouse.game" target="_blank" rel="noreferrer">Play Store listing</a>. This helps other players discover the game!</li>
            <li><strong>Email</strong> - Send detailed feedback to <a href="mailto:heyitswajeeha@gmail.com">heyitswajeeha@gmail.com</a></li>
            <li><strong>Social Media</strong> - Connect with us (links coming soon to our website)</li>
          </ul>
          <p><strong>What we love to hear about:</strong></p>
          <ul>
            <li>What you enjoy most about the game</li>
            <li>Features you'd like to see added</li>
            <li>Areas where the game could be improved</li>
            <li>Bugs or technical issues you've experienced</li>
            <li>Ideas for new locations or stories</li>
          </ul>
          <p>Every piece of feedback is valued and considered for future updates!</p>
        </>
      },
      {
        q: 'How do I request new features?',
        a: <>
          <p>We're always looking to improve The Forgotten House with new features based on player feedback. To request a feature:</p>
          <ol>
            <li>Check if the feature might already exist - browse the settings and gameplay options</li>
            <li>See what other players are requesting in Play Store reviews</li>
            <li>Contact us at <a href="mailto:heyitswajeeha@gmail.com">heyitswajeeha@gmail.com</a> with your feature request</li>
          </ol>
          <p><strong>Feature Requests We're Considering:</strong></p>
          <ul>
            <li>Cloud saving for progress across devices</li>
            <li>Additional difficulty options</li>
            <li>New locations and chapters</li>
            <li>Customization options</li>
            <li>Achievement system</li>
          </ul>
          <p>We prioritize features based on player demand, feasibility, and how well they fit with the game's atmosphere and story.</p>
        </>
      },
      {
        q: 'Where can I find updates about the game?',
        a: <>
          <p>Stay up-to-date with The Forgotten House news and updates through these channels:</p>
          <ul>
            <li><strong>Play Store Listing</strong> - Check the "What's New" section for the latest updates and changes</li>
            <li><strong>This Website</strong> - Visit <a href="/">theforgottenhouse.com</a> for announcements and news</li>
            <li><strong>Email Notifications</strong> - We may send important updates to the email associated with your Google Play account (very rare, only for major announcements)</li>
          </ul>
          <p><strong>Upcoming Features:</strong></p>
          <ul>
            <li>Keep an eye on our Play Store listing for version updates</li>
            <li>Follow our website for detailed patch notes</li>
            <li>Subscribe to notifications in the Play Store app to get alerts when updates are available</li>
          </ul>
          <p>We're committed to supporting The Forgotten House with regular updates and improvements based on player feedback!</p>
        </>
      }
    ]
  }
];

export default function Faq() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="/"><span>✦</span> The Forgotten House</a>
      <nav>
        <a href="/">Back to the house</a>
      </nav>
    </header>
    <main id="main" className="privacy section">
      <p className="eyebrow">Frequently asked questions</p>
      <h1>The house has answers.</h1>
      <p className="privacy-date">Need help? Find your answer below.</p>
      
      {faqs.map((section, sectionIndex) => (
        <section key={section.category}>
          <h2><span>{String(sectionIndex + 1).padStart(2, '0')}</span>{section.category}</h2>
          <div className="faq-list">
            {section.questions.map((faq, faqIndex) => (
              <details key={faq.q} className="faq-item">
                <summary>
                  <span>{String(faqIndex + 1).padStart(2, '0')}</span>
                  {faq.q}
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </main>
    <footer>
      <a className="brand" href="/"><span>✦</span> The Forgotten House</a>
      <p>© {new Date().getFullYear()} The Forgotten House. All rights reserved. · <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a></p>
      <a href="/">Home ↑</a>
    </footer>
  </>;
}
