/*eslint eqeqeq:0*/
import User from "../entity/User";
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import {usersDATA} from "../FakeData/DataToObject";



export const Auth=(number, password)=>{
    const users = usersDATA;
    var tempUser = new User();

    // eslint-disable-next-line
    users.map(element => {
        if (element.number == number && element.password == password) {     tempUser=element;       }
    });

    if(tempUser.name != undefined){
        CreateToken(tempUser)
        return tempUser
    }
    else{
        return false
    }
}


export const AuthDisconnect=()=>{
    document.cookie="token=; Max-Age=-99999999;";
}


const CreateToken=(User)=>{
    var encrypted = AES.encrypt(JSON.stringify(User.number),"SecretPass phrase").toString();
    document.cookie = ("token=" + encrypted + ";");
};


export const AuthToken=()=>{
    let token=getCookie("token");
    if(token!=undefined){
        var isauth=false;
        var bytes  = AES.decrypt(token, "SecretPass phrase");
        const decrypted = JSON.parse(bytes.toString(Utf8));
        console.log(decrypted)
        const users=usersDATA;
        
        // eslint-disable-next-line
        users.map(element=>{
            if(element.number==decrypted){ isauth=element; }
        });
        return isauth;
    }
    else{
        return false;
    }
};


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length >= 2) return parts.pop().split(";").shift();
  }
