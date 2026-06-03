import Marquee from "react-fast-marquee"; 

export default function Header({ data={} }) {
  const title = data.title || "We are a professional Web Development & Digital Marketing Company in Bhopal.";

  return (
    <div className='bg-primary w-full overflow-hidden relative z-50'>
      <Marquee 
        className='md:max-w-4xl max-w-[320px] mx-auto p-1 ' 
        pauseOnHover={true} 
        speed={50}
        gradient={false}
      >
        <h1 className='whitespace-nowrap text-para '>
          {title}
        </h1>
      </Marquee>
    </div>
  );
}