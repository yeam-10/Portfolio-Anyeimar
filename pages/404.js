import Link from 'next/link'
import Layout from '../components/layout'

const custom404 = () => (

<Layout>
    <div className="text-center">
    <h1>Page not found </h1>
    <p>Please return to <Link href="/">
            <a>Home</a>
        
        </Link>
    </p>
    </div>
</Layout>


)

export default custom404;