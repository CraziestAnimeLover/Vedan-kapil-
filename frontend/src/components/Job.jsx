import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();
    const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    };

    return (
        <div className='p-8 md:p-5 rounded-md shadow-xl bg-White border border-gray-100 '>
            {/* Top Section with Date and Bookmark */}
            <div className='flex items-center justify-between'>
                <p className='text-xs sm:text-sm text-gray-500'>
                    {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            {/* Company Information */}
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-2 sm:p-4 md:p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-sm sm:text-md md:text-lg'>{job?.company?.name}</h1>
                    <p className='text-xs sm:text-sm text-gray-500'>India</p>
                </div>
            </div>

            {/* Job Title and Description */}
            <div>
                <h1 className='font-bold text-sm sm:text-md md:text-lg my-2'>{job?.title}</h1>
                <p className='text-xs sm:text-sm text-gray-600'>{job?.description}</p>
            </div>

            {/* Badges Section */}
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position} Positions</Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">{job?.jobType} Frontend</Badge>
                <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary} LPA</Badge>
            </div>

            {/* Buttons */}
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Button onClick={() => navigate(`/description/${jobId}`)} variant="outline" className="w-full sm:w-auto">
                    Details
                </Button>
                <Button className="bg-[#7209b7] w-full sm:w-auto">Save For Later</Button>
            </div>
        </div>
    );
};

export default Job;
