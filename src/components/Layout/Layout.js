import { useContext } from "react";
import Header from "../Header/Header.js";
import { UserContext } from '../Provider/Provider.js';
function Layout(props) {
    const globalState =  useContext(UserContext);
  return (
    <div className={ globalState.theme ===  "dark" ? "dark" : "light"  }>
    <Header />
     {props.children}
    </div>
  );
}

export default Layout;
