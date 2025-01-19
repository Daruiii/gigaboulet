# Utiliser l'image officielle de Hugo
FROM klakegg/hugo:latest

# Définir le répertoire de travail
WORKDIR /src

# Exposer le port 1313 pour le serveur local
EXPOSE 1313

# Commande par défaut pour lancer le serveur Hugo
CMD ["server", "--bind=0.0.0.0", "--baseURL=http://localhost:1313", "--buildDrafts", "--buildFuture"]
