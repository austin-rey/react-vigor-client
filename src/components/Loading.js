import React from 'react'

const Loading = () => {
    return (
        <div className="flex w-full h-screen bg-gray-100 items-center justify-center animate-pulse rounded-md ">
            <div className="p-16 bg-gray-200 rounded-md transition-all duration-700 ease-in-out">
                <h1 className="font-Lato text-4xl text-center text-gray-700">Loading</h1>
                <img src="/spinner.gif" alt=""/>
            </div>
        </div>                
    )
}

export default Loading
