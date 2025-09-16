import { About } from "./components/about";
import { AddressMap } from "./components/address-map";
import { Contact } from "./components/contact";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ImageGallery } from "./components/image-gallery";
import { MainService } from "./components/main-service";
import { OtherServices } from "./components/other-services";
import { Testimonials } from "./components/testimonials";

export const App = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
			<Header />
			<Hero />
			<About />
			<MainService />
			<OtherServices />
			<Testimonials />
			<Faq />
			<ImageGallery />
			<Contact />
			<AddressMap />
			<Footer />
		</div>
	);
};
