import '../component/Home/Home.css'
import Footer from './Home/Footer'
import Header from './Home/Header'

export default function BaseLayout({children}:any) {
  return (
   <>
   <div className='page-container'>
   <Header />
   <main>{children}</main>
   <Footer />
   </div>
   </>
  )
}
