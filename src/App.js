import React, { useState } from 'react'
import './App.css';
import StepsInp from './Steps-inp';
import StepsOut from './Steps-out';
import StepModel from './StepModel';
import { nanoid } from 'nanoid';

function App() {
  const [steps, setSteps] = useState([]);
  const [inpDateVal, setDate] = useState("");
  const [inpDisVal, setDis] = useState("");

  const handleRemove = id => {
    setSteps(steps.filter(o => o.id !== id));
  }
  const handleEdit = id => {
     steps.map(o => {
        if (o.id === id) {
          console.log(o)
          inpDisVal.current.value = o.distans;
          inpDateVal.current.value = o.date;
        }
      });
    // setSteps(steps.filter(o => o.id !== id));
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
    if (boo && s.step.date != "" && s.step.distans != "") {
      setSteps(prevSteps => [...prevSteps, newStep]);
    } else if (s.step.date != "" && s.step.distans != "") {
      setSteps(prevSteps => [...prevSteps, s.step]);
    } else {
      alert("The field must be filled");
    }

    setDate(s.inpDate);
    setDis(s.inpDis);
  }

  return (
    <div className="App">
      <StepsInp onAdd={handleAdd} date={inpDateVal} dis={inpDisVal}/>
      <StepsOut steps={steps} onRemove={handleRemove} onEdit={handleEdit} />
    </div>
  );
}

export default App;
