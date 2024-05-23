import React from 'react'
import Header from '../common/Header'
import MainHeader from '../layout/MainHeader'
import HotelServices from '../common/HotelServices'
import Parallax from '../common/Parallax'
import RoomCarousel from '../common/RoomCarousel'

const Home = () => {
    return (
        <section>
            <MainHeader />

            <div className='container'>
                <RoomCarousel/>
                <Parallax/>
                <HotelServices />
                <Parallax/>
            </div>
        </section>
    )
}

export default Home