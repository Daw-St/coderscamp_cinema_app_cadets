import React from 'react'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer';

class Home extends React.Component{
    render(){
        return (
        <div>
            <Slider />
            <Footer />
        </div>
        )
    }
}

export default Home