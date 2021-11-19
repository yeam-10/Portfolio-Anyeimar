import Layout from '../components/layout'

//Valida en caso de tener errores

const _error = () => {
    return (
        <Layout>
            statusCode ? (
                <p className="text-center">Could not load your page :{statusCode}</p>
            ):(
                <p>Page not Found</p>
            )

           
        </Layout>
    )
}

export default _error