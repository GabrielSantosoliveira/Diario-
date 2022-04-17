// header
//fotter
import {cor} from'../styles/themes'
import data from'../pages/api/data.json'
import Paragrafo from "../src/components/Paragrafo/Paragrafo"
import Titulo from "../src/components/Titulo/Titulo"
import Main from "../src/components/Main/Main"
import Box from "../src/components/Box/Box";
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Main>

    <Box>


        <Titulo>Bem Vido au Meu Diario</Titulo>

        <Paragrafo>
          eu fiz esse diario para testar o meu conhecimento no getStaticPaths no
          react vou parar de atualizar esse "blog" no dia 18 de abr 2022
          Entao seja Benvido Para Ver AS Pagina do diario coloque <strong> pag/1  , pag/1 ou pag/2 etc </strong> 
        </Paragrafo>


        <ul className="boxLista">
            
            {data.paginas.map((pagina , i ) =>{
                return (


                    <>
                    
                    

                    <li  className="itemLista"key={i}>


                    <Link href={'/pag/'+pagina.id} >


                        <a className="boxLink">



                        <div className="card">

                        <p className="cardData">

                           {pagina.data}

                        </p>

                        <p className="cardTexto">

                           {pagina.resumo}

                        </p>
                           


                        </div>


                        </a>

                    </Link>

                    </li>
                    
                    
                    
                    
                    </>
                )
            })}
        </ul>



    </Box>

      </Main>

      <style jsx> 
          {`
          
          
           .boxLista{
               margin-top: 2rem;
               width: 100%;
               display:flex;
               flex-direction: row;
               flex-wrap: wrap;
               align-items: center;
               justify-content: center;

               
           }
           .itemLista{


               width:400px;
               min-height:300px;
           }
           .boxLink{
               text-decoration: none;
               width:100%;
               height:100%;
           }

          .card{
              margin:1rem;
              box-shadow: 1px 1px 1px 1px #000000;
              width:90%;
              padding: 1.2rem;
              opacity: 0.7;
              transition: all 500ms;


          }
          .card:hover{
            opacity: 1;
            background-color:${cor.current};
            box-shadow: 1.5px 1.5px 1.5px 1.5px #000000;
          }
          .cardData{
              font-size: 1.2rem;
              color:${cor.branco};
              margin-bottom:1.2rem;
          }
          .cardTexto{
            font-size: 1.6rem;
              color:${cor.branco};
              
          }
          
          
          
          `}</style>
    </>
  );
}
