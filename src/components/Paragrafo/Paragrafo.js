import { cor } from "../../../styles/themes";

function Paragrafo({ tag, children }) {
  let Tag;
  if (tag === undefined) {
    Tag = "p";
  } else {
    Tag = tag;
  }

  return (
    <>
      <Tag>{children}</Tag>

      <style jsx>{`
        ${Tag} {
          font-size: 1.2rem;
          color: ${cor.branco};
        }

        @media (min-width: 768px){
                    ${Tag}{
                    font-size:1.8rem;
                    
                }
                }

      `}</style>
    </>
  );
}
export default Paragrafo;
