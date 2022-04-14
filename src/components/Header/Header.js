import Link from "next/link";
import {cor} from "../../../styles/themes"
function Header() {
  return (
    <>  
      <header>
        <h1> GABJS </h1>
        <nav>
          <ul>
            <li>
              {" "}
              <Link href="/">
                <a> Home </a>
              </Link>
            </li>

             
            
          </ul>
        </nav>
      </header>

      <style jsx>
          {`
          
            header{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items:center;
                width: 100vw;
                background-color: ${cor.current};
                height: 5rem;
            }
          
            h1{
                font-size: 2rem;   
                font-weight:700;
                color:${cor.Green};
                
                width:30%;

            }
            nav{
                
                width:50%;
            }
            ul{
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items:center;

                


            }
            li{
                margin-left: 1.5rem;
            }

            a{
                text-decoration:none;
                color: ${cor.Cyan};
                font-size:1.45rem;
            }
          
          `}
      </style>
    </>
  );
}
export default Header;
