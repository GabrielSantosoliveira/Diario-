import {cor} from '../../../styles/themes'

function Titulo ({tag,children} ) {
    let Tag ;
    if(tag === undefined){
        
        Tag = "h1"
    }
    else {
        Tag = tag
    }


    return (


        <> 
        
            <Tag>{children}</Tag>

            <style jsx>{`
                
                






                ${Tag}{
                    font-size:1.7rem;
                    color:${cor.Pink};
                    margin:1rem;
                }


                @media (min-width: 768px){
                    ${Tag}{
                    font-size:2.6rem;
                    
                }
                }




                
                `}</style>


        </>
    )
}
export default Titulo;
