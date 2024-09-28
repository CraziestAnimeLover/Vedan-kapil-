import React from 'react';
import { Badge } from "@/components/ui/badge";

export const LatestJobCards = () => {
  return (
    <div className='p-4 sm:p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
      
      {/* Company and Location */}
      <div>
        <h1 className='font-medium text-md sm:text-lg'>
          Company Name
        </h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>

      {/* Job Title and Description */}
      <div>
        <h1 className='font-bold text-md sm:text-lg my-2'>
          Job Title
        </h1>
        <p className='text-sm text-gray-600'>
          Job Description
        </p>
      </div>

      {/* Badges */}
      <div className='flex flex-wrap items-center gap-2 mt-4'>
        <Badge className='text-blue-700 font-bold' variant="ghost">
          Positions
        </Badge>
        <Badge className='text-[#F83002] font-bold' variant="ghost">
          Part-Time
        </Badge>
        <Badge className='text-[#7209b7] font-bold' variant="ghost">
          LPA
        </Badge>
      </div>
      
    </div>
  );
};
