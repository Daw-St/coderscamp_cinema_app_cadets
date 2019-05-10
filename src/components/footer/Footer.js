import React from 'react'

class Footer extends React.Component{
    render(){
        return (
            <div class='footer'>
                <hr className='line' />
                <div className='footerContainer'>
                    <div className='blank el'></div>
                    <div className='oNas el'>
                        <ul type='none'>
                            <li><h5>O NAS</h5></li>
                            <li className='opacity'>CodersCamp Poland</li>
                            <li className='opacity'>Pracuj z nami</li>
                            <li className='opacity'>Newsletter</li>
                            <li className='opacity'>Kontakt</li>
                        </ul>
                    </div>
                    <div className='linki el'>
                        <ul type='none'>
                            <li><h5>LINKI</h5></li>
                            <li className='opacity'>Global CodersCamp</li>
                            <li className='opacity'>Reklama w kinach</li>
                            <li className='opacity'>Forum CodersCamp Poland</li>
                        </ul>
                    </div>
                    <div className='informacje el'>
                        <ul type='none'>
                            <li><h5>INFORMACJE</h5></li>
                            <li className='opacity'>Regulacje</li>
                            <li className='opacity'>Polityka prywatności</li>
                            <li className='opacity'>Polityka cookies</li>
                        </ul>
                    </div>
                    <div className='obserwujNas el'>
                        <ul type='none'>
                            <li><h5>OBSERWUJ NAS</h5></li>
                            <li className='opacity'>Facebook</li>
                            <li className='opacity'>Instagram</li>
                            <li className='opacity'>Twitter</li>
                            <li className='opacity'>YouTube</li>
                        </ul>
                    </div>
                    <div className='blank el'></div>
                    <div className='under el'>Wszystkie prawa zastrzeżone CodersCamp &copy;</div>
                </div>
            </div>
        )
    }
}

export default Footer