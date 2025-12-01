import React from 'react'
import Pin from '../assets/pin.png';
const Title = ({title}) => {
    return (
        <div className="flex items-center justify-center mb-5">
            <div className="group relative flex justify-center items-center mr-2">
                <img
                    src={Pin}
                    alt="pin"
                    className="w-10 h-10 sm:w-20 sm:h-20"
                />
            </div>
            <div className="text-3xl underline">{title}</div>
        </div>
    )
}

export default Title