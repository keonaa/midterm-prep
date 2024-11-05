import { useState } from 'react';

export default function AstronomyCard({ entry }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="border rounded-lg p-4 shadow mx-auto max-w-md">
      <img src={entry.url} alt={entry.title} className="w-full h-auto rounded" />
      <h3 className="text-xl font-semibold mt-2">{entry.title}</h3>
      {isExpanded ? (
        <>
          <p className="text-gray-700">{entry.explanation}</p>
          <button onClick={toggleExpand} className="text-blue-500 underline">
            Read Less
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-700">{entry.explanation.substring(0, 100)}...</p>
          <button onClick={toggleExpand} className="text-blue-500 underline">
            Read More
          </button>
        </>
      )}
      <p className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString()}</p>
    </article>
  );
}