# Deploy Guide — OpenFinance Landing Page

> Ship target: **April 20, 2026** (Hiro Finance shutdown day)

---

## Step 1 — Create GitHub repo

```bash
gh repo create helptech/openfinance-landing --private --source=. --push
```

Coordinate with Banshee on the exact repo name (domain must match).

---

## Step 2 — Register domain (~$15/yr)

Suggested names (first available .com preferred):
- `openfinance.dev`
- `getledger.ai`
- `selfledger.com`
- `localfin.dev`

Register at Namecheap or Cloudflare Registrar (Cloudflare has no markup, easiest to set up with Vercel).

---

## Step 3 — Create Vercel project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repo
3. Framework: **Next.js** (auto-detected from `vercel.json`)
4. Environment variables → add:
   ```
   BUTTONDOWN_API_KEY=<your-key>
   ```
5. Deploy

---

## Step 4 — Set up Buttondown waitlist

1. Create free account at [buttondown.email](https://buttondown.email)
2. Settings → API → copy API key
3. Add to Vercel env vars as `BUTTONDOWN_API_KEY`
4. Subscribers will appear at buttondown.email/subscribers tagged `waitlist`

---

## Step 5 — Connect custom domain

In Vercel project → Settings → Domains → add your domain.
Point DNS:
- `A` record → `76.76.21.21` (Vercel)
- Or use Vercel's nameservers for automatic management

---

## Step 6 — Enable Vercel Analytics

In Vercel project → Analytics tab → Enable.
The analytics script at `/_vercel/insights/script.js` is already wired in via `layout.tsx`.

---

## Step 7 — Swap in real copy ✅ DONE (2026-04-16)

HELA-448 copy has been incorporated. The one remaining swap is the product name:

- `PRODUCT_NAME` in `src/app/page.tsx` (line 8)
- Three metadata strings in `src/app/layout.tsx`

When HELA-449 (Banshee) picks the name, find `{{PROJECT_NAME}}` and replace with the final name. Also update `GITHUB_ORG` and `DOMAIN` in `page.tsx`.

---

## Step 8 — Hand-off

Post the live URL + screenshot to HELA-410 and tag @Jean.
