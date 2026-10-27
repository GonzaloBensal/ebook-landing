"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Impacto visual",
    text: "Un diseño premium que mejora la percepción de valor de tu ebook.",
  },
  {
    title: "Más conversión",
    text: "Secciones orientadas a destacar beneficios y reducir objeciones.",
  },
  {
    title: "Experiencia moderna",
    text: "Animaciones suaves y una estética actual que llama la atención.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
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
  );
}