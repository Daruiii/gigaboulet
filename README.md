# Gigaboulet - Documentation

## **Lancer le projet avec Docker**

### **Prérequis**
- Docker doit être installé sur votre machine.
- Vérifiez l'installation avec :
  ```bash
  docker --version
  ```

### **Étapes pour démarrer le projet**

#### 1. **Construire l'image Docker**
Dans le répertoire racine du projet, exécutez :
```bash
docker build -t gigaboulet .
```

#### 2. **Lancer le serveur local**
Utilisez la commande suivante pour démarrer le projet en local :
```bash
docker run --rm -it -v $(pwd):/src -p 1313:1313 gigaboulet
```

#### 3. **Accéder au site**
Ouvrez votre navigateur et accédez à :
[http://localhost:1313](http://localhost:1313)

---

## **Structure des fichiers**

Voici une description des principaux fichiers et dossiers du projet :

| **Chemin**               | **Description**                                                                 |
|--------------------------|-------------------------------------------------------------------------------|
| `Dockerfile`             | Contient les instructions pour construire l'image Docker.                     |
| `hugo.toml`              | Configuration principale de Hugo (langues, menus, paramètres globaux).        |
| `content/`               | Contient le contenu du site (pages, articles, etc.), organisé par langue.     |
| `i18n/`                  | Fichiers de traduction des chaînes statiques pour chaque langue.              |
| `themes/Niello/`         | Fichiers du thème Niello (mise en page, styles, etc.).                        |
| `public/`                | Fichiers générés pour le déploiement (non versionnés).                        |

---

## **Modifier le contenu**

### **Ajouter ou modifier des pages**
- Les pages et articles sont situés dans le dossier `content/`.
- Exemple :
  - `content/fr/example1/example1.md` : Un article en français.
  - `content/en/example1/example1.md` : Le même article en anglais.

### **Traduire les menus ou textes statiques**
- Les traductions sont dans le dossier `i18n/`.
- Exemple :
  - Modifiez `i18n/fr.toml` pour les chaînes en français.
  - Modifiez `i18n/en.toml` pour les chaînes en anglais.

---

## **Déploiement**
- Une fois prêt, générez ou mettez à jour les fichiers pour le déploiement (oublie pas de changer le baseUrl dans `hugo.toml`) avant de les envoyer sur votre serveur :
  ```bash
  docker run --rm -v $(pwd):/src klakegg/hugo:latest --cleanDestinationDir --buildDrafts --buildFuture
  ```
- Les fichiers finaux seront dans le dossier `public/`.
- Envoyez ces fichiers sur votre serveur OVH via FileZilla (banger), un autre client FTP ou SSH (chiantos).

---