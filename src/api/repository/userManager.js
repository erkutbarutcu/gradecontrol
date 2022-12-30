import {usersDATA} from "../FakeData/DataToObject"

export const getUserById = (idnumber) => {
    // eslint-disable-next-line
    var response=usersDATA.find((element)=>{return element.id === idnumber})
    return response.name
}
