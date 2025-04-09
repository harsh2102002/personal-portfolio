import React from 'react';

const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];
const dataBase = ['MongoDB', 'FireBase'];

export const About = () => {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
          About Me
        </h2>
        <div className=' rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all '>
          <p className='text-gray-300 mb-6 text-center'>
            Passionate developer with expertise in building web applications and creating innovative solutions.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Database Worked With</h3>
              <div className='flex flex-wrap gap-2'>
                {dataBase.map((skill, index) => (
                  <span
                    key={index}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1  transition-all'>
            <h3 className='text-xl font-bold mb-4'> 🏫 Education </h3>
            <ul className='list-disc list-inside text-gray-300 space-y-4'>
              <li>
                <strong>Bachelor of Engineering in Computer Engineering</strong> -{' '}
                <span className='text-gray-400'>Gandhinagar Institute of Technology (2021-2024)</span>
              </li>

              <li>
                <strong>Diploma of Engineering in Computer Engineering</strong> -{' '}
                <span className='text-gray-400'> VPMP Polytechnic (2018-2021)</span>
              </li>

              <li>
                <strong>School at Anand Niketan Maninagar</strong>
              </li>
            </ul>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1  transition-all'>
            <h3 className='text-xl font-bold mb-4'> 💼 Work Experience </h3>

            <div className='space-y-4 text-gray-400'>
              <div>
                <h4 className='font-bold text-gray-200'>
                  Frontend Developer at SNB Innovation LLP (Nov 2024 - Present)
                </h4>
                <ul className='list-disc list-inside space-y-2'>
                  <li>
                    Worked alongside a cross-functional team to create a task management system with role-based access,
                    allowing different user roles
                  </li>
                  <li>
                    Enhanced the inventory system by optimizing the user interface, enabling real-time tracking of stock
                    levels, and implementing automated alerts for low stock to ensure timely replenishment.
                  </li>
                </ul>
                <br />
                <h4 className='font-bold text-gray-200'>Intern at Avesta Technologies (Jan 2024 - Aug-2024)</h4>
                <p>
                  Developed responsive web apps using HTML, CSS, and JavaScript. Built dynamic ReactJS components with
                  Redux for state management and React Router for smooth navigation. Integrated Firebase for data
                  storage and optimization, improving performance through code refactoring and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
