import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jogos")
      .then((response) => response.json())
      .then((data) => setJogos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Jogos</h1>

      {jogos.map((jogo) => (
        <div
          key={jogo.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>{jogo.nome}</h2>
          <p><strong>Gênero:</strong> {jogo.genero}</p>
        </div>
      ))}
    </div>
  );
}

export default App;