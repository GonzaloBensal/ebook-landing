"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="comprar" className="px-6 py-24">
      <div className="max-w-4xl mx-auto rounded-[36px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 p-[1px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="rounded-[36px] bg-slate-950/95 p-8 md:p-12 text-center"
        >
          <p className="text-cyan-300 font-semibold mb-3">Oferta especial</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Empezá hoy mismo
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Accedé al ebook ahora y ofrecé una experiencia de compra simple, segura y visualmente impactante.
          </p>

          <div className="inline-block bg-white/5 border border-white/10 rounded-3xl px-8 py-6 mb-8">
            <div className="line-through text-slate-500 text-xl">\$29.999 ARS</div>
            <div className="text-5xl md:text-6xl font-black text-cyan-300">\$9.999</div>
            <div className="text-slate-400 mt-2">Pago único · Acceso inmediato</div>
          </div>

          <div>
            <a
              href="TU_LINK_DE_PAGO_AQUI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 text-slate-950 font-black px-8 py-5 text-lg hover:scale-[1.03] transition"
            >
              Comprar con Mercado Pago
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-5">
            Pago seguro con Mercado Pago Argentina
          </p>
        </motion.div>
      </div>
    </section>
  );
}