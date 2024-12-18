"use client";
import { db } from '@/utils/db';
import { AiOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq, desc } from 'drizzle-orm';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

export interface History {
  templateSlug: string;
  id: number;
  formData: string;
  aiResponse: string | null;
  createdBy: string;
  createdAt: string | null;
}

function Page() {
  const { user } = useUser();
  const [history, setHistory] = useState<History[]>([]);

  // Fetching history from database
  const GetHistory = async () => {
    try {
      if (!user?.primaryEmailAddress?.emailAddress) return;

      const result = await db
        .select()
        .from(AiOutput)
        .where(eq(AiOutput.createdBy, user.primaryEmailAddress.emailAddress))
        .orderBy(desc(AiOutput.id));

      // Formatting the fetched result
      const formattedResult = result.map((item) => ({
        ...item,
        id: Number(item.id),
        createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : null,
      }));

      setHistory(formattedResult as History[]);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  // Calling GetHistory when the user is available
  useEffect(() => {
    if (user) {
      GetHistory();
    }
  }, [user]);

  return (
    <div className="gap-y-2 gap-x-2 bg-white mx-2 sm:mx-5 p-4 sm:p-6 border rounded-lg max-w-screen mt-4">
      <div className="mt-4 mb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">History</h1>
        <h3 className="text-sm sm:text-lg text-gray-600 mt-2">
          Check your previous generated AI content from{' '}
          <span className="text-base sm:text-xl font-bold text-sky-500">Content Ally</span>
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] sm:min-w-full table-auto border-collapse border border-none">
          <thead className="bg-gray-100">
            <tr className="bg-sky-100">
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-lg font-bold border-b">
                TEMPLATE
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-lg font-bold border-b">
                SEARCH
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-lg font-bold border-b">
                AI RESPONSE
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-lg font-bold border-b">
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-3 sm:text-sm text-primary text-2xl font-bold uppercase border-b">
                    {item?.templateSlug}
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 border-b">
                    {item.formData}
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 border-b">
                    {item.aiResponse && item.aiResponse.length > 60
                      ? `${item.aiResponse.slice(0, 120)}...`
                      : item.aiResponse}
                  </td>
                  <td className="px-2 text-center whitespace-nowrap sm:px-4 py-3 text-xs sm:text-sm text-gray-700 border-b">
                    {item.createdAt ? moment(item.createdAt).format('MM-DD-YYYY') : 'N/A'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 border-b text-center"
                  colSpan={5}
                >
                  No history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
