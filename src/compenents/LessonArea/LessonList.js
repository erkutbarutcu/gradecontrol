import React from 'react'
import LessonItem from './LessonItem'
import { useState } from 'react'
import { useEffect } from 'react'

const LessonList = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/lesson/all", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }}).then(res => res.json()).then(res =>
        setLessons(res)
  )}, []);
  return (
    <div>
        {
          lessons.map((item, i) => {
            return <LessonItem item={item} key={i} />
          })
        }


    </div>
  )
}
export default LessonList