import React from 'react';

export default function TodoCard(props) {
  const {
    children,
    edit,
    handleAddEdit,
    edittedValue,
    setEdittedValue,
    todoKey,
    handleEditTodo,
    handleDelete,
  } = props;

  return (
    <div className='p-2 relative sm:p-3 flex items-stretch border border-solid border-white'>
      <div className='flex flex-1'>
        {!(edit === todoKey) ? (
          <>{children}</>
        ) : (
          <input
            className='bg-inherit text-white outline-none flex-1'
            value={edittedValue}
            onChange={(e) => setEdittedValue(e.target.value)}
          />
        )}
      </div>
      <div className='flex items-center'>
        {edit === todoKey ? (
          <p
            onClick={handleEditTodo}
            className='px-2 duration-300 hover:scale-150  cursor-pointer'
          >
            Check
          </p>
        ) : (
          <p
            onClick={handleAddEdit(todoKey)}
            className='px-2 duration-300 hover:rotate-45 cursor-pointer '
          >
            Edit
          </p>
        )}
        <p
          onClick={handleDelete(todoKey)}
          className='px-2 duration-300 hover:scale-150  cursor-pointer'
        >
          Delete
        </p>
      </div>
    </div>
  );
}
