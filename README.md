# WWW2019

## Installation des outils

- Installer NodeJS et PHP.
- Installer Git (faculatif)
- Verifier que npm et php sont bien installés et accessibles avec `npm -v` et PHP avec `php -v`.
- Taper les commandes suivantes dans le répertoire courant pour installer les dépendances
```
npm i -g yarn gulp-cli
yarn install
php composer.phar install
```

## Développement
Taper `gulp serve`, un serveur local est lancé.
Il a pour rôle de faire serveur PHP et de compiler les fichiers .less en .css

![Capture](misc/screenshot.png)