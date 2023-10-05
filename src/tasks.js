import './styles/tasks.scss';
import Task from './task';


function Tasks() {
  return (
    // <div className='Tasks App__Tasks'>
    <div className='tasks'> 
      <div className='tasks__task'>
        <Task
          task='typography'
          done='false'
          points={[
            { point: 'box modal', done: false },
            { point: '2th subt', done: true },
          ]}
        /></div>

      <div className='tasks__task'>
        <Task
          task='layout'
          done='false'
          points={[
            { point: 'box modal', done: false },
            { point: 'grids and container', done: true },
            { point: 'implict grid', done: true },
            { point: 'negative spaces', done: false },
            { point: 'alignment', done: true },
          ]}
          className='Task_activated'
        /></div>

      <div className='tasks__task'>
        <Task
          task='color'
          done='false'
          points={[]}
        /></div>

      <div className='tasks__task'>
        <Task
          task='style'
          done='false'
          points={[]}
        /></div>

      <div className='tasks__task'>
        <Task
          task='get started'
          done='true'
          points={[]}
        /></div>

    </div>
  )
}

export default Tasks;