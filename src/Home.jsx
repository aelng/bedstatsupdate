import axios from 'axios';
import { useState, useEffect } from 'react';


function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gianpena.xyz/servers');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    return(
        <>
        <div className="contain">
            <div className="flex items-center justify-center gap-2">
  <div
    className="w-4 h-4 rounded-full border-2 border-black"
    style={{
      animation: "fadeStatus 3s ease-in-out infinite",
    }}
    title="Online"
  />
  <p className="descr">Active on {JSON.stringify(data, 2, null)} servers</p>
</div>
            <div>
                <h1 className="heading">
                    BedStats<span className="blinker"></span>
                </h1>
            </div>
            <div>
                <p className="descr">
                    A Bedwars statistics bot that delivers immediate, real time results.
                </p>
            </div>
        </div>
      </>
    );
}

export default Home;