import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {

    const [users ,setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json());
    };

    useEffect(() => {
        getUsers();
    },[]);

  return (
    <>
      <h2 style={{textAlign:"center"}} className="mt-5">List of Github Users ( Fetched From Github API )</h2>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>

            {
                users.map((curElem) => {
                    return (
                        <>
                        <div className='col-10 col-md-4 mt-3' style={{marginLeft:"-7px"}} key={curElem.id}>
                            <div className='card p-4'>
                                <div className='d-flex align-items-center'>
                                     <div className='img'>
                                        <img src={curElem.thumbnailUrl} className='rounded' width='155'/>
                                    </div>
                                <div className='ml-3 w-100'>
                                <h4 className='mb-0 mt-0 text-secondary'>{curElem.id}) Title</h4> <span className='textLeft text-primary'>{curElem.title}</span> 
                                    <div className='p-2 mt-4 bg-secondary d-flex justify-content-between rounded text-white' style={{marginLeft:"10px"}}>
                                        <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                                        <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>980</span></div>
                                        <div className='d-flex flex-column'><span className='rating'>Rating</span><span className='number3'>8.9</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                    )
                })
            }

            
        </div>
      </div>
    </>
  )
}

export default UseEffectAPI
