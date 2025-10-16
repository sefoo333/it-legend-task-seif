import React from 'react'

interface CheckBoxProps {
  name: string;
  event: () => void;
  index: boolean;
}

function CheckBox({ name, event, index }: CheckBoxProps) {
  return (
    <input
      type='radio'
      name={name}
      onChange={event}
      checked={index}
      className={
        `w-5 h-5 appearance-none border before:hidden checked:before:block bg-transparent relative 
        before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:left-1/2  
        before:-translate-1/2 before:top-1/2  border-gray-300 rounded`
      }
    />
  );
}

export default React.memo(CheckBox)