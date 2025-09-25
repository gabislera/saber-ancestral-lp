import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
	name: z
		.string()
		.min(1, "Nome é obrigatório")
		.min(2, "Nome deve ter pelo menos 2 caracteres")
		.max(100, "Nome não pode ter mais de 100 caracteres")
		.regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
	phone: z
		.string()
		.optional()
		.or(z.literal(""))
		.refine(
			(val) => {
				if (!val || val === "") return true;
				return /^(\(\d{2}\)\s?\d{4,5}-?\d{4}|\d{2}\s?\d{4,5}-?\d{4}|\d{10,11})$/.test(
					val,
				);
			},
			{
				message: "Formato de telefone inválido. Use (XX) XXXXX-XXXX ou similar",
			},
		),
	email: z
		.string()
		.optional()
		.or(z.literal(""))
		.refine(
			(val) => {
				if (!val || val === "") return true;
				return z.string().email().safeParse(val).success;
			},
			{ message: "E-mail deve ter um formato válido" },
		),
	service: z.string().min(1, "Selecione um tipo de atendimento"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		mode: "onBlur",
	});

	const onSubmit = (data: ContactFormData) => {
		const phoneNumber = "5551996548555";

		const whatsappMessage = `Olá, meu nome é ${data.name} e gostaria de mais informações sobre ${data.service}.`;

		const encodedMessage = encodeURIComponent(whatsappMessage);

		window.open(
			`https://wa.me/${phoneNumber}?text=${encodedMessage}`,
			"_blank",
		);

		reset();
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
					<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
									{...register("name")}
									className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors duration-300 ${
										errors.name
											? "border-red-500 focus:border-red-500"
											: "border-slate-200 focus:border-orange-500"
									}`}
									placeholder="Seu nome completo"
								/>
								{errors.name && (
									<p className="text-red-500 text-sm mt-1 font-light">
										{errors.name.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-slate-700 font-light mb-2 tracking-wide"
								>
									Telefone <span className="text-slate-400">(opcional)</span>
								</label>
								<input
									type="tel"
									id="phone"
									{...register("phone")}
									className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors duration-300 ${
										errors.phone
											? "border-red-500 focus:border-red-500"
											: "border-slate-200 focus:border-orange-500"
									}`}
									placeholder="(51) 99999-9999"
								/>
								{errors.phone && (
									<p className="text-red-500 text-sm mt-1 font-light">
										{errors.phone.message}
									</p>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-slate-700 font-light mb-2 tracking-wide"
							>
								E-mail <span className="text-slate-400">(opcional)</span>
							</label>
							<input
								type="email"
								id="email"
								{...register("email")}
								className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors duration-300 ${
									errors.email
										? "border-red-500 focus:border-red-500"
										: "border-slate-200 focus:border-orange-500"
								}`}
								placeholder="seu@email.com"
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1 font-light">
									{errors.email.message}
								</p>
							)}
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
								{...register("service")}
								className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors duration-300 ${
									errors.service
										? "border-red-500 focus:border-red-500"
										: "border-slate-200 focus:border-orange-500"
								}`}
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
							{errors.service && (
								<p className="text-red-500 text-sm mt-1 font-light">
									{errors.service.message}
								</p>
							)}
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className={`w-full py-4 rounded-xl font-light tracking-wide transition-all duration-300 shadow-lg text-lg focus:outline-none ${
								isSubmitting
									? "bg-gray-400 cursor-not-allowed"
									: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl text-white"
							}`}
						>
							{isSubmitting ? "Enviando..." : "Enviar Mensagem"}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
