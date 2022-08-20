
import Header from "../Header/Header.js";
function Layout(props) {

  return (
    <div  className="transition-all">
     
    <Header/>
     {props.children}
    </div>
  );
}

export default Layout;
