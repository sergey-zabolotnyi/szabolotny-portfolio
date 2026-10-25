// Multilingual article series (DE / EN / RU / UA): "Raus aus der Cloud – eigener Home-Server".
// Rendered by scripts/build-pages.mjs. Strings are { de, en, ru, ua }; plain strings are language-neutral.
// Body blocks: h2, p, ul, ol, code, table, callout. `{{path:<slug>}}` in a string -> localized URL of that article.
// Only facts about the real setup are stated as "mine"; general advice is worded as advice.

const t = (de, en, ru, ua) => ({ de, en, ru, ua });

export const SERIES = [
  // ───────────────────────────────────────────────────────── 1
  {
    slug: 'homeserver-statt-cloud',
    date: '2026-10-25',
    tags: ['Self-Hosting', 'Homelab', 'Proxmox', 'Nextcloud', 'Immich', 'Jellyfin', 'Home Assistant', 'Datenschutz'],
    title: t(
      'Raus aus der Cloud: Eigener Home-Server statt Google, iCloud & Co. – was sich ersetzen lässt',
      'Leaving the cloud: a home server instead of Google, iCloud & co. – what you can replace',
      'Уход из облака: домашний сервер вместо Google, iCloud и других — что можно заменить',
      'Вихід із хмари: домашній сервер замість Google, iCloud та інших — що можна замінити'
    ),
    description: t(
      'Self-Hosting-Guide: Welche Cloud-Dienste (Google Drive, Google Fotos, Smart-Home-Clouds) sich mit einem eigenen Home-Server ersetzen lassen – mit Nextcloud, Immich, Jellyfin, Paperless-ngx und Home Assistant.',
      'Self-hosting guide: which cloud services (Google Drive, Google Photos, smart-home clouds) a home server can replace – with Nextcloud, Immich, Jellyfin, Paperless-ngx and Home Assistant.',
      'Руководство по self-hosting: какие облачные сервисы (Google Drive, Google Фото, облака умного дома) заменяет домашний сервер — Nextcloud, Immich, Jellyfin, Paperless-ngx и Home Assistant.',
      'Посібник із self-hosting: які хмарні сервіси (Google Drive, Google Фото, хмари розумного дому) замінює домашній сервер — Nextcloud, Immich, Jellyfin, Paperless-ngx і Home Assistant.'
    ),
    kicker: t('Self-Hosting · Homelab · Datenschutz', 'Self-hosting · Homelab · Privacy', 'Self-hosting · Homelab · Приватность', 'Self-hosting · Homelab · Приватність'),
    h1: t(
      'Raus aus der Cloud: Eigener Home-Server statt Google, iCloud & Co.',
      'Leaving the cloud: a home server instead of Google, iCloud & co.',
      'Уход из облака: домашний сервер вместо Google, iCloud и других',
      'Вихід із хмари: домашній сервер замість Google, iCloud та інших'
    ),
    lead: t(
      'Ich betreibe zu Hause einen Proxmox-Server mit 15+ Diensten. Hier steht, welche Cloud-Dienste er bei mir ersetzt, was das kostet – an Zeit – und wo man besser bei der Cloud bleibt.',
      'At home I run a Proxmox server with 15+ services. Here is which cloud services it replaces for me, what it costs – in time – and where you are better off staying in the cloud.',
      'Дома у меня работает сервер на Proxmox с 15+ сервисами. Здесь — какие облачные сервисы он заменяет, чего это стоит (времени) и где лучше остаться в облаке.',
      'Вдома в мене працює сервер на Proxmox із 15+ сервісами. Тут — які хмарні сервіси він замінює, чого це коштує (часу) і де краще залишитися в хмарі.'
    ),
    body: [
      { h2: t('Warum ein eigener Server?', 'Why run your own server?', 'Зачем свой сервер?', 'Навіщо власний сервер?') },
      {
        p: t(
          'Fotos, Dokumente, Kalender, Filme: Vieles davon liegt bei großen Cloud-Anbietern – bequem, aber gegen Abo-Gebühr, mit fremden Nutzungsbedingungen und ohne echte Kontrolle. Mein Home-Server ersetzt einen Großteil davon. Nebenbei lerne ich als Entwickler, was im Betrieb zählt: Virtualisierung, Container, Netzwerk, Backups und Monitoring.',
          'Photos, documents, calendars, films: most of it sits with big cloud providers – convenient, but with subscription fees, someone else’s terms of use and no real control. My home server replaces a large part of it. As a developer I also learn what counts in operations: virtualization, containers, networking, backups and monitoring.',
          'Фото, документы, календари, фильмы: большая часть лежит у крупных облачных провайдеров — удобно, но за абонентскую плату, по чужим условиям и без реального контроля. Мой домашний сервер заменяет значительную часть этого. Заодно я как разработчик учусь тому, что важно в эксплуатации: виртуализация, контейнеры, сеть, бэкапы и мониторинг.',
          'Фото, документи, календарі, фільми: більшість лежить у великих хмарних провайдерів — зручно, але за абонплату, за чужими умовами й без реального контролю. Мій домашній сервер замінює значну частину цього. Заодно я як розробник вчуся того, що важливо в експлуатації: віртуалізація, контейнери, мережа, бекапи та моніторинг.'
        ),
      },
      { h2: t('Was sich ersetzen lässt', 'What you can replace', 'Что можно заменить', 'Що можна замінити') },
      {
        table: {
          head: [
            t('Cloud-Dienst', 'Cloud service', 'Облачный сервис', 'Хмарний сервіс'),
            'Self-hosted',
            t('Wofür', 'What for', 'Для чего', 'Для чого'),
          ],
          rows: [
            [
              'Google Drive, iCloud, Dropbox',
              'Nextcloud',
              t('Dateien synchronisieren und teilen', 'Sync and share files', 'Синхронизация и обмен файлами', 'Синхронізація та обмін файлами'),
            ],
            [
              t('Google Fotos, iCloud Fotos', 'Google Photos, iCloud Photos', 'Google Фото, iCloud Фото', 'Google Фото, iCloud Фото'),
              'Immich',
              t(
                'Fotos und Videos vom Handy sichern und durchsuchen',
                'Back up and search photos and videos from your phone',
                'Резервная копия и поиск фото и видео с телефона',
                'Резервна копія та пошук фото й відео з телефону'
              ),
            ],
            [
              t('Streaming für die eigene Mediathek', 'Streaming for your own library', 'Стриминг для собственной медиатеки', 'Стримінг для власної медіатеки'),
              'Jellyfin, Navidrome, Calibre-Web',
              t(
                'Filme, Musik und E-Books aus der eigenen Sammlung',
                'Films, music and e-books from your own collection',
                'Фильмы, музыка и электронные книги из своей коллекции',
                'Фільми, музика та електронні книги зі своєї колекції'
              ),
            ],
            [
              t('Scan-Apps und Cloud-Ablage', 'Scanner apps and cloud filing', 'Сканер-приложения и облачный архив', 'Додатки-сканери та хмарний архів'),
              'Paperless-ngx',
              t(
                'Dokumente scannen, per OCR durchsuchbar machen, ablegen',
                'Scan documents, make them searchable with OCR, file them',
                'Сканировать документы, делать их доступными для поиска через OCR, архивировать',
                'Сканувати документи, робити їх придатними для пошуку через OCR, архівувати'
              ),
            ],
            [
              t('Smart-Home-Clouds der Hersteller', 'Vendor smart-home clouds', 'Облака производителей умного дома', 'Хмари виробників розумного дому'),
              'Home Assistant, MQTT',
              t(
                'Geräte lokal steuern und automatisieren',
                'Control and automate devices locally',
                'Управлять устройствами и автоматизировать их локально',
                'Керувати пристроями й автоматизувати їх локально'
              ),
            ],
            [
              t('Cloud-Kameras', 'Cloud cameras', 'Облачные камеры', 'Хмарні камери'),
              'Frigate',
              t(
                'Kameraaufnahmen lokal speichern und auswerten',
                'Store and analyze camera footage locally',
                'Хранить и анализировать записи камер локально',
                'Зберігати й аналізувати записи камер локально'
              ),
            ],
            [
              t('Werbeblocker pro Gerät', 'Per-device ad blockers', 'Блокировщики рекламы на каждом устройстве', 'Блокувальники реклами на кожному пристрої'),
              'AdGuard',
              t(
                'Werbung und Tracker im ganzen Netzwerk filtern',
                'Filter ads and trackers network-wide',
                'Фильтровать рекламу и трекеры во всей сети',
                'Фільтрувати рекламу й трекери в усій мережі'
              ),
            ],
            [
              t('Monitoring-SaaS', 'Monitoring SaaS', 'SaaS-мониторинг', 'SaaS-моніторинг'),
              'Uptime Kuma, Glances',
              t(
                'Verfügbarkeit und Auslastung im Blick',
                'Keep an eye on availability and load',
                'Следить за доступностью и нагрузкой',
                'Стежити за доступністю й навантаженням'
              ),
            ],
          ],
        },
      },
      {
        callout: t(
          '<strong>Wichtig:</strong> Jellyfin ersetzt keinen Streaming-Katalog wie bei Netflix. Es verwaltet nur Medien, die du selbst besitzt.',
          '<strong>Note:</strong> Jellyfin does not replace a streaming catalogue like Netflix. It only manages media you own yourself.',
          '<strong>Важно:</strong> Jellyfin не заменяет каталог стриминга вроде Netflix. Он управляет только теми медиа, которыми вы владеете сами.',
          '<strong>Важливо:</strong> Jellyfin не замінює каталог стримінгу на кшталт Netflix. Він керує лише тими медіа, якими ви володієте самі.'
        ),
      },
      {
        h2: t('Wo man besser bei der Cloud bleibt', 'Where you are better off staying in the cloud', 'Где лучше остаться в облаке', 'Де краще залишитися в хмарі'),
      },
      {
        ul: [
          t(
            '<strong>E-Mail:</strong> Ich empfehle, sie nicht selbst zu hosten. Zustellbarkeit und Spam-Reputation kosten mehr Pflege, als sie bringen.',
            '<strong>E-mail:</strong> I recommend not hosting it yourself. Deliverability and spam reputation cost more upkeep than they are worth.',
            '<strong>Почта:</strong> я рекомендую не хостить её самому. Доставляемость и репутация по спаму требуют больше усилий, чем дают.',
            '<strong>Пошта:</strong> я раджу не хостити її самому. Доставлюваність і репутація щодо спаму вимагають більше зусиль, ніж дають.'
          ),
          t(
            '<strong>Alles, was ohne Ausfall laufen muss:</strong> Meine Produkte (MeisterMeld, PflegeOasis) laufen nicht zu Hause, sondern auf gemieteten Servern in Deutschland.',
            '<strong>Anything that must never go down:</strong> my products (MeisterMeld, PflegeOasis) do not run at home, but on rented servers in Germany.',
            '<strong>Всё, что не должно падать:</strong> мои продукты (MeisterMeld, PflegeOasis) работают не дома, а на арендованных серверах в Германии.',
            '<strong>Усе, що не має падати:</strong> мої продукти (MeisterMeld, PflegeOasis) працюють не вдома, а на орендованих серверах у Німеччині.'
          ),
        ],
      },
      { h2: t('Was es wirklich kostet', 'What it really costs', 'Чего это стоит на самом деле', 'Чого це коштує насправді') },
      {
        ul: [
          t(
            '<strong>Hardware:</strong> Ein gebrauchter Mini-PC reicht. Bei mir ein HP EliteDesk 800 G3 Mini mit 16 GB RAM für 15+ Dienste.',
            '<strong>Hardware:</strong> a used mini PC is enough. Mine is an HP EliteDesk 800 G3 Mini with 16 GB RAM running 15+ services.',
            '<strong>Железо:</strong> хватит б/у мини-ПК. У меня HP EliteDesk 800 G3 Mini с 16 ГБ ОЗУ, на нём 15+ сервисов.',
            '<strong>Залізо:</strong> вистачить вживаного міні-ПК. У мене HP EliteDesk 800 G3 Mini з 16 ГБ ОЗП, на ньому 15+ сервісів.'
          ),
          t(
            '<strong>Zeit:</strong> Updates, Backups und Fehlersuche sind jetzt deine Aufgabe.',
            '<strong>Time:</strong> updates, backups and troubleshooting are now your job.',
            '<strong>Время:</strong> обновления, бэкапы и поиск неисправностей теперь на вас.',
            '<strong>Час:</strong> оновлення, бекапи та пошук несправностей тепер на вас.'
          ),
          t(
            '<strong>Verantwortung:</strong> Sind die Daten weg, gibt es keinen Support. Deshalb kommen Backups vor allem anderen.',
            '<strong>Responsibility:</strong> if the data is gone, there is no support desk. That is why backups come before everything else.',
            '<strong>Ответственность:</strong> если данные потеряны, поддержки нет. Поэтому бэкапы — прежде всего остального.',
            '<strong>Відповідальність:</strong> якщо дані втрачено, підтримки немає. Тому бекапи — передусім.'
          ),
        ],
      },
      {
        callout: t(
          '<strong>Faustregel:</strong> Hoste selbst, was du nicht verlieren und nicht abgeben willst – und wenn du bereit bist, Backups regelmäßig zu testen.',
          '<strong>Rule of thumb:</strong> self-host what you do not want to lose or hand over – and only if you are willing to test your backups regularly.',
          '<strong>Правило:</strong> хостите сами то, что не хотите терять и отдавать, и только если готовы регулярно проверять бэкапы.',
          '<strong>Правило:</strong> хостіть самі те, що не хочете втрачати й віддавати, і лише якщо готові регулярно перевіряти бекапи.'
        ),
      },
    ],
  },

  // ───────────────────────────────────────────────────────── 2
  {
    slug: 'proxmox-lxc-aufteilung',
    date: '2026-10-25',
    tags: ['Proxmox VE', 'LXC', 'Docker', 'Homelab', 'NVMe', 'Self-Hosting'],
    title: t(
      'Proxmox & LXC im Homelab: Welche Container ich betreibe und warum',
      'Proxmox & LXC in a homelab: which containers I run and why',
      'Proxmox и LXC в homelab: какие контейнеры я запускаю и зачем',
      'Proxmox і LXC у homelab: які контейнери я запускаю і навіщо'
    ),
    description: t(
      'Wie ich mein Homelab mit Proxmox VE in vier LXC-Container nach Rollen aufteile (Entwicklung, Medien, Smart Home, Netzwerk) – mit Storage-Layout, Docker in LXC und Tipps für den Einstieg.',
      'How I split my homelab on Proxmox VE into four LXC containers by role (development, media, smart home, network) – with storage layout, Docker in LXC and tips for getting started.',
      'Как я делю homelab на Proxmox VE на четыре LXC-контейнера по ролям (разработка, медиа, умный дом, сеть) — схема хранилища, Docker в LXC и советы для старта.',
      'Як я ділю homelab на Proxmox VE на чотири LXC-контейнери за ролями (розробка, медіа, розумний дім, мережа) — схема сховища, Docker у LXC і поради для старту.'
    ),
    kicker: t('Proxmox · LXC · Homelab', 'Proxmox · LXC · Homelab', 'Proxmox · LXC · Homelab', 'Proxmox · LXC · Homelab'),
    h1: t(
      'Proxmox & LXC im Homelab: Welche Container ich betreibe und warum',
      'Proxmox & LXC in a homelab: which containers I run and why',
      'Proxmox и LXC в homelab: какие контейнеры я запускаю и зачем',
      'Proxmox і LXC у homelab: які контейнери я запускаю і навіщо'
    ),
    lead: t(
      'Vier Container, vier Rollen: So ist mein Home-Server aufgebaut, welche Programme wo laufen und wie ich den Speicher verteilt habe.',
      'Four containers, four roles: how my home server is built, which programs run where and how I laid out the storage.',
      'Четыре контейнера, четыре роли: как устроен мой домашний сервер, какие программы где работают и как я распределил хранилище.',
      'Чотири контейнери, чотири ролі: як влаштований мій домашній сервер, які програми де працюють і як я розподілив сховище.'
    ),
    body: [
      { h2: t('Die Hardware', 'The hardware', 'Железо', 'Залізо') },
      {
        p: t(
          'Ein HP EliteDesk 800 G3 Mini mit 16 GB RAM, Proxmox VE als Hypervisor. Das ist kein Serverraum, sondern ein Gerät, das leise unter dem Schreibtisch läuft – und trotzdem 15+ Dienste trägt.',
          'An HP EliteDesk 800 G3 Mini with 16 GB RAM, Proxmox VE as the hypervisor. Not a server room, just a quiet box under the desk – that still carries 15+ services.',
          'HP EliteDesk 800 G3 Mini с 16 ГБ ОЗУ, Proxmox VE в качестве гипервизора. Не серверная, а тихая коробка под столом — которая тем не менее тянет 15+ сервисов.',
          'HP EliteDesk 800 G3 Mini з 16 ГБ ОЗП, Proxmox VE як гіпервізор. Не серверна, а тиха коробка під столом — яка, попри це, тягне 15+ сервісів.'
        ),
      },
      {
        h2: t('Warum LXC statt virtueller Maschinen?', 'Why LXC instead of virtual machines?', 'Почему LXC, а не виртуальные машины?', 'Чому LXC, а не віртуальні машини?'),
      },
      {
        ul: [
          t(
            '<strong>Leichtgewichtig:</strong> LXC-Container teilen sich den Kernel des Hosts, brauchen kaum RAM-Overhead und starten in Sekunden.',
            '<strong>Lightweight:</strong> LXC containers share the host kernel, need hardly any RAM overhead and start in seconds.',
            '<strong>Лёгкость:</strong> LXC-контейнеры используют ядро хоста, почти не требуют дополнительной памяти и стартуют за секунды.',
            '<strong>Легкість:</strong> LXC-контейнери використовують ядро хоста, майже не потребують додаткової пам’яті й стартують за секунди.'
          ),
          t(
            '<strong>Docker läuft darin:</strong> Mit aktivierten Container-Features (Nesting) lassen sich Docker-Stacks in einem LXC betreiben.',
            '<strong>Docker runs inside:</strong> with the container features enabled (nesting) you can run Docker stacks in an LXC.',
            '<strong>Docker внутри:</strong> при включённых функциях контейнера (nesting) в LXC можно запускать стеки Docker.',
            '<strong>Docker усередині:</strong> за ввімкнених функцій контейнера (nesting) у LXC можна запускати стеки Docker.'
          ),
          t(
            '<strong>Der Kompromiss:</strong> Die Isolation ist schwächer als bei einer VM. Wer einen eigenen Kernel braucht, nimmt eine VM.',
            '<strong>The trade-off:</strong> isolation is weaker than with a VM. If you need your own kernel, use a VM.',
            '<strong>Компромисс:</strong> изоляция слабее, чем у ВМ. Если нужно своё ядро, берите виртуальную машину.',
            '<strong>Компроміс:</strong> ізоляція слабша, ніж у ВМ. Якщо потрібне власне ядро, беріть віртуальну машину.'
          ),
        ],
      },
      { h2: t('Aufteilung nach Rollen', 'Split by role', 'Разделение по ролям', 'Поділ за ролями') },
      {
        table: {
          head: ['CT', t('Name', 'Name', 'Имя', 'Ім’я'), t('Rolle', 'Role', 'Роль', 'Роль'), t('Dienste', 'Services', 'Сервисы', 'Сервіси')],
          rows: [
            [
              '100',
              'dev-server',
              t('Entwicklung', 'Development', 'Разработка', 'Розробка'),
              t('Projekte, PostgreSQL', 'Projects, PostgreSQL', 'Проекты, PostgreSQL', 'Проєкти, PostgreSQL'),
            ],
            [
              '101',
              'home-media',
              t('Daten &amp; Medien', 'Data &amp; media', 'Данные и медиа', 'Дані та медіа'),
              'Nextcloud, Immich, Jellyfin, Paperless-ngx, AdGuard, Fail2ban',
            ],
            [
              '102',
              'smarthome',
              t('Hausautomation', 'Home automation', 'Умный дом', 'Розумний дім'),
              'Home Assistant, Frigate, MQTT',
            ],
            [
              '103',
              'network-gateway',
              t('Zugang &amp; Überwachung', 'Access &amp; monitoring', 'Доступ и мониторинг', 'Доступ і моніторинг'),
              'Tailscale, Uptime Kuma, Homepage',
            ],
          ],
        },
      },
      {
        p: t(
          'Warum nicht alles in einen Container? Drei Gründe: Geht etwas kaputt, bleibt der Schaden auf eine Rolle begrenzt. Backups und Wiederherstellung funktionieren pro Container. Und jede Rolle bekommt ihre eigenen Ressourcen und Netzwerkregeln.',
          'Why not put everything in one container? Three reasons: if something breaks, the damage stays within one role. Backups and restores work per container. And every role gets its own resources and network rules.',
          'Почему не всё в одном контейнере? Три причины: если что-то ломается, ущерб ограничен одной ролью. Бэкапы и восстановление работают по контейнерам. И у каждой роли свои ресурсы и сетевые правила.',
          'Чому не все в одному контейнері? Три причини: якщо щось ламається, шкода обмежена однією роллю. Бекапи й відновлення працюють по контейнерах. І в кожної ролі свої ресурси та мережеві правила.'
        ),
      },
      { h2: t('Das Storage-Layout', 'The storage layout', 'Схема хранилища', 'Схема сховища') },
      {
        ul: [
          t(
            '<strong>1 TB NVMe:</strong> Root-Disks aller Container und die Medienbibliothek',
            '<strong>1 TB NVMe:</strong> root disks of all containers and the media library',
            '<strong>1 ТБ NVMe:</strong> корневые диски всех контейнеров и медиатека',
            '<strong>1 ТБ NVMe:</strong> кореневі диски всіх контейнерів і медіатека'
          ),
          t(
            '<strong>512 GB SATA-SSD:</strong> nur das Proxmox-Hostsystem',
            '<strong>512 GB SATA SSD:</strong> only the Proxmox host system',
            '<strong>512 ГБ SATA SSD:</strong> только система хоста Proxmox',
            '<strong>512 ГБ SATA SSD:</strong> лише система хоста Proxmox'
          ),
          t(
            '<strong>2 TB HDD:</strong> nur die täglichen Backups – sie wird einmal am Tag beansprucht, nicht im Dauerbetrieb',
            '<strong>2 TB HDD:</strong> only the daily backups – it is used once a day, not running under constant load',
            '<strong>2 ТБ HDD:</strong> только ежедневные бэкапы — диск нагружается раз в сутки, а не работает постоянно',
            '<strong>2 ТБ HDD:</strong> лише щоденні бекапи — диск навантажується раз на добу, а не працює постійно'
          ),
        ],
      },
      {
        p: t(
          'Ein späterer Umzug von der SATA-SSD auf die NVMe ging ohne Neuinstallation: Die Root-Disks lassen sich im laufenden Setup verschieben.',
          'Moving later from the SATA SSD to the NVMe worked without a reinstall: the root disks can be moved in an existing setup.',
          'Позднее перенос с SATA SSD на NVMe прошёл без переустановки: корневые диски переносятся в существующей конфигурации.',
          'Згодом перенесення з SATA SSD на NVMe минуло без перевстановлення: кореневі диски переносяться в наявній конфігурації.'
        ),
      },
      { code: 'pct move-volume <CTID> rootfs <target-storage>' },
      {
        callout: t(
          '<strong>Tipp bei gebrauchten SSDs:</strong> Vorher den Zustand prüfen. Meine „neue“ NVMe hatte schon 33 TB geschrieben – gesund, aber eben nicht neu.',
          '<strong>Tip for used SSDs:</strong> check their health first. My “new” NVMe already had 33 TB written – healthy, but not new.',
          '<strong>Совет по б/у SSD:</strong> сначала проверьте состояние. Моя «новая» NVMe уже имела 33 ТБ записи — здоровая, но не новая.',
          '<strong>Порада щодо вживаних SSD:</strong> спершу перевірте стан. Мій «новий» NVMe вже мав 33 ТБ запису — здоровий, але не новий.'
        ),
      },
      { code: 'smartctl -a /dev/nvme0n1' },
      { h2: t('So fängst du an', 'How to get started', 'С чего начать', 'З чого почати') },
      {
        ol: [
          t(
            'Proxmox VE auf dem Mini-PC installieren.',
            'Install Proxmox VE on the mini PC.',
            'Установите Proxmox VE на мини-ПК.',
            'Встановіть Proxmox VE на міні-ПК.'
          ),
          t(
            'Einen Container für Daten und Medien anlegen und Docker darin installieren.',
            'Create one container for data and media and install Docker in it.',
            'Создайте один контейнер для данных и медиа и установите в нём Docker.',
            'Створіть один контейнер для даних і медіа та встановіть у ньому Docker.'
          ),
          t(
            'Containern feste IP-Adressen geben – sonst brechen irgendwann DNS und Routing.',
            'Give containers static IP addresses – otherwise DNS and routing will break at some point.',
            'Задайте контейнерам статические IP-адреса — иначе рано или поздно сломаются DNS и маршрутизация.',
            'Задайте контейнерам статичні IP-адреси — інакше рано чи пізно зламаються DNS і маршрутизація.'
          ),
          t(
            'Einen Dienst nach dem anderen hinzufügen, nicht zehn auf einmal.',
            'Add one service at a time, not ten at once.',
            'Добавляйте по одному сервису, а не десять сразу.',
            'Додавайте по одному сервісу, а не десять одразу.'
          ),
          t(
            'Backups einrichten, bevor die Daten wichtig werden.',
            'Set up backups before the data becomes important.',
            'Настройте бэкапы до того, как данные станут важными.',
            'Налаштуйте бекапи до того, як дані стануть важливими.'
          ),
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────── 3
  {
    slug: 'homeserver-zugriff-backup',
    date: '2026-10-25',
    tags: ['Tailscale', 'Cloudflare Tunnel', 'Zero Trust', 'vzdump', 'Backup', 'Uptime Kuma', 'Fail2ban', 'Homelab'],
    title: t(
      'Home-Server sicher erreichen und sichern: Tailscale, Cloudflare Tunnel und Backups mit vzdump',
      'Reaching and protecting a home server: Tailscale, Cloudflare Tunnel and backups with vzdump',
      'Безопасный доступ и бэкапы домашнего сервера: Tailscale, Cloudflare Tunnel и vzdump',
      'Безпечний доступ і бекапи домашнього сервера: Tailscale, Cloudflare Tunnel і vzdump'
    ),
    description: t(
      'Wie ich meinen Home-Server ohne Port-Forwarding von außen erreiche (Tailscale, Cloudflare Tunnel mit Access), ihn mit Fail2ban und Monitoring schütze und tägliche Backups mit vzdump und Rotation 7/4/3 fahre.',
      'How I reach my home server from outside without port forwarding (Tailscale, Cloudflare Tunnel with Access), protect it with Fail2ban and monitoring, and run daily vzdump backups with 7/4/3 rotation.',
      'Как я получаю доступ к домашнему серверу извне без проброса портов (Tailscale, Cloudflare Tunnel с Access), защищаю его через Fail2ban и мониторинг и делаю ежедневные бэкапы vzdump с ротацией 7/4/3.',
      'Як я отримую доступ до домашнього сервера ззовні без прокидання портів (Tailscale, Cloudflare Tunnel з Access), захищаю його через Fail2ban і моніторинг та роблю щоденні бекапи vzdump з ротацією 7/4/3.'
    ),
    kicker: t('Zugriff · Sicherheit · Backup', 'Access · Security · Backup', 'Доступ · Безопасность · Бэкап', 'Доступ · Безпека · Бекап'),
    h1: t(
      'Home-Server sicher erreichen und sichern: Tailscale, Cloudflare Tunnel, vzdump',
      'Reaching and protecting a home server: Tailscale, Cloudflare Tunnel, vzdump',
      'Безопасный доступ и бэкапы домашнего сервера: Tailscale, Cloudflare Tunnel, vzdump',
      'Безпечний доступ і бекапи домашнього сервера: Tailscale, Cloudflare Tunnel, vzdump'
    ),
    lead: t(
      'Ein Home-Server ist nur so gut wie sein Zugang und seine Backups. Mein Prinzip: kein Port-Forwarding, jeder Zugang eine bewusste Entscheidung, jeden Tag ein Backup.',
      'A home server is only as good as its access and its backups. My principle: no port forwarding, every access path a conscious decision, a backup every day.',
      'Домашний сервер хорош ровно настолько, насколько хороши его доступ и бэкапы. Мой принцип: никакого проброса портов, каждый доступ — осознанное решение, бэкап каждый день.',
      'Домашній сервер хороший рівно настільки, наскільки хороші його доступ і бекапи. Мій принцип: жодного прокидання портів, кожен доступ — свідоме рішення, бекап щодня.'
    ),
    body: [
      { h2: t('Wer darf von wo zugreifen?', 'Who gets access from where?', 'Кто и откуда получает доступ?', 'Хто і звідки отримує доступ?') },
      {
        table: {
          head: [
            t('Wer / Was', 'Who / what', 'Кто / что', 'Хто / що'),
            t('Lösung', 'Solution', 'Решение', 'Рішення'),
          ],
          rows: [
            [
              t('Nur ich, privat und von unterwegs', 'Only me, privately and on the move', 'Только я, приватно и в дороге', 'Лише я, приватно й у дорозі'),
              t('Tailscale (WireGuard-VPN)', 'Tailscale (WireGuard VPN)', 'Tailscale (VPN на WireGuard)', 'Tailscale (VPN на WireGuard)'),
            ],
            [
              t('Nur ich, im Browser ohne VPN', 'Only me, in the browser without VPN', 'Только я, в браузере без VPN', 'Лише я, у браузері без VPN'),
              t(
                'Cloudflare Tunnel + Access (Login per One-Time-PIN)',
                'Cloudflare Tunnel + Access (login via one-time PIN)',
                'Cloudflare Tunnel + Access (вход по одноразовому PIN)',
                'Cloudflare Tunnel + Access (вхід за одноразовим PIN)'
              ),
            ],
            [
              t('Andere Personen', 'Other people', 'Другие люди', 'Інші люди'),
              t(
                'Tunnel mit Zwei-Faktor-Anmeldung oder starkem Passwort',
                'Tunnel with two-factor login or a strong password',
                'Туннель с двухфакторной аутентификацией или надёжным паролем',
                'Тунель із двофакторною автентифікацією або надійним паролем'
              ),
            ],
            [
              t('Sensible Daten (z. B. Fotos)', 'Sensitive data (e.g. photos)', 'Чувствительные данные (например, фото)', 'Чутливі дані (наприклад, фото)'),
              t('Nur über Tailscale, nie öffentlich', 'Via Tailscale only, never public', 'Только через Tailscale, никогда публично', 'Лише через Tailscale, ніколи публічно'),
            ],
          ],
        },
      },
      {
        p: t(
          'Der Cloudflare Tunnel baut eine <strong>ausgehende</strong> Verbindung auf, deshalb muss am Router kein Port geöffnet werden. Wie ich ein offenes Dashboard damit abgesichert habe, steht in der Notiz <a href="{{path:zero-trust-homelab}}">Zero Trust fürs Homelab</a>.',
          'The Cloudflare Tunnel makes an <strong>outbound</strong> connection, so no port has to be opened on the router. How I locked down an exposed dashboard with it is in the note <a href="{{path:zero-trust-homelab}}">Zero Trust for the homelab</a>.',
          'Cloudflare Tunnel устанавливает <strong>исходящее</strong> соединение, поэтому на роутере не нужно открывать ни одного порта. Как я закрыл с его помощью открытый дашборд — в заметке <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>.',
          'Cloudflare Tunnel встановлює <strong>вихідне</strong> з’єднання, тому на роутері не потрібно відкривати жодного порту. Як я закрив із його допомогою відкритий дашборд — у нотатці <a href="{{path:zero-trust-homelab}}">Zero Trust для homelab</a>.'
        ),
      },
      { h2: t('Schutz im Alltag', 'Everyday protection', 'Защита в повседневной работе', 'Захист у повсякденній роботі') },
      {
        ul: [
          t(
            '<strong>Fail2ban</strong> sperrt Adressen nach wiederholten Fehlversuchen.',
            '<strong>Fail2ban</strong> blocks addresses after repeated failed attempts.',
            '<strong>Fail2ban</strong> блокирует адреса после повторных неудачных попыток входа.',
            '<strong>Fail2ban</strong> блокує адреси після повторних невдалих спроб входу.'
          ),
          t(
            '<strong>AdGuard</strong> filtert Werbung und Tracker per DNS im ganzen Netzwerk.',
            '<strong>AdGuard</strong> filters ads and trackers via DNS across the whole network.',
            '<strong>AdGuard</strong> фильтрует рекламу и трекеры через DNS во всей сети.',
            '<strong>AdGuard</strong> фільтрує рекламу й трекери через DNS у всій мережі.'
          ),
          t(
            '<strong>Uptime Kuma</strong> meldet, wenn ein Dienst nicht mehr erreichbar ist; <strong>Glances</strong> zeigt die Auslastung des Hosts.',
            '<strong>Uptime Kuma</strong> alerts you when a service becomes unreachable; <strong>Glances</strong> shows the load on the host.',
            '<strong>Uptime Kuma</strong> сообщает, когда сервис перестаёт отвечать; <strong>Glances</strong> показывает нагрузку на хост.',
            '<strong>Uptime Kuma</strong> повідомляє, коли сервіс перестає відповідати; <strong>Glances</strong> показує навантаження на хост.'
          ),
          t(
            'Regelmäßig prüfen, was DNS und Tunnel tatsächlich veröffentlichen.',
            'Regularly check what DNS and the tunnel actually publish.',
            'Регулярно проверяйте, что на самом деле публикуют DNS и туннель.',
            'Регулярно перевіряйте, що насправді публікують DNS і тунель.'
          ),
        ],
      },
      { h2: t('Backups mit vzdump', 'Backups with vzdump', 'Бэкапы с vzdump', 'Бекапи з vzdump') },
      {
        p: t(
          'Proxmox sichert ganze Container mit <code>vzdump</code>. Bei mir läuft das täglich auf eine <strong>separate Platte</strong>, mit der Aufbewahrung 7 tägliche, 4 wöchentliche und 3 monatliche Sicherungen:',
          'Proxmox backs up whole containers with <code>vzdump</code>. Mine runs daily to a <strong>separate disk</strong>, keeping 7 daily, 4 weekly and 3 monthly backups:',
          'Proxmox делает бэкап целых контейнеров через <code>vzdump</code>. У меня это происходит ежедневно на <strong>отдельный диск</strong> с хранением 7 ежедневных, 4 еженедельных и 3 ежемесячных копий:',
          'Proxmox робить бекап цілих контейнерів через <code>vzdump</code>. У мене це відбувається щодня на <strong>окремий диск</strong> зі зберіганням 7 щоденних, 4 щотижневих і 3 щомісячних копій:'
        ),
      },
      { code: 'vzdump <CTID> --storage <backup-storage> --mode snapshot \\\n  --prune-backups keep-daily=7,keep-weekly=4,keep-monthly=3' },
      {
        callout: t(
          '<strong>Wichtig:</strong> Eine zweite Platte im selben Gerät schützt vor Plattenausfall, nicht vor Diebstahl, Feuer oder Überspannung. Nach der 3-2-1-Regel gehört mindestens eine Kopie an einen anderen Ort – und jedes Backup ist erst dann eines, wenn du die Wiederherstellung getestet hast.',
          '<strong>Important:</strong> a second disk in the same machine protects against disk failure, not against theft, fire or power surges. By the 3-2-1 rule at least one copy belongs in another location – and a backup only counts once you have tested the restore.',
          '<strong>Важно:</strong> второй диск в том же устройстве защищает от выхода диска из строя, но не от кражи, пожара или скачка напряжения. По правилу 3-2-1 хотя бы одна копия должна лежать в другом месте — и бэкап считается бэкапом, только когда вы проверили восстановление.',
          '<strong>Важливо:</strong> другий диск у тому самому пристрої захищає від виходу диска з ладу, але не від крадіжки, пожежі чи стрибка напруги. За правилом 3-2-1 принаймні одна копія має лежати в іншому місці — і бекап вважається бекапом, лише коли ви перевірили відновлення.'
        ),
      },
      { h2: t('Checkliste', 'Checklist', 'Чек-лист', 'Чек-лист') },
      {
        ul: [
          t('Kein Port-Forwarding am Router', 'No port forwarding on the router', 'Никакого проброса портов на роутере', 'Жодного прокидання портів на роутері'),
          t('Für jeden öffentlichen Dienst eine Login-Schicht', 'A login layer for every public service', 'Слой входа для каждого публичного сервиса', 'Шар входу для кожного публічного сервісу'),
          t('Private Dienste nur über VPN', 'Private services via VPN only', 'Приватные сервисы только через VPN', 'Приватні сервіси лише через VPN'),
          t('Tägliches Backup auf separate Platte, plus Kopie an einem anderen Ort', 'Daily backup to a separate disk, plus a copy in another location', 'Ежедневный бэкап на отдельный диск плюс копия в другом месте', 'Щоденний бекап на окремий диск плюс копія в іншому місці'),
          t('Wiederherstellung regelmäßig testen', 'Test restores regularly', 'Регулярно проверять восстановление', 'Регулярно перевіряти відновлення'),
          t('Monitoring mit Benachrichtigung', 'Monitoring with alerts', 'Мониторинг с уведомлениями', 'Моніторинг зі сповіщеннями'),
        ],
      },
    ],
  },
];
