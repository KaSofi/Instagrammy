import portret from './portret.jpg'


function Carusel() {
     return(
        <div>
            <div className='caruselPicture'>
            <div className='caruselBlock'>
                <img src={portret} className='portret' alt="" />
                <h5>Mila</h5>
            </div>
            <div className='caruselBlock'>
                <img src={portret} className='portret' alt="" />
                <h5>Tamara</h5>
            </div>
            <div className='caruselBlock'>
                <img src={portret} className='portret' alt="" />
                <h5>Darya</h5>
            </div>
            <div className='caruselBlock'>
                <img src={portret} className='portret' alt="" />
                <h5>Vlada</h5>
            </div>
            <div className='caruselBlock'>
                <img src={portret} className='portret' alt="" />
                <h5>Sonya</h5>
            </div>
            <div className='caruselBlock'>
                <img src={portret} className='portret' alt="" />
                <h5>Eugine</h5>
            </div>
            <div className='caruselBlock'>
                <img src={portret} className='portret' alt="" />
                <h5>Viktor</h5>
            </div>
            </div>
        </div>
     )
}


export default Carusel;