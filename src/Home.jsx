import axios from 'axios';
import { useState, useEffect } from 'react';


function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //601205271578017813
  useEffect(() => {
    const fetchData = async () => {
      try {
        // api call
        const apiUrl = import.meta.env.DEV 
          ? 'http://localhost:3001/api/bot-stats/601205271578017813'
          : '/api/bot-stats?botId=601205271578017813';
        
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let value = "Fetching";

  if (data != null) {
    value = data.server_count;
  }

    return(
        <>
        <style>{`
          @keyframes dotPulse {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
          }
          
          .loading-dots::after {
            content: '...';
            animation: dotPulse 1.5s infinite;
            display: inline-block;
            width: 20px;
            text-align: left;
          }
        `}</style>
        <div className="contain">
            <div className="flex items-center justify-center gap-2">
      
  <div
    className="w-4 h-4 rounded-full border-2 border-black"
    style={{
      animation: "fadeStatus 3s ease-in-out infinite",
    }}
    title="Online"
  />
  <p className="descr">
    {loading ? (
      <span className="loading-dots">{value}</span>
    ) : (
      `Active on ${JSON.stringify(value, 2, null)} servers`
    )}
  </p>
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