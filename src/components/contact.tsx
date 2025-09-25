import { type ChangeEvent, type FormEvent, useState } from "react";

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		service: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const phoneNumber = "5551996548555";

		const whatsappMessage = `Olá, meu nome é ${formData.name} e gostaria de mais informaçoes sobre ${formData.service}.`;

		const encodedMessage = encodeURIComponent(whatsappMessage);

		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			"_blank",
		);
	};

	return (
		<section id="contact" className="py-16 px-4 bg-white">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
						Entre em <span className="text-orange-500">Contato</span>
					</h2>
					<p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
						Envie sua mensagem e entraremos em contato para agendar sua sessão
					</p>
				</div>

				<div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="name"
									className="block text-slate-700 font-light mb-2 tracking-wide"
								>
									Nome
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300"
									placeholder="Seu nome completo"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-slate-700 font-light mb-2 tracking-wide"
								>
									Telefone
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300"
									placeholder="(51) 99999-9999"
									required
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-slate-700 font-light mb-2 tracking-wide"
							>
								E-mail
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300"
								placeholder="seu@email.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="service"
								className="block text-slate-700 font-light mb-2 tracking-wide"
							>
								Tipo de Atendimento
							</label>
							<select
								id="service"
								name="service"
								value={formData.service}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300"
								required
							>
								<option value="">Selecione o tipo de atendimento</option>
								<option value="Terapia Sistêmica">Terapia Sistêmica</option>
								<option value="Reiki">Reiki</option>
								<option value="Terapia de florais">Terapia de florais</option>
								<option value="Terapia Integrativa">Terapia Integrativa</option>
								<option value="Regressão Terapêutica">
									Regressão Terapêutica
								</option>
								<option value="Cone Hindu">Cone Hindu</option>
								<option value="Dança Circular Terapêutica">
									Dança Circular Terapêutica
								</option>
								<option value="Vivências Ancestrais">
									Vivências Ancestrais
								</option>
								<option value="Meditações e Rituais de Cura">
									Meditações e Rituais de Cura
								</option>
								<option value="Estudos Sistêmicos">Estudos Sistêmicos</option>
							</select>
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none"
						>
							Enviar Mensagem
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
