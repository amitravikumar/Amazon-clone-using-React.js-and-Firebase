import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Banner Image was supposed to be here"/>

                <div className="home__row">
                    <Product />
                    {/* Product 1*/}
                    {/* Product 2*/}
                </div>

                <div className="home__row">
                    {/* Product 1*/}
                    {/* Product 2*/}
                    {/* Product 3*/}
                </div>
                
                <div className="home__row">
                    {/* Product 1*/}
                </div>
            </div>
        </div>
    )    
}




export default Home;