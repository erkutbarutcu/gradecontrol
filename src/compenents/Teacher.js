import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Teacher = () => {
    const [hwname, sethwname] = useState('');
    const [hwinfo, sethwinfo] = useState('');
    const [hwdeadline, sethwdeadline] = useState('');
    const [propsit, setprops] = useState([]);
    const [inputprop, setinputprop] = useState('');
    const [lessonid, setlessonid] = useState('');
    const [hwfromt, sethwfromt] = useState([]);
    var teacher = useSelector(state => state.authState.username)
    var link = "http://localhost:3001/homework/teacher/" + teacher
    useEffect(() => {
        fetch(link, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(res =>
            sethwfromt(res))
        // eslint-disable-next-line
    }, []);




    const createLesson = (e) => {
        e.preventDefault();
        var data = {
            hw: {
                name: hwname,
                info: hwinfo,
                lessonid: lessonid,
                teacher: teacher
            },
            prop: propsit
        }
        console.log(hwname, hwinfo, hwdeadline)

        fetch("http://localhost:3001/homework/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => console.log(res))
    }

    const addProp = (e) => {
        e.preventDefault();
        var items = propsit;
        items.push(inputprop);
        setprops(items);
        setinputprop('');
    }


    const CloseHW=(e)=>{
        e.preventDefault();
        var data={"id":e.target.value}

        fetch("http://localhost:3001/homework/close", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }

    const makeGradable=(e)=>{
        e.preventDefault();
        var data={"id":e.target.value}
        fetch("http://localhost:3001/homework/gradable", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }



    return (
        <div class="container mx-5 px-5 pb-5">
            <h4 className='m-3 border-bottom'>Homeworks</h4>
            <div>
                <ul style={{ "list-style-type": "none" }}>
                    {// eslint-disable-next-line
                    hwfromt.map(item=>{
                    return(<li>
                            <div class="card mt-3">
                                <div class="card-body">
                                    <div className='d-flex flex-row border-bottom mb-3'>
                                        <h5 class="card-title mx-3">{item.name}</h5>
                                        <p class="card-text mx-3">added: {item.addedTime}</p>
                                        <p class="card-text  mx-3">deadline:  {item.deadline}</p>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary mx-3' value={item.id} onClick={makeGradable}> Make Gradable</button>
                                        <button className='btn btn-primary mx-3' value={item.id} onClick={CloseHW}> Close Homework</button>
                                        <button className='btn btn-primary mx-3' value={item.id} > See Result</button>
                                        <button className='btn btn-primary mx-3' value={item.id} > See Objection</button>
                                    </div>


                                </div>
                            </div>
                        </li>
                        )
                    })}




                </ul>





            </div>








            <h1>Add Homework</h1>
            <div class="form-group border rounded p-5 mb-5">

                <input class="form-control mb-3" type="text" placeholder='name' onChange={e => sethwname(e.target.value)}></input>
                <input class="form-control mb-3" type="text" placeholder='info' onChange={e => sethwinfo(e.target.value)}></input>
                <input class="form-control mb-3" type="text" placeholder='date' onChange={e => sethwdeadline(e.target.value)}></input>

                <select class="form-select mb-3" onChange={e => setlessonid(e.target.value)}>
                    <option defaultValue="Select Teacher">Select Lesson</option>
                    <option value="17">Math</option>
                    <option value="18">Fizik</option>
                    <option value="19">Web</option>
                </select>



                <h5 className='mx-5'>Add Prop</h5>
                <div class="form-group border rounded p-3 mb-5">

                    <p>Props...</p>
                    <ul className='p-0 m-0' style={{ "list-style-type": "none" }}>
                        {
                            propsit.map((item) => {
                                return <li className='border rounded p-2 mb-2' key={item}>{item}</li>
                            })
                        }


                    </ul>
                    <form onSubmit={addProp}>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" value={inputprop} placeholder="add Prop..." onChange={(e) => setinputprop(e.target.value)} />
                            <button class="btn btn-outline-secondary" type="submit">+</button>
                        </div>
                    </form>


                </div>

                <button type="submit" class="btn btn-primary" onClick={createLesson}>Submit</button>

            </div>


        </div>
    )
}
