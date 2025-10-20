# Facebook Token Auto-Refresh Setup

Ce système renouvelle automatiquement votre token Facebook (pour Instagram) tous les 50 jours via GitHub Actions.

## 🔧 Configuration Requise

### 1. Variables d'environnement GitHub Secrets

Ajoutez ces secrets dans votre repository GitHub (Settings → Secrets and variables → Actions) :

```
FACEBOOK_APP_ID=votre_app_id_facebook
FACEBOOK_APP_SECRET=votre_app_secret_facebook
FACEBOOK_ACCESS_TOKEN=votre_token_facebook_actuel
NETLIFY_SITE_ID=id_de_votre_site_netlify
NETLIFY_ACCESS_TOKEN=votre_token_netlify
```

### 2. Variables d'environnement Netlify

Dans votre dashboard Netlify (Site settings → Environment variables) :

```
FACEBOOK_ACCESS_TOKEN=votre_token_facebook_actuel
```

## 📋 Comment obtenir les valeurs

### Facebook App ID & Secret

1. Aller sur https://developers.facebook.com/
2. Sélectionner votre app
3. Settings → Basic → App ID et App Secret

### Facebook Access Token

1. Aller sur https://developers.facebook.com/tools/explorer/
2. Sélectionner votre app
3. Générer un token avec permissions Instagram
4. Échanger contre un token longue durée (60 jours)

### Netlify Site ID

1. Aller sur votre dashboard Netlify
2. Site settings → General → Site details → Site ID

### Netlify Access Token

1. Aller sur https://app.netlify.com/user/applications#personal-access-tokens
2. Générer un nouveau token personnel
3. Permissions : Site management

## 🚀 Activation

1. **Push le code** sur GitHub
2. **Ajouter les secrets** GitHub
3. **Vérifier les variables** Netlify
4. **Déclencher manuellement** le workflow pour tester

## 📅 Fonctionnement

- **Automatique** : Tous les 50 jours à minuit UTC
- **Manuel** : Possible via GitHub Actions → Run workflow
- **Logs** : Disponibles dans GitHub Actions
- **Fallback** : Votre site continue de fonctionner même si Instagram échoue

## 🔍 Monitoring

- Vérifiez les logs GitHub Actions pour voir les renouvellements
- Les erreurs sont loggées dans Netlify Functions
- Le site utilise vos news comme fallback si Instagram échoue

## 🛠️ Dépannage

### Token non renouvelé

1. Vérifier les secrets GitHub
2. Vérifier les permissions Netlify
3. Déclencher manuellement le workflow

### Erreurs API

1. Vérifier que votre compte Instagram est Business
2. Vérifier les permissions de l'app Facebook
3. Vérifier que l'app est liée à Instagram

## ✅ Avantages

- **100% automatique** après configuration
- **Gratuit** (GitHub Actions + Netlify)
- **Fiable** (renouvellement préventif)
- **Transparent** (aucune intervention manuelle)
- **Sécurisé** (tokens côté serveur)
