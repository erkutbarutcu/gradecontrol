import React from 'react';
import Header from '../compenents/Header';
import Footer from '../compenents/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../compenents/Login'
import Home from '../compenents/Home'
import { ProtectedRoute } from './ProtectedRoute';
import Admin from '../compenents/Admin';
import Logout from '../compenents/Logout';
import  Lessons from '../compenents/LessonArea/Lessons';
import LessonList from '../compenents/LessonArea/LessonList';
import Lesson from '../compenents/LessonArea/Lesson';
import Homework from '../compenents/HomeworkArea/Homework';
import { useDispatch } from 'react-redux'
import { refresh } from '../redux/reducers/authReducer'
import { ProtectedRouteForTeacher } from './ProtectedRouteForTeacher';
import {Teacher} from "../compenents/Teacher"
import Grade from '../compenents/grading/Grade';
import Objection from '../compenents/Objection';


const App=()=> {

  const dispatch=useDispatch();
  dispatch(refresh());

  return (
    <BrowserRouter>
    <div>
      <Header/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/teacher" element={<ProtectedRouteForTeacher><Teacher/></ProtectedRouteForTeacher>} />
            <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>} />
            <Route path="/objections" element={<Objection/>} />
            <Route path="/lessons" element={<Lessons/>}>
                <Route path="" element={<LessonList/>}/>
                <Route path=":id" element={<Lesson/>}/>
                <Route path=":id/:homework" element={<Homework/>}/>
                <Route path=":id/:homework/grade" element={<Grade/>}/>
            </Route>

        </Routes>

      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
