// Content for generated pages: case studies (/projekte/…) and engineering notes (/notizen/…).
// Rendered by scripts/build-pages.mjs  ->  node scripts/build-pages.mjs
// Language: German only (target: German search queries). Bodies are trusted HTML.

export const AUTHOR = { name: 'Serge Zabolotny', url: 'https://zabolotny.de/' };

export const CASES = [
  {
    slug: 'meistermeld',
    path: '/projekte/meistermeld/',
    title: 'MeisterMeld – Voice-first Software für Handwerker | Case Study',
    description:
      'Case Study: MeisterMeld, KI-gestützte Field-Service-Software für Handwerksbetriebe – Sprach- und Foto-Berichte, Auftragsverwaltung, PWA. Next.js, PostgreSQL, Drizzle. Von Serge Zabolotny.',
    kicker: 'Case Study · SaaS · Handwerk',
    h1: 'MeisterMeld: Voice-first Berichte und Auftragsverwaltung für Handwerker',
    lead:
      'Eine KI-gestützte Field-Service-App, mit der Handwerksbetriebe Arbeitsberichte per Sprache und Foto direkt auf der Baustelle erstellen – statt abends Zettel abzutippen.',
    facts: [
      ['Rolle', 'Konzept, Design, Entwicklung, Deployment, Betrieb (alleinige Entwicklung)'],
      ['Status', 'MVP live – erste Nutzer aus dem Handwerk testen die App'],
      ['Stack', 'Next.js, TypeScript, PostgreSQL, Drizzle ORM, PWA, KI-Integration'],
      ['Betrieb', 'Eigener VPS (1blu), Deployment per GitHub Actions'],
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'PWA', 'LLM', 'Voice-first', 'Field Service'],
    liveUrl: 'https://meistermeld.de',
    liveLabel: 'MeisterMeld live ansehen',
    jsonld: {
      '@type': 'SoftwareApplication',
      name: 'MeisterMeld',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Progressive Web App (iOS/Android über den Browser)',
      url: 'https://meistermeld.de',
      inLanguage: 'de',
      description:
        'Voice-first Field-Service-Software für Handwerksbetriebe: Berichte per Sprache und Foto, Kunden-, Auftrags- und Mitarbeiterverwaltung.',
    },
    body: `
<h2>Das Problem: Dokumentation kostet Zeit, die auf der Baustelle fehlt</h2>
<p>Im Handwerk entsteht die Arbeit vor Ort, die Dokumentation aber oft erst danach: Notizen auf Zetteln, Fotos im Handy, Berichte am Abend am Schreibtisch. Das ist Zeit, die niemand abrechnen kann – und Informationen gehen unterwegs verloren.</p>

<h2>Die Lösung: erst sprechen, dann strukturieren lassen</h2>
<p>MeisterMeld dreht den Ablauf um. Mitarbeiter sprechen den Bericht ein oder laden Fotos hoch, eine <strong>KI (LLM)</strong> macht daraus einen strukturierten Arbeitsbericht, den der Betrieb prüfen, als PDF herunterladen und dem Auftrag zuordnen kann.</p>
<ul>
  <li><strong>Sprach- und Foto-Uploads</strong> als Eingabe, KI-Berichte als Ergebnis</li>
  <li><strong>Schnellbericht ohne Auftrag</strong> – wenn schnell etwas dokumentiert werden muss, ohne erst einen Auftrag anzulegen</li>
  <li><strong>Kunden-, Auftrags- und Mitarbeiterverwaltung</strong> in einer App</li>
  <li><strong>PWA</strong>: installierbar auf dem Smartphone, ohne App-Store</li>
</ul>

<h2>Technik und Entscheidungen</h2>
<ul>
  <li><strong>Next.js + TypeScript</strong> für Oberfläche und API, <strong>PostgreSQL mit Drizzle ORM</strong> als typisiertes Datenmodell</li>
  <li><strong>Voice-first und mobil zuerst:</strong> die App ist für die Arbeit unterwegs gedacht, nicht für den Schreibtisch</li>
  <li><strong>Eigener VPS statt PaaS:</strong> volle Kontrolle über Daten und Betrieb, Hosting in Deutschland</li>
  <li><strong>Deployment per GitHub Actions</strong> bei jedem Push auf den Hauptzweig</li>
  <li><strong>Bewusster Scope:</strong> Buchhaltung und Rechnungsstellung baue ich nicht nach – dafür gibt es spezialisierte Programme. MeisterMeld konzentriert sich auf das, was vor Ort fehlt: schnelle, saubere Dokumentation.</li>
</ul>

<div class="callout">
  <p><strong>Lehre aus dem Betrieb:</strong> Sobald Menschen tagsüber mit der App arbeiten, sind Deployments keine interne Sache mehr. Ausfallarme Releases gehören zum Produkt – nicht nur zur Infrastruktur.</p>
</div>

<h2>Was ich daran zeige</h2>
<p>MeisterMeld ist das Projekt mit dem größten Aufwand in meinem Portfolio, weil es alle Ebenen berührt: Produktidee und UX, KI-Integration (Sprache, Foto, strukturierte Ausgaben), Datenmodell, Authentifizierung und Rollen, Deployment und Betrieb mit echten Nutzern.</p>
`,
    related: [
      { href: '/projekte/pflegeoasis/', label: 'Case Study: PflegeOasis' },
      { href: '/notizen/ci-cd-nextjs-vps/', label: 'Notiz: CI/CD für Next.js auf dem VPS' },
    ],
  },
  {
    slug: 'pflegeoasis',
    path: '/projekte/pflegeoasis/',
    title: 'PflegeOasis – Pflegegrad-Rechner & KI-Content mit Human-in-the-Loop | Case Study',
    description:
      'Case Study: PflegeOasis.de, kostenloses Pflege-Portal mit Pflegegrad-Rechner, Widerspruch-Generator und 200+ Ratgeber-Artikeln aus einer KI-Pipeline mit menschlichem Review. Next.js 15, PostgreSQL 16.',
    kicker: 'Case Study · Gesundheit · Ratgeber',
    h1: 'PflegeOasis: Pflegegrad-Rechner, Widerspruch-Generator und KI-Content mit menschlichem Review',
    lead:
      'Ein kostenloses Portal, das Angehörigen hilft, sich im deutschen Pflegesystem zurechtzufinden – mit Rechnern, Checklisten und über 200 Ratgeber-Artikeln.',
    facts: [
      ['Rolle', 'Konzept und alleinige Entwicklung inkl. Betrieb'],
      ['Status', 'MVP live'],
      ['Stack', 'Next.js 15, TypeScript, Tailwind CSS, PostgreSQL 16, Drizzle ORM'],
      ['KI & Betrieb', 'OpenAI API (offline), GitHub Actions, PM2, Caddy, 1blu-VPS'],
    ],
    tags: ['Next.js 15', 'PostgreSQL 16', 'Drizzle ORM', 'OpenAI', 'Human-in-the-Loop', 'CI/CD', 'PDF-Generierung'],
    liveUrl: 'https://pflegeoasis.de',
    liveLabel: 'PflegeOasis live ansehen',
    jsonld: {
      '@type': 'SoftwareApplication',
      name: 'PflegeOasis',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: 'https://pflegeoasis.de',
      inLanguage: 'de',
      description:
        'Kostenloses Ratgeber-Portal zur Pflege in Deutschland mit Pflegegrad-Rechner, Pflegegeld-Rechner, Widerspruch-Generator und Antrags-Checkliste.',
    },
    body: `
<h2>Das Problem: Pflege ist ein Behördenlabyrinth</h2>
<p>Wer plötzlich einen Angehörigen pflegt, steht vor Begriffen wie Pflegegrad, Pflegegeld, Begutachtung und Widerspruch. Gute Informationen gibt es, aber sie sind verstreut, juristisch formuliert und oft nicht auf die konkrete Frage zugeschnitten.</p>

<h2>Die Lösung: Werkzeuge statt nur Texte</h2>
<ul>
  <li><strong>Pflegegrad-Rechner</strong> nach dem Punktesystem der Begutachtung</li>
  <li><strong>Pflegegeld-Rechner</strong> für eine schnelle Orientierung</li>
  <li><strong>Widerspruch-Generator</strong>, der ein fertiges Schreiben als PDF erzeugt</li>
  <li><strong>Antrags-Checkliste</strong> und <strong>200+ Ratgeber-Artikel</strong> zu den häufigsten Fragen</li>
</ul>

<h2>KI-Content mit Human-in-the-Loop</h2>
<p>Bei Pflegerecht sind Fehler nicht akzeptabel. Deshalb erzeugt die <strong>OpenAI API</strong> die Artikelentwürfe ausschließlich <strong>offline</strong> – nie live für Besucher. Jeder Entwurf wird mit strukturierten Prompts, Quellen und Rechtsgrundlagen erzeugt und vor der Veröffentlichung von einem Menschen geprüft. Die KI beschleunigt die Arbeit, die Verantwortung bleibt beim Menschen.</p>
<p>Mehr dazu: <a href="/notizen/ki-content-human-in-the-loop/">KI-Content mit Human-in-the-Loop – die Notiz</a>.</p>

<h2>Technik und Betrieb</h2>
<ul>
  <li><strong>Next.js 15 (App Router)</strong> mit TypeScript und Tailwind CSS, <strong>PostgreSQL 16</strong> mit Drizzle ORM</li>
  <li>Rechner-Logik als getrennte, testbare Module – nicht in der Oberfläche vergraben</li>
  <li>PDF-Erzeugung mit <code>react-pdf</code></li>
  <li><strong>CI/CD:</strong> GitHub Actions → SSH → <code>git pull</code>, <code>pnpm install</code>, <code>pnpm build</code>, danach <code>pm2 reload</code> ohne Ausfallzeit; Caddy erneuert die TLS-Zertifikate automatisch</li>
  <li>Betrieb auf einem eigenen 1blu-VPS</li>
</ul>
<p>Details: <a href="/notizen/ci-cd-nextjs-vps/">CI/CD für Next.js 15 auf dem VPS</a>.</p>

<div class="callout">
  <p><strong>Hinweis:</strong> PflegeOasis liefert Orientierung, keine Rechtsberatung. Diese Seite beschreibt das Projekt aus Entwicklersicht.</p>
</div>
`,
    related: [
      { href: '/projekte/meistermeld/', label: 'Case Study: MeisterMeld' },
      { href: '/notizen/ki-content-human-in-the-loop/', label: 'Notiz: KI-Content mit Human-in-the-Loop' },
    ],
  },
];

export const NOTES = [
  {
    slug: 'zero-trust-homelab',
    path: '/notizen/zero-trust-homelab/',
    date: '2026-10-18',
    title: 'Zero Trust fürs Homelab: Cloudflare Tunnel und Access statt offener Dashboards',
    description:
      'Wie ich ein öffentlich erreichbares Homelab-Dashboard mit Cloudflare Tunnel, Cloudflare Access (Zero Trust) und Tailscale abgesichert habe – ohne Port-Forwarding am Router.',
    kicker: 'DevOps · Cloudflare · Zero Trust',
    h1: 'Zero Trust fürs Homelab: Cloudflare Tunnel und Access statt offener Dashboards',
    lead:
      'Ein internes Dashboard war über eine Subdomain öffentlich erreichbar. So habe ich es mit Cloudflare Tunnel, Cloudflare Access und Tailscale abgesichert.',
    tags: ['Cloudflare Tunnel', 'Zero Trust', 'Cloudflare Access', 'Tailscale', 'Proxmox', 'Homelab'],
    body: `
<h2>Ausgangslage</h2>
<p>In meinem Homelab (Proxmox VE mit LXC-Containern) läuft ein Dashboard, das alle Dienste auflistet. Es war über eine Subdomain öffentlich erreichbar – ohne Login. Genau so etwas ist die typische Lücke bei Self-Hosting: Der Dienst ist praktisch, aber jeder, der die Adresse errät oder findet, sieht die Übersicht.</p>

<h2>Die Lösung in vier Bausteinen</h2>
<ol>
  <li><strong>Cloudflare Tunnel als einziger Eingang.</strong> Der Tunnel baut eine ausgehende Verbindung zu Cloudflare auf. Am Router ist deshalb <strong>kein Port-Forwarding</strong> nötig, es gibt keine offenen Ports nach außen.</li>
  <li><strong>Cloudflare Access als Zero-Trust-Schicht.</strong> Vor dem Dashboard sitzt eine Access-Policy: Nur meine E-Mail-Adresse darf rein, die Anmeldung läuft per One-Time-PIN.</li>
  <li><strong>Tailscale für alles Private.</strong> Dienste, die nie öffentlich sein sollen (z. B. Foto-Verwaltung), erreiche ich ausschließlich über das WireGuard-basierte Tailscale-Netz.</li>
  <li><strong>Regelmäßig prüfen, was veröffentlicht ist.</strong> Der eigentliche Auslöser war eine vergessene Veröffentlichung.</li>
</ol>

<h2>Wie ich prüfe, was wirklich öffentlich ist</h2>
<p>Die wichtigste Lehre: nicht nur der Dienst zählt, sondern auch, was <strong>DNS und Tunnel</strong> veröffentlichen. Meine Checkliste:</p>
<ul>
  <li>Im Cloudflare-Dashboard unter Zero Trust → Tunnels: Welche <em>Public Hostnames</em> sind eingetragen?</li>
  <li>Unter Access → Applications: Hat <strong>jeder</strong> öffentliche Hostname eine Policy?</li>
  <li>In den DNS-Einträgen: Gibt es alte CNAME-Einträge auf Dienste, die es nicht mehr gibt?</li>
</ul>
<pre><code>cloudflared tunnel list
cloudflared tunnel info &lt;tunnel-name&gt;</code></pre>

<div class="callout">
  <p><strong>Merksatz:</strong> Zero Trust heißt nicht, ein Tool einzuschalten, sondern für jeden Zugang eine bewusste Entscheidung zu haben: öffentlich mit Login, privat über Tailscale – oder gar nicht erreichbar.</p>
</div>

<h2>Ergebnis</h2>
<p>Das Dashboard ist nur noch nach Login erreichbar, am Router ist kein Port offen, und private Dienste liegen komplett im Tailscale-Netz. Ein Dashboard weniger, das die interne Infrastruktur verrät.</p>
`,
  },
  {
    slug: 'ci-cd-nextjs-vps',
    path: '/notizen/ci-cd-nextjs-vps/',
    date: '2026-10-18',
    title: 'CI/CD für Next.js 15 auf dem VPS: GitHub Actions, PM2-Reload und Caddy',
    description:
      'Deployment per git push für eine Next.js-15-App auf einem eigenen VPS: GitHub Actions, SSH, pnpm, pm2 reload ohne Ausfallzeit und automatische TLS-Zertifikate mit Caddy.',
    kicker: 'DevOps · CI/CD · Next.js',
    h1: 'CI/CD für Next.js 15 auf dem VPS: GitHub Actions, PM2-Reload und Caddy',
    lead:
      'Manuelle Deployments waren langsam und fehleranfällig. Heute reicht ein git push – ohne Ausfallzeit und ohne PaaS.',
    tags: ['GitHub Actions', 'CI/CD', 'Next.js 15', 'PM2', 'Caddy', 'pnpm', 'VPS'],
    body: `
<h2>Ausgangslage</h2>
<p>PflegeOasis läuft auf einem eigenen VPS (Next.js 15, PostgreSQL 16, Drizzle ORM). Anfangs habe ich per SSH eingeloggt und die Schritte von Hand ausgeführt. Das kostet Zeit, und jeder vergessene Schritt ist eine mögliche Fehlerquelle.</p>

<h2>Der Ablauf</h2>
<ol>
  <li><strong>Push auf den Hauptzweig</strong> löst einen GitHub-Actions-Workflow aus.</li>
  <li>Der Workflow verbindet sich <strong>per SSH</strong> mit dem Server.</li>
  <li>Auf dem Server laufen <code>git pull</code>, <code>pnpm install</code> und <code>pnpm build</code>.</li>
  <li><code>pm2 reload</code> startet die Next.js-App neu – <strong>ohne Ausfallzeit</strong>.</li>
  <li><strong>Caddy</strong> sitzt als Reverse Proxy davor und kümmert sich automatisch um TLS-Zertifikate.</li>
</ol>

<p>Schematisch (vereinfacht) macht der Server beim Deployment Folgendes:</p>
<pre><code>git pull
pnpm install
pnpm build
pm2 reload &lt;app-name&gt;</code></pre>

<h2>Warum kein PaaS?</h2>
<ul>
  <li><strong>Kontrolle:</strong> Datenbank, Backups und Netzwerk liegen in meiner Hand, Hosting in Deutschland.</li>
  <li><strong>Kosten:</strong> Ein VPS trägt mehrere Projekte, ohne dass Limits oder Cold Starts stören.</li>
  <li><strong>Verständnis:</strong> Wer den Betrieb selbst baut, versteht, was bei einem Ausfall passiert.</li>
</ul>

<div class="callout">
  <p><strong>Grenzen:</strong> Gebaut wird hier auf dem Server selbst. Bei kleinem Arbeitsspeicher kann ein Build den Betrieb belasten – dann ist es sinnvoller, auf dem CI-Runner zu bauen und nur das fertige Ergebnis hochzuladen.</p>
</div>

<h2>Ergebnis</h2>
<p>Deployment per <code>git push</code>: schneller, wiederholbar und ohne Handarbeit. Der Workflow ist die Dokumentation.</p>
`,
  },
  {
    slug: 'ki-content-human-in-the-loop',
    path: '/notizen/ki-content-human-in-the-loop/',
    date: '2026-10-18',
    title: 'KI-Content mit Human-in-the-Loop: 200+ Ratgeber-Artikel mit LLM-Entwürfen',
    description:
      'Wie PflegeOasis 200+ Ratgeber-Artikel mit OpenAI-Entwürfen erstellt, die offline entstehen und vor der Veröffentlichung von einem Menschen geprüft werden – Human-in-the-Loop bei sensiblen Themen.',
    kicker: 'KI · LLM · Content-Pipeline',
    h1: 'KI-Content mit Human-in-the-Loop: 200+ Ratgeber-Artikel mit LLM-Entwürfen',
    lead:
      'Bei Pflegerecht sind KI-Fehler nicht akzeptabel. So nutze ich ein Sprachmodell als Schreibhilfe, ohne ihm die Verantwortung zu geben.',
    tags: ['OpenAI API', 'LLM', 'Human-in-the-Loop', 'Prompt Engineering', 'Content-Pipeline', 'Next.js'],
    body: `
<h2>Die Herausforderung</h2>
<p>PflegeOasis soll 200+ Ratgeber-Artikel zu Pflegerecht anbieten. Von Hand ist das kaum zu schaffen, vollautomatisch generierter Content aber wäre bei diesem Thema verantwortungslos: Ein falsch genannter Anspruch oder eine falsche Frist kann für Betroffene echte Folgen haben.</p>

<h2>Die Pipeline</h2>
<ol>
  <li><strong>Entwurf offline:</strong> Die OpenAI API erzeugt Artikelentwürfe in einem getrennten Schritt – <strong>nie live</strong> für Besucher.</li>
  <li><strong>Strukturierte Prompts:</strong> Jeder Entwurf bekommt Quellen und Rechtsgrundlagen mit, statt dass das Modell aus dem Gedächtnis schreibt.</li>
  <li><strong>Menschliche Prüfung:</strong> Jeder Artikel wird vor der Veröffentlichung von einem Menschen geprüft und korrigiert.</li>
  <li><strong>Veröffentlichung:</strong> Erst nach der Prüfung geht der Artikel online.</li>
</ol>

<h2>Was dabei hilft</h2>
<ul>
  <li><strong>Quellen in den Prompt</strong> geben, damit die Aussagen überprüfbar bleiben</li>
  <li><strong>Strukturierte Prompts</strong> statt freier Texteingabe, damit die Ergebnisse vergleichbar und prüfbar sind</li>
  <li><strong>Offline statt live:</strong> Fehler fallen vor der Veröffentlichung auf, nicht danach</li>
</ul>

<div class="callout">
  <p><strong>Lehre:</strong> Bei sensiblen Themen beschleunigt KI die Arbeit – die Verantwortung bleibt beim Menschen.</p>
</div>
`,
  },
];
