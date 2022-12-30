import React from 'react'
import ButtonPlace from './ButtonPlace';


export const HomeworkItem = ({ item }) => {
  console.log(item);

  var link = "/lessons/" + item.lessonid + "/" + item.id;
  var gradelink = "/lessons/" + item.lessonid + "/" + item.id + "/grade";
  var isclosed = item.isClosed;
  var isgradable = item.isGradable;


  return (
    <div class="card mt-3">
      <div class="card-body">
        <div className='d-flex flex-row border-bottom mb-3'>
          <h5 class="card-title mx-3">{item.name}</h5>
          <p class="card-text mx-3">added: {item.addedTime}</p>
          <p class="card-text  mx-3">deadline:  {item.deadline}</p>
        </div>
        <p class="card-text">{item.info}</p>
        <ButtonPlace isclosed={isclosed} isgradable={isgradable} link={link} gradelink={gradelink} />
      </div>
    </div>
  )
}
export default HomeworkItem