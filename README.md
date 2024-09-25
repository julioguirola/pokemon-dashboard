# Next.js Setup and Development Process

## Setup Instructions

```bash
  git clone https://github.com/julioguirola/pokemon-dashboard.git

  cd /pokemon-dashboard

  pnpm i

  pnpm run dev

```

Setting the environment variable SESSION_SECRET for hashing userID:

```bash
  openssl rand -base64 32
```


## Development Decisions
- Tailwind configuration: In the Tailwind CSS configuration file (tailwind.config.ts) we set the darkMode property to media so that the website theme matches the user's system theme.
- Component styling: In the shadcdn/UI components configuration file (components.json) we set the cssVariables property to false to use tailwind instead

## Third-Party Libraries
- [REDACTED]: We use the third-party library called jose to implement the authentication system based on Json Web Tokens JWT
