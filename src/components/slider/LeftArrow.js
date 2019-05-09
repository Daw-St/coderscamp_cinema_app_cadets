import React from 'react'

const LeftArrow = (props) => {
    return (
        <div className='leftArrow' onClick={props.prevSlide} style={{
                height: '50px',
                width: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'black',
                border: 'yellow 1px solid',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'transform ease-in .1s',
                position: 'absolute',
                top: '50%' ,
                left: '25px',
                zIndex: '999',
                color: 'yellow',
            }}>
            <i className='fa fa-arrow-left fa-2x' aria-hidden='true'></i> 
        </div>
    )
}

export default LeftArrow