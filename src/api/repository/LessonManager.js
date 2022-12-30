import {lessonsDATA} from "../FakeData/DataToObject"



export const getLessons = () => {
    var lessons=lessonsDATA;
    return lessons
}

export const getLessonById=(id)=>{
    return lessonsDATA.find((element)=>{return element.id === id})
}



