import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Имя"/>
                <input type="tel" placeholder="Телефон"/>
                <select name="store" id="store">
                    <option value="Бутик на Невском 103">Бутик на Невском 103</option>
                    <option value="Бутик на Невском 103">Бутик на Невском 103</option>
                    <option value="Бутик на Невском 103">Бутик на Невском 103</option>
                    <option value="Бутик на Невском 103">Бутик на Невском 103</option>
                    <option value="Бутик на Невском 103">Бутик на Невском 103</option>
                </select>
            </form>
        );
    }
}

export default Form;