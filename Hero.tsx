"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-fog to-white" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-mint to-sky blur-3xl opacity-30" />
      <div className="mx-auto max-w-6xl px-4 py-24">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold leading-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          La suite logicielle & lifestyle
          <br />pour le bien-être en entreprise.
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl text-black/70 max-w-2xl">
          Bien-être mesurable. Produits clean. Défis solidaires.
          <span className="whitespace-nowrap"> Technologie qu’on aime.</span>
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a href="#demo" className="px-5 py-3 rounded-xl bg-mint text-deep font-medium hover:opacity-90">Demander une démo</a>
          <a href="#solutions" className="px-5 py-3 rounded-xl border border-deep/10 hover:bg-fog">Découvrir les solutions</a>
        </div>
        <div className="mt-10 text-sm text-black/60">
          Clean & transparent • Intergénérationnel • RGPD by design
        </div>
      </div>
    </section>
  );
}
