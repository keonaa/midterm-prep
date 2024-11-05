export default function AstronomyCard({ launch }) {
    return (
        <article className="border rounded-lg p-4 shadow mx-auto max-w-md min-w-[600px] flex flex-col items-center">
          <h3 className="text-xl font-semibold">{launch.name}</h3>
          {launch.links.patch && launch.links.patch.small && (
            <img 
                src={launch.links.patch.small} 
                alt={`Patch for ${launch.name}`} 
                className="w-auto h-auto max-h-48" 
            />
          )}
          <p className="text-gray-700">{launch.details || "No details available."}</p>
          <p className="text-sm text-gray-500">Launch Date: {new Date(launch.date_utc).toLocaleDateString()}</p>
          <p className="text-sm text-gray-500">Rocket: {launch.rocket}</p>
          <p className="text-sm text-gray-500">Success: {launch.success ? "Yes" : "No"}</p>
        </article>
      );
    }