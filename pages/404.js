import Link from "next/link";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/Header/Header";
import { cor } from "../styles/themes";

function Erro404() {
  return (
    <>
      <main>
        <h1> Error 404 </h1>
        <p>
          Pagina Nao Em Contrada voltar a
          <Link href="/">
            <a> Home </a>
          </Link>
        </p>
      </main>

      <style jsx>
        {`
          main {
            height: calc(100vh - 161px);
            color: ${cor.Red};
            text-align: center;
          }
          h1 {
            font-size: 4rem;
            font-weight: 700;
            margin: 2rem;
          }

          p {
            font-size: 2rem;
          }

          a{
              color: ${cor.Red};
              
              text-decoration: none;
              font-weight: 700;
              transition: all 500ms; 

          }
          a:hover {
                
                color:${cor.Cyan};
          }
        `}
      </style>
    </>
  );
}

export default Erro404;
