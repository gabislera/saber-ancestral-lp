import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export const AddressMap = () => {
	return (
		<section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
						<span className="text-orange-500">Localização</span> e Redes Sociais
					</h2>
					<p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
						Encontre-nos e acompanhe nosso trabalho nas redes sociais
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					<div className="space-y-8">
						<div className="bg-white rounded-2xl p-8 shadow-lg">
							<h3 className="text-xl font-light text-slate-800 mb-6 tracking-wide">
								Informações de Contato
							</h3>
							<div className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="bg-orange-100 p-3 rounded-full">
										<MessageCircle className="w-6 h-6 text-orange-600" />
									</div>
									<div className="flex flex-col">
										<span className="font-light text-slate-800 tracking-wide">
											WhatsApp:
										</span>
										<a
											href="https://wa.me/5551996548555"
											className="text-orange-500 hover:text-orange-600 transition-colors duration-300 text-sm"
										>
											(51) 99654-8555
										</a>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="bg-orange-100 p-3 rounded-full">
										<Instagram className="w-6 h-6 text-orange-600" />
									</div>
									<div className="flex flex-col">
										<span className="font-light text-slate-800 tracking-wide">
											Instagram:
										</span>
										<a
											href="https://instagram.com/saber.ancestral_"
											className="text-orange-500 hover:text-orange-600 transition-colors duration-300 text-sm"
										>
											@saber.ancestral_
										</a>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="bg-orange-100 p-3 rounded-full">
										<Mail className="w-6 h-6 text-orange-600" />
									</div>
									<div className="flex flex-col">
										<span className="font-light text-slate-800 tracking-wide">
											E-mail:
										</span>

										<a
											href="mailto:saberancestralscs@gmail.com"
											className="text-orange-500 hover:text-orange-600 transition-colors duration-300 text-sm"
										>
											saberancestralscs@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="bg-orange-100 p-3 rounded-full">
										<MapPin className="w-6 h-6 text-orange-600" />
									</div>
									<div className="flex flex-col">
										<span className="font-light text-slate-800 tracking-wide">
											Endereço:
										</span>
										<p className="text-slate-600 font-light">
											R. Conselheiro Serafim Waechter, 489
											<br />
											Avenida, Santa Cruz do Sul - RS
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-2xl p-4 shadow-lg">
						<div className="aspect-[4/3] rounded-xl overflow-hidden">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.3818073098228!2d-52.44430920538886!3d-29.708697672059138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ca3964c35c1eb%3A0x878cb80c50e2c4e2!2sSaber%20Ancestral!5e0!3m2!1spt-BR!2sbr!4v1754241763937!5m2!1spt-BR!2sbr&iwloc=near"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Mapa"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
