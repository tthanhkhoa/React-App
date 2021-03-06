import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="inner">
            <section id="one" className="wrapper style1">

                <div className="image fit flush">
                    <img src="images/Skype_Picture.jpg" alt="" />
                </div>
                <header className="special">
                    <h2>Fringilla Fermentum Tellus</h2>
                    <p>vehicula urna sed justo bibendum</p>
                </header>
                <div className="content">
                    <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel. Vestibulum et efficitur urna. Duis velit nulla, interdum sed felis sit amet, facilisis auctor nunc. Cras luctus urna at risus feugiat scelerisque nec sed diam. </p>
                    <p>Nunc fringilla metus odio, at rutrum augue tristique vel. Nulla ac tellus a neque ullamcorper porta a vitae ipsum. Morbi est sapien, hendrerit quis mi in, aliquam bibendum orci. Vestibulum imperdiet nibh vitae maximus posuere. Aenean sit amet nibh feugiat, condimentum tellus eu, malesuada nunc. Mauris ac pulvinar turpis, sit amet pharetra est. Ut bibendum justo condimentum, vehicula ex vel, venenatis libero. Etiam vehicula urna sed justo bibendum, ac lacinia nunc pulvinar. Integer nec velit orci. Vestibulum pellentesque varius dapibus. Morbi ullamcorper augue est, sed luctus orci fermentum dictum. Nunc tincidunt, nisl consequat convallis viverra, metus nisl ultricies dui, vitae dapibus ligula urna sit amet nibh. Duis ut venenatis enim.</p>
                </div>
            </section>
            <section id="two" className="wrapper style2">
                <header>
                    <h2>Vestibulum Convallis</h2>
                    <p>vehicula urna sed justo bibendum</p>
                </header>
                <div className="content">
                    <div className="gallery">
                        <div>
                            <div className="image fit flush">
                                <a href="images/pic03.jpg"><img src="images/pic03.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div>
                            <div className="image fit flush">
                                <a href="images/pic01.jpg"><img src="images/pic01.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div>
                            <div className="image fit flush">
                                <a href="images/pic04.jpg"><img src="images/pic04.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div>
                            <div className="image fit flush">
                                <a href="images/pic05.jpg"><img src="images/pic05.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="three" className="wrapper">
                <div className="spotlight">
                    <div className="image flush"><img src="images/pic06.jpg" alt="" /></div>
                    <div className="inner">
                        <h3>Viverra Hendrerit</h3>
                        <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.</p>
                    </div>
                </div>
                <div className="spotlight alt">
                    <div className="image flush"><img src="images/pic07.jpg" alt="" /></div>
                    <div  className="inner">
                        <h3>Curabitur Eget</h3>
                        <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.</p>
                    </div>
                </div>
                <div className="spotlight">
                    <div className="image flush"><img src="images/pic08.jpg" alt="" /></div>
                    <div className="inner">
                        <h3>Morbi Eleifend</h3>
                        <p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.</p>
                    </div>
                </div>
            </section>

        </div>
    );
  }
}

export default App;
