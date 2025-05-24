const About = () => {
  return <div className="w-full h-[100vh] bg-[#111] text-white">

    <div className="flex justify-around items-center p-16 ">


      <div className="w-[35%] h-[50vh] bg-transparent border-[2px] border-blue-600 m-4 rounded-md">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7964854990364!2d77.42741857495578!3d28.60588158529155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9aabcebfc1%3A0xb1603e49c4ce44e8!2sCodesaint%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1747986157069!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       
        </div>

    <div className="w-[35%] h-[50vh] bg-transparent p-4  border-[2px] border-blue-600 m-4 rounded-md">

    <h1 className="font-bold text-xl p-2 m-auto text-pink-400" > Get in Touch</h1>
    <p className="p-1"> Omji Production</p>
    <p className="p-1"> contact : +91-9990003609 </p>
   <p  className="  p-1" >mail us :  <a  className=" cursor-pointer hover:underline transition-all duration-300 hover:text-blue-400 hover:t" href="mailto:omjiproduction9@gmail.com">omjiproduction9@gmail.com </a></p>
    <p className="p-1"> Location : 1423, 14th Floor, Gaur City Mall
Greater Noida West, Gautam Buddha Nagar
Uttar Pradesh - 201318, India</p>




    </div>

    </div>




  </div>;
};

export default About; 
