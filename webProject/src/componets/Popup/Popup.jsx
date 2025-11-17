import React from 'react'
import './Popup.scss'

const Popup = ({close , removeitem}) => {
    return (
        <div className='popup'>
            <div className="box">
                <p>Do You Want to Remove From Cart</p>
                <div className='btns'>
                    <button

                    >Confirm</button>
                    <button
                        onClick={close}
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Popup