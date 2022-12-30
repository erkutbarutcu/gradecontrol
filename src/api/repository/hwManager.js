import { hwDATA } from "../FakeData/DataToObject";


export const getHWById=(id)=>{
    return hwDATA.filter((element)=>{return element.lessonid === id})
}
export const getHWElementById=(id)=>{
    return hwDATA.find((element)=>{return element.id === id})
}