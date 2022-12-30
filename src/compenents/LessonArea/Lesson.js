import React from 'react'
import { useParams } from 'react-router';
import HomeworkList from '../HomeworkArea/HomeworkList';
import { useEffect } from 'react';
import { useState } from 'react';
const Lesson = () => {
  const [lessonprop,setLessonProp]=useState([]);
  const params = useParams();

  useEffect(() => {
    var link="http://localhost:3001/lesson/"+params.id;
    fetch(link, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }}).then(res => res.json()).then(res =>
        setLessonProp(res)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  )},[]);

  return (
    <div>
      <div className='container mt-3 p-5 border rounded'>

        <h1 className='mb-3 border-bottom'>{lessonprop.name}</h1>
        <h4> {lessonprop.teacher}</h4>
      </div>
      <div className='container mt-3 p-5 border rounded'>
        <HomeworkList id={params.id}/>
      </div>
    </div>
  )
}
export default Lesson