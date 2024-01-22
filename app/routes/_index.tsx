import type { MetaFunction } from "@remix-run/node";
import Nav from "~/components/nav";

export const meta: MetaFunction = () => {
  return [
    { title: "Pagina de inicio" },
    { name: "description", content: "Esta es la pagina ...." },
  ];
};



export default function Index() {
  return (
    <>
      <Nav />
      <section>
        <nav>
          breadcrumbs
        </nav>
        <div className='header'>
          <div className='galery'>
              <img src="/img-1.png" alt="imagen 1" />
          </div>
          <div className='text'>
            <h2>NOMBRE PRODUCTO</h2>
            <p>Fusce sapien urna, tristique non sapien nec, rutrum fringilla eros. Etiam accumsan odio eget tempus consectetur. Aliquam et sapien nulla. Suspendisse lobortis leo ante, imperdiet tristique magna tristique eu. Nullam ultrices vulputate odio, eu iaculis nulla congue quis.</p>
            <ul>
              <li>
                Delivered today (order Mon-Fri before 12:00, delivery between 17:00 and 22:00)
              </li>
              <li>
                Delivered today (order Mon-Fri before 12:00, delivery between 17:00 and 22:00)
              </li>
              <li>
                Delivered today (order Mon-Fri before 12:00, delivery between 17:00 and 22:00)
              </li>
              <li>
                Delivered today (order Mon-Fri before 12:00, delivery between 17:00 and 22:00)
              </li>
            </ul>
          </div>
          <div className='cardContainer'>
            <div>
              <h4>Ahora mismo un asesor
                esta atento para resolver
                tus dudas</h4>
              <button>
                Contactar asesor
              </button>
              <button>
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
