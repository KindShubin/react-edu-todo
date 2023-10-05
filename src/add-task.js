import './styles/add-task.scss';
import Plus from './icons/Plus.svg';

function Addtask() {
  return(
    <div className='addtask'>
      <img className='addtask__plus' src={Plus}></img>
    </div>
  )
}

export default Addtask;