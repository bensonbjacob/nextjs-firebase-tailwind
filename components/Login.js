import React from 'react';

export default function Login() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center text-xs sm:text-sm gap-2 sm:gap-4'>
      <h1 className='font-extrabold text-2xl sm:text-4xl select-none'>
        Login
      </h1>
      <input
        type='email'
        placeholder='Email'
        className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-green-300'
      />
      <input
        type='password'
        placeholder='Password'
        className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-green-300'
      />
      <button className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
        <h2 className='relative z-20'>Submit</h2>
      </button>
    </div>
  );
}
