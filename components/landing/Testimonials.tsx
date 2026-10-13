"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "María L.",
    text: "Muy claro, moderno y fácil de aplicar.",
  },
  {
    name: "Lucas G.",
    text: "No es humo, va directo a lo importante! No le tenía fe porque no hay muchas reviews pero es impecable!",
  },
  {
    name: "Sofía D.",
    text: "Está pensado para actuar, no para leer teoría.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Lo que dicen quienes ya lo leyeron
          </h2>
          <p className="text-slate-400 text-lg">
            Testimonios pensados para reforzar confianza y reducir objeciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
            >
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-300 mb-4">“{item.text}”</p>
              <strong className="text-white">{item.name}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}