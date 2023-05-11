import React, { useContext, useState } from "react";
import { Layout } from "./Layout";

export const Home = () => {
  const [from, seTFrom] = useState("");
  const [to, setTo] = useState("");
  const [flightDetails, setFlightDetails] = useState([]);
  const [allFlightDetails, setAllFlightDetails] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/flight/price", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
      }),
    });
    const data = await res.json();
    if (data.success === false) {
      setFlightDetails([]);
      alert(data.message);
    }
    setAllFlightDetails(data.flightdetails);
    setFlightDetails([...data.flightdetails.allflights]);
  };
  return (
    <Layout>
      <div className="form-section">
        <form method="POST" onSubmit={handleSubmit}>
          <h1>Check all flights fare</h1>
          <div className="fill-section">
            <input
              type="text"
              name=""
              id=""
              placeholder="from "
              value={from}
              onChange={(e) => {
                seTFrom(e.target.value);
              }}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="to "
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
            <input type="date" min="2023-05-08" />
            <input type="submit" value={"Check Fare"} className="btn" />
          </div>
        </form>
        <div className="show-flightdetails">
          <h2>Flight Fares</h2>
          <div className="stod">
            <h3>from :{allFlightDetails && allFlightDetails.from}</h3>
            <p>====</p>
            <h3>to :{allFlightDetails && allFlightDetails.to}</h3>
          </div>
          <div className="flight-fare">
            <div>
              <h3>flight name</h3>
              {flightDetails &&
                flightDetails.map((res, index) => {
                  return <p>{res.name}</p>;
                })}
            </div>
            <div>
              <h3>flight fare</h3>
              {flightDetails &&
                flightDetails.map((res, index) => {
                  console.log(res);
                  return <p>Rs {res.price}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
