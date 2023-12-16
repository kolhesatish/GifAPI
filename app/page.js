"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "./context/AuthContext";
import Spinner from "./components/Spinner";
import GiphyList from "./components/GiphyList";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import axios from "axios";

const Page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [giphyData, setGiphyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/trending`,
          {
            params: {
              api_key: API_KEY,
              limit: 100,
            },
          }
        );
        setGiphyData(response.data.data);
        setFilteredData(response.data.data); 
      } catch (error) {
        console.error("Error fetching Giphy data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase().trim();
    setSearchQuery(query);
    const keywords = query.split(" ");
    const filtered = giphyData.filter((gif) =>
      keywords.every((keyword) =>
        gif.title.toLowerCase().includes(keyword)
      )
    );
    setFilteredData(filtered);
  };

  const handleNextClick = () => {
    const nextPageIndex = (currentPage + 10) % giphyData.length;
    setCurrentPage(nextPageIndex);
  };

  const handlePrevClick = () => {
    const prevPageIndex =
      currentPage - 10 < 0
        ? giphyData.length + (currentPage - 10)
        : currentPage - 10;
    setCurrentPage(prevPageIndex);
  };

  return (
    <div className="bg-white p-8">
      {loading ? (
        <Spinner />
      ) : user ? (
        <>
          <p className="text-xl font-semibold mb-4">
            Welcome, {user.displayName}❤️
          </p>
          <SearchBar
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />
          <GiphyList
            filteredData={filteredData.slice(currentPage, currentPage + 10)}
          />
          <Pagination
            currentPage={currentPage}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
            disablePrev={currentPage === 0}
          />
        </>
      ) : (
        <p className="text-xl">
          "Embark on a visual journey through the enchanting world of GIFs – simply log in here to witness the magic!"🙃
        </p>
      )}
    </div>
  );
};

export default Page;
