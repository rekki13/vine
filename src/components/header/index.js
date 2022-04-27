export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="wrapper">
                    <div className="header__subheader">
                        <div className="header__subheader-left">
                            <p>Новокузнечный переулок 4/1</p>
                        </div>
                        <div className="header__subheader-right">
                            <a href="tel:8(812)123-45-67">8 (812) 123-45-67</a>
                        </div>
                    </div>
                    <nav className="nav header__nav">
                        <ul>
                            <li><a href="#">Каталог</a></li>
                            <li><a href="#">Доставка</a></li>
                            <li><a href="#">Коллекции</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}