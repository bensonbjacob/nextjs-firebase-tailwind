import React, { useEffect, useState } from 'react';
import Modal from './Modal';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 bg-inherit border-b border-solid border-white'>
        <h1 className='text-3xl sm:text-6xl select-none'>
          ToDo List
        </h1>
        <p
          onClick={() => setOpenModal(true)}
          className='text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer'
        >
          User Icon
        </p>
      </div>
    </>
  );
}
