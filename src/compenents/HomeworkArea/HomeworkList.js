import React,{ useEffect, useState } from 'react'
import HomeworkItem from './HomeworkItem';

const HomeworkList = ({id}) => {
    const [homeworks, sethomeworks] = useState([]);
    var link="http://localhost:3001/homework/lesson/"+id;

    useEffect(() => {
      fetch(link, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }}).then(res => res.json()).then(res =>
          sethomeworks(res)
          // eslint-disable-next-line
    )}, []);
  return (
    <div>
      {
          homeworks.map((item, i) => {
            return <HomeworkItem item={item} key={i} />
          })
        }


      
    </div>
  )
}
export default HomeworkList