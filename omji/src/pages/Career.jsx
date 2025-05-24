const Career = () => {
  return <div className="text-white w-full h-[100vh] bg-[#111] ">

  <div className=" h-[150vh] bg-[#111]">
    <p className=" text-[20px] pt-8 w-[60%] mx-auto"> 

        At  &nbsp;
         <span className="text-red-500">O</span>
          <span className=" text-orange-500">m</span>
          <span className="text-blue-500">j</span>
          <span className="text-yellow-500">i</span>
          <span className="text-white" > Productions</span>
        
         , we craft powerful films & web series, music , video  with creativity and precision. 
        We seeking for passionate <span className="italic font-bold">storytellers, Cameraman, actor, actress, technicians,</span> and visionaries director  eager to innovate  with us. 
        Join us to shape unforgettable cinematic experiences, pushing boundaries and bringing stories that target masses and 
        inspire, connect, and bring audiences in multiple languages.

      </p>

    <h3 className="pt-8 pl-32 text-[25px]"> Apply now !</h3>

  <div className="flex  w-[70vw] pl-[10vw] h-[100vh] mx-auto">

      <form action="https://formsubmit.co/omjiproduction9@gmail.com" method="POST">

    <div className="m-4">
        <label> Name </label>
        <input type="text" required name="name" className=" rounded-md ml-4 border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 w-[50%]" ></input>
   </div>

   <div className="m-4">
        <label> Age </label>
        <input type="number" required min="0" step="1"  name="age" className="no-spinner ml-4 rounded-md border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 rounded-md w-[50%]" ></input>
    </div>

    <div className="m-4">
        <label> Email </label>
        <input type="email" required name="email" className=" rounded-md ml-4 border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 rounded-md w-[50%]"></input>
     </div>

      <div className="m-2">
        <label> Number </label>
        <input type="tel" required pattern="[0-9] {10}" maxLength="10"  name="age" className="no-spinner ml-4 rounded-md border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 rounded-md w-[50%]" ></input>
    </div>

     <div className="m-4">
        <label> Address </label>
        <input type="textarea" required name="address" className="rounded-md  ml-4 border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 rounded-md w-[50%]"></input>
     </div>

     <div className="m-4">
        <label>Job Profile </label>
        <input type="text" required name="job" className="rounded-md ml-4 border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 rounded-md w-[50%]"></input>
    </div> 

    <div className=" m-4">
        <label>Experience (in year) </label> 
        <input type="number" required min="0" step="1" name="experience" className="no-spinner ml-4 rounded-md border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 rounded-md w-[50%]"></input>
    </div>

    <div className="m-4">
        <label>Upload Profile</label>
        <input type="file" required accept=".jpg, .png, video/mp4, .pdf .mov/*" name="job" className="rounded-md ml-4 border-b border-gray-200 focus:outline-none focus:border-blue-800 p-2 w-[50%]"></input>
    </div> 

    <div className=" m-4">  
        <label> why you think you are suitable for this role ? </label>
        <input type="textarea" required name="message" className="rounded-md border-b  focus:outline-none focus:border-blue-800 p-2 rounded-md w-[20vw] ml-4"></input>
    </div> 

  <div className=" m-4 text-center "> 
      <button type="submit" className="bg-blue-600 text-white p-2 mt-8 rounded-md cursor-pointer w-[10vw] text-lg font-bold "> Apply </button>
  </div> 

  



      </form>
      </div>
  </div>
  

  
  </div>;
};
export default Career;