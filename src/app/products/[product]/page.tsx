import { Footer } from '@/app/components/Footer/Footer'
import { Header } from '@/app/components/Header/Header'
import React from 'react'
import InfoProduct from './components/InfoProduct'
import PaymentForm from './components/payment/paymentForm'

const page = () => {
    return (
        <div>
            <Header />
                <div className='w-[70%] mx-auto border shadow-md shadow-gray-500 my-20 h-screen rounded-lg flex'>
                    <InfoProduct />
                    <PaymentForm />
                </div>
            <Footer />
        </div>
    )
}

export default page