import './styles/task.scss';
import Points from './points';

function Task({ task, done, points }) {
  return (
    <div className=
      // {done==='true' ? 'Tasks__Task Task Task_done' : 'Tasks__Task Task'}
      {done === 'true' ? 'task task_done' :
        task === 'layout' ? 'task task_activated' : 'task'}
    //только для того чтобы добавить Task_activated, это будет делаться жсом.
    //Надо будет раскоментировать строку 7 и удалить 8-9
    >
      <div className='task__header'>
        <div className='task__checkbox'></div>
        <span className='task__text'>{task}
        </span>
      </div>
      <div className='task__points'>
        <Points points={points} />
      </div>
    </div>
  )
}

export default Task;