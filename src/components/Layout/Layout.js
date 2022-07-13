
import Header from "../Header/Header.js";
function Layout(props) {

  return (
    <div>
    <Header />
     {props.children}
    </div>
  );
}

export default Layout;
