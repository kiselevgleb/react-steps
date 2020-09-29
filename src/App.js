import React, { useState } from 'react'
import './App.css';
import StepsInp from './Steps-inp';
import StepsOut from './Steps-out';
import StepModel from './StepModel';
import { nanoid } from 'nanoid';

function App() {
  const [steps, setSteps] = useState([]);
  const [form, setF] = useState({
    date: '',
    dis: '',
    suc: false,
    });
  const handleRemove = id => {
    setSteps(steps.filter(o => o.id !== id));
  }
  const handleEdit = id => {
    steps.map(o => {
      if (o.id === id) {
        setF({date: o.date, dis: o.distans, suc: true});
      }
    });
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
    if (boo && s.step.date != "" && s.step.distans != "") {
      setSteps(prevSteps => [...prevSteps, newStep]);
    } else if (s.step.date != "" && s.step.distans != "") {
      setSteps(prevSteps => [...prevSteps, s.step]);
    } else {
      alert("The field must be filled");
    }
    setF({date: "", dis: "", suc: false});
  }

  return (
    <div className="App">
      <StepsInp onAdd={handleAdd} form = {form}/>
      <StepsOut steps={steps} onRemove={handleRemove} onEdit={handleEdit} />
    </div>
  );
}

export default App;