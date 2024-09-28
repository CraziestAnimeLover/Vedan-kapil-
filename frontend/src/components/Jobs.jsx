import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const Jobs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the filter visibility
  const toggleFilter = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5 px-4 md:px-6">

        <div className="flex flex-col md:flex-row gap-6 ">

          {/* Mobile toggle button */}
          <div className="block md:hidden mb-4">
          <button
  onClick={toggleFilter}
  className="w-32 md:w-40 bg-blue-600 text-white rounded p-2 transition duration-200 hover:bg-blue-500"
>
  {isMobileMenuOpen ? "No Filters" : "Filters"}
</button>
          </div>

          {/* FilterCard will take full width on small screens, and 1/4 on medium+ */}
          <div className={`w-full md:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <FilterCard />
          </div>

          {/* Jobs List */}
          {jobsArray.length <= 0 ? (
            <span>Jobs not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              {/* Responsive grid layout for job cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobsArray.map((job, index) => (
                  <Job key={index} job={job} />
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Jobs;
