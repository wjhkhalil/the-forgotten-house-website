// Shown at /terms. Keep this in step with the game and src/Privacy.jsx: if
// purchases, accounts or online features are added, these terms must change.
const EFFECTIVE_DATE = 'November 6, 2026';
const CONTACT_EMAIL = 'heyitswajeeha@gmail.com';

const sections = [
  ['Accepting these terms', <>
    <p>These terms apply to <em>The Forgotten House</em> (“the game”, “we”, “us”), a hidden-object mystery game for Android, and to this website. By downloading, installing or playing the game, you agree to them. If you do not agree, please do not use the game and uninstall it from your device.</p>
  </>],
  ['Your licence to play', <>
    <p>We give you a personal, non-exclusive, non-transferable and revocable licence to install the game on devices you own or control and to play it for your own non-commercial enjoyment. The game is licensed to you, not sold.</p>
  </>],
  ['Acceptable use', <>
    <p>You agree not to:</p>
    <ul>
      <li>copy, sell, rent, redistribute or publish the game or any modified version of it;</li>
      <li>reverse engineer or decompile the game or extract its assets, except where the law gives you a right to do so that cannot be waived;</li>
      <li>use cheats, automation or other tools to interfere with the game or to block, skip or falsely generate ads or ad rewards;</li>
      <li>use the game in any unlawful way.</li>
    </ul>
  </>],
  ['Ownership', <>
    <p>The game and this website, including their story, characters, artwork, music, sound, text and code, belong to us or our licensors and are protected by copyright and other laws. Apart from the licence above, these terms give you no rights in them. Short, non-commercial clips and screenshots shared to talk about the game are welcome, provided you do not suggest that we endorse you.</p>
  </>],
  ['Ads and third-party services', <>
    <p>The game is free and is supported by ads served by Google AdMob. You may be offered an optional video ad in exchange for a hint, and a full-screen ad may appear between some chapters. We do not control the content of these ads and are not responsible for the products or services they promote.</p>
    <p>Your use of Google Play and of Google’s services is also subject to Google’s own terms. Our <a href="/privacy">Privacy Policy</a> explains what information the game and its advertising partners handle.</p>
  </>],
  ['Your saved progress', <>
    <p>The game has no accounts, and your progress is saved only on your device. Clearing the game’s storage, uninstalling the game or losing or replacing your device may permanently erase your progress, and we have no copy from which to restore it.</p>
  </>],
  ['Age', <>
    <p>The game is not directed at children under 13. If you are under the age of majority where you live, please make sure a parent or guardian has reviewed these terms with you.</p>
  </>],
  ['Updates and availability', <>
    <p>We may update, change or remove parts of the game at any time, and we may stop offering it altogether. Some updates may be needed to keep playing. The game plays offline, but ads need an internet connection, so an ad-based hint may not be available when you are offline.</p>
  </>],
  ['No warranty', <>
    <p>To the fullest extent permitted by law, the game and this website are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. We do not promise that the game will be uninterrupted, free of errors or compatible with every device.</p>
  </>],
  ['Limit of liability', <>
    <p>To the fullest extent permitted by law, we are not liable for any indirect, incidental, special or consequential loss, or for any loss of data or saved progress, arising from your use of the game or this website. Because the game is free, our total liability for any claim is limited to US$50 or the amount you paid us in the previous 12 months, whichever is greater.</p>
    <p>Some countries do not allow these exclusions or limits, so they may not all apply to you. Nothing in these terms limits liability that cannot be limited by law.</p>
  </>],
  ['Ending these terms', <>
    <p>You may stop at any time by uninstalling the game. If you seriously or repeatedly break these terms, your licence ends automatically and you must stop using the game and delete it. The sections on ownership, no warranty, limit of liability and governing law continue to apply afterwards.</p>
  </>],
  ['Governing law', <>
    <p>The game is published from Pakistan and played worldwide. These terms are governed by the laws of Pakistan, without regard to conflict-of-law rules, and disputes will be heard by the courts of Pakistan.</p>
    <p>If you are a consumer, you keep any protections given to you by the mandatory laws of the country where you live, and you may also be able to bring a claim in the courts there. Nothing in these terms takes those rights away.</p>
  </>],
  ['Changes to these terms', <>
    <p>We may change these terms from time to time. When we do, we will update this page and the date at the top. Continuing to use the game after a change means you accept the updated terms. If you do not accept them, please stop using the game and uninstall it.</p>
  </>],
  ['Contact', <>
    <p>Questions about these terms can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
  </>],
];

export default function Terms() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="brand" href="/"><span>✦</span> The Forgotten House</a><nav><a href="/">Back to the house</a></nav></header>
    <main id="main" className="privacy section">
      <p className="eyebrow">Terms of service</p>
      <h1>The rules of the house.</h1>
      <p className="privacy-date">Effective {EFFECTIVE_DATE}</p>
      {sections.map(([title, body], index) => <section key={title}><h2><span>{String(index + 1).padStart(2, '0')}</span>{title}</h2>{body}</section>)}
    </main>
    <footer><a className="brand" href="/"><span>✦</span> The Forgotten House</a><p>© {new Date().getFullYear()} The Forgotten House. All rights reserved. · <a href="/privacy">Privacy Policy</a></p><a href="/">Home ↑</a></footer>
  </>;
}
