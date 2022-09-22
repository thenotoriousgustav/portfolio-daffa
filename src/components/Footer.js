import React from "react";

export default function Footer() {
  return (
    <footer className='p-4 border-t border-black/25 mt-16'>
      <div className='flex flex-wrap py-2 justify-center md:justify-between md:px-6'>
        <div className='underline flex space-x-10 md:space-x-8'>
          <a href='/'>INSTAGRAM</a>
          <a href='/'>TWITTER</a>
          <a href='/'>FACEBOOK</a>
        </div>
        <div className='mt-4 md:mt-0'>Made with love by Gustam Rheza.</div>
      </div>
    </footer>
  );
}
