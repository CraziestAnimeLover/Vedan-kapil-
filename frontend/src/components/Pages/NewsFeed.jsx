// src/components/NewsFeed.js
import React from 'react';
import Navbar from '../shared/Navbar';

const newsArticles = [
    {
        id: 1,
        title: 'New Placement Opportunities Available!',
        description: 'Explore the latest job openings and career resources.',
        url: 'https://example.com/news/placement-opportunities',
        image: 'https://via.placeholder.com/400x200?text=Placement+Opportunities'
    },
    {
        id: 2,
        title: 'Student Resources Updated',
        description: 'Check out the newly added resources for students.',
        url: 'https://example.com/news/student-resources',
        image: 'https://via.placeholder.com/400x200?text=Student+Resources'
    },
    {
        id: 3,
        title: 'Collaboration with Local Companies',
        description: 'Learn about our partnerships with leading companies in the industry.',
        url: 'https://example.com/news/company-collaboration',
        image: 'https://via.placeholder.com/400x200?text=Company+Collaboration'
    },
    {
        id: 4,
        title: 'Institute Admissions Open',
        description: 'Apply now for the upcoming academic year.',
        url: 'https://example.com/news/admissions-open',
        image: 'https://via.placeholder.com/400x200?text=Admissions+Open'
    },
    {
        id: 5,
        title: 'Blood Donation Drive Scheduled',
        description: 'Join us for the upcoming blood donation drive and save lives.',
        url: 'https://example.com/news/blood-donation',
        image: 'https://via.placeholder.com/400x200?text=Blood+Donation'
    }
];

const NewsFeed = () => {
    return (
        <div>
            <Navbar/>
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Latest News</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
        </div>
        </div>
    );
};

const NewsCard = ({ article }) => (
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <a 
                href={article.url} 
                className="text-blue-500 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                Read more
            </a>
        </div>
    </div>
);

export default NewsFeed;
