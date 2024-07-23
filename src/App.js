import React, { useState } from 'react';
import './App.css';

function App() {
  const [curTask, setCurTask] = useState('');
  const [allTask, setAllTask] = useState([]);
  const [count, setCount] = useState(0);
  const [editIndex, setEditIndex] = useState(-1); // Index of the task being edited

  const btnClick = () => {

    
    if (editIndex !== -1) {
      // If an edit is in progress, update the task at the editIndex
      const updatedTasks = [...allTask];
      updatedTasks[editIndex] = curTask;
      setAllTask(updatedTasks);
      setEditIndex(-1); // Reset editIndex
    }
    
    
    else {
      if (curTask) {
        const templist = [...allTask, curTask];
         setAllTask(templist);
         setCount(count + 1);
      }
    }
    setCurTask('');
  };

  const edit = (index) => {
    setCurTask(allTask[index]);
    setEditIndex(index);
  };

  const dlt = (index) => {
    let templist = [...allTask];
    templist.splice(index, 1);
    setAllTask(templist);
    setCount(count - 1);

    if (editIndex === index) {
      setEditIndex(-1); // Reset editIndex if the editing task is deleted
      setCurTask(''); // Reset curTask
    }

  };

  return (
    <>

      <h1>TO-DO <br/>APP</h1>
      <div>
        <h3>Enter Task:</h3>
        
        <div className='task-input'>
          <input
            type="text"
            placeholder="Enter here"
            value={curTask}
            onChange={(e) => setCurTask(e.target.value)} 
          />
          <button onClick={btnClick}>
            {editIndex !== -1 ? <i class="fa fa-pencil" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
          </button>
        </div>

      </div>

     <div>
        <h3>Total Task : {count}</h3>
        <h3>Tasks: </h3>

        <div className="task-list">
          {allTask.map((task, index) => (
            <div className="task-row" key={index}>
              <span>{task}</span>
              <div className="task-buttons">
                <button onClick={() => edit(index)}>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button onClick={() => dlt(index)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div> 

    </>
  );
}

export default App;

