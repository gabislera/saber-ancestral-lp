import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

const images = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18];

export const ImageGallery = () => {
	const swiperRef = useRef<SwiperType | null>(null);

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
					{images.map((item) => (
						<SwiperSlide
							key={item}
							style={{ width: 320, flexShrink: 0 }}
							className="rounded-xl overflow-hidden hover:shadow-lg "
						>
							<img
								src={`/saber-${item}.jpg`}
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
		</section>
	);
};
