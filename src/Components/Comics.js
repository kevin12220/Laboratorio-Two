import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Comics({ charId }) {
  const [comics, setComics] = useState([]);
  const X = useSelector(state => state.compSom.parId);
  charId = X;

  useEffect(() => {

    const comicsInfo = async () => {
      try {
        const resultado = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters/${charId}/comics?ts=1&apikey=cd0e4260b4bafa99f0b64e6d3407fb01&hash=a48f78af283c52cbdf8264c80f2fe6ce`
        );
      
        setComics(resultado.data.data.results);
        console.log(JSON.stringify(resultado.data.data));
        
      } catch (error) {
        console.log("ERROR" + error.message);
      }
    };

    if (charId) {
      comicsInfo();
    }
  }, [charId]);

  return (
    <>
      <h1>Comics</h1>
      <div>
            <ul>
                {comics.map((comi, i) => (
                    <li key={i}>
                      <p>{comi.title}</p>
                    </li>
                ))}
            </ul>
    </div>
    </>
  );
}

export default Comics;
