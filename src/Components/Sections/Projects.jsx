import React from 'react';

export const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
          Featured projects
        </h2>
        <div className='text-lg p-4 text-center text-gray-300'>At SNB Innovations LLP</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all max-h-auto '>
            <div className='p-4'>
              <h3 className='text-gray-300 text-xl font-bold'>Enterprise Resource Planning</h3>
              <p className='my-2'>
                Contributed to the ERP Inventory Management system by enhancing front-end features, integrating
                inventory tracking, and enabling real-time stock updates.
              </p>
            </div>
            <div className='mt-auto'>
              {['React', 'Tailwindcss', 'MongoDB'].map((skill, key) => {
                return (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all max-h-auto '>
            <div className='p-4'>
              <h3 className='text-gray-300 text-xl font-bold'>Customer Relationship Management</h3>
              <p className='my-2'>
                Collaborated with a cross-functional team to design and develop a robust task management system with a
                role-based access control model, supporting four user roles (Admin, Employee, Client, Referred By).
              </p>
            </div>
            <div className='mt-auto'>
              {['React', 'Tailwindcss', 'MongoDB'].map((skill, key) => {
                return (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className='text-lg p-4 text-center text-gray-300'>At Avesta Technologies</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all max-h-auto '>
            <div className='p-4'>
              <h3 className='text-gray-300 text-xl font-bold'>QR Code Generator</h3>
              <p className='my-2'>
                A React-based QR code generator that converts user-input text into a dynamic QR code in real-time.
                Simple and interactive, it updates as you type.
              </p>
            </div>
            <div className='mt-auto'>
              {['React', 'TailwindCss'].map((skill, key) => {
                return (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all max-h-auto'>
            <div className='p-4'>
              <h3 className='text-gray-300 text-xl font-bold'>Shopping Cart</h3>
              <p className='mt-auto'>
                A basic shopping cart app where users can add products to their cart, proceed to checkout, and provide
                personal details like name, email, and mobile number. If the cart total exceeds a certain amount, users
                receive a discount.
              </p>
            </div>
            <div className='mt-auto'>
              {['HTML', 'CSS', 'Javascript'].map((skill, key) => {
                return (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all max-h-auto '>
            <div className='p-4'>
              <h3 className='text-gray-300 text-xl font-bold'>Fantasy Cricket App</h3>
              <p className='my-2'>
                A fun cricket simulation game where two players create teams by selecting batsmen, bowlers, and a
                wicketkeeper within a 100-point limit. After a toss, the game proceeds with batting and bowling, where
                random outcomes determine runs or outs. The team with the highest score wins.
              </p>
            </div>
            <div className='mt-auto'>
              {['HTML', 'CSS', 'JavaScript'].map((skill, key) => {
                return (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition-all max-h-auto '>
            <div className='p-4'>
              <h3 className='text-gray-300 text-xl font-bold'>User Data Management</h3>
              <p className='my-2'>
                A CRUD application built with React where users can manage personal details like name, email, and mobile
                number. It allows adding, viewing, updating, and deleting records with validation for duplicates.
                Utilizes React hooks and Tailwind CSS for a responsive and smooth user experience.
              </p>
            </div>
            <div className='mt-auto'>
              {['React', 'Tailwindcss'].map((skill, key) => {
                return (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
