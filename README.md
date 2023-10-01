This is a [Next.js](https://nextjs.org/) API bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and using the OpenAI API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Endpoints
 - ```http://localhost:3000/copywriter``` POST enpoint that uses AI to write advertisements
 - ```http://localhost:3000/discord-bio``` POST enpoint that uses AI to write discord bios
 - ```http://localhost:3000/email-writer``` POST enpoint that uses AI to write emails
 - ```http://localhost:3000/summarizer``` POST enpoint that uses AI to write summaries of passages
 Input data format: ```{"prompt": "Your prompt"}```