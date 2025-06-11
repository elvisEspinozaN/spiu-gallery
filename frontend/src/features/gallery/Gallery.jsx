import { useState } from "react";
import { useGetArtworkQuery } from "../../app/api";
import fillerImage from "../../assets/tattoo-filler.jpg";

export default function Gallery() {
  const [selectedStyle, setSelectedStyle] = useState("");
  const {
    data: artworks = [],
    isLoading,
    error,
  } = useGetArtworkQuery(selectedStyle);

  if (isLoading) return <div>Loading artwork</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* filters */}
      <div>
        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
        >
          <option value="">All Styles</option>
          <option value="Traditional">Traditional</option>
          <option value="Realism">Realism</option>
          <option value="Fine Line">Fine Line</option>
          <option value="Black and Grey">Black and Grey</option>
          <option value="Color">Color</option>
          <option value="Floral">Floral</option>
          <option value="Minimal Art">Minimal Art</option>
          <option value="Botanical">Botanical</option>
        </select>
      </div>

      {/* grid */}
      <div>
        {artworks.map((art) => (
          <div key={art.id}>
            <img
              src={fillerImage}
              alt={art.title}
              loading="lazy"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <h3>{art.title}</h3>
            <p>{art.style}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
