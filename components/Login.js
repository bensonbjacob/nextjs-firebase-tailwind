import React from 'react';

export default function Login() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center text-xs sm:text-sm gap-2 sm:gap-4'>
      <h1 className='font-extrabold text-2xl sm:text-4xl'>Login</h1>
      <input
        type='email'
        placeholder='Email'
        className='outline-none text-slate-900 p-2 w-full max-w-[30ch]'
      />
      <input
        type='password'
        placeholder='Password'
        className='outline-none text-slate-900 p-2 w-full max-w-[30ch]'
      />
    </div>
  );
}
