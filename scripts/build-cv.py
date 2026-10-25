#!/usr/bin/env python3
"""Builds the CV PDFs (German + English) -> resume-de.pdf, resume-en.pdf, resume.pdf (= German).

    pip install reportlab --break-system-packages
    python3 scripts/build-cv.py

Single column, selectable text (ATS-friendly), no photo. Edit the CONTENT dict below and re-run.
Fonts: Carlito (metric-compatible with Calibri), installed with LibreOffice/fonts-crosextra-carlito.
"""
import os
import shutil
import sys

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
FONT_DIR = '/usr/share/fonts/truetype/crosextra'
for name, file in (('Carlito', 'Carlito-Regular.ttf'), ('Carlito-Bold', 'Carlito-Bold.ttf'),
                   ('Carlito-Italic', 'Carlito-Italic.ttf'), ('Carlito-BoldItalic', 'Carlito-BoldItalic.ttf')):
    pdfmetrics.registerFont(TTFont(name, os.path.join(FONT_DIR, file)))
pdfmetrics.registerFontFamily('Carlito', normal='Carlito', bold='Carlito-Bold', italic='Carlito-Italic', boldItalic='Carlito-BoldItalic')

COBALT = HexColor('#0047AB')
INK = HexColor('#14161f')
MUTED = HexColor('#4a5060')
LINE = HexColor('#c9d3e6')

PHONE = '+49 178 8727417'
MAIL = 'szabolotnyi@icloud.com'

CONTENT = {
    'de': {
        'file': 'resume-de.pdf',
        'title': 'Lebenslauf – Serge Zabolotny',
        'name': 'Serge Zabolotny',
        'role': 'Fullstack- &amp; KI-Entwickler · DevOps',
        'contact1': f'Dresden, Deutschland · {PHONE} · <link href="mailto:{MAIL}" color="#0047AB">{MAIL}</link>',
        'contact2': '<link href="https://zabolotny.de" color="#0047AB">zabolotny.de</link> · '
                    '<link href="https://linkedin.com/in/szabolotnyi" color="#0047AB">linkedin.com/in/szabolotnyi</link> · '
                    '<link href="https://github.com/sergey-zabolotnyi" color="#0047AB">github.com/sergey-zabolotnyi</link>',
        'sections': {
            'profile': 'Profil', 'skills': 'Tech-Stack', 'projects': 'Projekte', 'exp': 'Berufserfahrung',
            'edu': 'Ausbildung &amp; Weiterbildung', 'lang': 'Sprachen',
        },
        'profile': (
            'Fullstack-Entwickler mit Schwerpunkt KI-Integration und eigenem Betrieb. Ich baue Produkte allein von der Idee '
            'bis in den Live-Betrieb – inklusive Deployment, CI/CD, Monitoring und Backups. <b>MeisterMeld</b>, eine '
            'Voice-first-Software für Handwerksbetriebe, ist live; <b>PflegeOasis.de</b> bietet Pflegegrad-Rechner und '
            'über 200 Ratgeber-Artikel aus einer KI-Pipeline mit menschlichem Review. '
            'Ich suche eine Festanstellung (Dresden oder remote) als Fullstack-, KI- oder DevOps-/Platform-Entwickler.'
        ),
        'skills': [
            ('Frontend', 'Next.js · React · SvelteKit · TypeScript · Tailwind CSS · PWA'),
            ('Backend', 'Python · FastAPI · Java (Spring Boot) · REST-APIs'),
            ('Datenbanken', 'PostgreSQL · Drizzle ORM · MySQL · Supabase · Redis'),
            ('KI &amp; Integrationen', 'OpenAI API · Groq · LangChain · Vision/OCR · strukturierte LLM-Ausgaben · Prompt Engineering · Stripe · Telegram Bot API'),
            ('DevOps &amp; Betrieb', 'Linux · Docker · GitHub Actions (CI/CD) · nginx · Caddy · systemd · PM2 · Cloudflare (Tunnel, Access) · Tailscale · Proxmox VE/LXC · vzdump-Backups · Uptime Kuma'),
        ],
        'projects': [
            ('MeisterMeld', 'Voice-first Field-Service-SaaS für Handwerker', '2025 – heute', 'meistermeld.de',
             'Alleinige Entwicklung und Betrieb: Berichte per Sprache und Foto mit KI-Auswertung, Kunden-, Auftrags- und '
             'Mitarbeiterverwaltung, PWA. <i>Next.js, TypeScript, PostgreSQL, Drizzle ORM, GitHub Actions, eigener VPS.</i>'),
            ('PflegeOasis.de', 'Ratgeber-Portal zur Pflege in Deutschland', '2026', 'pflegeoasis.de',
             'Pflegegrad- und Pflegegeld-Rechner, Widerspruch-Generator mit PDF, 200+ Artikel aus einer KI-Pipeline mit '
             'menschlichem Review. <i>Next.js 15, PostgreSQL 16, OpenAI API, CI/CD: GitHub Actions → VPS (PM2, Caddy).</i>'),
            ('ScamGuard', 'KI-Betrugserkennung für Stellenanzeigen', '2026', 'scam-guard.de',
             'Mehrsprachige Plattform mit KI-Klassifikation und sprachspezifischen SSR-Routen. <i>Next.js, TypeScript.</i>'),
            ('Homelab auf Proxmox VE', 'Eigene Infrastruktur als Übungsfeld für Betrieb', 'laufend', 'zabolotny.de',
             '4 LXC-Container nach Rollen, 15+ Self-hosted-Dienste in Docker, Zugriff über Tailscale und Cloudflare Tunnel mit '
             'Zero-Trust-Access, tägliche vzdump-Backups (Rotation 7/4/3), Monitoring mit Uptime Kuma und Glances.'),
        ],
        'projects_more': '<b>Weitere:</b> SolarCheck AI (FastAPI, SvelteKit, Google Solar API) · GeschenkFox.de · DreamDeck (Telegram-Bot) · Smart-Letter (archiviert)',
        'exp': [
            ('Eigenständige Produktentwicklung (KI &amp; Web)', 'Solo-Entwickler · Dresden', '2024 – heute',
             ['Konzept bis Betrieb mehrerer KI-Produkte (siehe Projekte)',
              'Betrieb auf eigenem VPS: nginx/Caddy, systemd/PM2, SSL, Backups, Monitoring',
              'Integration von LLM-APIs (OpenAI, Groq) in produktive Anwendungen']),
            ('Technischer Kundensupport – Facebook-Zahlungstool', 'Concentrix Global Services GmbH · Berlin (Homeoffice)', '2021 – 2022',
             ['Betreuung von Geschäftskunden (KMU)', 'Analyse und Lösung technischer Kundenanfragen']),
            ('Selbststudium Webentwicklung', 'JavaScript, React, Python', '2019 – 2021', []),
            ('Technischer Kundensupport – Apple-Geräte', 'Teleperformance Deutschland GmbH · Görlitz', '2017 – 2019',
             ['Technische Diagnose und Lösung von Software- und Geräteproblemen']),
            ('Chief Technical Officer / Technischer Koordinator', 'MKP Gazkomplektprylad · Ukraine', '2011 – 2017',
             ['Technische Koordination, Prozessoptimierung, Reporting, Zusammenarbeit mit Stakeholdern',
              'Parallel: eigene monetarisierte Websites auf WordPress und DLE']),
        ],
        'edu': [
            ('Weiterbildung Java Web Development (960 Std., DEKRA-zertifiziert)', 'Starta Institut (Tel-Ran) · Berlin', '2022 – 2023',
             'Spring Boot, REST-APIs, PostgreSQL, DevOps-Grundlagen · Abschlussprojekt: CRM-System'),
            ('Betriebswirtschaft (Ökonomik des Unternehmens)', 'Yuriy Fedkovych National University · Ukraine', '1997 – 2002', ''),
        ],
        'lang': [('Deutsch', 'B2+'), ('Englisch', 'B2'), ('Russisch', 'Muttersprache'), ('Ukrainisch', 'Muttersprache')],
        'footer': 'Name in offiziellen Dokumenten: Sergii Zabolotnyi',
    },
    'en': {
        'file': 'resume-en.pdf',
        'title': 'Resume – Serge Zabolotny',
        'name': 'Serge Zabolotny',
        'role': 'Fullstack &amp; AI Developer · DevOps',
        'contact1': f'Dresden, Germany · {PHONE} · <link href="mailto:{MAIL}" color="#0047AB">{MAIL}</link>',
        'contact2': '<link href="https://zabolotny.de/en/" color="#0047AB">zabolotny.de</link> · '
                    '<link href="https://linkedin.com/in/szabolotnyi" color="#0047AB">linkedin.com/in/szabolotnyi</link> · '
                    '<link href="https://github.com/sergey-zabolotnyi" color="#0047AB">github.com/sergey-zabolotnyi</link>',
        'sections': {
            'profile': 'Profile', 'skills': 'Tech Stack', 'projects': 'Projects', 'exp': 'Professional Experience',
            'edu': 'Education &amp; Training', 'lang': 'Languages',
        },
        'profile': (
            'Fullstack developer focused on AI integration and running what I build. I take products from idea to live '
            'operation on my own – including deployment, CI/CD, monitoring and backups. <b>MeisterMeld</b>, a voice-first '
            'software for trade businesses, is live; <b>PflegeOasis.de</b> offers care-level calculators and 200+ guide '
            'articles from an AI pipeline with human review. '
            'I am looking for a permanent position (Dresden or remote) as a fullstack, AI or DevOps/platform developer.'
        ),
        'skills': [
            ('Frontend', 'Next.js · React · SvelteKit · TypeScript · Tailwind CSS · PWA'),
            ('Backend', 'Python · FastAPI · Java (Spring Boot) · REST APIs'),
            ('Databases', 'PostgreSQL · Drizzle ORM · MySQL · Supabase · Redis'),
            ('AI &amp; Integrations', 'OpenAI API · Groq · LangChain · Vision/OCR · structured LLM outputs · prompt engineering · Stripe · Telegram Bot API'),
            ('DevOps &amp; Operations', 'Linux · Docker · GitHub Actions (CI/CD) · nginx · Caddy · systemd · PM2 · Cloudflare (Tunnel, Access) · Tailscale · Proxmox VE/LXC · vzdump backups · Uptime Kuma'),
        ],
        'projects': [
            ('MeisterMeld', 'Voice-first field-service SaaS for tradespeople', '2025 – present', 'meistermeld.de',
             'Sole developer and operator: reports by voice and photo with AI processing, customer, job and staff management, '
             'PWA. <i>Next.js, TypeScript, PostgreSQL, Drizzle ORM, GitHub Actions, own VPS.</i>'),
            ('PflegeOasis.de', 'Care guidance portal for Germany', '2026', 'pflegeoasis.de',
             'Care-level and care-allowance calculators, objection letter generator with PDF, 200+ articles from an AI '
             'pipeline with human review. <i>Next.js 15, PostgreSQL 16, OpenAI API, CI/CD: GitHub Actions → VPS (PM2, Caddy).</i>'),
            ('ScamGuard', 'AI scam detection for job postings', '2026', 'scam-guard.de',
             'Multilingual platform with AI classification and language-specific SSR routes. <i>Next.js, TypeScript.</i>'),
            ('Homelab on Proxmox VE', 'Own infrastructure as a testbed for operations', 'ongoing', 'zabolotny.de',
             '4 LXC containers by role, 15+ self-hosted services in Docker, access via Tailscale and Cloudflare Tunnel with '
             'zero-trust access, daily vzdump backups (7/4/3 rotation), monitoring with Uptime Kuma and Glances.'),
        ],
        'projects_more': '<b>More:</b> SolarCheck AI (FastAPI, SvelteKit, Google Solar API) · GeschenkFox.de · DreamDeck (Telegram bot) · Smart-Letter (archived)',
        'exp': [
            ('Independent product development (AI &amp; web)', 'Solo developer · Dresden', '2024 – present',
             ['Concept to operation of several AI products (see Projects)',
              'Operations on own VPS: nginx/Caddy, systemd/PM2, SSL, backups, monitoring',
              'Integration of LLM APIs (OpenAI, Groq) into production applications']),
            ('Technical Customer Support – Facebook payments tool', 'Concentrix Global Services GmbH · Berlin (home office)', '2021 – 2022',
             ['Supported business clients (SMEs)', 'Analyzed and resolved technical customer inquiries']),
            ('Self-study in web development', 'JavaScript, React, Python', '2019 – 2021', []),
            ('Technical Customer Support – Apple devices', 'Teleperformance Deutschland GmbH · Görlitz', '2017 – 2019',
             ['Technical diagnostics and resolution of software and device issues']),
            ('Chief Technical Officer / Technical Coordinator', 'MKP Gazkomplektprylad · Ukraine', '2011 – 2017',
             ['Technical coordination, process optimization, reporting, stakeholder collaboration',
              'In parallel: own monetized websites on WordPress and DLE']),
        ],
        'edu': [
            ('Java Web Development training (960 h, DEKRA-certified)', 'Starta Institute (Tel-Ran) · Berlin', '2022 – 2023',
             'Spring Boot, REST APIs, PostgreSQL, DevOps basics · Final project: CRM system'),
            ('Business Administration (Economics of Enterprise)', 'Yuriy Fedkovych National University · Ukraine', '1997 – 2002', ''),
        ],
        'lang': [('German', 'B2+'), ('English', 'B2'), ('Russian', 'Native'), ('Ukrainian', 'Native')],
        'footer': 'Name in official documents: Sergii Zabolotnyi',
    },
}

S = {
    'name': ParagraphStyle('name', fontName='Carlito-Bold', fontSize=27, leading=30, textColor=INK, spaceAfter=1),
    'role': ParagraphStyle('role', fontName='Carlito-Bold', fontSize=12.5, leading=15, textColor=COBALT, spaceAfter=3),
    'contact': ParagraphStyle('contact', fontName='Carlito', fontSize=9.5, leading=12.5, textColor=MUTED),
    'h': ParagraphStyle('h', fontName='Carlito-Bold', fontSize=10.5, leading=13, textColor=COBALT, spaceBefore=9, spaceAfter=2, wordSpace=0),
    'body': ParagraphStyle('body', fontName='Carlito', fontSize=10, leading=13.2, textColor=INK, alignment=TA_LEFT),
    'small': ParagraphStyle('small', fontName='Carlito', fontSize=9.5, leading=12.4, textColor=MUTED),
    'bullet': ParagraphStyle('bullet', fontName='Carlito', fontSize=10, leading=12.8, textColor=INK, leftIndent=10, bulletIndent=1),
    'item': ParagraphStyle('item', fontName='Carlito-Bold', fontSize=10.5, leading=13, textColor=INK),
    'date': ParagraphStyle('date', fontName='Carlito-Italic', fontSize=9.5, leading=13, textColor=MUTED, alignment=2),
    'foot': ParagraphStyle('foot', fontName='Carlito', fontSize=8.5, leading=11, textColor=MUTED),
}


def spaced(text):
    """Uppercase section title with letter spacing (drawn via characterSpacing in a custom style)."""
    return Paragraph(text.upper(), ParagraphStyle('hh', parent=S['h'], fontSize=10, leading=12))


def section(title):
    return [spaced(title), HRFlowable(width='100%', thickness=0.7, color=LINE, spaceBefore=1, spaceAfter=4)]


def row(left, right):
    t = Table([[Paragraph(left, S['item']), Paragraph(right, S['date'])]], colWidths=[None, 34 * mm])
    t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0),
                           ('RIGHTPADDING', (0, 0), (-1, -1), 0), ('TOPPADDING', (0, 0), (-1, -1), 0),
                           ('BOTTOMPADDING', (0, 0), (-1, -1), 0)]))
    return t


def build(lang):
    c = CONTENT[lang]
    out = os.path.join(ROOT, c['file'])
    doc = SimpleDocTemplate(out, pagesize=A4, leftMargin=17 * mm, rightMargin=17 * mm, topMargin=14 * mm, bottomMargin=13 * mm,
                            title=c['title'], author='Serge Zabolotny', subject=c['role'].replace('&amp;', '&'))
    # make the right-hand date column adapt to the frame width
    story = [Paragraph(c['name'], S['name']), Paragraph(c['role'], S['role']),
             Paragraph(c['contact1'], S['contact']), Paragraph(c['contact2'], S['contact']),
             Spacer(1, 3), HRFlowable(width='100%', thickness=2.2, color=COBALT, spaceBefore=2, spaceAfter=0)]

    story += section(c['sections']['profile']) + [Paragraph(c['profile'], S['body'])]

    story += section(c['sections']['skills'])
    t = Table([[Paragraph(f'<b>{k}</b>', S['body']), Paragraph(v, S['body'])] for k, v in c['skills']], colWidths=[34 * mm, None])
    t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                           ('TOPPADDING', (0, 0), (-1, -1), 1.2), ('BOTTOMPADDING', (0, 0), (-1, -1), 1.2)]))
    story.append(t)

    story += section(c['sections']['projects'])
    for name, sub, when, site, text in c['projects']:
        story.append(KeepTogether([
            row(f'{name} <font name="Carlito" size="9.5" color="#4a5060">— {sub}</font>', when),
            Paragraph(text, S['body']),
            Spacer(1, 3.5)]))
    story.append(Paragraph(c['projects_more'], S['small']))

    story += section(c['sections']['exp'])
    for title, org, when, bullets in c['exp']:
        block = [row(title, when), Paragraph(org, S['small'])]
        block += [Paragraph(b, S['bullet'], bulletText='•') for b in bullets]
        block.append(Spacer(1, 4))
        story.append(KeepTogether(block))

    story += section(c['sections']['edu'])
    for title, org, when, extra in c['edu']:
        block = [row(title, when), Paragraph(org, S['small'])]
        if extra:
            block.append(Paragraph(extra, S['small']))
        block.append(Spacer(1, 4))
        story.append(KeepTogether(block))

    story += section(c['sections']['lang'])
    story.append(Paragraph('  ·  '.join(f'<b>{a}</b> {b}' for a, b in c['lang']), S['body']))
    story += [Spacer(1, 8), Paragraph(c['footer'], S['foot'])]

    doc.build(story)
    print('✓', c['file'])
    return out


if __name__ == '__main__':
    langs = sys.argv[1:] or ['de', 'en']
    for l in langs:
        build(l)
    if 'de' in langs:
        shutil.copyfile(os.path.join(ROOT, CONTENT['de']['file']), os.path.join(ROOT, 'resume.pdf'))
        print('✓ resume.pdf (= German)')
