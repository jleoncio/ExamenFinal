import Tarjetita from "./tarjetita.jsx";
import "./tarjeta.css";

function Tarjeta({ exercises }) {
  return (
    
    <div className="main-card">
        <div className="title">
        <h5 className="info">info</h5>
        <h2 className="mb-0">Exercícios</h2>
        <h5 className="item">item</h5>
        </div>
      {exercises.map((item, index) => (
        <Tarjetita
          key={index}
          img={item.img || item.url}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}

export default Tarjeta;
