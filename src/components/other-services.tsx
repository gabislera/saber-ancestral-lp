export const OtherServices = () => {
	const otherServices = [
		{
			id: 1,
			title: "Terapia Sistêmica",
			description:
				"Abordagem que considera o indivíduo em seus sistemas de vida.",
			icon: "🙏",
		},
		{
			id: 2,
			title: "Reiki",
			description:
				"Uma medicina energética que acalma, cura e realinha seu campo.",
			icon: "✨",
		},
		{
			id: 3,
			title: "Terapia de florais",
			description: "Essências florais para estados emocionais desequilibrados.",
			icon: "🌸",
		},
		{
			id: 4,
			title: "Terapia Integrativa",
			description: "Abordagem holística combinando técnicas terapêuticas.",
			icon: "🌿",
		},
		{
			id: 5,
			title: "Regressão Terapêutica",
			description:
				"Processo para acessar memórias e liberar bloqueios emocionais.",
			icon: "🌀",
		},
		{
			id: 6,
			title: "Cone Hindu",
			description:
				"Técnica ancestral de limpeza energética e equilíbrio sutil.",
			icon: "🔥",
		},
		{
			id: 7,
			title: "Dança Circular Terapêutica",
			description:
				"Prática em grupo que promove integração e conexão pela dança.",
			icon: "💃",
		},
		{
			id: 8,
			title: "Vivências Ancestrais",
			description:
				"Resgate de saberes antigos para fortalecer identidade espiritual.",
			icon: "🌱",
		},
		{
			id: 9,
			title: "Meditações e Rituais de Cura",
			description:
				"Encontros guiados para promover equilíbrio e renovação energética.",
			icon: "🕯️",
		},
		{
			id: 10,
			title: "Estudos Sistêmicos",
			description:
				"Busca por si através do olhar às raízes e vínculos familiares.",
			icon: "📚",
		},
	];

	return (
		<section id="atendimentos" className="py-16 px-4 bg-white">
			<div className="container mx-auto flex flex-col items-center gap-10">
				<div className="text-center ">
					<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
						Demais <span className="text-orange-500">Atendimentos</span>
					</h2>
					<p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
						Oferecemos uma gama completa de terapias integrativas para seu
						bem-estar físico, mental e espiritual
					</p>
				</div>

				<div className="flex gap-6 items-center justify-center flex-wrap">
					{otherServices.map((service) => (
						<div
							key={service.id}
							className="w-[280px] bg-gradient-to-br from-slate-50 to-white rounded-xl px-4 py-6 border border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg"
						>
							<div className="text-3xl mb-3 text-center">{service.icon}</div>
							<h3 className="text-lg font-light text-slate-800 mb-3 text-center tracking-wide">
								{service.title}
							</h3>
							<p className="text-slate-600 text-center text-sm leading-relaxed font-light">
								{service.description}
							</p>
						</div>
					))}
				</div>

				<button
					type="button"
					className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-light text-lg tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block cursor-pointer"
					onClick={(e) => {
						e.preventDefault();
						const section = document.getElementById("contact");
						if (section) {
							section.scrollIntoView({ behavior: "smooth" });
						}
					}}
				>
					Saiba mais
				</button>
			</div>
		</section>
	);
};
