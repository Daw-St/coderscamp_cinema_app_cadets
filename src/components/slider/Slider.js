import React from 'react'
import Slide from './Slide'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'

export default class Slider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: [
                "https://techaeris.com/wp-content/uploads/2019/03/birth-of-a-monster-star-wars.jpg",
                "https://i.ytimg.com/vi/FOabQZHT4qY/maxresdefault.jpg",
                "https://d-tm.ppstatic.pl/kadry/b0/f5/da1773cca265279f4428baea7b65.1000.jpg",
                "https://cdn-images-1.medium.com/max/1600/1*ZcY2emcmhBs_xi6AfpLiAg.jpeg",
                "https://assets.pinshape.com/uploads/image/file/114010/inception-spinning-top-3d-printing-114010.jpg",
                
        ],
        currentIndex: 0,
        value: 0
        }
    }

    render(){
        return (
            <div className='slider' style={{
                    position: 'relative',
                    width: '100vw',
                    margin: '0 auto',
                    height: '400px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'}}>
                <div className='slider-wrapper' style={{
                    transform: `translateX(${this.state.value}px)`,
                    transition: 'transform ease-out 0.5s',
                    position: 'relative',
                    height: '100%',
                    width: '100%'
                }}>    
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>

                <LeftArrow prevSlide={this.prevSlide}/>
                <RightArrow nextSlide={this.nextSlide}/>
            </div>
        )
    }

    nextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1){
            return this.setState({currentIndex: 0, value: 0})
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            value: prevState.value + -(this.slideWidth())
        }))
    }
    prevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            value: prevState.value + this.slideWidth()
        }))
    }
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }
}