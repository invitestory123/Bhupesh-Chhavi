import { Phone } from "lucide-react";
const footerFloral = "https://media.invitestory.in/sage-parchment/src/assets/footer-floral.jpg";
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
      <div aria-hidden className="absolute inset-0 -z-10 bg-parchment/55" />
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

        {"warmRegards" in footer && Array.isArray(footer.warmRegards) && footer.warmRegards.length > 0 && (
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-gold/30 bg-parchment/60 p-5 shadow-sm">
            <p className="text-[0.68rem] tracking-[0.3em] font-medium text-gold uppercase">
              With Warm Regards
            </p>
            <div className="mt-3 space-y-1.5 text-xs text-ink/80">
              {footer.warmRegards.map((item: string, idx: number) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-ink/80">
          {"familyFlowers" in footer && footer.familyFlowers && (
            <div>
              <p className="text-[0.62rem] tracking-[0.25em] text-gold uppercase">Family Flowers</p>
              <p className="mt-1 font-medium">{footer.familyFlowers}</p>
            </div>
          )}

          {"rsvp" in footer && footer.rsvp && (
            <div>
              <p className="text-[0.62rem] tracking-[0.25em] text-gold uppercase">R.S.V.P.</p>
              <p className="mt-1 font-medium">{footer.rsvp}</p>
            </div>
          )}
        </div>

        {"contacts" in footer && Array.isArray(footer.contacts) && footer.contacts.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {footer.contacts.map((c: { phone: string; name: string }) => (
              <a
                key={c.phone}
                href={`tel:${c.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/70 px-5 py-2.5 text-[0.65rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/15 active:scale-95"
              >
                <Phone className="size-3.5 text-gold" aria-hidden />
                {c.name}
              </a>
            ))}
          </div>
        )}

        <p className="mt-10 text-[0.6rem] tracking-[0.32em] text-ink/60 uppercase">
          {couple.hashtag}
        </p>
      </Reveal>
      <a
        href="https://www.instagram.com/invitestory.in/"
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-[10px] uppercase tracking-[0.35em] text-current opacity-70 transition-opacity hover:opacity-100"
      >
        Follow @invitestory.in on Instagram
      </a>
    </footer>
  );
}
