import { Footer } from '@/app/components/Footer/Footer'
import { Header } from '@/app/components/Header/Header'
import React from 'react'
import InfoProduct from './components/InfoProduct'
import PaymentForm from './components/payment/paymentForm'
import Carousel from './components/carouselYouMightLike/Carousel'
import CarouselOtherPeolplesBuyThis from './components/carouselYouMightLike/CarouselOtherPeoplesBuyThis';
import AccordionDatasheet from './components/accordion/AccordionDatasheet'
import Assessments from './components/rating/Assessments'

const page = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header />
            <div className='lg:w-[70%] mx-auto lg:shadow-md lg:shadow-gray-500 lg:my-20 rounded-lg lg:flex'>
                <InfoProduct />
                <PaymentForm />
            </div>
            <div>
                    <Carousel />
                    <CarouselOtherPeolplesBuyThis />
                    <AccordionDatasheet />
                    <Assessments />
            </div>
            <Footer />
        </div>
    )
}

export default page