import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='grid place-content-center h-screen bg-dot-thick-red-800'>
            <h2>Landed Somewhere Unkown!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
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