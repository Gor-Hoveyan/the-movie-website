"use client";
import { useEffect, useState } from "react";
import { Season } from "@/types/season";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function ShowSeason({
  showId,
  seasonNumber,
}: {
  showId: number;
  seasonNumber: number;
}) {
  const [season, setSeason] = useState<Season | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?language=en-US&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
    )
      .then((res) => res.json())
      .then((data) => {
        setSeason(data);
      });
  }, []);

  return (
    <div className="w-full py-4">
      {season && (
        <>
          <div className="flex">
            <h4 className="text-xl">{season.name}</h4>
            {isOpen ? (
              <FaAngleUp
                size={20}
                color="white"
                className="absolute left-1/3 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FaAngleDown
                size={20}
                color="white"
                className="absolute left-1/3 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
          {isOpen && (
            <div className="pl-4">
              {season.episodes.map((episode, index) => {
                return (
                  <div key={index} className="flex justify-between w-3/5 py-1">
                    <h6 className="text-lg">{episode.name}</h6>
                    <p>
                      {episode.season_number !== 0 &&
                        `Season ` + episode.season_number}{" "}
                      Episode {episode.episode_number}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
