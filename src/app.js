import './styles/style.scss';
import Statusbar from './statusbar';
import Chapter from './chapter';
import Tasks from './tasks';
import Addtask from './add-task';
import Homebar from './homebar';

function App() {
  return (
    <div className='app'>
      <div className='app__statusbar'>
        <Statusbar />
      </div>
      <div className='app__chapter'>
        <Chapter />
      </div>
      <div className='app__tasks'>
        <Tasks />
      </div>
      <div className='app__addtask'>
        <Addtask />
      </div>
      <div className='app__homebar'>
        <Homebar />
      </div>
    </div>
  );
}

export default App;
