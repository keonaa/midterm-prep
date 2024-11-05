"use client";
import { useState } from "react";
import Header from './components/organisms/Header';
import AstronomySection from './components/organisms/AstronomySection';

export default function Home() {
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchAstronomyData() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAstronomyData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const clearData = () => {
    setAstronomyData(null);
  };

  return (
    <div className="m-8 flex flex-col items-center">
      <Header onFetch={fetchAstronomyData} onClear={clearData} />
      <AstronomySection loading={loading} error={error} data={astronomyData} />
    </div>
  );
}