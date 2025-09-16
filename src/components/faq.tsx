import { ChevronDown } from "lucide-react";

export const Faq = () => {
	const faqs = [
		{
			id: 1,
			question: "O que é Constelação Familiar?",
			answer:
				"A Constelação Familiar é uma abordagem terapêutica que revela dinâmicas ocultas dentro do sistema familiar, permitindo a cura de padrões transgeracionais e a restauração do fluxo de amor na família.",
		},
		{
			id: 2,
			question: "Como funciona uma sessão individual?",
			answer:
				"Na sessão individual, utilizamos bonecos ou âncoras para representar os membros da família. O processo é conduzido de forma acolhedora, respeitando o ritmo e as necessidades de cada pessoa.",
		},
		{
			id: 3,
			question: "Preciso levar algum familiar para a sessão?",
			answer:
				"Não é necessário. A constelação trabalha com o campo morfogenético da família, sendo eficaz mesmo com a presença apenas do cliente.",
		},
		{
			id: 4,
			question: "Quantas sessões são necessárias?",
			answer:
				"Cada processo é único. Algumas questões se resolvem em uma sessão, outras podem necessitar de acompanhamento. Sempre respeitamos o tempo de cada pessoa.",
		},
		{
			id: 5,
			question: "A constelação tem alguma contraindicação?",
			answer:
				"A constelação é uma terapia suave e respeitosa. Pessoas em crise psicótica aguda devem aguardar estabilização antes de participar.",
		},
	];

	return (
		<section id="faq" className="py-16 px-4 bg-white">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
						Perguntas <span className="text-orange-500">Frequentes</span>
					</h2>
				</div>

				<div className="space-y-4">
					{faqs.map((faq) => (
						<div
							key={faq.id}
							className="border border-slate-200 rounded-lg overflow-hidden shadow-sm p-2"
						>
							<details
								className={`group peer cursor-pointer select-none marker:content-[""] flex justify-between items-center`}
							>
								<summary className="px-2 py-2 flex justify-between items-center w-full">
									<span>{faq.question}</span>
									<ChevronDown className="w-5 h-5 text-slate-600 transition-transform duration-300 group-open:rotate-180" />
								</summary>
							</details>
							<div
								className={`grid transition-all duration-300 grid-rows-[0fr] peer-open:grid-rows-[1fr]`}
							>
								<div className="overflow-hidden px-4">{faq.answer}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
