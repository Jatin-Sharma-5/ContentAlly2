import React, { useEffect, useState } from 'react';
import { RedirectToSignIn, useUser } from '@clerk/nextjs';  // Import useUser from Clerk

function Page() {
  const [historyData, setHistoryData] = useState([]);
  const { user, isLoaded, isSignedIn } = useUser();  // Get the current user from Clerk

  useEffect(() => {
    // Only proceed if the user is signed in and data is loaded
    if (isLoaded && isSignedIn) {
      const userId = user.id; // Get the userId from Clerk
      fetchHistory(userId);
    }
  }, [isLoaded, isSignedIn, user]);

  // Fetch history data from the backend
  async function fetchHistory(userId: string) {
    try {
      const response = await fetch(`/api/history/${userId}`);
      const data = await response.json();
      setHistoryData(data); // Store the fetched data in state
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  }

  // If the user is not signed in or loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="container my-5 p-6 bg-white mx-5 border rounded-lg max-w-full">
      {/* Title Section */}
      <div className="mt-7 mb-8">
        <h1 className="text-3xl font-bold">History</h1>
        <h3 className="text-lg text-gray-600">
          Check your previous generated AI content from{' '}
          <span className="text-xl font-bold text-sky-500">Content Ally</span>
        </h3>
      </div>

      {/* Content Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-none">
          <thead className="bg-gray-100">
            <tr className="bg-sky-100">
              <th className="px-4 py-3 text-left text-lg font-bold border-b">TEMPLATE</th>
              <th className="px-4 py-3 text-left text-lg font-bold border-b">SEARCH</th>
              <th className="px-4 py-3 text-left text-lg font-bold border-b">AI RESPONSE</th>
              <th className="px-4 py-3 text-left text-lg font-bold border-b">DATE</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamically render the table rows */}
            {historyData.length > 0 ? (
              historyData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-700 border-b">{row}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 border-b">{row}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 border-b">{row}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 border-b">{row}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center py-4 text-sm text-gray-700">
                  No history data available.
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
