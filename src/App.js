import Layout from './components/Layout/Layout';
import ShowSideBar from './components/ShowSideBar/ShowSideBar';
import Sidebar from './components/Sidebar/Sidebar';
import { useContext } from "react";
import { UserContext } from './components/Provider/Provider';
import TasksColumn from './components/TasksColumn/TasksColumn';
import {boardData} from './data'
import ScrollContainer from 'react-indiana-drag-scroll'
function App() {
  const globalState =  useContext(UserContext);

  return (
    <Layout>
      <div className='flex h-[100vh] bg-light-bg dark:bg-dark-bg w-full'>
      <Sidebar/>
      <ShowSideBar/>
      <ScrollContainer className="scroll-container" horizontal={true} hideScrollbars={true} nativeMobileScroll={true}>
      <TasksColumn columns={boardData.boards[globalState.boardActive].columns} />
      </ScrollContainer>
      </div>
    
      {/* <div className='w-full h-[100vh] bg-light-bg dark:bg-dark-bg'>
      </div> */}
    </Layout>
  );
}

export default App;
