import data from "../api/data.json"
export async function getStaticPaths() {

    const paths = data.paginas.map(paginasDoDiario => {
        return{ params: { id:`${paginasDoDiario.id}` } }
    })
    
    console.log(paths)
    return {
        paths,
      
      fallback: false // false or 'blocking'
    };
  }

export async function getStaticProps (context){

    const pagina = data.paginas.find(paginaAtual => {
        if(paginaAtual.id === context.params.id){
            return true;
        }
        return false;
    })
    
    return {
        props: {
            pagina
        },
    }
}


function  DiarioPaginas (props){

    console.log(props.pagina)

    return (
    
    <>


        <p> {props.pagina.data}</p>
        <h1>  {props.pagina.titulo} </h1>
        <p> { props.pagina.conteudo}</p>




    </>
    
    )
}

export default DiarioPaginas
