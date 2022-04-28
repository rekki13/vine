import React, {Component} from 'react';
import logo from '../../../../assets/images/glass.svg'; // Tell webpack this JS file uses this image

class Info extends Component {
    render() {
        return (
            <section className="section section-info">
                <div className="container">
                    <div className="wrapper">
                        <div className="wrapper__box">
                            <div className="wrapper__box-title">
                                <h2 className="wrapper__box-title-text">Лучший вкус, это вкус долголетнего вина</h2>
                            </div>
                            <div className="wrapper__box-line">
                                <hr/>
                            </div>
                            <div className="wrapper__box-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac
                                    id
                                    imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis
                                    adipiscing
                                    morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam
                                    ultrices
                                    nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus
                                    auctor
                                    purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed.
                                    Viverra
                                    cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim
                                    molestie
                                    eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet,
                                    quis
                                    risus. Pellentesque scelerisque nunc, orci aliquam quis.</p>
                            </div>
                            <div className="wrapper__box-image">
                                <img src={logo} alt="Logo"/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Info;