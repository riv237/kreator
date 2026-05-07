# PRD : KREATOR - Marketplace d'Influenceurs (V1 France)

## 1. Identite de Marque

- **Nom** : KREATOR
- **Positionnement** : Marketplace de confiance (Escrow) pour videos UGC et promos.
- **Langue** : Francais.
- **Plateformes** : iOS & Android.

## 2. Flux de Paiement Escrow

Le systeme garantit que l'argent ne quitte la plateforme que si le travail est fait :

1. **Commande** : Le client paie en Euros via Stripe. L'argent est mis sous sequestre.
2. **Statut Provisionne** : L'influenceur voit que l'argent est bloque et commence la video.
3. **Livraison** : L'influenceur upload la video sur KREATOR.
4. **Liberation** : Le client valide. L'argent est transfere sur le portefeuille de l'influenceur.

## 3. Stack Technique

- **Frontend** : Expo (React Native) + Expo Router.
- **Style** : NativeWind (Tailwind CSS).
- **Backend** : Supabase (Auth, DB, Storage).
- **Finance** : Stripe Connect.

## 4. Architecture Dossiers

- `app/(tabs)/index.tsx` : Page Explorer (Annuaire).
- `app/(tabs)/missions.tsx` : Liste des contrats en cours.
- `app/(tabs)/wallet.tsx` : Gains et retraits.
- `app/(tabs)/profile.tsx` : Parametres et bio.
- `app/chat/[id].tsx` : Messagerie et upload video.
