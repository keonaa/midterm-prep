"use client";

import { useState } from "react";
import Header from './components/organisms/Header';
import AstronomySection from './components/organisms/AstronomySection';

const NUM_LAUNCHES_TO_FETCH = 5; 

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectRandomLaunches = (data) => {
    const randomLaunches = [];
    while (randomLaunches.length < NUM_LAUNCHES_TO_FETCH) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!randomLaunches.includes(data[randomIndex])) {
        randomLaunches.push(data[randomIndex]);
      }
    }
    return randomLaunches;
  };

  const loadRandomLaunches = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://api.spacexdata.com/v5/launches");
      if (!response.ok) {
        throw new Error("Failed to fetch launches");
      }

      const data = await response.json();
      const randomLaunches = selectRandomLaunches(data);
      setLaunches(randomLaunches); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => setLaunches([]);

  return (
    <div className="m-8 flex flex-col items-center">
      <Header onFetch={loadRandomLaunches} onClear={clearData} />
      <AstronomySection loading={loading} error={error} data={launches} />
    </div>
  );
}