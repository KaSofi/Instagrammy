
import logo from './logo.jpg'

function About() {

    const registrationButton = () => {
        alert(`Sorry, it's not real!`)
    }

    return(
        <div className="aboutBlock">
        <img src={logo} alt="logo" className='logo'/>
        <div>
        <div className='instagramSubmit'>
            <h1>Instagram</h1>
            <button onClick={registrationButton}>Подписаться</button>
        </div>
        <div className='infoRow'>
            <p>6900 публикаций</p>
            <p>400млн подписчиков</p>
            <p>79 подписок</p>
        </div>
        <div className='refs'>
            <p>Instagram</p>
            <a href="https://dzen.ru/?yredirect=true">#YoursToMake</a>
            <a href="instagram.com">facebook.com/climateinformation</a>
        </div>
        </div>
        </div>
    )
}


export default About;