    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/effect-creative';
    import '../style.css';
    import { EffectCreative } from 'swiper/modules'

  const Music = () => {
  return(
    <div className="w-full h-[100vh] bg-[#111] text-white">
       
          <h3 className="text-3xl font-bold pl-32 "> All Songs </h3>

       <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper border-1 rounded-md mt-4"
      >
        <SwiperSlide>Song 1</SwiperSlide>
        <SwiperSlide>Song 2</SwiperSlide>
        <SwiperSlide>Song 3</SwiperSlide>
        <SwiperSlide>Song 4</SwiperSlide>
        <SwiperSlide>Song 5</SwiperSlide>
        <SwiperSlide>Song 6</SwiperSlide>
        <SwiperSlide>Song 7</SwiperSlide>
        <SwiperSlide>Song 8</SwiperSlide>
        <SwiperSlide>Song 9</SwiperSlide>
      </Swiper>
        
   {/* end here !! */}
   
   </div>
  ) 
};
export default Music;