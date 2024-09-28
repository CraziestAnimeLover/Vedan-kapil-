import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const ServicePage = () => {
  return (
    <div>
        <Navbar/>
       <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h1>
            
            <div className="flex justify-center mb-10">
                <a href="#schedule" className="bg-blue-600 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Schedule Now
                </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Link to="/newsfeed">
                <ServiceButton title="News feed" url="https://example.com/placement-info" />
                </Link>
                <Link to='/service/student'>
                <ServiceButton title="Placement" url="https://example.com/placement-info" />
                </Link>
                <ServiceButton title="Industry" to="/jobs" />
                <ServiceButton title="Library" url="https://example.com/company-info" />
                <ServiceButton title="Blood Help" url="https://example.com/blood-donations" />
                <ServiceButton title="Lost n Found" url="https://example.com/institute-overview" />
            </div>
        </div>
    </div>
  )
}

const ServiceButton = ({ title, url }) => (
    <a 
        // href={url} 
        
        className="block bg-white text-gray-800 text-center py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100"
    >
        <h2 className="text-2xl font-semibold">{title}</h2>
    </a>
);

export default ServicePage
