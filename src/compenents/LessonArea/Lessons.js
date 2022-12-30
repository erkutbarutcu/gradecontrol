import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/lesson/all", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }}).then(res => res.json()).then(res =>
        setLessons(res)
  )}, []);

  const username = useSelector(state => state.authState.username);
  return (
    <div className='row container m-5'>
      <div className='col-8'>
        <Outlet />
      </div>
      <div className='col-4 ml-5 mt-3'>
        <div className='border rounded p-3 mb-3'>
          <h2>{username}</h2>
        </div>


        <ul class="list-group rounded-top" style={{ "list-style-type": "none" }}>
          {
            lessons.map((item, i) => {
              var link = "/lessons/" + item.id;
              if (i === 0) { return (<li key={i}><Link className="list-group-item stretched-link rounded-top" to={link}>{item.name}</Link> </li>) }
              else { return (<li key={i}><Link className="list-group-item stretched-link" to={link}>{item.name}</Link> </li>) }
            })
          }

        </ul>
      </div>


    </div>

  )

}

export default Lessons