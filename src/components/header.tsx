import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../public/logo.png";
import logo2 from "../../public/logo-rounded.png";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-100">
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<img
							src={logo2}
							alt="Saber Ancestral"
							// width={50}
							// height={50}
							className="w-[50px]"
						/>
						<div className="flex flex-col text-xl font-light text-slate-800 tracking-wide leading-5 font-poiret">
							<span className="">SABER</span>
							<span className="">ANCESTRAL</span>
						</div>
					</div>

					{/* Desktop Menu */}
					<nav className="hidden md:flex items-center space-x-8">
						{[
							"sobre",
							"constelacao",
							"atendimentos",
							"depoimentos",
							"faq",
							"galeria",
							"contato",
						].map((item) => (
							<button
								type="button"
								key={item}
								onClick={() => scrollToSection(item)}
								className="text-slate-600 hover:text-orange-500 transition-colors duration-300 capitalize font-light tracking-wide"
							>
								{item === "constelacao"
									? "Constelação"
									: item === "atendimentos"
										? "Atendimentos"
										: item}
							</button>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="md:hidden p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<nav className="md:hidden mt-4 pb-4 border-t border-slate-100">
						<div className="flex flex-col space-y-3 pt-4">
							{[
								"sobre",
								"constelacao",
								"atendimentos",
								"depoimentos",
								"faq",
								"galeria",
								"contato",
							].map((item) => (
								<button
									type="button"
									key={item}
									onClick={() => scrollToSection(item)}
									className="text-slate-600 hover:text-orange-500 transition-colors duration-300 capitalize font-light tracking-wide text-left"
								>
									{item === "constelacao"
										? "Constelação"
										: item === "atendimentos"
											? "Atendimentos"
											: item}
								</button>
							))}
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};
