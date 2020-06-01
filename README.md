# Školení Frontend

[Všechny prezentace ke stažení](https://drive.google.com/drive/folders/1a5lHOmBtG3NI7lD9ZqZC2fqsYcI-cztc?usp=sharing)

## Obsah školení

### HTML 5

[Prezentace](https://docs.google.com/presentation/d/1b4vglJukNKgw86_oSZLcwl86C0jwxZ-xHFkVRRvQ-5Y/edit?usp=sharing)

- HTML5 sémantika pro obsah
- HTML5 formuláře
- Preloading
- Interaktivita - canvas, video, obrázky
- Microdata
- Local storage, session storage
- Relační DB - IndexedDB
- WebAPI
- PWA, ServiceWorker

#### Odkazy k tématu
https://www.internetingishard.com/html-and-css/semantic-html/
https://gsnedders.html5.org/outliner/
https://codepen.io/svobodalukas/pen/bmNPoO
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/
https://css-tricks.com/learn-canvas-snake-game/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://ogp.me/
https://schema.org/Product
https://javascript.info/localstorage
https://javascript.info/indexeddb
https://bitsofco.de/an-overview-of-client-side-storage/
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
https://github.com/mdn/sw-test
https://www.vzhurudolu.cz/prirucka/pwa


### JS Frameworky, automatizace

[Prezentace](https://docs.google.com/presentation/d/1owqkwN_0-s9NOe-rXPdDjxX0iynfsFE331mCoz5wsow/edit?usp=sharing)

- nástroje pro frontend
- React, Angular, Vue - rozdíly, použití
- další možnosti
- AMP
- zajímavé pluginy pro gulp

### Bootstrap

[Prezentace](https://docs.google.com/presentation/d/1_2RXZsygzoOMUcT_w1xokXBIEX_AomF1EPCoCAzJIrs/edit?usp=sharing)

- co to je, co obsahuje, jak pomůže
- způsoby napojení do projektu, proměnné
- Bootstrap pro angular
- Verze 5 - co nás čeká

#### Odkazy k tématu

https://github.com/teddest/angular-bootstrap-starter

### SVG

- Co to je, jak to vypadá, jak se to vkládá do stránky
- Spritemapa v externím souboru, automatizace
- Úpravy pomocí CSS
- Možnosti animace
- Využití v IS aplikacích

### Rychlost načítání

[Prezentace](https://docs.google.com/presentation/d/1DvWilboVJotZh7n3ocigvl9MmO9W1y1tR8MBtaatmL0/edit?usp=sharing)

- metriky, postup načítání stránky
- problematická místa
- postupy řešení

### CSS do hloubky

- Kaskáda
- Flexbox
- CSS Grid
- CSS proměnné

### Organizace projektu, testování

[Prezentace](https://docs.google.com/presentation/d/14i7WRpAeAc39SEZBaptJgWBbpkgx5R29YiRF4fxbLCI/edit?usp=sharing)

- systémy organizace CSS kódu (metodiky, prakticky)
- kontrola v editorech kódu, pravidla v rámci týmu
- refaktoring kódu - příklad v html/css s komponentou article
- best & bad practices
- hledání chyb

### Nástroje pro CSS

- preprocesory - SCSS pro pokročilé
- jiné preprocesory LESS, PostCSS  
- další možnosti zápisu CSS

#### Odkazy k tématu

- [https://cssinjs.org/?v=v10.1.1](https://cssinjs.org/?v=v10.1.1)
- [https://tailwindcss.com/](https://tailwindcss.com/)
- [https://tachyons.io/](https://tachyons.io/)
- [http://lesscss.org/less-preview/](http://lesscss.org/less-preview/)
- [https://postcss.org/](https://postcss.org/)
- [https://www.vzhurudolu.cz/prirucka/postcss](https://www.vzhurudolu.cz/prirucka/postcss)

### Principy responsivity

[Prezentace](https://docs.google.com/presentation/d/1HsjXjbiF0myntaf1j0NNJ8997YQVnIv7WvIbvvKOLqM/edit?usp=sharing)

- principy, mobile first
- responsivní obrázky - srcset, picture, iframe
- responsivní typografie
- časté problémy

### Pravidla přístupného webu

[Prezentace](https://docs.google.com/presentation/d/1jPMtwHWKM58eb-A0hALl1MyjCeeP2YbrYQ5OrruxNgA/edit?usp=sharing)

- WAI-ARIA, zákon 99/2019
- zásady a best practices
- testování použitelnosti

### Základy designu pro vývojáře

[Prezentace](https://docs.google.com/presentation/d/131gioQvt7zQhQBkvDfy3AQxnv65QTVdn__TX7Ohi1YU/edit?usp=sharing)

- Vycházet z článku Ilinčev, něco zkusit rovnou v kódu - line height
- Mrknout na Internet is Hard, …
- Zkusit nějak prakticky - třeba Figma

## Jak to bude probíhat

Většina praktických ukázek bude standardní HTML a CSS kód, který lze zobrazit v jakémkoliv editoru kódu (lektor používá VS Code).
Některé ukázky kódu budou ale využívat nástroj **Gulp** pro automatizaci zpracování kódu. Pokud si je budete chtít vyzkoušet prakticky, pak bude nutné mít na vašem počítači nainstalovaný systém **Node.js** (včetně správce balíčků **npm**) a spouštěč úloh **Gulp**.

### Instalace Node.js

Otevřete si příkazovou řádku a zkuste napsat: `node --version`
Pokud se objeví informace o verzi, pak můžete přeskočit na instalaci nástroje Gulp, v opačném případě stáhněte instalační soubor zde: [nodejs.org/en/](https://nodejs.org/en/).

### Instalace Gulp

Postupujte podle návodu zde:
[gulpjs.com/docs/en/getting-started/quick-start/](https://gulpjs.com/docs/en/getting-started/quick-start/#install-the-gulp-command-line-utility)
