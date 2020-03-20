# node-app

## Que fais le projet ?

Ce projet permet d'afficher "Node App" à l'aide de l'auto génération d'"express-generator"

Le site permet d'afficher des informations sur une ville choisie par l'utilisateur.

## Installation du projet

```sh
$ git clone https://github.com/Thibma/node-app.git
$ cd node-app
$ nvm use 12.15 # to switch to node.js version 12.15, as required by ava
$ npm install
$ npm start
# pressez Ctrl-C pour quitter le serveur 
```

## Tester le serveur

### Tests automatiques

```sh
# le serveur doit être en cours d'exécution (npm start)
$ npm test
```

### Manuellement

```$ curl http://localhost:3000/ # doit retourner le texte```

 "Node App

Welcome to Node App"