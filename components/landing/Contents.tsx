"use client";

import { motion } from "framer-motion";

const items = [
  "Fundamentos esenciales para empezar correctamente",
  "Sistema paso a paso para obtener resultados",
  "Errores frecuentes que frenan el avance",
  "Cómo acelerar el progreso sin complicarte",
  "Bonus extra con recursos complementarios",
];

export default function Contents() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl"
        >
          <p className="text-cyan-300 font-semibold mb-3">¿Qué incluye?</p>
          <h2 className="text-4xl font-black mb-6">
            Un contenido pensado para llevar al lector a la acción
          </h2>

          <div className="space-y-4">
            {items.map((point) => (
              <div
                key={point}
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
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl min-h-[300px] flex items-center justify-center text-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
              Clientes satisfechos
            </p>
            <h4 className="text-2xl font-bold mb-3">Vendé sin límites, sin vueltas.</h4>
            <img
              src="/images/Ebook_premium_cover.png"
              alt="Portada del Ebook Premium"
              className="w-full max-w-sm mx-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}