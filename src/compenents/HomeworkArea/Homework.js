import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

const Homework = () => {
  const params = useParams();
  const [hwprop, setHwprop] = useState('');
  var link = "http://localhost:3001/homework/" + params.homework;

  useEffect(() => {
    fetch(link, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(res =>
      setHwprop(res))
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container mt-3 p-5 border rounded'>
      <div className='d-flex flex-row border-bottom mb-3'>
        <h1 class="card-title mx-3">{hwprop.name}</h1>
        <p class="card-text mx-3">added: {hwprop.addedTime}</p>
        <p class="card-text  mx-3">deadline: {hwprop.deadline}</p>

      </div>
      <p class="card-text  mx-3">deadline: {hwprop.info}</p>
      <div>
        <div class="m-3">
          <input class="form-control" type="file" id="formFile"/>
        </div>
      </div>
      <button class="btn btn-primary m-3">send Homework</button>
    </div>
  )
}
export default Homework