import axios from "axios";
import { useEffect, useState } from "react";
import Comics from "./Comics";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId } from "./reducers";

function Personajes() {
  const disp = useDispatch();
  const [personaje, setPersonajes] = useState([]);
  const [selectPersonaje, setSelectPersonaje] = useState(null);

  useEffect(() => {
    const personajes = async () => {
      try {
        const resultado = await axios.get(
          "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cd0e4260b4bafa99f0b64e6d3407fb01&hash=a48f78af283c52cbdf8264c80f2fe6ce"
        );

        setPersonajes(resultado.data.data.results);
      } catch (error) {
        console.log("ERROR" + error.message);
      }
    };
    personajes();
  }, []);

  const mostrarComics = (charId) => {
    disp(setId(charId));
    setSelectPersonaje(charId);
  };

  return (
    <div className="container-fluid text-center m-5 mx-auto">
      <h1>Personajes de Marvel</h1>
      <div className="row row-cols-2 my-5 justify-content-center">
        {personaje.map((char) => (
          <div className="card border border-4 bg-info bg-opacity-10 border border-info rounded mx-2 my-2" key={char.id} >
            <Card style={{ width: '18rem' }} className="center">
              <Card.Img 
                className="rounded"
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
              <Card.Body  variant="danger">
                <Card.Title  className="py-4 fs-4 ">{char.name}</Card.Title>
                <button onClick={() => mostrarComics(char.id)}><Link to="/Pagcomics">ver</Link> </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {selectPersonaje && <Comics charId={selectPersonaje} />}
    </div>
  );
}

export default Personajes;
