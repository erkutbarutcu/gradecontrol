import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const Grade = () => {
  const params = useParams();
  const userid = useSelector(state => state.authState.userid)
  const [hw, sethw] = useState('');
  const [xhwprops, sethwprops] = useState([]);
  const [oldesttable, setoldesttable] = useState([]);




  const getHW = async (e) => {
    e.preventDefault();
    var data = { homeworkId: params.homework, UserId: userid }
    var otherdata = { id: userid };
    var lastdata = { id: hw.id }

    await fetch("http://localhost:3001/grade/get", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => sethw(res));





    await fetch("http://localhost:3001/grade/props", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lastdata)
    }).then(res => res.json()).then(res => sethwprops(...xhwprops, res));




    await fetch("http://localhost:3001/grade/oldesttable", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(otherdata)
    }).then(res => res.json()).then(res =>setoldesttable(res));


  }

  const sendData = (e) => {
    e.preventDefault()



  }





  return (
    <div>
      <div className='text-center'>
        <button className='btn btn-primary' onClick={getHW}> Get Homework For Grade</button>

        {hw &&
          <div className='d-flex justify-content-between border rounded p-3 m-5 d-flex'>
            <p>{hw.FileName != null ? hw.FileName : "XXXXXX"}</p>
            <button className='btn btn-primary ' style={{ "margin-left": "20rem" }}>Download</button>
          </div>
        }

        <div>
          <ul style={{ "list-style-type": "none" }}>
            {xhwprops &&
              xhwprops.map((item) => {
                return (
                  <li key={item.id}>
                    <div className='border rounded p-3 mb-3 '>
                      <input type="text" value={item.PropInfo} className='form-control mb-1' disabled />
                      <input type="text" className='form-control mb-3' />
                    </div>
                  </li>
                )
              })}

            <button className='btn btn-primary' type="submit" onClick={sendData}>Submit</button>


            <div className='border rounded p-3 m-3'>
              <ul className='px-3' style={{ "list-style-type": "none" }}>
                {oldesttable &&oldesttable.map((item) => {
                    return (
                      <li key={item.id} className='d-flex justify-content-between border-bottom'>

                        <p>"XXXXXXXXXX"</p>
                        <p>{item.Grade}</p>
                        <button className='btn btn-primary float-end'>Review</button>

                      </li>
                    )

                  })

                }

              </ul>
            </div>


          </ul>



        </div>



      </div>




    </div>
  )
}

export default Grade