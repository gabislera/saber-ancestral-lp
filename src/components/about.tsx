import banner from "../assets/images/saber-25.jpg";

export const About = () => {
	return (
		<section id="sobre" className="py-16 px-4 bg-white">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row gap-12 items-center justify-between">
					<div className="w-full max-w-2xl">
						<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6 tracking-wide">
							Sobre o <span className="text-orange-500">Saber Ancestral</span>
						</h2>
						<p className="text-slate-600 mb-6 leading-relaxed font-light">
							O Saber Ancestral nasceu da compreensão de que carregamos em nós a
							sabedoria e as experiências de nossos antepassados. Nosso espaço é
							dedicado à cura através da Constelação Familiar e terapias
							integrativas, oferecendo um ambiente acolhedor e sagrado para sua
							jornada de autoconhecimento.
						</p>
						<p className="text-slate-600 leading-relaxed font-light">
							Acreditamos que ao honrarmos nossas raízes e compreendermos os
							padrões familiares, podemos transformar nossa vida e criar um
							legado de amor e consciência para as futuras gerações.
						</p>
					</div>
					<div className="bg-gradient-to-br from-orange-100 to-slate-100 overflow-hidden rounded-2xl flex items-center justify-center aspect-[4/3] w-full">
						<img
							src={banner}
							alt="Espaço Saber Ancestral"
							width={400}
							height={300}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
