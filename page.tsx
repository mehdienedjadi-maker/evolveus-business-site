import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Section id="solutions" title="Des solutions simples qui donnent envie d’agir">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Scheduler", "Rendez-vous fluides, rappels automatiques, synchro Google/Microsoft."],
            ["Coach", "Parcours mental & physique gamifiés, feedback positif, playlists focus/réveil."],
            ["Commerce", "Boutique bien-être avec produits clean, paniers subventionnés."],
            ["Analytics", "Engagement anonymisé, tendances, objectifs d’équipe (RGPD)."],
            ["Content Studio", "Vidéos courtes, audios vibes, articles et séries thématiques."],
            ["Éditions", "Littéraire, Philosophie, Enfant, Business."]
          ].map(([t, d]) => (
            <div key={t} className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-mint to-sky mb-4" />
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-black/70">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="lifestyle" title="Lifestyle & Éditions">
        <div className="rounded-2xl p-8 bg-white border border-black/5 shadow-sm">
          <p className="text-black/80">
            Une marque à vivre : produits clean, transparents et sains,
            et une maison d’édition intergénérationnelle (Littéraire, Philosophie, Enfant, Business).
          </p>
        </div>
      </Section>

      <Section id="pricing" title="Tarifs simples, options puissantes">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Starter", "Pour petites équipes", "9€ / siège / mois"],
            ["Growth", "PME & écoles", "19€ / siège / mois"],
            ["Enterprise", "Grandes organisations", "39€ / siège / mois"]
          ].map(([t, s, p], i) => (
            <div key={t} className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-1 text-black/60">{s}</p>
              <div className="mt-4 text-2xl font-semibold">{p}</div>
              <ul className="mt-4 text-sm text-black/70 list-disc list-inside space-y-1">
                {i===0 && <>
                  <li>Scheduler, CRM-Lite, Analytics basique</li>
                  <li>Support communauté</li>
                </>}
                {i===1 && <>
                  <li>+ Défis d’équipe, Commerce, Analytics avancé</li>
                  <li>Support 8×5</li>
                </>}
                {i===2 && <>
                  <li>+ SSO, intégrations avancées, DPA dédié</li>
                  <li>Support 24×5 (option 24×7)</li>
                </>}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="demo" title="Prêts à faire rayonner vos équipes ?">
        <div className="rounded-2xl p-8 bg-white border border-black/5 shadow-sm">
          <p className="text-black/80">
            Réservez votre démo express (30 min). Nous vous montrons comment démarrer en une semaine.
          </p>
          <div className="mt-6">
            {/* Intégration Calendly/outil de booking */}
            <iframe
              title="Prendre rendez-vous"
              src="https://calendly.com/"
              className="w-full h-[680px] rounded-2xl border border-black/5"
            />
          </div>
        </div>
      </Section>

      <footer className="mt-12 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60">
          © {new Date().getFullYear()} Evolve’Us — RGPD • Sécurité • Mentions légales
        </div>
      </footer>
    </>
  );
}
