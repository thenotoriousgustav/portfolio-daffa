export default function Contact() {
  return (
    <section
      className='px-4 md:px-0 mt-96 md:max-w-3xl lg:max-w-6xl mx-auto relative'
      id='contact'
    >
      <div className='flex flex-col md:flex-row'>
        <div>
          <h1 className='text-[5.4rem] md:text-[9rem] lg:text-[12rem] leading-[1] text-white font-pupok '>
            GET IN <span className='block underline'>TOUCH.</span>
          </h1>

          <h1 className='text-[5.4rem] md:text-[9rem] lg:text-[12rem] leading-[1] text-black font-pupok absolute top-2 left-6 md:top-2 md:left-2 '>
            GET IN <span className='block underline'>TOUCH.</span>
          </h1>
        </div>
        <div className='flex flex-col justify-end text-2xl md:ml-16 lg:ml-44 md:mb-4 underline mt-8 md:mt-0'>
          <a href='/'>TELEGRAM</a>
          <a href='/'>WHATSAPP</a>
          <a href='/'>EMAIL</a>
        </div>
      </div>
    </section>
  );
}
