import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
// import { useResume } from './ResumeContext'; // Import the context

const ResumeInput = () => {
//   const { setResumeData } = useResume(); // Access the context

  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    skills: '',
    experience: '',
    education: '',
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Save input data to resume context
    setResumeData((prevData) => ({
      ...prevData,
      name: input.name,
      email: input.email,
      phone: input.phone,
      linkedIn: input.linkedIn,
      portfolio: input.portfolio,
      skills: input.skills.split(',').map(skill => skill.trim()), // Convert skills to an array
      experience: input.experience.split(',').map(exp => exp.trim()), // Convert experience to an array
      education: input.education.split(',').map(edu => edu.trim()), // Convert education to an array
    }));

    // Reset the form after submission
    setInput({
      name: '',
      email: '',
      phone: '',
      linkedIn: '',
      portfolio: '',
      skills: '',
      experience: '',
      education: '',
    });
  };

  return (
    <div>

   <Navbar/>
    <div className='flex flex-col md:flex-row max-w-7xl mx-auto p-8'>
      {/* Input Form Section */}
      <form onSubmit={submitHandler} className='bg-white shadow-md rounded-lg p-8 w-full md:w-1/2'>
        <h1 className='font-bold text-2xl text-center mb-6 text-blue-600'>Resume Input</h1>
        
        <div className='space-y-4'>
          {Object.keys(input).map((key) => (
            <div key={key}>
              <label className='block text-sm font-medium text-gray-700'>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type={key === 'email' ? 'email' : key === 'linkedIn' || key === 'portfolio' ? 'url' : 'text'}
                name={key}
                value={input[key]}
                onChange={changeEventHandler}
                placeholder={`Enter your ${key}`}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600'
              />
            </div>
          ))}
        </div>

        <button type='submit' className='w-full mt-6 bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-200'>
          Submit Resume
        </button>
      </form>

      {/* Display Submitted Data Section */}
      <div className='md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md mt-4 md:mt-0'>
        <h2 className='font-bold text-4xl mb-4 text-gray-800'>{input.name}</h2>
        <div className='space-y-2 grid-cols-2'>
            <div className=' flex flex-col  md:flex-row max-w-2xl space-x-60'>
            <div  >
            <p><strong>Portfolio:</strong> <a href={input.portfolio} target="_blank" rel="noopener noreferrer" className='text-blue-600'>{input.portfolio}</a></p>
            <p><strong>LinkedIn:</strong> <a href={input.linkedIn} target="_blank" rel="noopener noreferrer" className='text-blue-600'>{input.linkedIn}</a></p>
            </div>
            <div className='px-16'>
            <p className='flex'><strong>Email:</strong> {input.email}</p>
            <p className='flex'><strong>Phone:</strong> {input.phone}</p>
            </div>
            </div>
            <hr></hr>
            <p className='py-6'><strong>Skills:</strong> {input.skills.split(',').map(skill => skill.trim()).join(', ')}</p>
          <p><strong>Experience:</strong> {input.experience.split(',').map(exp => exp.trim()).join(', ')}</p>
          <p><strong>Education:</strong> {input.education.split(',').map(edu => edu.trim()).join(', ')}</p>
        </div>
        <button type='submit' className='w-full mt-60 bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-200'>
          Download
        </button>
      </div>
    </div>
 
    </div>
  );
};

export default ResumeInput;
