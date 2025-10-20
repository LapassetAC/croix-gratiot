# 🔄 Système de Renouvellement de Token Facebook

## 📋 Vue d'Ensemble

Ce système utilise des fonctions Netlify pour gérer le renouvellement automatique du token Facebook, plus simple et plus fiable que GitHub Actions.

## 🚀 Fonctions Disponibles

### 1. `refresh-token.js`

- **URL** : `/.netlify/functions/refresh-token`
- **Usage** : Renouvellement manuel du token
- **Méthode** : GET ou POST

### 2. `auto-refresh-token.js`

- **URL** : `/.netlify/functions/auto-refresh-token`
- **Usage** : Renouvellement automatique via webhook
- **Authentification** : Bearer token (optionnel)

## 🔧 Configuration

### Variables d'Environnement Netlify

```
FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret
FACEBOOK_ACCESS_TOKEN=your_current_token
WEBHOOK_SECRET=your_webhook_secret (optionnel)
```

## 📱 Utilisation

### Renouvellement Manuel

```bash
curl https://your-site.netlify.app/.netlify/functions/refresh-token
```

**Réponse** :

```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "expiresIn": 60,
  "newToken": "new_token_here"
}
```

### Renouvellement Automatique

```bash
curl -X POST https://your-site.netlify.app/.netlify/functions/auto-refresh-token \
  -H "Authorization: Bearer your-webhook-secret"
```

## 🔄 Automatisation

### Option 1: Cron Job Externe

Utilisez un service comme cron-job.org pour appeler la fonction automatiquement.

### Option 2: Uptime Monitor

Configurez un service de monitoring qui appelle la fonction périodiquement.

## 📋 Étapes de Mise à Jour

1. **Appelez la fonction** de renouvellement
2. **Récupérez le nouveau token** de la réponse
3. **Mettez à jour** `FACEBOOK_ACCESS_TOKEN` sur Netlify
4. **Redéployez** le site (optionnel)

## 🎯 Avantages

- ✅ **Plus simple** que GitHub Actions
- ✅ **Pas d'API externe** problématique
- ✅ **Test facile** via URL directe
- ✅ **Maintenance** plus simple
- ✅ **Moins de points de défaillance**

## 🚨 Important

Après chaque renouvellement, vous devez **manuellement mettre à jour** la variable d'environnement `FACEBOOK_ACCESS_TOKEN` sur Netlify avec le nouveau token retourné.
