import "./App.css";
import { Testimonio } from "./componentes/testimonio";
import testimonios2 from './componentes/datosTestimonios'

function App() {
  return (
    <div className="App">
      <div className="contPrincipal">
        <h1>Esto es lo que dicen las personas de mi proyecto al verlo</h1>
        {testimonios2.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
            img={testimonio.img}
          />
          ))}

        {/* <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="ingenieria de software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.s"
          img="Emma"
        />
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="ShaIngeniero de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. mi curso cambió mi vida."
          img="Shawn"
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Ingeniera de Software"
          img="Sarah"
          empresa="ChatDesk"
          testimonio="mi curso fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        /> */}
      </div>
    </div>
  );
}

export default App;
