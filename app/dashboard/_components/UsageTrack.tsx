// 'use client';
// import { Button } from '@/components/ui/button';
// import { db } from '@/utils/db';
// import { AiOutput } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import { eq } from 'drizzle-orm';
// import React, { useEffect, useState } from 'react';

// function UsageTrack() {
//   const { user } = useUser();
//   const [result, setResult] = useState<any[]>([]); // Declare result state to hold fetched data

//   // Fetch data only when the user is available
//   useEffect(() => {
//     if (user) {
//       GetData(); 
//     }
//   }, [user]);

//   // Function to fetch the data from the database
//   const GetData = async () => {
//     try {
//       const resultData = await db
//         .select()
//         .from(AiOutput)
//         .where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

//       setResult(resultData); // Store the fetched data in the state
//       GetTotalUsage(resultData); // Pass the fetched data to GetTotalUsage function
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Function to calculate total usage
//   const GetTotalUsage = (result: any[]) => {
//     let total: number = 0;
//     result.forEach((element) => {
//       total = total + (Number(element.aiResponse?.length) || 0); // Ensure aiResponse exists and has a length
//     });
//     console.log(total); // Log total usage
//   };

//   return (
//     <>
//       <div className="flex flex-col items-start bg-gradient-to-r from-blue-600 to-red-400 text-white rounded-lg shadow-md px-4 py-1 w-[200px]">
//         {/* Label */}
//         <span className="text-sm font-medium mb-2">Credits</span>

//         {/* Progress Bar */}
//         <div className="flex items-center bg-white rounded-full h-2 w-full overflow-hidden shadow-inner mb-2">
//           <div
//             className="h-2 bg-orange-300 rounded-full transition-all"
//             style={{ width: '50%' }} // Static 50%, replace dynamically as needed
//           ></div>
//         </div>

//         {/* Usage Details */}
//         <h2 className="text-xs text-gray-200">3,500/10,000 credits used</h2>
//       </div>

//       {/* Action Button */}
//       <Button
//         variant={'secondary'}
//         className="bg-orange-100 text-primary rounded-lg shadow-md my-2 w-full"
//       >
//         GET MORE TOKENS
//       </Button>
//     </>
//   );
// }

// export default UsageTrack;
