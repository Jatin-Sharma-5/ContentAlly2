'use client';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AiOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';

function UsageTrack() {
  const { user } = useUser();
  const [usageData, setUsageData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {

        const result = await db
          .select()
          .from(AiOutput)
          .where(eq(AiOutput.createdBy, user.primaryEmailAddress.emailAddress)); 
        setUsageData(result); 
      } else {
        setUsageData([]); // Fallback if emailAddress is undefined
      }
    };

    fetchData(); // Run the fetch operation on component mount
  }, [user]);

  const GetTotalUsage = () => {
    let total: number = 0;
    usageData.forEach((element) => {
      total = total + Number(element.aiResponse.length) 
    });
  
  };
  console.log(result);

  return (
    <>
      <div className="flex flex-col items-start bg-gradient-to-r from-blue-600 to-red-400 text-white rounded-lg shadow-md px-4 py-1 w-[200px]">
        {/* Label */}
        <span className="text-sm font-medium mb-2">Credits</span>

        {/* Progress Bar */}
        <div className="flex items-center bg-white rounded-full h-2 w-full overflow-hidden shadow-inner mb-2">
          <div
            className="h-2 bg-orange-300 rounded-full transition-all"
            style={{ width: '50%' }} // Static 50%, replace dynamically as needed
          ></div>
        </div>

        {/* Usage Details */}
        <h2 className="text-xs text-gray-200">3,500/10,000 credits used</h2>
      </div>

      {/* Action Button */}
      <Button
        variant={'secondary'}
        className="bg-orange-100 text-primary rounded-lg shadow-md my-2 w-full"
      >
        GET MORE TOKENS
      </Button>
    </>
  );
}

export default UsageTrack;
