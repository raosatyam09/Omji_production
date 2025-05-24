    import React, { useEffect, useState } from "react";
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/effect-creative';
    import '../style.css';

// import required modules
import { EffectCreative } from 'swiper/modules'

import video from "../assets/into_video.mp4"
import img8 from "../assets/image8.jpg";
import img1 from "../assets/image1.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";

const images = [img8, img3, img4, img5, img6, img7, img1];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    }, 3000);

  return () => clearInterval(interval);}, []);

  return (
    <div className=" w-full overflow-hidden">
      {/* Carousel */}
     {/* bounce words */}

     <div className="relative w-full h-[100vh] overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}vw)`, width:`${images.length * 100}vw` }}>
          {images.map((src, index) => (
            <div key={index} className="relative w-[100vw] h-[800px] flex-shrink-0">
              <img src={src}alt={`Slide ${index}`}className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col  justify-center items-center">
                  <h1 className="text-white text-5xl font-bold  animate-bounce drop-shadow-lg"> 
                     <span className="text-red-500">O</span>
                     <span className=" text-orange-500">m</span>
                     <span className="text-blue-500">j</span>
                     <span className="text-yellow-500">i</span>
                     <span className="text-white" > Productions</span>      
                  </h1>
                  <p className="text-white text-xl p-2 drop-shadow-lg "> create • invest • produce </p>
                </div>
            </div>
          ))}
        </div>
        {/* hidden text */}
    </div>
  
   {/* Swiper Dots */}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)}className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-blue-800 scale-125": "bg-gray-400" }`}/>
        ))}
      </div>
      
       {/* second page starts from here */}

        <div className="h-[100vh] bg-[#111] text-white text-xl flex flex-row justify-center items-center">
          <div className="w-lg h-[50vh]  m-12 flex flex-col justify-center items-center ">
            <p className="p-2 text-center mt-2 text-2xl  "> 
              <p> film production, ad films, music videos</p>
              <p>select real locations to match the script. </p>
              <p>create posters cut trailers & teasers</p>
            <p> “Tales Told with Truth & Light.”</p>   
             <p> 
              <span className="text-red-500 italic font-bold">  &nbsp;  lights </span>
              <span className="text-orange-500 italic font-bold"> &nbsp;camera </span>
              <span className="text-blue-500 italic font-bold"> &nbsp;  action </span>
               </p>  
            </p>
          </div>
          <div className="w-lg h-[50vh] m-12">
            <video className="object-fit rounded-lg" src={video}  autoPlay loop muted playsInline />
           </div>  
        </div>

{/* Movies section */} 

   <div className="w-full h-[100vh] bg-[#111] text-white">
    <h3 className="text-3xl font-bold pl-32 pt-4"> All Movies </h3>
      
      <div className="flex justify-center items-center mt-8 ">

    <div className="text-white border-1 h-[60vh] w-[20vw] p-2 m-4 rounded-md  transition-transform duration-400 hover:-rotate-1 hover:scale-108 overflow-hidden cover-contain " >

      <iframe className="rounded-md" width="100%" height="50%"  src="https://www.youtube.com/embed/lBvbNxiVmZA?si=36MbHGhysBb3x1NA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
       <p className="mt-2">Music Director - Sachet-Parampara</p>
       <p> Singer - Parampara Tandon </p>
       <p> Lyrics - Kausar Munir  </p>
       <p> Music Assistant - Raghav Sharma </p>
      
    </div>
    <div className="border-1 h-[60vh] w-[20vw] p-2  m-4 rounded-md transition-transform duration-400 hover:-rotate-1 hover:scale-108">
       
       <iframe className="rounded-md" width="100%" height="50%" src="https://www.youtube.com/embed/KUpwupYj_tY?si=4xgjbluHhPjUwmmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <p className="mt-2">Song: Tere Hawaale</p>
       <p> Singers: Arijit Singh & Shilpa Rao</p>
       <p> Music: Pritam</p>
       <p> Lyrics: Amitabh Bhattacharya</p>
        <p>Music Label: T-Series</p>

    </div>

    <div className="border-1 h-[60vh] w-[20vw] p-2  m-4 rounded-md  transition-transform duration-400 hover:-rotate-1 hover:scale-108">
    
    <iframe className="rounded-md" width="100%" height="50%" src="https://www.youtube.com/embed/pIBoAh4OXhQ?si=EJQ0z1_p_MWL2uGf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <p className="mt-2"> Song Name – Janam Janam</p>
         <p> Movie - Dilwale </p>
         <p>Singer – Arijit Singh; Antara Mitra  </p>
         <p>Lyrics – Amitabh Bhattacharya</p>
         <p>Music Label: T-Series</p>

    </div>
    <div className="border-1 h-[60vh] w-[20vw] p-2 m-4 rounded-md transition-transform duration-400 hover:-rotate-1 hover:scale-108">
    
    <iframe className="rounded-md" width="100%" height="50%" src="https://www.youtube.com/embed/jHNNMj5bNQw?si=_FxtNmIC1Fh86sm9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
       <p className="mt-2" >Song: KABIRA</p>
       <p>Singer: TOCHI RAINA, REKHA </p>
       <p>Lyrics: AMITABH BHATTACHARYA</p>
       <p>Movie: YEH JAWAANI HAI DEEWANI</p>
       <p>Music On: T-SERIES</p>
    </div>
    </div>
    </div>

{/* adding music swiper */}
   
   <div className="w-full h-[70vh] bg-[#111] text-white">
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

   <hr className=" my-8 border-t border-gray-300 "/> 
       
         <div className= "flex justify-between ">
       
    <p className="pl-8"> Copyright &copy; 2025 Omji Production All rights reserved.</p>
     <p className="pr-8">

       <span className="text-red-500">O</span>
        <span className=" text-orange-500">m</span>
       <span className="text-blue-500">j</span>
       <span className="text-yellow-500">i</span>
      
       &nbsp;Production &nbsp; (create • invest • produce ) </p>
     </div>
   </div>

  </div>
    
  );
};

export default Home;
