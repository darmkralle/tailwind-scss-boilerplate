# Tailwind / SCSS / JS - Boilerplate
Kleine Boilerplate, die auch Änderungen in PHP-Files triggert und SCSS neu kompiliert. Um Änderungen in anderen Files ebenfalls zu triggern, genügt die Anpassung / Erweiterung der tailwind.config.js (content)

### npm run watch
Führt postcss direkt aus. Berücksichtigt nur SCSS.

### npm run dev
Über webpack (watch mode) wird sowohl SCSS als auch JS kompiliert.