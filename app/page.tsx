"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
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
                    Nombre de tu ebook
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Tu método para lograr resultados reales
                  </h3>

                  <p className="text-slate-400 mb-8">
                    Una guía práctica, moderna y orientada a la acción.
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

      <section id="beneficios" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Diseñado para vender más
            </h2>
            <p className="text-slate-400 text-lg">
              Una landing con estructura optimizada para atraer, convencer y convertir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Impacto visual",
                text: "Un diseño premium que mejora la percepción de valor de tu ebook."
              },
              {
                title: "Más conversión",
                text: "Secciones orientadas a destacar beneficios y reducir objeciones."
              },
              {
                title: "Experiencia moderna",
                text: "Animaciones suaves y una estética actual que llama la atención."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl"
          >
            <p className="text-cyan-300 font-semibold mb-3">¿Qué incluye?</p>
            <h2 className="text-4xl font-black mb-6">
              Un contenido pensado para llevar al lector a la acción
            </h2>

            <div className="space-y-4">
              {[
                "Fundamentos esenciales para empezar correctamente",
                "Sistema paso a paso para obtener resultados",
                "Errores frecuentes que frenan el avance",
                "Cómo acelerar el progreso sin complicarte",
                "Bonus extra con recursos complementarios"
              ].map((point, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              "Muy claro, moderno y fácil de aplicar.",
              "No es humo, vas directo a lo importante.",
              "Está pensado para actuar, no para leer teoría."
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-slate-300 mb-4">“{text}”</p>
                <strong className="text-white">Cliente satisfecho</strong>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="comprar" className="px-6 py-24">
        <div className="max-w-4xl mx-auto rounded-[36px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 p-[1px]">
          <div className="rounded-[36px] bg-slate-950/95 p-8 md:p-12 text-center">
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
          </div>
        </div>
      </section>
    </main>
  );
}