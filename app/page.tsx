import MainCard from "./componentes/tarjeta";
import { exercises } from "./componentes/ejercicios";

export default function Home() {
  return (
    <div>
      <MainCard exercises={exercises} />
    </div>
  );
}