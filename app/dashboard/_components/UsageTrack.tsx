import React from 'react';

function UsageTrack() {
  return (
    <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-md px-3 py-1 w-[160px] h-[32px]">
      {/* Label */}
      <span className="text-xs font-medium mr-3">Credits</span>
      
      {/* Progress Bar Container */}
      <div className="flex items-center bg-white rounded-full h-2 flex-grow overflow-hidden shadow-inner">
        {/* Progress Bar */}
        <div
          className="h-2 bg-teal-300 rounded-full transition-all"
          style={{ width: '50%' }}
        ></div>
      </div>
    </div>
  );
}

export default UsageTrack;
