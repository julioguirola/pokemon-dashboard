# Next.js Pokemon Dashboard

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

  ## Copy the output
  ## Create an .env file
  ## In the .env file:
  ## SESSION_SECRET=[output]
```


## Development Decisions
- Tailwind configuration: In the Tailwind CSS configuration file (tailwind.config.ts) we set the darkMode property to media so that the website theme matches the user's system theme.
- Component styling: In the shadcdn/UI components configuration file (components.json) we set the cssVariables property to false to use tailwind instead
- Next/Image Config: In (next.config.ts) we setup a config to allow fetching images from the poke api
- Post Css Config: We added tailwind autoprefixer plugin

## Third-Party Libraries
- We use the third-party library called jose to implement the authentication system based on Json Web Tokens JWT
- We use the third-party library autoprefixer to add vendor prefixes to display information well in all browsers
