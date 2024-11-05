import Loader from '../atoms/Loader';
import Error from '../atoms/Error';
import AstronomyList from '../molecules/AstronomyList';

export default function AstronomySection({ loading, error, data }) {
  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!data) return <div>No data fetched</div>;

  return <AstronomyList data={data} />;
}