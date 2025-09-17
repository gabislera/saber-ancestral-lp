import { Star } from "lucide-react";

export const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: "Maria Silva",
			text: "A constelação familiar me ajudou a compreender padrões familiares que carregava há anos. Uma experiência transformadora e libertadora.",
			rating: 5,
		},
		{
			id: 2,
			name: "João Santos",
			text: "O acolhimento e a sabedoria da terapeuta tornaram o processo muito especial. Recomendo a todos que buscam autoconhecimento.",
			rating: 5,
		},
		{
			id: 3,
			name: "Ana Costa",
			text: "Através da constelação, consegui me reconectar com minhas raízes e encontrar paz interior. Gratidão imensa por este trabalho.",
			rating: 5,
		},
		{
			id: 4,
			name: "Carlos Oliveira",
			text: "A terapia me proporcionou uma nova perspectiva sobre minha família. Consegui resolver conflitos antigos e encontrar meu lugar.",
			rating: 5,
		},
		{
			id: 5,
			name: "Fernanda Lima",
			text: "Processo profundo e revelador. A constelação trouxe clareza sobre questões que me acompanhavam desde a infância.",
			rating: 5,
		},
		{
			id: 6,
			name: "Roberto Mendes",
			text: "Experiência única e transformadora. Recomendo para todos que desejam compreender melhor suas dinâmicas familiares.",
			rating: 5,
		},
		// {
		//   id: 7,
		//   name: "Juliana Rocha",
		//   text: "A constelação organizacional revolucionou minha empresa. As relações melhoraram significativamente após o trabalho.",
		//   rating: 5,
		// },
		// {
		//   id: 8,
		//   name: "Pedro Alves",
		//   text: "Encontrei respostas que procurava há anos. O trabalho é conduzido com muito profissionalismo e sensibilidade.",
		//   rating: 5,
		// },
		// {
		//   id: 9,
		//   name: "Camila Torres",
		//   text: "Processo de cura profundo e respeitoso. Consegui me libertar de padrões limitantes e viver com mais leveza.",
		//   rating: 5,
		// },
	];
	return (
		<section
			id="depoimentos"
			className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white"
		>
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
						<span className="text-orange-500">Depoimentos</span>
					</h2>
					<p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
						Histórias reais de transformação e cura através da Constelação
						Familiar
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<div className="flex justify-center mb-4">
								{[...Array(testimonial.rating)].map((_, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: no need to have a key
									<Star
										key={index}
										className="w-4 h-4 text-orange-500 fill-current"
									/>
								))}
							</div>
							<blockquote className="text-slate-600 leading-relaxed font-light text-center mb-4 italic">
								"{testimonial.text}"
							</blockquote>
							<p className="text-slate-800 font-light text-center tracking-wide text-sm">
								— {testimonial.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
