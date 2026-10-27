"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
            Ebook premium disponible
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Vendé tu ebook con una landing
            <span className="block text-cyan-300">moderna y persuasiva</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
            Captá atención, generá deseo y llevá al usuario a comprar con una
            experiencia visual impactante y profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#comprar"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 font-bold px-7 py-4 hover:scale-[1.02] transition"
            >
              Comprar ahora
            </a>

            <a
              href="#beneficios"
              className="inline-flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-7 py-4 font-semibold hover:bg-white/10 transition"
            >
              Ver beneficios
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>✔ Descarga inmediata</span>
            <span>✔ Pago seguro</span>
            <span>✔ Acceso multiplataforma</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            <div className="aspect-[4/5] rounded-[24px] bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 p-[1px]">
              <div className="w-full h-full rounded-[24px] bg-slate-950 flex flex-col items-center justify-center text-center p-8">
                <p className="uppercase tracking-[0.3em] text-xs text-slate-400 mb-3">
                  Vendé sin vueltas
                </p>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Lográ resultados reales
                </h3>

                <p className="text-slate-400 mb-8">
                  Una guía práctica, moderna y orientada a la acción. <br /> Resultados en pocas semanas.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full max-w-xs">
                  <div className="text-slate-400 line-through text-lg">\$29.999 ARS</div>
                  <div className="text-4xl font-black text-cyan-300">\$9.999 ARS</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Oferta de lanzamiento
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-sm backdrop-blur-md">
            + lectores interesados
          </div>
        </motion.div>
      </div>
    </section>
  );
}