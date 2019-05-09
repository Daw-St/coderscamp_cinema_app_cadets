import React from 'react'

const RightArrow = (props) => {
    return (
        <div className='rightArrow' onClick={props.nextSlide} style={{
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
            right: '25px',
            zIndex: '999',
            color: 'yellow',
            
        }}>
            <i className='fa fa-arrow-right fa-2x' aria-hidden='true'></i> 
        </div>
    )
}

export default RightArrow