export const OtherServices = () => {
    const otherServices = [
        {
          id: 1,
          title: "Reiki",
          description: "Terapia energética para harmonização e equilíbrio dos chakras.",
          icon: "🙏",
        },
        {
          id: 2,
          title: "Florais de Bach",
          description: "Essências florais para tratamento de estados emocionais desequilibrados.",
          icon: "🌸",
        },
        {
          id: 3,
          title: "Leitura de Arquétipos",
          description: "Descoberta dos padrões arquetípicos que influenciam sua jornada de vida.",
          icon: "🔮",
        },
        {
          id: 4,
          title: "Terapia Integrativa",
          description: "Abordagem holística combinando diferentes técnicas terapêuticas.",
          icon: "🌿",
        },
      ]
      
    return (
        <section id="atendimentos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
              Demais <span className="text-orange-500">Atendimentos</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Oferecemos uma gama completa de terapias integrativas para seu bem-estar físico, mental e espiritual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl mb-3 text-center">{service.icon}</div>
                <h3 className="text-lg font-light text-slate-800 mb-3 text-center tracking-wide">{service.title}</h3>
                <p className="text-slate-600 text-center text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}