import { cor } from "../../../styles/themes";

function Box ({ tag, children }) {
  let Tag;
  if (tag === undefined) {
    Tag = "section";
  } else {
    Tag = tag;
  }

  return (
    <>
      <Tag>{children}</Tag>

      <style jsx>{`
        ${Tag} {
            width:700px;
            margin:0 auto;
        }



        @media (min-width: 968px){
                    ${Tag}{
                        width:800px;
                    
                }
                }


                @media (max-width: 700px){
                    ${Tag}{
                        width:500px;
                    
                }
                }
                @media (max-width: 540px){
                    ${Tag}{
                        width:400px;
                    
                }
                }

                @media (max-width: 440px){
                    ${Tag}{
                        width:300px;
                    
                }
                }
                @media (max-width: 340px){
                    ${Tag}{
                        width:289px;
                    
                }
                }





            

      `}</style>
    </>
  );
}
export default Box;
