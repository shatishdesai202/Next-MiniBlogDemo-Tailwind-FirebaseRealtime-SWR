import React from 'react'
import Header from './Header'
import Footer from './Footer'

const index = ({children}) => {
    return (
        <div>
           <Header/>
           <div className="mt-5">
           {children}
           </div>
           <Footer/>
        </div>
    )
}

export default index
