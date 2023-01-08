import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Main = () => {
  const [url, seturl] = useState('');

  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a99cbd535cf5f0263152d4c92d6fe9aa&hash=3c4b794ce017c363cc7f8fc98bf1b7eb');
      setItem(res.data.data.results);
    };
    fetch();
  }, []);


  console.log(item);
  const SearchInput = async (search) => {


    const { data } = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${
        search || "thor"
      }&ts=1&apikey=a99cbd535cf5f0263152d4c92d6fe9aa&hash=3c4b794ce017c363cc7f8fc98bf1b7eb`
    );

    setData(data.data.results);
  };

  return (
    <>
      <div className="header">
        <div className="background">
          <img src="./Images/background.png" alt="" />
        </div>
        <div className="search-bar">
          <img className="header__logo" src="./Images/logo.png" alt="logo" />
          <input
            type="search"
            placeholder="Search Here"
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => SearchInput(search)}>Search Marvel</button>
        </div>
      </div>
      <div className="content">
        {(data) ? item.map((item)=> 
        <div
          className="card"
          key={item.id}
          onClick={() => Navigate(`/${item.id}`)}
        >
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt=""
          />
          <div className="title">
            <h3>{item.name}</h3>
          </div>
        </div>
        
        ) : (


          <Card data={data}  />

        )}

       


      </div>
    </>
  );
};
