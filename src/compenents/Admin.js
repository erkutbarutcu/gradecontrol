import React, { useState } from 'react'
import ReactJsAlert from "reactjs-alert"

const Admin = () => {

  const [lessonName, setLessonName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [AddedUser, setAlert1] = useState(false);
  const [addedLesson, setAlert2] = useState(false);



  const addUser = (e) => {
    e.preventDefault()
    var data = { "name": userName, "password": password, "number": userNumber, "role": userRole }
    fetch("http://localhost:3001/auth/create", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => {
      if (res) {
        setAlert1(true);
      }
    })
    setUserName('');
    setPassword('');
    setUserRole('');
    setUserNumber('');
  }


  const addLesson = (e) => {
    e.preventDefault()
    console.log(lessonName, teacherName);
    var data={"name":lessonName,"teacher":teacherName}
    fetch("http://localhost:3001/lesson/create", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => {
      if (res) {
        setAlert2(true);
      }
    })


  }










  return (
    <div class="container  mx-5 px-5">
      <div class="container  m-5 ">
        <ReactJsAlert
          status={AddedUser}
          type="success"
          title="User Added"
        />
        <ReactJsAlert
          status={addedLesson}
          type="success"
          title="Lesson Added"
        />
        <form onSubmit={addLesson}>
          <h1>Add Lesson</h1>
          <div class="form-group border rounded p-5 mb-5">


            <input class="form-control mb-3" type="text" onChange={e => setLessonName(e.target.value)}></input>
            <select class="form-select mb-3" onChange={e => setTeacherName(e.target.value)}>
              <option defaultValue="Select Teacher">Select Teacher</option>
              <option value="Elif Eylül">Elif Eylül</option>
              <option value="Alexandre Ivanov">Alexandre Ivanov</option>
              <option value="Ziya Yılmaz">Ziya Yılmaz</option>
            </select>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>

        <form onSubmit={addUser}>
          <h1>Add User</h1>

          <div class="form-group border rounded p-5">
            <input class="form-control mb-3" type="text" placeholder='Name' onChange={e => setUserName(e.target.value)}></input>
            <input class="form-control mb-3" type="text" placeholder='Number' onChange={e => setUserNumber(e.target.value)}></input>
            <input class="form-control mb-3" type="text" placeholder='Password' onChange={e => setPassword(e.target.value)}></input>

            <select class="form-select mb-3" onChange={e => setUserRole(e.target.value)}>
              <option defaultValue="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Asistan">Asistan</option>
              <option value="Teacher">Teacher</option>
            </select>


            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Admin