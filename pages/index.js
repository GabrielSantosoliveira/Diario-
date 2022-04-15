// header
//fotter
import Paragrafo from "../src/components/Paragrafo/Paragrafo"
import Titulo from "../src/components/Titulo/Titulo"
import Main from "../src/components/Main/Main"
import Box from "../src/components/Box/Box";
export default function Home() {
  return (
    <>
      <Main>

    <Box>


        <Titulo>Bem Vido au Meu Diario</Titulo>

        <Paragrafo>
          eu fiz esse diario para testar o meu conhecimento no getStaticPaths no
          react vou parar de atualizar esse "blog" no dia 15 de maio 2022
          Entao seja Benvido Para Ver AS Pagina do diario coloque <strong> pag/1  , pag/1 ou pag/2 etc </strong> 
        </Paragrafo>

    </Box>

      </Main>

      <style jsx> 
          {`
          
          
           
          
          
          
          
          `}</style>
    </>
  );
}
