import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className='lg:w-full  bg-white p-4 sm:p-2 rounded-md shadow-md'>
      <h1 className='font-bold text-lg sm:text-xl mb-1'>Filter Jobs</h1>
      <hr className='my-3' />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="mb-4">
            <h1 className='font-semibold text-md sm:text-lg mb-2'>{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={itemId} className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId} className='text-sm sm:text-base'>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
