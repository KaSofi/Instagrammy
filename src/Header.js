

function Header() {

    const sayHello = () => {
        alert('Hello!')
    }
    return(
        <div className="headerBlock">
            <h1 className="title">Instagram</h1>
            <input type="search" placeholder="Поиск"/>
            <div className="headerButtonRegister">
                <button className="buttonEnter" onClick={sayHello}>Войти</button>
                <p className="register">Зарегистрироваться</p>
            </div>
        </div>
    )
}

export default Header;