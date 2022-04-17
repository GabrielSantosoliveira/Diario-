import data from "../api/data.json";
import Main from "../../src/components/Main/Main";
import Box from "../../src/components/Box/Box";
import Paragrafo from "../../src/components/Paragrafo/Paragrafo";
import Titulo from "../../src/components/Titulo/Titulo";
export async function getStaticPaths() {
  const paths = data.paginas.map((paginasDoDiario) => {
    return { params: { id: `${paginasDoDiario.id}` } };
  });

  console.log(paths);

  return {
    paths,

    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const pagina = data.paginas.find((paginaAtual) => {
    if (paginaAtual.id === context.params.id) {
      return true;
    }
    return false;
  });

  return {
    props: {
      pagina,
    },
  };
}

function DiarioPaginas(props) {
  return (
    <>
      <Main>
        <Box>
          <p className="data"> {props.pagina.data}</p>
          <Titulo>
             {props.pagina.titulo} 
          </Titulo>
          <Paragrafo>
             {props.pagina.conteudo}
          </Paragrafo>
        </Box>
      </Main>

      <style jsx>{`
        .data {
          font-family: serif;
          font-size:1.4rem;
        }
      `}</style>
    </>
  );
}

export default DiarioPaginas;
