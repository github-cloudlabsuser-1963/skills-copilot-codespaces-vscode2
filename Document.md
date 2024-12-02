# Création d'un Réseau Virtuel dans le Portail Azure

## Étapes pour créer un réseau virtuel

1. **Connexion au Portail Azure**
    - Accédez à [portal.azure.com](https://portal.azure.com) et connectez-vous avec vos identifiants.

2. **Accéder à la section Réseaux Virtuels**
    - Dans le menu de gauche, sélectionnez **"Réseaux virtuels"**.

3. **Créer un nouveau Réseau Virtuel**
    - Cliquez sur **"Ajouter"** pour créer un nouveau réseau virtuel.

4. **Configurer les paramètres de base**
    - **Nom** : Entrez un nom pour votre réseau virtuel.
    - **Région** : Sélectionnez la région où vous souhaitez créer le réseau virtuel.
    - **Groupe de ressources** : Sélectionnez un groupe de ressources existant ou créez-en un nouveau.

5. **Configurer les adresses IP**
    - **Espace d'adressage** : Entrez une plage d'adresses IP (par exemple, `10.0.0.0/16`).
    - **Sous-réseaux** : Ajoutez un ou plusieurs sous-réseaux en spécifiant un nom et une plage d'adresses IP pour chaque sous-réseau (par exemple, `10.0.1.0/24`).

6. **Configurer les options de sécurité (facultatif)**
    - Vous pouvez configurer des options supplémentaires telles que les groupes de sécurité réseau (NSG) et les tables de routage.

7. **Revoir et créer**
    - Passez en revue les paramètres que vous avez configurés.
    - Cliquez sur **"Créer"** pour déployer le réseau virtuel.

## Conclusion

Vous avez maintenant créé un réseau virtuel dans le portail Azure. Vous pouvez utiliser ce réseau pour connecter des machines virtuelles et d'autres ressources Azure.
