import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from '../assets/img/vendor-2.jpg'

const Navbar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const username = "admin"; // Replace with your actual username
      const password = "admin"; // Replace with your actual password

      const response = await fetch(
        "http://local.tourism//api/menu_items/main",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div >
      <img src={logoImage} alt="" />
      <ul className="nav">
        {data.map((item) => (
          <li key={item.key} className="nav-item">
            <a href="#" className="nav-link">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
