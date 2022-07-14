import Layout from './components/Layout/Layout';
import ShowSideBar from './components/ShowSideBar/ShowSideBar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Layout>
      <Sidebar/>
      <ShowSideBar/>
    </Layout>
  );
}

export default App;
