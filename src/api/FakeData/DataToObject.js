import usersJSON from "../FakeData/users.json"
import User from "../entity/User"
import Lesson from "../entity/Lesson"
import Homework from "../entity/HomeWork"
import lessonsJSON from "../FakeData/lessons.json"
import hwJSON from "../FakeData/homework.json"

export var usersDATA=[]
export var lessonsDATA=[]
export var hwDATA=[]

// eslint-disable-next-line
usersJSON.users.map(item=>{
    usersDATA.push(new User(item.id,item.name,item.password,item.number,item.role))
});

// eslint-disable-next-line
lessonsJSON.lessons.map(item=>{
    lessonsDATA.push(new Lesson(item.id,item.name,item.teacherid))
});
// eslint-disable-next-line
hwJSON.homeworks.map(item=>{
    hwDATA.push(new Homework(item.id,item.name,item.addedtime,item.deadline,item.mod,item.students,item.lessonid,item.isgradable,item.isclosed,item.graddeadline,item.hwinfo))
});