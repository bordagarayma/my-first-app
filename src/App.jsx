import { useMemo, useState } from "react";
import "./App.css";
import * as d3 from "d3";
import Card from "./components/Card";

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
    { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
    { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
    { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
    { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
    { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
    { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
    { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
    { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
    { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
    { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
    { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
    { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
    { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
    { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
    { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
    { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
    { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
    { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
    { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
  ];

  const [selectedType, setSelectedType] = useState("All");

  const pokemonTypes = useMemo(() => {
    const types = pokemons.map((pokemon) => pokemon.type);
    return ["All", ...new Set(types)];
  }, [pokemons]);

  const filteredPokemons = useMemo(() => {
    if (selectedType === "All") {
      return pokemons;
    }

    return pokemons.filter((pokemon) => pokemon.type === selectedType);
  }, [selectedType, pokemons]);

  return (
    <>
      <Card>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Charts</h2>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          {pokemonTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid #ccc",
                cursor: "pointer",
                backgroundColor: selectedType === type ? "#1f2937" : "#fff",
                color: selectedType === type ? "#fff" : "#1f2937",
                fontWeight: 600,
              }}
            >
              {type}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {filteredPokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: 12,
                padding: 16,
                width: 170,
                textAlign: "center",
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={96}
                height={96}
              />
              <div style={{ fontSize: 18, fontWeight: 500, marginTop: 8 }}>
                {pokemon.name}
              </div>
              <div style={{ fontSize: 14, marginTop: 6 }}>{pokemon.type}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default App;