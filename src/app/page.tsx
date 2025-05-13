import Image from 'next/image';
import img from '../../public/emg.png'
export default function Home() {
  return (
    <div className="bg-[#073737] flex flex-col items-center">
      <div className="absolute h-[100vh] w-[300px] right-0 top-0 bg-[#FFF2E2] "></div>
      <div className="bg-[#FDFDFD] w-11/12 sm:mt-10  p-1 rounded-4xl z-10 md:mt-20">
      <div className='sm:hidden md:flex md:w-full'>
        <h1>HOME</h1>
        <h1>SKILL</h1>
        <h1>EXPERIENCE</h1>
        <button className="bg-transparent border-4 border-[#0A3638] w-[96px] h-[43px] text-[#0A3638]  m-1 font-[14px] hover:border-[#577955] hover:bg-[#577955] hover:text-white cursor-pointer ">
          GitHub
        </button>
      </div>
      <div className='md:flex md:w-50px'>
      <div className="mt-12 md:mt-16 px-5">
        <h1 className="text-[14px] md:text-5xl font-bold mb-[7px] ">HELLO</h1>
        <h2 className="text-[32px] md:text-3xl font-light  mb-[7px]">I'm <span className="text-[#E1B890] font-semibold">Abel Ronoh.</span></h2>
        <h3 className="text-[32px] md:text-2xl font-bold mb-[7px] text-[#073737]">Software Engineer</h3>
        
        <p className="text-[14px] md:text-xl text-gray-600 leading-relaxed mb-8">
          A Software Engineer based on the web.
          Building full-stack web applications with a
          focus on the overall architecture and the front
        </p>
        
        <button className="bg-[#0A3638] w-[96px] h-[43px] text-white m-1  font-[14px] hover:bg-[#577955] cursor-pointer ">
          Let's Talk
        </button>
        <button className="bg-transparent border-4 border-[#0A3638] w-[96px] h-[43px] text-[#0A3638]  m-1 font-[14px] hover:border-[#577955] hover:bg-[#577955] hover:text-white cursor-pointer ">
          GitHub
        </button>
      </div>
      <div className="relative h-[400px] w-full  my-10">
      <Image 
          src={img} 
          alt="ME" 
          
          className="absolute  h-full object-contain z-20  right-0"
        />
      </div>
      </div>
      </div>
  </div>
  );
}
