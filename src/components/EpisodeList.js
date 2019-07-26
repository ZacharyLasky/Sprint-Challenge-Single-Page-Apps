import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log("DATA:", response.data.results);
        setEpisode(response.data.results);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }, []);

  return (
    <section className="episode-list grid-view">
      <EpisodeCard episodeData={episode} />
    </section>
  );
}
