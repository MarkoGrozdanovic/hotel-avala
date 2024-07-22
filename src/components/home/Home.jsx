import React from 'react'
import Header from '../common/Header'
import MainHeader from '../layout/MainHeader'
import HotelServices from '../common/HotelServices'
import Parallax from '../common/Parallax'
import RoomCarousel from '../common/RoomCarousel'
import RoomSearch from '../common/RoomSearch'

const Home = () => {
    return (
        <section>
            <MainHeader />

            <div className='container'>
                <RoomSearch />
                <RoomCarousel/>
                <Parallax/>
                <HotelServices />
                <Parallax/>
            </div>
        </section>
    )
}

export default Home