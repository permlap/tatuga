import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return(
  <StyledEngineProvider injectFirst>
    <QueryClientProvider client={queryClient}>
    <div className="md:hidden flex items-center  text-center z-10 w-full fixed h-full bg-white text-3xl ">ยังไม่รองรับการแสดงผลบนมือถือ โปรดเข้า Website อีกครัั้งในอุปกรณ์คอมพิวเตอร์หรือ tablet</div>
    <Navbar/>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  </StyledEngineProvider>
  ) 
}

export default MyApp
