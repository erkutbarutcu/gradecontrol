import React from 'react'
import { Link } from 'react-router-dom'

const ButtonPlace = ({ isclosed, isgradable,link,gradelink }) => {
    if (isclosed === true) {
      return (
        <div>
          <Link to={link} class="btn btn-primary disabled">go to Homework</Link>
          <Link to={gradelink} class="btn btn-primary disabled mx-5">grade Homework</Link>
        </div>
      )
    }
    else if (isgradable === true) {
      return (
        <div>
          <Link to={link} class="btn btn-primary disabled">go to Homework</Link>
          <Link to={gradelink} class="btn btn-primary mx-5">grade Homework</Link>
        </div>
      )
    }
    else {
      return (
        <div>
          <Link to={link} class="btn btn-primary " >go to Homework</Link>
          <Link to={gradelink} class="btn btn-primary disabled mx-5">grade Homework</Link>
        </div>
      )
    }
  }
export default ButtonPlace