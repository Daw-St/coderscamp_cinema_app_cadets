import React from 'react'

const Slide = ({image}) => {
    const styles = {
        backgroundColor: 'black',
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        display: 'inline-block',
        height: '100%',
        width: '100%'
    }

    return <div className='slide' style={styles}></div>
}

export default Slide