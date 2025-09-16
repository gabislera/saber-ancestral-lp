import { Building2, User, Users } from "lucide-react";
import image1 from "../../public/saber-8.jpg";
import image2 from "../../public/saber-19.jpg";
import image3 from "../../public/saber-20.jpg";

export const MainService = () => {
	return (
		<section
			id="constelacao"
			className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white"
		>
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
						O que é{" "}
						<span className="text-orange-500">Constelação Familiar</span>
					</h2>
					<p className="text-slate-600 max-w-3xl mx-auto leading-relaxed font-light text-lg">
						Uma abordagem terapêutica que revela as dinâmicas ocultas do sistema
						familiar, promovendo cura e restauração do fluxo de amor através de
						diferentes modalidades
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
					<div className="relative">
						<div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-slate-100 rounded-2xl overflow-hidden shadow-lg">
							<img
								src={image1}
								alt="Constelação Individual"
								width={500}
								height={400}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="space-y-6">
						<div className="flex items-center space-x-3 mb-4">
							<div className="bg-orange-500 rounded-full p-2">
								<span className="text-white text-xl">
									<User />
								</span>
							</div>
							<h3 className="text-2xl font-light text-slate-800 tracking-wide">
								Constelação Individual
							</h3>
						</div>
						<p className="text-slate-600 leading-relaxed font-light text-lg">
							Na modalidade individual, utilizamos bonecos, âncoras ou outros
							objetos para representar os membros da família. Este formato
							permite um trabalho mais íntimo e personalizado, onde você pode
							explorar suas questões familiares em um ambiente completamente
							privado e acolhedor.
						</p>
						<p className="text-slate-600 leading-relaxed font-light">
							Ideal para quem prefere privacidade total ou tem questões muito
							delicadas para trabalhar. O processo é conduzido com muito
							cuidado, respeitando seu ritmo e suas necessidades específicas.
						</p>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
					<div className="space-y-6 order-2 md:order-1">
						<div className="flex items-center space-x-3 mb-4">
							<div className="bg-orange-500 rounded-full p-2">
								<span className="text-white text-xl">
									<Users />
								</span>
							</div>
							<h3 className="text-2xl font-light text-slate-800 tracking-wide">
								Constelação em Grupo
							</h3>
						</div>
						<p className="text-slate-600 leading-relaxed font-light text-lg">
							A constelação em grupo é uma experiência transformadora onde
							outros participantes representam membros da sua família. Esta
							modalidade permite que as dinâmicas familiares se manifestem de
							forma mais intensa e reveladora, proporcionando insights profundos
							sobre os padrões sistêmicos.
						</p>
						<p className="text-slate-600 leading-relaxed font-light">
							Os representantes, mesmo sem conhecer sua história, conseguem
							captar e expressar sentimentos e movimentos que pertencem ao
							sistema familiar, criando um campo de cura coletiva que beneficia
							todos os presentes.
						</p>
					</div>
					<div className="relative order-1 md:order-2">
						<div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-slate-100 rounded-2xl overflow-hidden shadow-lg">
							<img
								src={image2}
								alt="Constelação em Grupo"
								width={500}
								height={400}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Terceiro bloco: Imagem -> Texto */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-slate-100 rounded-2xl overflow-hidden shadow-lg">
							<img
								src={image3}
								alt="Constelação Organizacional"
								width={500}
								height={400}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="space-y-6">
						<div className="flex items-center space-x-3 mb-4">
							<div className="bg-orange-500 rounded-full p-2">
								<span className="text-white text-xl">
									<Building2 />
								</span>
							</div>
							<h3 className="text-2xl font-light text-slate-800 tracking-wide">
								Constelação Organizacional
							</h3>
						</div>
						<p className="text-slate-600 leading-relaxed font-light text-lg">
							A constelação organizacional aplica os princípios sistêmicos ao
							ambiente corporativo, revelando dinâmicas ocultas que afetam o
							funcionamento de empresas, equipes e organizações. Esta abordagem
							ajuda a identificar e resolver conflitos, melhorar a comunicação e
							restaurar o fluxo saudável nas relações profissionais.
						</p>
						<p className="text-slate-600 leading-relaxed font-light">
							Ideal para líderes, gestores e profissionais que desejam
							compreender e transformar as dinâmicas do seu ambiente de
							trabalho, promovendo maior harmonia e eficiência organizacional.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
