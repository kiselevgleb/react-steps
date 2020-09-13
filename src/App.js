import React, { useState } from 'react'
import './App.css';
import StepsInp from './Steps-inp';
import StepsOut from './Steps-out';
import StepModel from './StepModel';
import { nanoid } from 'nanoid';

function App() {
  const [steps, setSteps] = useState([]);
  const [inpDate, setDate] = useState("");
  const [inpDis, setDis] = useState("");

  const handleRemove = id => {
    setSteps(steps.filter(o => o.id !== id));
  }
  const handleEdit = id => {
    setSteps(prevSteps => prevSteps.map(o => {
      if (o.id === id) {
        inpDis.current.value = o.distans;
        inpDate.current.value = o.date;
      }
    }));
    setSteps(steps.filter(o => o.id !== id));
  }
  const sort = steps.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const handleAdd = s => {
    console.log(s.step.date)
    console.log(steps)
    let boo = false
    let newStep;
    steps.forEach(e => {
      if (e.date == s.step.date) {
        let newDis = parseInt(e.distans) + parseInt(s.step.distans);
        console.log(newDis)
        newStep = new StepModel(nanoid(), e.date, newDis);
        setSteps(steps.filter(o => o.id !== e.id));
        boo = true
      }
    });
    console.log(boo)
    if (boo) {
      setSteps(prevSteps => [...prevSteps, newStep]);
    } else {
      setSteps(prevSteps => [...prevSteps, s.step]);
    }
    setDate(s.inpDate);
    setDis(s.inpDis);
  }

  return (
    <div className="App">
      <StepsInp onAdd={handleAdd} />
      <StepsOut steps={steps} onRemove={handleRemove} onEdit={handleEdit} />
    </div>
  );
}

export default App;
