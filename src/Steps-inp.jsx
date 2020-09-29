import React, { useState, useRef } from 'react'
import StepModel from './StepModel';
import { nanoid } from 'nanoid';

function StepsInp(props) {
  const { onAdd: handleAdd } = props;
  let valDate;
  let valDis;

  if (props.form.suc == true) {
    valDate = props.form.date;
    valDis = props.form.dis;
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    const step = new StepModel(nanoid(), evt.target.date.value, evt.target.dis.value);
    handleAdd({ step });
    evt.target.date.value = "";
    evt.target.dis.value = "";
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="date" >Date</label>
      <input className="inp" type="date" id="date" name="date" value={valDate} />
      <label className="label" htmlFor="dis" >Distans</label>
      <input className="inp" type="text" name="dis" value={valDis}/>
      <button>ok</button>
    </form>);
}

export default StepsInp;
