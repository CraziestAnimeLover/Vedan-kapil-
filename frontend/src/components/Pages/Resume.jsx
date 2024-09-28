import React from 'react';
import Navbar from '../shared/Navbar';

const Resume = () => {
  const personalInfo = {
    fullname: 'Your Name',
    email: 'youremail@example.com',
    phoneNumber: '123-456-7890',
    linkedIn: 'linkedin.com/in/yourprofile',
    portfolio: 'yourportfolio.com'
  };

  const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'];

  const experience = [
    {
      title: 'Software Developer',
      company: 'Your Company',
      location: 'City, State',
      duration: 'Jan 2023 - Present',
      description: 'Developing and maintaining web applications using React and Node.js.'
    },
    {
      title: 'Intern',
      company: 'Another Company',
      location: 'City, State',
      duration: 'Jun 2022 - Dec 2022',
      description: 'Assisted in building features for a web application and learned about software development practices.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Your University',
      duration: 'Aug 2019 - May 2023',
      details: 'Relevant courses: Data Structures, Web Development, Database Management.'
    }
  ];

  return (
    <div>
    <div className='max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-lg'>
       
      <h1 className='text-2xl font-bold mb-4'>{personalInfo.fullname}</h1>
      <p className='text-gray-600'>{personalInfo.email} | {personalInfo.phoneNumber}</p>
      <p className='text-gray-600'>LinkedIn: {personalInfo.linkedIn}</p>
      <p className='text-gray-600'>Portfolio: {personalInfo.portfolio}</p>

      <h2 className='text-xl font-semibold mt-6'>Skills</h2>
      <ul className='list-disc list-inside'>
        {skills.map((skill, index) => (
          <li key={index} className='text-gray-700'>{skill}</li>
        ))}
      </ul>

      <h2 className='text-xl font-semibold mt-6'>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className='mb-4'>
          <h3 className='font-medium'>{exp.title} - {exp.company}</h3>
          <p className='text-gray-500'>{exp.location} | {exp.duration}</p>
          <p className='text-gray-600'>{exp.description}</p>
        </div>
      ))}

      <h2 className='text-xl font-semibold mt-6'>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className='mb-4'>
          <h3 className='font-medium'>{edu.degree}</h3>
          <p className='text-gray-500'>{edu.institution} | {edu.duration}</p>
          <p className='text-gray-600'>{edu.details}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Resume;
