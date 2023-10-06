import React from 'react';
import './Contaminacion.css';


function Contaminacion () {
  return (
    <div className="informacion">
      <div className="titulo-principal">
        <h1>Problemas Ambientales Urgentes</h1>
      </div>
      <ul>
        <li className="problema">
          <h2 className="subtitulo">Cambio Climático</h2>
           <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZf1bwcuw9Dcutu-aKjY5vMGlMEmd6jH9sjw&usqp=CAU"
                alt="Cambio Climático"
                className="imagen-problema"
              />
            </div>
          <p className="descripcion">
            El cambio climático se refiere a una variación significativa en los componentes del clima cuando se comparan períodos prolongados, pudiendo ser décadas o más. Por ejemplo, la temperatura media de la década del 50 con respecto a la temperatura media de la década del 90.

            El clima de la Tierra ha variado muchas veces a lo largo de su historia debido a cambios naturales, como las erupciones volcánicas, los cambios en la órbita de traslación de la tierra, las variaciones en la composición de la atmósfera, entre otros.

            Pero, desde los últimos años del siglo XIX, la temperatura media de la superficie terrestre ha aumentado más de 0,6 ºC. Este aumento está vinculado al proceso de industrialización iniciado hace más de un siglo y, en particular, a la combustión de cantidades cada vez mayores de petróleo y carbón, la tala de bosques y algunos métodos de explotación agrícola.

           Un informe del Panel Intergubernamental de Cambio Climático (IPCC) afirma que “el calentamiento desde los niveles preindustriales hasta la década 2006-2015 se estima en 0,87 °C” (IPCC, 2018:51).
          </p>
        </li>
        <li className="problema">
          <h2 className="subtitulo">Deforestación</h2>
          <div className="imagen-container">
            <img
              src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/02/61f9846369440_1200.jpg"
              alt="Deforestación"
              className="imagen-problema"
            />
          </div>
          <p className="p_desforestacion">
          Las zonas deforestadas en Argentina se han incrementado sustancialmente en los últimos 20 años y la desaparición de gran parte del área boscosa, sin intención de nuevas plantaciones, agrava la crisis climática. Desde 2001 hasta 2021, el 80% de la masa forestal local eliminada estuvo directamente vinculada con los sectores dominantes que responden a la deforestación, según relevó la plataforma de monitoreo de bosques Global Forest Watch.

          Durante ese período, el país perdió 438 mil hectáreas de bosque primario húmedo, lo que representa el 7% de la pérdida total de cobertura arbórea y una disminución de esa flora nativa del 9,9%.

          Entre las actividades que generaron mayor índice de pérdida forestal en el país, la deforestación asociada a la obtención de materias primas como postes de luz, tanino, durmientes o carbón encabezó la lista, con 151 mil hectáreas menos en 2021 que en 2001. Le siguieron la agricultura itinerante, que dejó en ese mismo año un saldo de 25 mil hectáreas taladas de las 200 mil que hubo en total, según informó el organismo.

          "Muchas zonas desmontadas después terminan siendo suelos inútiles al cabo de los años, por la salinización y la contaminación con agrotóxicos. Los wichí les llaman 'campos vencidos', son suelos que hacen más frecuentes las inundaciones porque ya no absorben las lluvias y, en verano, el efecto espejo contribuye al calentamiento", lamentó en diálogo con Télam Noemí Cruz, responsable del área de bosques de Greenpeace.

         "Cuando la materia prima es solo para carbón, tanino, postes de luz o durmientes para la utilización en las vías férreas, se hace sobreexplotación. Eso se denomina 'erosión de bosques'; se extrae madera y se empobrece y degrada todo el suelo de la zona boscosa", advirtió Cruz, y denunció: "El 85% de un ecosistema único como el quebrachal del Bosque de Tres Quebrachos -al sur de Chaco- fue destruido".

         Fuentes del Ministerio de Ambiente y Desarrollo Sostenible señalaron en diálogo con Télam que "la deforestación registrada se debe a desmontes ilegales o prácticas de transformación excesivas por parte de productores ganaderos en sistemas silvopastoriles, además de los incendios", que suceden con frecuencia en los bosques de categoría I y II, los más preservados.

          </p>
        </li>
      </ul>
    </div>
  )
}

export default Contaminacion
