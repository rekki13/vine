import React, {Component} from 'react';

class Hero extends Component {
    render() {
        return (
            <section className="section section-hero">
                <div className="container">
                    <div className="wrapper">
                        <div className="wrapper__left">
                            <button className="btn button">винная карта</button>
                        </div>
                        <div className="wrapper__right">

                            <button className="btn button">дегустация</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;