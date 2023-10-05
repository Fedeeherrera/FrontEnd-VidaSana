import React from 'react';
import './Home.css'; 
import LogrosContenidos from './Logros.jsx';

function Home() {
  return (
  <div className="home">
  <div className="info">
  <h1 className="title">ONG Vida Natural</h1>
  <p>
   Nuestra ONG "Vida Natural" es una entidad civil fundada el 29 de junio de 2010, que trabaja en la solución de los principales problemas ambientales de Argentina. Nuestra misión es "proponer e implementar soluciones para conservar la naturaleza, promover el uso sustentable de los recursos naturales y una conducta responsable del hombre en un contexto de cambio climático". Para esto, desarrollamos acciones basadas en la protección de áreas naturales, el consumo y la producción responsable, la legislación ambiental y la concientización y educación ambiental.
  </p>
  <p>
   Desde 2011 es la entidad representante para Argentina de la Organización Mundial de Conservación (WWF), la organización ambiental más grande del mundo.
  </p>
  <p>
   La visión de Vida Natural es "un mundo en el cual el ser humano se desarrolle en armonía con la naturaleza". En la actualidad, su trabajo se enfoca en cinco ecorregiones prioritarias de la Argentina por su rica biodiversidad que se encuentra amenazada: la selva paranaense, el Gran Chaco, las pampas, mares y costas (la Antártida y océanos australes), ríos y lagos del sur.
  </p>
  <p>
   Vida Natural posee tres oficinas, ubicadas en la Ciudad Autónoma de Buenos Aires, Puerto Iguazú y Lago Puelo. Además, cuenta con dos reservas propias: Urugua-í en Misiones, y San Pablo de Valdés, en Chubut.
  </p>
  </div>
  <div className="logros-contenidos">
  <div className='card-contenido'>
  <LogrosContenidos
    imageUrl='https://img.remediosdigitales.com/bb6830/image/450_1000.jpg'
    title= "Más árboles, más oxigeno"
    description="Logramos plantar mas de 2000 árboles en montes deforestados"
  />
  </div>
  <div className='card-contenido'>
   <LogrosContenidos
    imageUrl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmide.gob.do%2Finicia-playas-limpias-y-bosques-vivos-campana-del-cesac-en-apoyo-al-proyecto-protegiendo-nuestro-futuro-de-adeofa%2F&psig=AOvVaw0aXAsMszX6wKFdDAQsah_a&ust=1696554325583000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi_0MTb3YEDFQAAAAAdAAAAABAI'
    title= "Playas Limpias"
    description="Junto a Voluntarios logramos limpiar km de playas"
  />
 </div>
  <div className='card-contenido'>
  <LogrosContenidos
   imageUrl='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdnproxy.turadioinfo.com%2F251644%2Fnoticias%2Fa251bd3b114b3749f6377efb72481405.jpg&tbnid=j39qxgkzsv1fdM&vet=12ahUKEwjQ8MGi2t2BAxU5JLkGHa8dBuEQMyghegUIARCYAQ..i&imgrefurl=https%3A%2F%2Flaboulaye.info%2Fnoticias%2Fid-9406_CAMPA-A-DEL-CUIDADO-DEL-AGUA-EN-LAS-ESCUELAS&docid=E4QPRNZXooxpGM&w=720&h=456&itg=1&q=campa%C3%B1a%20sobre%20el%20agua%20en%20escuelas&ved=2ahUKEwjQ8MGi2t2BAxU5JLkGHa8dBuEQMyghegUIARCYAQ'
   title="Cuidemos el Agua"
   description="Campaña de Concientización: Charlas en escuelas "
  />
  </div>
  <div className='card-contenido'>
   <LogrosContenidos
    imageUrl='https://www.ecologistasenaccion.org/wp-content/uploads/2022/05/activistas-brasil-denuncias-deforestacion.jpg'
    title="Desforestacion"
    description="Protestas ante empresas responsables de la deforestación"
   />
  </div>
  <div className='card-contenido'>
 <LogrosContenidos
 imageUrl='https://www.mundomarino.com.ar/alpza/images/secciones/fmm12.jpg'
 title="Cuidando Nuestros Mares"
  description="Junto a Voluntarios logramos salvar a animales marinos lastimados, siendo devueltos a su habitat natural"
  />
  </div>
  </div>
      </div>
  );
};
export default Home;



