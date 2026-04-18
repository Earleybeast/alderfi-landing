# Deploy Guide — Alderfi Landing Page

> Ship target: **April 20, 2026** (Hiro Finance shutdown day)

---

## Step 1 — Create GitHub repo *(Banshee — HELA-449)*

```bash
gh repo create alderfi/<repo-name> --public --source=finance-landing --push
```

Repo name TBD by Banshee. Code references `https://github.com/alderfi/alderfi` — update line 3 of `src/app/page.tsx` if repo name differs.

---

## Step 2 — Register domain ✳️ *(Steve — HELA-452)*

**Domain:** `alderfi.org` (confirmed 2026-04-18)

Register at Cloudflare Registrar (no markup, easiest DNS management with Vercel).

---

## Step 3 — Create Vercel project *(Steve — HELA-452)*

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `alderfi/<repo-name>` GitHub repo
3. Framework: **Next.js** (auto-detected from `vercel.json`)
4. Environment variables → add:
   ```
   BUTTONDOWN_API_KEY=<value from vault da7074f5-a95e-4424-aaee-e597682c667c>
   ```
5. Deploy

---

## Step 4 — Buttondown waitlist ✳️ *(Steve — HELA-452)*

The Buttondown API key is in vault `da7074f5-a95e-4424-aaee-e597682c667c` (name: `buttondown_api_key`).

- Add to Vercel env vars as `BUTTONDOWN_API_KEY` — **do not hardcode**
- Subscribers tag as `waitlist`; self-hosting checkbox adds `self-hosting` tag
- The subscribe API route degrades gracefully with no key (preview deploys work without it)

---

## Step 5 — Connect custom domain *(Steve — HELA-452)*

In Vercel project → Settings → Domains → add `alderfi.org`.

Point DNS (Cloudflare):
- `A` record: `76.76.21.21` (Vercel)
- `CNAME www`: `cname.vercel-dns.com`

Or use Vercel's nameservers for automatic management.

---

## Step 6 — Enable Vercel Analytics *(Steve — HELA-452)*

In Vercel project → Analytics tab → Enable.
The analytics script at `/_vercel/insights/script.js` is already wired in `layout.tsx`.

---

## Step 7 — All placeholders resolved ✅ (2026-04-18)

- Copy: incorporated (HELA-448 done)
- `PRODUCT_NAME`: `"Alderfi"` ✓
- `DOMAIN`: `"alderfi.org"` ✓
- `GITHUB_URL`: `https://github.com/alderfi/alderfi` ✓ (update if repo name differs)
- `metadataBase`: `https://alderfi.org` ✓
- Zero `{{...}}` placeholders remaining

If repo name differs from `alderfi`, update **one line** in `src/app/page.tsx`:
```ts
const GITHUB_URL = "https://github.com/alderfi/<actual-repo-name>";
```

---

## Step 8 — Hand-off

Post the live URL + screenshot to HELA-410 and tag @Jean.
