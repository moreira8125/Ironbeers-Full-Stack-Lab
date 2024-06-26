/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/beers")
      .then((result) => {
        setBeers(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div>
        {beers.map((oneBeer) => {
          return (
            <div key={oneBeer._id}>
              <Link to={`/beers/${oneBeer._id}`}>
                <img
                  src={oneBeer.image_url}
                  alt=""
                  style={{ width: "120px" }}
                />
                <h3>{oneBeer.name}</h3>
                <h4>{oneBeer.tagline}</h4>
                <p>
                  Created by:
                  {oneBeer.contributed_by}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeersPage;
