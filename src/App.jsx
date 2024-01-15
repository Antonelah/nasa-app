import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState(null);

  /*useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      );
      if(!response.ok) {
        throw new Error("Network response was NOK!"); //NOK --> Not ok!
      }
      const nasaData = await response,json();
      setData(nasaData);
      } catch(error) {
        throw new Error("Error while fetching NASA data: " + error);
      }
    };
    fetchNasaData();
  }, []); */

  

  // ili:

  useEffect(() => {
      fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => response.json())
      .then(nasaData => {
        setData(nasaData);
      })
  }, []);

  if(!data) {
    return <div>Loading NASA data...</div>
  }
  
const {title, url, explanation} = data;
  return (
    <div className="app">
      <h1>NASA - picture of the day</h1>
      <h3>{title}</h3>
      <img src={url} alt="NASA-picture of the day" width={800}/>
      <p>{explanation}</p>
    </div>
  )
}

export default App;
