import AstronomyCard from './AstronomyCard';

export default function AstronomyList({ data }) {
  return (
    <section className="mt-4 grid grid-cols-1 gap-4">
      {data.map((entry, i) => (
        <AstronomyCard key={i} entry={entry} />
      ))}
    </section>
  );
}