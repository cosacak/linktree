import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import items from './assets/items'
import profilePhoto from './assets/chn.jpg'

// import './css/skeleton.css'
// import './css/normalize.css'
import './css/profile.css'

function App() {
    return (
        <div className="App" >
            <Header></Header>
            <div class="container d-flex justify-content-center">
                <div class="cardMain p-3 py-4">
                    <div class="text-center">
                        <img src={profilePhoto} width="100" alt="profilePhoto" class="rounded-circle" />
                        <h3 class="mt-2">Cihan Kılıç</h3>
                        <span class="mt-1 clearfix">Founder</span>
                        <small class="mt-4">I am Founder of RMC Otomotiv.</small>
                        <div class="social-buttons mt-5">
                            <button class="neo-button">
                                <a href="tel:+905394809636">
                                    <i class="fa fa-phone  fa-2x" aria-hidden="true" style={{ color: 'black' }}></i>
                                </a>
                            </button>
                            <button class="neo-button">
                                <a href="mailto:cihan-kilic@hotmail.com">
                                    <i class="fa fa-envelope fa-2x" aria-hidden="true" style={{ color: 'black' }}></i>
                                </a>
                            </button>
                            <button class="neo-button">
                                <a href="https://rmcotomotiv.com/">
                                    <i class="fa fa-globe fa-2x" aria-hidden="true" style={{ color: 'black' }}></i>
                                </a>
                            </button>
                            <button class="neo-button">
                                <a href="https://www.google.com/maps/dir/40.9096424,29.2807936/Mevlana+Cd.+No:+28%2FB,+S%C3%BCl%C3%BCntepe,+34909+Pendik%2F%C4%B0stanbul/@40.9097489,29.2802223,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cadbaac2d00001:0x3f500b711fe62322!2m2!1d29.2806971!2d40.9099222"
                                >
                                    <i class="fa fa-map-marker fa-2x" aria-hidden="true" style={{ color: 'black' }}></i>    
                                </a>
                                
                            </button>
                       
                        </div>
                    </div> 
                </div>
            </div>
            <div className = "CardContainer CardRow">
                {
                    items.map((item, i) => {
                        return(
                            <Card
                            i={i}
                            title={item.title}
                            subtitle={item.subtitle}
                            link={item.link}
                            cover={item.image}>
                            </Card>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;