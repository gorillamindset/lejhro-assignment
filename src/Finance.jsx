import FAQ from './FAQ'
import Navbar from './Navbar'
import Footer from './Footer'
import { Step } from './Step'

function Finance() {
  return (
    <>
        <div className=''>
            <Navbar/>
            <div className='bg-[#d6932c] w-full'>
                <div className="flex w-full bg-inherit md:ml-48">
                    <nav className="flex p-7 w-full sticky">
                        <img src="https://www.lejhro.com/lejhro_logo_white.png" height={30} width={200} alt="logo" />
                    </nav>
                </div>
                <p className='text-4xl text-white md:ml-48 p-7 mt-5'>Financial Services</p>
            </div>



            <Step/>
            <FAQ/>

            <Footer/>
        </div>

    </>
   
  )
}

export default Finance