import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex items-center justify-center w-full h-[100%]">
        <div className=' flex gap-5'>
          <Link to="books">
            <div className='w-[200px] h-[150px] bg-green-600 items-center text-center font-bold text-2xl rounded-lg'>Total Book
              <h3 className=' text-white font-bold items-center justify-items-center text-center text-7xl'>11</h3>

            </div></Link>
            <Link to="books">
            <div className='w-[200px] h-[150px] bg-blue-600 items-center text-center font-bold text-2xl rounded-lg'> Available Book
              <h3 className=' text-white font-bold items-center justify-items-center text-center text-7xl'>6</h3>

            </div>
            </Link>
            <Link to="issuebook">
            <div className='w-[200px] h-[150px] bg-rose-500 items-center text-center font-bold text-2xl rounded-lg'> Issue Book
              <h3 className=' text-white font-bold items-center justify-items-center text-center text-7xl'>3</h3>

            </div>
            </Link>
            <Link to="issuebook">
            <div className='w-[200px] h-[150px] bg-red-600 items-center text-center font-bold text-2xl rounded-lg'>Return Book
              <h3 className=' text-white font-bold items-center justify-items-center text-center text-7xl'>5</h3>

            </div>
            </Link>
        </div>

      
    </div>
  )
}

export default Dashboard;
