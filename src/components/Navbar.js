export default function Navbar() {
  return (
    <nav className='py-7 w-full z-20 fixed'>
      <div className='flex justify-between text-lg px-3 md:max-w-3xl lg:max-w-6xl mx-auto'>
        <a href='#header'>DAFFA.</a>
        <div className='flex space-x-12 md:space-x-28'>
          <a href='#about'>ABOUT</a>
          <a href='#contact'>CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
