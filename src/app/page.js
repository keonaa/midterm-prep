"use client";
import { useState } from "react";

//TODO
// - add button
// - function to fetch data
// - function to add data to state
// - make it responsive
// - display data
// - function to clear data
// - component for empty state
// - component for data state
// - error handling if the data doesn't come back (bonus)

//side note
// use atomic principles when coding

export default function Home() {
  // if useState (isn't)!null, probably fetching or loading data, or have data
  // if useState ==== data, we can display our data
  const [astronomyData, setAstronomyData ] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchAstronomyData() {
    //fetchData
    setLoading(true);
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5");

    const data = await response.json();

    setAstronomyData(data);
    setLoading(false);
  }

  const DisplayAstronomyData = () => {
    // display if we have data
    // loading state
    // fulfilled state (data exists)
    // empty state (!data)

    // let formattedData = JSON.stringify(astronomyData);
    if(loading) return <div>Loading</div>

    if(astronomyData) {
    const dataThatIsFormattedForDisplay = [];
    astronomyData.forEach((entry, i) => {
      dataThatIsFormattedForDisplay.push(
      <article key={i}>
        <img src={entry.url}/>
        <h3>{entry.title}</h3>
        <p>{entry.explanation}</p>
      </article>
      );

    })
    return <section>{dataThatIsFormattedForDisplay}</section>;

  }
    return (<div>Empty, no data fetched</div>)
  };

  const Header = () => {
    // build the UI that grabs data
    return (
    <header>
      welcome to midterm prep!
      <br/>
      <button 
        onClick={fetchAstronomyData} 
        className="border-black border-solid border-2 p-2 ">
          fetch stuff 
      </button>
    </header>
    );
  };


  return (
    <div className='m-8'>
      <Header />
      <DisplayAstronomyData />
   </div>
  );

}
