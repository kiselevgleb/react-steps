import React, { useState } from 'react'

function StepsOut(props) {
  const { steps, onRemove: handleRemove, onEdit: handleEdit } = props;
  console.log(steps);
  return (
    <table className="tab">
      <tr>
        <th>Date</th>
        <th>Distans</th>
        <th>Action</th>
      </tr>
      {steps.map(o =>
        <tr key={o.id}>
          <td>{o.date}</td>
          <td>{o.distans}</td>
          <td>
            <button onClick={() => handleEdit(o.id)}>edit</button>
            <button onClick={() => handleRemove(o.id)}>del</button>
          </td>
        </tr>
      )}
    </table>);
}

export default StepsOut;
