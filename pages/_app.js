import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import Head from "next/head"
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return(
  <StyledEngineProvider injectFirst>
    
    <div className="md:hidden flex items-center  text-center z-10 w-full fixed h-full bg-white text-3xl ">ยังไม่รองรับการแสดงผลบนมือถือ โปรดเข้า Website อีกครัั้งในอุปกรณ์คอมพิวเตอร์หรือ tablet</div>
    <Navbar/>
   
    <Component {...pageProps} />

  </StyledEngineProvider>
  ) 
}

export default MyApp
