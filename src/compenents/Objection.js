import React from 'react'

 const Objection = () => {
  return (
    <div className='container m-5 p-5'>
        <div className='container border rounded p-5'>
            <h3 className='border-bottom pb-3'>See Objections.</h3>
            <ul>
                <li className='d-flex alert alert-danger d-flex justify-content-between border-bottom m-3'>
                    <p>
                        Jack Sparrow
                    </p>
                    <p>85</p>
                    <button className='btn btn-danger'>Check</button>

                </li>
                <li className='alert alert-danger d-flex justify-content-between border-bottom m-3'>
                    <p>
                        Tom Cruise
                    </p>
                    <p>25</p>

                    <button className='btn btn-danger'>Check</button>
                </li> <li className='alert alert-danger d-flex justify-content-between border-bottom m-3'>
                    <p>
                        Jack Sparrow
                    </p>
                    <p>35</p>

                    <button className='btn btn-danger'>Check</button>

                </li> <li className=' alert alert-danger d-flex justify-content-between border-bottom m-3'>
                    <p>
                        Jack Sparrow
                    </p>
                    <p>45</p>

                    <button className='btn btn-danger'>Check</button>

                </li>


            </ul>



        </div>



    </div>
  )
}
export default Objection