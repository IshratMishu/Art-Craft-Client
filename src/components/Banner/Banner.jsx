import img1 from '../../assets/images/bl-img2-removebg-preview.png';
import img2 from '../../assets/images/close-up-removebg-preview.png';
import img3 from '../../assets/images/close-up-arrangement-modern-vases__1_-removebg-preview.png';


import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";


const Banner = () => {
    return (
        <div className="lg:h-[600px] bg-[#92d390] mt-20 text-white" >
            <Swiper
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <div className="md:h-[500px] h-auto">
                        <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto p-2 md:p-10">
                                <p className="text-[30px] lg:text-[40px] md:text-[32px] font-bold text-center md:text-left">
                                    Shop Handcrafted Clay Pottery For Timeless Elegance
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left mt-4">
                                    Discover the beauty and craftsmanship of handmade clay pottery.
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]">Explore Now</button>
                                </div>
                            </div>
                            {/* left */}
                            <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0" >
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide>
                    <div className="md:h-[500px] h-auto">
                        <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto p-2 md:p-10">
                                <p className="text-[30px] lg:text-[40px] md:text-[32px] font-bold text-center md:text-left">
                                    Find Your Perfect Home Decor Pottery at Our Store
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                    Browse our curated selection of pottery decor to find the perfect accents for your home.
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]">Browse Here</button>
                                </div>
                            </div>

                            {/* left */}
                            <div className="w-full md:max-h-[400px] flex-1 mb-10 md:mb-0">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <div className="md:h-[500px] h-auto">
                        <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto p-2 md:p-10">
                                <p className="text-[30px] lg:text-[40px] md:text-[32px] font-bold text-center md:text-left">
                                    Elevate Your Space with Ceramic Architectural Elements
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                    Transform your surroundings with our premium ceramics designed for architectural applications. Explore our range of tiles, panels, and accents to create spaces that are both stunning and functional.
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]"> Shop Now</button>
                                </div>
                            </div>
                            <div className="w-full max-h-[400px] flex-1 mb-10 md:mb-0">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;