import React from 'react'
import { Link } from 'react-router-dom'

const LessonItem = ({item}) => {
  console.log(item);
  var link="/lessons/"+item.id;
  return (
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.teacher}</p>
        <Link to={link} class="btn btn-primary">go to Lesson</Link>
      </div>
    </div>



  )
}

export default LessonItem
