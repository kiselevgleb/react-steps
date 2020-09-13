import React, { useState, useRef } from 'react'
import StepModel from './StepModel';
import {nanoid} from 'nanoid';

function StepsInp(props) {
  const { onAdd: handleAdd} = props;
  const inpDate = useRef();
  const inpDis = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    const step = new StepModel(nanoid(), evt.target.date.value, evt.target.dis.value);
    handleAdd({step, inpDate, inpDis});
    evt.target.date.value="";
    evt.target.dis.value="";
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="date" >Date</label>
      <input className="inp" type="date" id="date" name="date" ref={inpDate}/>
      <label className="label" htmlFor="dis" >Distans</label>
      <input className="inp" name="dis" ref={inpDis}/>
      <button>ok</button>
    </form>);
}

export default StepsInp;
