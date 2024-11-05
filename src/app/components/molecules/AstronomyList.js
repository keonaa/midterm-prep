import AstronomyCard from './AstronomyCard';

export default function LaunchList({ data }) {
    return (
      <section className="mt-4 grid grid-cols-1 gap-4">
        {data.map((launch, index) => (
          <AstronomyCard key={index} launch={launch} />
        ))}
      </section>
    );
  }