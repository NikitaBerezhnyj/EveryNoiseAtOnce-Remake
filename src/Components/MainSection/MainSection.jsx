import React, { useState, useEffect } from "react";
import data from "../../Database/Genres.json";
import "./MainSection.css";

export default function MainSection() {
  const [typeSort, setTypeSort] = useState("name");
  const [activeBookmark, setActiveBookmark] = useState(
    localStorage.getItem("activeBookmark") || null
  );
  const [crossedGenres, setCrossedGenres] = useState(() => {
    const storedGenres = localStorage.getItem("crossedGenres");
    return storedGenres ? JSON.parse(storedGenres) : [];
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);

  useEffect(() => {
    // Позначаємо класом "crossed" жанри, які зберігаються в localStorage
    crossedGenres.forEach((genre) => {
      handleCrossedGenre(genre);
    });
  }, []);

  const linksync = (url, index, genreName) => {
    const spotifyElement = document.getElementById("spotify");
    var headerOffset = 150;
    var elementPosition = spotifyElement.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    document
      .getElementById("spotifyLink")
      .setAttribute("href", url.split("=")[1]);
  };

  const sortData = (type, items) => {
    const sorted = [...items].sort((a, b) => {
      if (type === "name") {
        return a.name.localeCompare(b.name);
      } else if (type === "color") {
        return a.color.toLowerCase().localeCompare(b.color.toLowerCase());
      } else if (type === "popularity") {
        return a.popularity_num - b.popularity_num;
      }
      return 0;
    });
    return sorted;
  };

  const handleCrossedGenre = (genreName) => {
    const genre = document.getElementById(genreName);
    if (genre) {
      genre.classList.add("crossed");
    }
  };

  const handleBookmarkClick = (genreName) => {
    if (activeBookmark !== genreName) {
      setActiveBookmark(genreName);
      localStorage.setItem("activeBookmark", genreName);
    } else {
      setActiveBookmark(null);
      localStorage.removeItem("activeBookmark");
    }
  };

  const searchByWord = () => {
    const searchTerm = document
      .getElementById("search-line")
      .value.toLowerCase();
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setSearchNotFound(results.length === 0);
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      setSearchResults([]);
      setSearchNotFound(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchByWord();
    }
  };

  const randomGenre = () => {
    const randomGenreIndex = Math.floor(Math.random() * data.length);
    const randomGenre = data[randomGenreIndex];
    const spotifyLink = randomGenre.spotify_link;

    document.getElementById("spotify").src = spotifyLink;
    document.getElementById("spotifyLink").setAttribute("href", spotifyLink);

    const spotifyElement = document.getElementById("spotify");
    var headerOffset = 150;
    var elementPosition = spotifyElement.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="func-container">
          <div className="func-sort-container">
            <span>sort by</span>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setTypeSort(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="popularity">Popularity</option>
              <option value="color">Color</option>
            </select>
          </div>
          <button
            className="func-btn"
            onClick={() => {
              const activeBookmarkElement = document.getElementById(
                activeBookmark.replace(/\s+/g, "")
              );
              if (!activeBookmarkElement) return;
              activeBookmarkElement.scrollIntoView({ behavior: "smooth" });
            }}
            disabled={!activeBookmark}
          >
            Scroll to bookmark
          </button>
          <button className="func-btn" onClick={randomGenre}>
            Get random genre
          </button>
          <div className="func-search">
            <input
              id="search-line"
              type="text"
              placeholder="keyword for genre"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={searchByWord}>Search</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                {searchNotFound ? (
                  <tr>
                    <td colSpan="4">
                      <h2>Not found :(</h2>
                    </td>
                  </tr>
                ) : (
                  (searchResults.length > 0
                    ? sortData(typeSort, searchResults)
                    : sortData(typeSort, data)
                  ).map((item, index) => (
                    <tr
                      key={index}
                      id={item.name.replace(/\s+/g, "")}
                      valign="top"
                      className="animated-row"
                    >
                      <td align="right" className="note">
                        <div
                          className={`bookmark ${
                            item.name === activeBookmark ? "active" : ""
                          }`}
                          onClick={() => handleBookmarkClick(item.name)}
                        ></div>
                      </td>
                      <td align="right" className="note">
                        {index + 1}
                      </td>
                      <td>
                        <a
                          href={item.spotify_link}
                          className="note"
                          target="spotify"
                          title="See this playlist"
                          onClick={() => {
                            linksync(item.spotify_link, index, item.name);
                            handleCrossedGenre(
                              item.name.replace(/\s+/g, "") + "-title"
                            );
                          }}
                        >
                          &#x260A;
                        </a>
                      </td>
                      <td className="note">
                        <a
                          href={item.spotify_link_open}
                          title="Open playlist in Spotify"
                          style={{ color: item.color }}
                          id={item.name.replace(/\s+/g, "") + "-title"}
                          onClick={() => {
                            handleCrossedGenre(
                              item.name.replace(/\s+/g, "") + "-title"
                            );
                          }}
                        >
                          {item.name}
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="col-md-6" id="spotify-container">
            <div className="spotify-container-wrapper">
              <div className="spotify-container">
                <div className="spotify-container-header">
                  <div className="spotify-container-decor-container">
                    <div className="spotify-container-decor">
                      <div className="red-circle"></div>
                      <div className="yellow-circle"></div>
                      <div className="green-circle"></div>
                    </div>
                  </div>
                </div>
                <iframe
                  style={{
                    width: "100%",
                    height: "584px",
                    border: "0px solid black",
                  }}
                  title="Spotify Playlist"
                  name="spotify"
                  id="spotify"
                  src={data[0].spotify_link}
                ></iframe>
                <a
                  href={data[0].spotify_link_open}
                  id="spotifyLink"
                  title="Open playlist in Spotify"
                >
                  Open in <span>Spotify</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
