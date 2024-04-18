import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='grid place-content-center h-screen gap-5 bg-dot-thick-red-800 blur-2xl'>
            <img src="https://illustrations.popsy.co/emerald/crashed-error.svg"
                width={"400px"}
                alt="" />
            <h2 className='text-3xl font-bold text-center'>Landed Somewhere Unkown!</h2>
            <p className='text-center'>
                <Link className='text-red-800 text-center ' to="/">Go to the home page</Link>
            </p>
            <div className='flex flex-row gap-10 justify-center items-center'>
                <a href="/explain" >
                    <button className="bg-green-500  rounded-lg pt-3 pb-3 pr-8 pl-8">
                        Code Explain
                    </button>
                </a>
                <a href="/review" >
                    <button className="bg-green-500  rounded-lg pt-3 pb-3 pr-8 pl-8">
                        Code Review
                    </button>
                </a>
            </div>
        </div>
    )
}

export default NotFound