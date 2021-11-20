import Navbar from './navbar'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Nprogress from 'nprogress'
import Classnames from 'classnames'

const Layout = ({children, title ,footer = true, dark=false}) => {

    const router = useRouter();
    
    const handleRouteChange = url => {
        console.log(url)
        Nprogress.start();
    }
    useEffect(()=>{
      router.events.on('routeChangeStart', handleRouteChange)

      router.events.on('routeChangeComplete', () => Nprogress.done());


      return () => {
          router.events.off('routeChangeStart', handleRouteChange)
      }

        },[])

    return(
        <div className={Classnames({'bg-dark': dark, 'bg-ligh': ! dark})}>


    <Navbar/>
<main className="container py-4">

    {title &&(
        <h1 className={Classnames('text-center', {'text-light': dark})}>
            {title}
        </h1>    
    )}
{children}
</main>
{
    footer && (

<footer className="bg-dark text-light text-center">
    <div className="container p-4 ">
        <h1>&copy; Anyeimar Requena portfolio</h1>
        <p> 2017- {new Date().getFullYear()}</p>
        <p>All rights Reserverd.</p>
    </div>

</footer>
    )
}
    
</div>
    )
}


export default Layout;