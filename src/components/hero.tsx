export const Hero = () => {
	return (
		<section className="pt-24 pb-16 px-4">
			<div className="container mx-auto text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-light text-slate-800 mb-6 leading-tight tracking-wide">
						Reconecte-se com suas raízes através da{" "}
						<span className="text-orange-500">Constelação Familiar</span>
					</h1>
					<p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
						Um espaço sagrado de cura e autoconhecimento, onde a sabedoria
						ancestral encontra a terapia moderna
					</p>

					{/* Video Section */}
					<div className="relative max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
						<div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
							<iframe
								title="YouTube video player"
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/gazhQuWCwnQ"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								className="w-full h-full"
							></iframe>
						</div>
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
						Agende uma sessão
					</button>
				</div>
			</div>
		</section>
	);
};
