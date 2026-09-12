# Portfolio professionnel - Mubaraka Gembesse C'arrive

Site web personnel moderne servant de CV en ligne, portfolio développeur et vitrine professionnelle.

Le site met en avant le profil **Software Developer / Backend Developer / Python & Django Developer** avec des pages dédiées au parcours, aux compétences, aux projets, aux services, au CV et au contact.

## Technologies

- Next.js 15+
- React
- TypeScript strict
- Tailwind CSS
- App Router
- Firebase Hosting
- Firebase Firestore pour le formulaire de contact
- Firebase Analytics si la configuration est disponible
- Lucide Icons
- ESLint

## Installation

```bash
npm install
npm run dev
```

Le site sera disponible par défaut sur :

```bash
http://localhost:3000
```

## Variables d'environnement

Copier le fichier d'exemple :

```bash
cp .env.local.example .env.local
```

Puis renseigner les valeurs Firebase :

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Aucun secret ne doit être placé dans le frontend.

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

La configuration `output: "export"` génère un site statique dans le dossier `out`, compatible avec Firebase Hosting.

## Déploiement Firebase

Installer Firebase CLI si nécessaire :

```bash
npm install -g firebase-tools
```

Se connecter :

```bash
firebase login
```

Associer le bon projet Firebase dans `.firebaserc`, puis construire et déployer :

```bash
npm run build
firebase deploy
```

## Formulaire de contact

Le formulaire peut enregistrer les messages dans Firestore dans la collection :

```text
contactMessages/
```

Chaque message suit cette structure :

```ts
{
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: timestamp;
}
```

Si Firebase n'est pas configuré, le formulaire reste fonctionnel côté interface et affiche un message indiquant que la configuration est à compléter.

## Contenu modifiable

Les informations personnelles se trouvent dans :

```text
src/config/profile.ts
```

Les données éditables sont dans :

```text
src/data/education.ts
src/data/experience.ts
src/data/projects.ts
src/data/services.ts
src/data/skills.ts
```

Le CV PDF attendu est :

```text
public/cv/mubaraka-gembesse-carrive-cv.pdf
```

La photo professionnelle peut être ajoutée plus tard ici :

```text
public/images/profile.jpg
```

## Structure

```text
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── education/
│   ├── experience/
│   ├── projects/
│   ├── resume/
│   ├── services/
│   ├── skills/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/
│   ├── contact/
│   ├── home/
│   ├── layout/
│   ├── projects/
│   ├── skills/
│   └── ui/
├── config/
├── data/
├── lib/
└── types/
```

## SEO

Le projet inclut :

- Metadata API de Next.js
- Open Graph
- Twitter Cards
- URL canonique
- `sitemap.xml`
- `robots.txt`
- favicon SVG
- JSON-LD `Person`

## Pages

- `/`
- `/about`
- `/skills`
- `/experience`
- `/education`
- `/projects`
- `/services`
- `/contact`
- `/resume`
