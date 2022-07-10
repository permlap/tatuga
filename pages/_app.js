import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import Head from "next/head"
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return(
  <StyledEngineProvider injectFirst>
    <Head>
   
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>  
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@1000;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    </Head>
    <div className="md:hidden flex items-center  absolute text-center z-10 w-screen h-full bg-white text-3xl ">ยังไม่รองรับการแสดงผลบนมือถือ โปรดเข้า Website อีกครัั้งในอุปกร์คอมพิวเตอร์</div>
    <Navbar/>
   
    <Component {...pageProps} />

  </StyledEngineProvider>
  ) 
}

export default MyApp
