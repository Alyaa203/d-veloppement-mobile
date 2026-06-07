## ✦ Tests utilisateurs de DisneyBattle™
### 💡 Protocole
Chaque test utilisateur a été mené comme suit :
- Présentation du contexte
- Explication de la logique de jeu
- Tests mené sur le téléphone de l'utilisateur, à partir de l'URL suivant :
> https://smash-princes.netlify.app
- Une partie jouée en entier, avec la méthode Think Aloud (on demande aux utilisateurs de nous faire des commentaires en temps réel)
- Entretien post-test afin de recueillir les verbatims et les retours des utilisateurs

### ✍️ Retours des tests utilisateurs
Score de satisfaction avant modifications : 3.4/5
Score de satisfaction après modifications : 4/5
Nombre de tests passés : 6
(D'après <a href = https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/> Nielsen (2000)</a>, 5 utilisateurs est un bon compromis coût / efficacité).

#### Retours principaux :
- Homogénéité du vocabulaire :
    - 2 utilisateurs ont relevé un manque de cohérence dans le vocabulaire utilisé (ex. "tour adversaire" vs "tour adverse")
- Lisibilité de l'application :
    - Difficultés à identifier à qui est le tour de jouer, notamment sur mobile
- Jouabilité :
    _=> Le jeu est fonctionnel, mais nécessite quelques améliorations :_
    - Frustration de n'avoir accès qu'aux 100 premiers personnages appelés par l'API Disney
    - Difficultés de savoir à qui est le tour de jouer
    - Déséquilibre marqué entre les cartes, jugées "cheatées" par plusieurs utilisateurs
    - Logique des PV questionnée : 5 PV jugés trop peu, et la perte systématique d'1 PV (que ce soit en bloquant ou en encaissant) a poussé les utilisateurs à encaisser par défaut pour préserver leurs cartes sur le terrain
- Utilisabilité :
    - Bonne réception de la surbrillance lors de la sélection d'une carte, jugée plus claire qu'une case à cocher

#### Changements effectués :
- Changement de "tour adversaire" en "tour adverse"
- Mise en évidence visuelle du terrain du joueur actif (fond coloré selon le tour)

#### Recommandations :
- Revoir la logique des PV : augmenter le nombre de PV de départ et/ou introduire un calcul de dégâts basé sur les stats des cartes, pour rendre la défense plus stratégique que l'encaissement systématique
- Rééquilibrer les cartes ou introduire un système de rareté pour limiter les écarts de puissance entre personnages

#### Verbatims :
> "Ah mais il y a des cartes qui sont trop cheatés"  
> "C'est difficile de savoir à qui c'est de jouer"  
> "Sur téléphone ça fonctionnait bien"  
> "Les persos sont pas du tout optimisés"  
> "J'aime bien la surbrillance quand on sélectionne la carte. Je préfère ça à des cases cochées, c'est plus clair."  
> "Mais pourquoi on a que 5 PV ?"  
> "Au final j'encaissais tout le temps, ça coûtait pareil que de bloquer"