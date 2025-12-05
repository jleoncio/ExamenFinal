import "./tarjetita.css";

function Tarjetita({ img, title, subtitle }) {
  return (
    <div className="exercise-card">
      {img && <img src={img} className="exercise-img" alt={title || "exercise"} />}
      <div className="exercise-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <span className="arrow">›</span>
    </div>
  );
}

export default Tarjetita;