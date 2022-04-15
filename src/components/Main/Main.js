import {cor} from"../../../styles/themes"
function Main({children}) {
  return (
    <>
      <main>

          {children}
      </main>

      <style jsx>{`
          
      main {
            height: calc(100vh - 161px);
            color: ${cor.branco};
            text-align: center;
          }

          `}</style>
    </>
  );
}
export default Main;
