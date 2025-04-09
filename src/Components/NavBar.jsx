import { useEffect } from 'react';

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/25 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <a
            href='https://www.linkedin.com/in/-harshshah/'
            target='_blank'
            className='font-mono text-2xl font-bold text-white'
          >
            Harsh<span className='text-blue-500'> Shah</span>
          </a>
          <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;{/* Hamburger Icon */}
          </div>
          <div className='hidden md:flex items-center space-x-8'>
            <a href='#home' className='text-gray-300 hover:text-white transition-colors'>
              Home
            </a>

            <a href='#about' className='text-gray-300 hover:text-white transition-colors'>
              About
            </a>

            <a href='#projects' className='text-gray-300 hover:text-white transition-colors'>
              Projects
            </a>

            <a href='#contact' className='text-gray-300 hover:text-white transition-colors'>
              Contact
            </a>
            <a href='https://www.linkedin.com/in/-harshshah/' target='_blank'>
              <img src='linkedin.svg' alt='Linkedin_logo' className='h-[30px] w-[30px]' />
            </a>
            <a href='https://github.com/harsh2102002' target='_blank'>
              <img src='github.svg' alt='Github_logo' className='h-[25px] w-[25px] bg-white' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
