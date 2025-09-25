import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

const images = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17];

export const ImageGallery = () => {
	const swiperRef = useRef<SwiperType | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const openDialog = (imageIndex: number) => {
		setCurrentImageIndex(imageIndex);
		setIsDialogOpen(true);
	};

	const nextImage = useCallback(() => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	}, []);

	const prevImage = useCallback(() => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isDialogOpen) return;

			switch (e.key) {
				case "ArrowLeft":
					prevImage();
					break;
				case "ArrowRight":
					nextImage();
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isDialogOpen, nextImage, prevImage]);

	return (
		<section
			id="galeria"
			className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white"
		>
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide">
						<span className="text-orange-500">Galeria</span>
					</h2>
					<p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
						Conheça nosso espaço sagrado de cura e transformação
					</p>
				</div>
				<Swiper
					modules={[Autoplay]}
					slidesPerView={"auto"}
					spaceBetween={16}
					loop={true}
					speed={4000}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
					allowTouchMove={true}
					className="w-full"
					style={{ cursor: "grab" }}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					{images.map((item, index) => (
						<SwiperSlide
							key={item}
							style={{ width: 320, flexShrink: 0 }}
							className="rounded-xl overflow-hidden hover:shadow-lg cursor-pointer "
							onClick={() => openDialog(index)}
						>
							<img
								src={`/saber-${item}.webp`}
								alt={`Galeria ${item}`}
								className="w-full h-full object-cover"
								draggable={false}
								onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
								onMouseLeave={() => swiperRef.current?.autoplay?.start()}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Dialog de Tela Cheia */}
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className="max-w-none w-screen h-screen p-0 bg-black/95 border-none rounded-none flex items-center justify-center">
					{/* Botão de Fechar */}
					<DialogClose asChild>
						<button
							type="button"
							className="absolute top-8 right-8 z-50 text-black font-bold hover:text-orange-400 hover:scale-110 w-8 h-8 flex items-center justify-center transition-all duration-200 focus:outline-none"
							aria-label="Fechar galeria"
						>
							<X size={20} />
						</button>
					</DialogClose>

					{/* Botão Anterior */}
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							prevImage();
						}}
						className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-orange-400 hover:scale-110 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-lg border border-white focus:outline-none"
						aria-label="Imagem anterior"
					>
						<ChevronLeft size={22} />
					</button>

					{/* Botão Próximo */}
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							nextImage();
						}}
						className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-orange-400 hover:scale-110 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-lg border border-white focus:outline-none"
						aria-label="Próxima imagem"
					>
						<ChevronRight size={22} />
					</button>

					{/* Imagem */}
					<div className="relative max-w-full max-h-full p-8">
						<img
							src={`/saber-${images[currentImageIndex]}.webp`}
							alt={`Galeria ${images[currentImageIndex]}`}
							className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
							draggable={false}
						/>
					</div>

					{/* Contador */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
						{currentImageIndex + 1} de {images.length}
					</div>
				</DialogContent>
			</Dialog>
		</section>
	);
};
