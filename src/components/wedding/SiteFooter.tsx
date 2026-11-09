import { Phone } from "lucide-react";
import footerFloral from "@/assets/footer-floral.jpg";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  const { couple, footer } = invitation;
  const firstName = (couple as { order?: string }).order === "groom-first" ? couple.groomShort : couple.brideShort;
  const secondName = (couple as { order?: string }).order === "groom-first" ? couple.brideShort : couple.groomShort;

  return (
    <footer className="relative isolate overflow-hidden pt-24 pb-12 text-center">
      <img
        src={footerFloral}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={912}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-parchment/85 via-parchment/80 to-parchment/95 backdrop-blur-[1px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-parchment to-transparent"
      />

      <Reveal className="px-6">
        <p className="font-display text-3xl tracking-[0.16em] text-pine uppercase">
          {firstName} <span className="text-gold">&</span> {secondName}
        </p>
        <div className="mx-auto mt-5 w-24 gold-rule" />
        <p className="mt-6 text-sm text-ink/80">{footer.families}</p>

        <div className="mx-auto mt-7 max-w-md rounded-2xl border border-gold/45 bg-parchment/90 p-6 shadow-md backdrop-blur-xs">
          {"warmRegards" in footer && Array.isArray(footer.warmRegards) && footer.warmRegards.length > 0 && (
            <div>
              <p className="text-[0.7rem] tracking-[0.3em] font-semibold text-gold uppercase">
                With Warm Regards
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-ink/90 font-medium">
                {footer.warmRegards.map((item: string, idx: number) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          )}

          {((footer as any).familyFlowers || (footer as any).rsvp) && (
            <>
              <div className="mx-auto my-5 w-24 gold-rule" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {"familyFlowers" in footer && footer.familyFlowers && (
                  <div className="rounded-xl border border-gold/25 bg-parchment-deep/60 p-3">
                    <p className="text-[0.65rem] tracking-[0.25em] font-semibold text-gold uppercase">
                      Family Flowers
                    </p>
                    <p className="mt-1 font-medium text-ink">{footer.familyFlowers}</p>
                  </div>
                )}
                {"rsvp" in footer && footer.rsvp && (
                  <div className="rounded-xl border border-gold/25 bg-parchment-deep/60 p-3">
                    <p className="text-[0.65rem] tracking-[0.25em] font-semibold text-gold uppercase">
                      R.S.V.P.
                    </p>
                    <p className="mt-1 font-medium text-ink">{footer.rsvp}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {"contacts" in footer && Array.isArray(footer.contacts) && footer.contacts.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {footer.contacts.map((c: { phone: string; name: string }) => (
              <a
                key={c.phone}
                href={`tel:${c.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/90 px-5 py-2.5 text-[0.65rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/15 active:scale-95 shadow-xs"
              >
                <Phone className="size-3.5 text-gold" aria-hidden />
                {c.name}
              </a>
            ))}
          </div>
        )}

        <div className="mt-8">
          <span className="inline-block rounded-full border border-gold/50 bg-parchment/90 px-6 py-2 text-xs tracking-[0.28em] font-medium text-pine uppercase shadow-xs">
            {couple.hashtag}
          </span>
        </div>
      </Reveal>
      <a
        href="https://www.instagram.com/invitestory.in/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block text-[11px] uppercase tracking-[0.3em] font-medium text-ink/75 transition-colors hover:text-ink"
      >
        Follow @invitestory.in on Instagram
      </a>
    </footer>
  );
}
