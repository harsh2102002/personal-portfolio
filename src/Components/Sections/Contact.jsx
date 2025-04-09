import { useState } from 'react';

export const Contact = () => {
  const [formData, setFromData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      setFromData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setError(err.message || 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact'>
      <div className='min-h-screen flex items-center justify-center pt-20'>
        <div className='px-4 w-150 flex flex-col gap-8'>
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            Get In Touch
          </h2>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='relative'>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={(e) => setFromData({ ...formData, name: e.target.value })}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder='Enter your name'
              />
            </div>

            <div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={(e) => setFromData({ ...formData, email: e.target.value })}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder='example@gmail.com'
              />
            </div>

            <div className='relative'>
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                onChange={(e) => setFromData({ ...formData, message: e.target.value })}
                rows={5}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder='Your message'
              />
            </div>

            {error && <div className='text-red-500 text-sm text-center'>{error}</div>}

            {success && <div className='text-green-500 text-sm text-center'>Message sent successfully!</div>}

            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className='mx-10'>
            <div className='flex items-center justify-center gap-2'>
              <p>Connect with me on:</p>
              <a href='https://www.linkedin.com/in/-harshshah/' target='_blank'>
                <img src='linkedin.svg' alt='Linkedin_logo' className='h-[30px] w-[30px]' />
              </a>
              <a href='https://github.com/harsh2102002' target='_blank'>
                <img src='github.svg' alt='Github_logo' className='h-[25px] w-[25px] bg-white' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
