import React from 'react'
import './Home.css'
import LogrosContenidos from './Logros.jsx'


function Home () {
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
            imageUrl='https://wallpapercave.com/wp/wp7532100.jpg'
            title="Más árboles, más oxigeno"
            description="Logramos reforestar con más de 2000 nuevos árboles"
          />
        </div>
        <div className='card-contenido'>
          <LogrosContenidos
            imageUrl='https://www.vidasostenible.org/wp-content/uploads/2019/11/PlayasLimpias2.jpg'
            title="Playas Limpias"
            description="Junto a Voluntarios logramos limpiar km de playas"
          />
        </div>
        <div className='card-contenido'>
          <LogrosContenidos
            imageUrl='https://www.junin.gob.ar/sites/default/files/noticias/charla_medio_ambiente_en_colegio_san_jose_2.jpg'
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
    
  )
};
export default Home
