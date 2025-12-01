
import Header from './Header';
// Import React Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";          // core styles
import "swiper/css/navigation"; // optional: navigation arrows
import Work from "./work";
import Footer from "./Footer";
import Landing from "./Landing";
import About from './About';



const Body = () => {
    return (
        <>
            {/* Landing Section */}
            <section className="min-h-screen flex flex-col">
                <Header />
                <Landing/>
            </section>

            <div id="about">
                <About />
            </div>
            <div id="work">
                <Work />
            </div>
            <div id="footer">
                <Footer />
            </div>  
        </>
    );
};

export default Body