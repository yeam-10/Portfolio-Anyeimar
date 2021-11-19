import Layout from '../components/layout'
import { skills, experience, proyects } from './protfile';
import Link from 'next/link'

console.log(experience)
const Index = () => (

    <Layout>
      

    { /**Header */ }

    <header className="row">
      <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
              <div className="row">
                  <div className="col-md-4">
                      <img src="Anye-Requena.png" alt="" className="img-fluid" width="250" height="300"/>
                  </div>
                  <div className="col-md-8">
                      <h1>Anyeimar Requena</h1>
                      <h3>Junior Developer</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia doloremque beatae ipsa nesciunt corrupti, unde assumenda! Quas blanditiis quos sit enim asperiores nesciunt sed nulla qui architecto! Suscipit, magnam amet.</p>
                      <a href="/hireme">Hire Me</a>
                  </div>
              </div>
          </div>
      </div>
    </header>
   {/** Second Section  */}
        <div className="row py-2">


            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                      {
                          skills.map(({skill, porcentage}, i) =>
                            
                            <div className="py-3" key={i}>
                                 <h5>{skill}</h5>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${porcentage}%`}}>
                                
                                 </div>
                        </div>

                            </div>
                            )
                      }
                      

                    </div>
                </div>

            </div>

            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul>
                           {
                               experience.map(({title, to, from,description }, index) => (
                                <li key={index}>
                                <h3>{title}</h3>
                                <h5>{from}-{to}</h5>
                                <p>{description}</p>
                            </li>
                               ))
                           }
                        </ul>

                        <Link href="/experience">
                            <a className="btn btn-light">Know More</a>
                        
                        </Link>
                    </div>

                </div>

            </div>



        </div>
 
      {  /**Section Portfolio */}

      <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {proyects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know More</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    

    </Layout>




)
export default Index;