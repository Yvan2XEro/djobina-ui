# Document de Synthèse – Version 1 (Complet + Wireframes Textuels)

## 1. Vision Globale

La plateforme est un écosystème de services reliant **clients**, **prestataires**, **centres de formation** et **admins**. L’application mobile constitue le cœur du projet (70%+ des utilisateurs), avec une extension web pour la gestion des centres et de l’administration.

## 2. Wireframes Textuels (Mobile)

### 2.1. Écran d’Accueil (OTP Login)

**Sections :**

* Logo + Nom Application.
* Champ téléphone.
* Bouton « Recevoir code OTP ».
* Champ code OTP (apparition après envoi).
* Bouton « Se connecter ».

**CTA :**

* « Recevoir OTP ».
* « Se connecter ».

**États/Erreurs :**

* Téléphone invalide → message « Numéro non reconnu ».
* OTP expiré → message « Code expiré, renvoyez un nouveau code ».

---

### 2.2. Tableau de Bord (Client)

**Sections :**

* Barre supérieure : photo profil, solde éventuel, bouton « Notifications ».
* Bouton « Créer une annonce » (CTA principal).
* Liste des missions en cours (carte + statut).
* Onglet navigation : Accueil | Réseau | Historique | Profil.

**CTA :**

* « Créer une annonce ».
* « Voir détails mission ».

**États/Erreurs :**

* Aucune mission → message « Vous n’avez pas de mission en cours ».

---

### 2.3. Création d’Annonce (Client)

**Sections :**

* Choix catégorie (liste fixe).
* Description tâche (champ texte).
* Durée/Type (horaire ou forfait).
* Adresse + GPS map (auto-géolocalisation + possibilité de corriger).
* Bouton « Publier ».

**CTA :**

* « Publier ».
* « Annuler ».

**États/Erreurs :**

* Catégorie manquante → « Veuillez sélectionner une catégorie ».
* Adresse non valide → « Localisation nécessaire ».

---

### 2.4. Fenêtre Veto (Client)

**Sections :**

* Carte (pin prestataire, ETA en minutes).
* Fiche prestataire : photo, note moyenne, badges, centre affilié, nombre missions.
* Timer compte à rebours (ex : 30 secondes).
* Boutons : « Accepter », « Refuser ».

**CTA :**

* « Accepter ».
* « Refuser » (avec motif obligatoire après X abus).

**États/Erreurs :**

* Timeout → mission automatiquement confirmée.

---

### 2.5. Suivi Mission (Client)

**Sections :**

* Carte temps réel (position prestataire + ETA).
* Timeline mission : En route → Arrivé → En cours → Terminé.
* Boutons secondaires : « Contacter » (appeler/message masqué), « Problème » (litige).
* Bouton fin de mission : « Confirmer fin ».

**CTA :**

* « Problème ».
* « Confirmer fin ».

**États/Erreurs :**

* Perte connexion GPS → « Signal perdu, tentative de reconnexion ».

---

### 2.6. Notation & Litige (Client)

**Sections :**

* Note 1 à 5 étoiles.
* Commentaire optionnel.
* Bouton « Envoyer ».
* Option « Signaler un problème ».

**CTA :**

* « Envoyer ».
* « Signaler problème ».

**États/Erreurs :**

* Note non sélectionnée → « Veuillez donner une note ».

---

### 2.7. Ordre de Mission (Prestataire)

**Sections :**

* Détails mission (catégorie, description, durée).
* Carte (adresse client, itinéraire proposé).
* Timer compte à rebours (ex : 30 secondes).
* Boutons : « Accepter » / « Refuser ».

**CTA :**

* « Accepter ».
* « Refuser » (motif conseillé).

**États/Erreurs :**

* Timeout → mission redispatchée.

---

### 2.8. Suivi Mission (Prestataire)

**Sections :**

* Carte navigation (itinéraire).
* Statut : En route → Arrivé → En cours → Terminé.
* Bouton « Démarrer » (lors d’arrivée), « Terminer » (fin de tâche).
* Bouton « Contacter client ».

**CTA :**

* « Démarrer ».
* « Terminer ».

**États/Erreurs :**

* GPS désactivé → « Activez le GPS pour continuer ».

---

### 2.9. Tableau de Bord (Prestataire)

**Sections :**

* Solde crédits.
* Switch Disponibilité : ON/OFF.
* Liste missions récentes.
* Onglets navigation : Missions | Réseau | Historique | Profil.

**CTA :**

* « Recharger crédits ».
* « Voir réseau ».

**États/Erreurs :**

* Solde insuffisant → « Rechargez vos crédits pour recevoir des missions ».

---

### 2.10. Recharge Crédits (Prestataire)

**Sections :**

* Montant à recharger (pré-configuré ou libre).
* Méthode paiement (OM/MoMo).
* Confirmation transaction.

**CTA :**

* « Recharger ».

**États/Erreurs :**

* Paiement échoué → « Transaction non validée, réessayez ».

---

### 2.11. Réseau (MLM 2G)

**Sections :**

* Arborescence graphique (utilisateur au centre, deux niveaux enfants).
* Indicateurs : nombre membres, gains potentiels.

**CTA :**

* « Inviter ».
* « Voir détails membre ».

**États/Erreurs :**

* Aucun membre → « Votre réseau est vide pour l’instant ».

---

### 2.12. Profil Utilisateur

**Sections :**

* Photo, nom, numéro, centre affilié.
* Badges + réputation.
* Historique missions (clients ou prestataires).
* Paramètres (langue FR/EN, dark mode, support).

**CTA :**

* « Modifier profil ».
* « Changer langue ».
* « Aide & Support ».

**États/Erreurs :**

* Connexion perdue → « Certaines données ne sont pas à jour ».

---

## 3. Conclusion

Ce wireframe textuel décrit les **écrans essentiels, leurs sections, CTA, états d’erreurs** et les parcours critiques (client, prestataire). Il donne une base claire pour la création des maquettes UI (mobile-first) et garantit que les fonctionnalités MVP soient couvertes sans ambiguïté.

---

## 15. Wireframes Textuels (Mobile) – Écran par écran

> **Convention** :
>
> * **CTA primaire** en MAJUSCULES ; secondaire en *italique* ; lien en ~~tilde~~.
> * États : **Default**, **Empty**, **Loading**, **Error**, **Edge cases**.
> * Les modules « Carte/ETA » impliquent GPS activé et permissions gérées.

### 15.1. Onboarding & Auth OTP

**But** : accès rapide sans mot de passe.

* **Sections** :

  1. Splash (logo, baseline), 2) Écran numéro de téléphone, 3) Écran OTP, 4) Permissions (Notifications, Localisation).
* **CTAs** :

  * Écran téléphone : **CONTINUER** ; ~~Conditions & Confidentialité~~
  * Écran OTP : **VALIDER** ; *Renvoyer code (00:30)* ; ~~Changer de numéro~~
* **États** :

  * Default : champs actifs ; Loading : spinner lors de l’envoi/validation OTP ; Error : « Code invalide / expiré », ~~Renvoyer~~ ; Edge : refus de notifications/localisation → modale d’explication + **AUTORISER** / *Plus tard*.

### 15.2. Sélecteur de Rôle / Accueil unifié

**But** : une app, deux rôles.

* **Sections** : header (salut), toggle « Client | Prestataire », cartes d’accès rapide (Créer annonce / Activer disponibilité / Recharger crédits / Historique), bandeau solde crédits, bannière d’info système.
* **CTAs** : **CRÉER ANNONCE** (client) ; **ACTIVER DISPONIBILITÉ** (prestataire) ; *Recharger crédits* ; *Historique* ; ~~Voir réseau 2G~~
* **États** : Empty (aucune annonce/mission) → tutoriel pas à pas ; Error (réseau) → ~~Réessayer~~.

### 15.3. Création d’Annonce (Client)

**But** : décrire la tâche et déclencher le dispatch.

* **Sections** : Catégorie (liste prédéfinie + recherche), Description, Photos (optionnel), Adresse (map + pin), Date/heure (optionnel immédiat), Durée / Tarif (fixe ou horaire), Récap.
* **CTAs** : **PUBLIER & DISPATCH** ; *Enregistrer brouillon*.
* **Validations** : catégorie, description min 20 caractères, adresse valide ; erreurs inline.
* **États** : Loading (calcul estimation) ; Error (adresse introuvable) ; Edge : zone non couverte → message + *Suggérer catégorie / zone*.

### 15.4. Écran Dispatch / Veto (Client)

**But** : montrer le prestataire assigné et permettre veto.

* **Sections** : Carte plein écran (trajet, ETA), Fiche prestataire (photo, badge, centre, note, #missions), Timer (compte à rebours), motif de refus (liste + champ libre), sécurité (numéro masqué).
* **CTAs** : **ACCEPTER** ; *REFUSER (motif)*.
* **États** : Default (timer 00:30 configurable) ; Loading (re-dispatch) ; Error (plus de prestataires) → proposition replanification ; Edge : client inactif → auto-accept ; client veto répété → avertissement anti-abus.

### 15.5. Suivi Temps Réel (Client)

**But** : transparence & contrôle.

* **Sections** : Carte/ETA, Timeline (en route/arrivé/en cours/terminé), Fiche prestataire compacte, Actions (Appeler / Message), Bouton « Problème » (litige), Détails tâche.
* **CTAs** : **CONFIRMER FIN** ; *PROBLÈME* ; *ANNULER* (règles d’annulation, si permises).
* **États** : GPS off → modale ; réseau instable → mode dégradé (rafraîchir) ; Edge : retard > X min → bouton *Signaler retard*.

### 15.6. Validation & Notation (Client)

**But** : clôture et feedback.

* **Sections** : Star rating (1–5), tags qualité (Ponctualité, Qualité, Communication), commentaire, option « Ajouter à favoris ».
* **CTAs** : **ENVOYER L’AVIS** ; *SIGNALER UN PROBLÈME*.
* **États** : Error (soumission) → ~~Réessayer~~ ; Edge : note <3 → invite à détailler.

### 15.7. Signalement / Litige (Client)

**But** : ouvrir un cas vers le centre.

* **Sections** : Motif (liste : non venu, mal fait, attitude, autre), description, pièces jointes (photos), timeline prévisionnelle.
* **CTAs** : **OUVRIR LITIGE** ; *Ajouter pièce*.
* **États** : Default ; Loading ; Confirmation (numéro de dossier) ; Error ; Edge : multi-signalements → agrégation.

### 15.8. Ordre de Mission (Prestataire)

**But** : accepter/refuser avec info complète.

* **Sections** : Titre (Catégorie), Détails (description, durée), Carte + adresse, Client masqué (si applicable), Timer, Motif de refus.
* **CTAs** : **ACCEPTER** ; *REFUSER (motif)* ; *NAVIGUER* (après acceptation).
* **États** : Timeout → auto-refus ; crédits insuffisants → modale **RECHARGER** ; GPS off → **ACTIVER GPS**.

### 15.9. Navigation & Exécution (Prestataire)

**But** : guider et capturer l’avancement.

* **Sections** : Bouton *NAVIGUER* (Maps), Timeline (En route/Arrivé/En cours/Terminé), bouton *Appeler/Message*, prise de photos « avant/après » (optionnel), note interne.
* **CTAs** : **MARQUER ARRIVÉ** ; **DÉMARRER** ; **TERMINER**.
* **États** : réseau faible → stockage local + sync ; Edge : impossibilité d’exécuter → *Signaler impossibilité* (motif + photo).

### 15.10. Recharge Crédits (Prestataire)

**But** : payer la plateforme pour rester éligible.

* **Sections** : Solde, Packs (X FCFA → Y missions), Historique, Méthodes (Orange Money, MoMo), Alerte « seuil bas ».
* **CTAs** : **ACHETER UN PACK** ; *Ajouter méthode* ; ~~FAQ Tarification~~.
* **États** : Loading paiement ; Error (échec MoMo) ; Edge : double paiement détecté → remboursement automatique.

### 15.11. Switch Disponibilité (Prestataire)

**But** : signaler écoute.

* **Sections** : Toggle « Disponible », plage horaire (optionnel), statut réseau/GPS, rappel règles anti-refus.
* **CTAs** : **ACTIVER** / **DÉSACTIVER** ; *Voir règles*.
* **États** : crédits insuffisants → blocage + **RECHARGER** ; GPS off → **ACTIVER GPS**.

### 15.12. Profil Prestataire (Public côté Client)

**But** : aider au veto.

* **Sections** : Photo, Nom, Badges, Centre affilié, Note moyenne, #missions, Avis récents, Zone de couverture.
* **CTAs** : *Voir plus d’avis* ; ~~Signaler profil~~.
* **États** : Empty (pas d’avis) → message pédagogique.

### 15.13. Réseau (MLM 2G)

**But** : transparence réseau simple.

* **Sections** : Arborescence 2G (zoom/pan), compteurs (membres N1/N2), estimations de gains (si applicable), liens d’invitation.
* **CTAs** : **INVITER** ; *Copier lien* ; ~~Règles programme~~.
* **États** : Empty → tutoriel « Comment inviter » ; Edge : abus d’invitations → limite/journal.

### 15.14. Historique & Détails Mission

**But** : traçabilité.

* **Sections** : Liste (filtres : statut, dates), cartes mission, détail (chronologie, paiements/estimation, avis, pièces jointes).
* **CTAs** : *Exporter PDF* (V1.1) ; ~~Ouvrir litige~~ (si dans délai).
* **États** : Empty ; Error réseau.

### 15.15. Notifications Inbox

**But** : centraliser tout.

* **Sections** : Tabs (Système, Missions, Litiges), items avec icône + horodatage, action swipe (marquer lu).
* **CTAs** : *Tout marquer comme lu*.
* **États** : Empty pédagogique.

### 15.16. Paramètres

**But** : préférences & conformité.

* **Sections** : Compte (téléphone, langue FR/EN), Notifications (types), Confidentialité (masquage), Sécurité, Aide/FAQ, À propos.
* **CTAs** : *Changer langue* ; *Centre d’aide*.
* **États** : Edge : changement langue → redémarrage UI.

---

## 16. Wireframes Textuels (Web) – Centres & Super-Admin (extrait)

### 16.1. Portail Centre

* **Tableau de bord** : demandes de badge en attente, litiges ouverts, stats.
* **Dossiers Formation** : liste candidats, statut (inscrit/testé/validé), **VALIDER BADGE**.
* **Litiges** : vue dossier, pièces, **RENDRE DÉCISION** (sanction/mesure corrective).

### 16.2. Portail Super-Admin

* **Règles dispatch & anti-abus** : timers, seuils refus, pondération réputation.
* **Catégories/Services** : CRUD, zones couvertes.
* **Modération** : alertes fraude, suspensions.

---

## 17. États d’Erreur & Messages Système (catalogue)

* Auth : « Code OTP invalide/expiré », « Trop de tentatives ».
* Réseau : « Connexion instable, réessayer ».
* GPS : « Localisation requise pour le dispatch ».
* Paiement : « Échec paiement MoMo/OM, vérifiez solde ».
* Dispatch : « Aucun prestataire disponible, replanifier ? ».
* Anti-abus : « Trop de refus successifs, votre compte est temporairement limité ».

---

## 18. Checklist pour la Maquette (Designer)

* Respecter les **CTA primaires** et leurs priorités.
* Afficher clairement **timer** sur veto & ordre de mission.
* Carte/ETA intégrée et lisible en light/dark.
* États **Empty/Loading/Error** conçus (pas d’écrans blancs).
* Accessibilité : tailles de police, contrastes, touch targets.
* Multilingue FR/EN (longueur des labels).

---

## 19. Clôture

Ces wireframes textuels servent de **spécification d’écran** pour la V1 mobile. Ils guident la hiérarchisation des informations, les actions clés et les états d’interface afin que la maquette puisse être produite rapidement et sans ambiguïté.
