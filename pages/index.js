import Layout from '../components/layout'
import { skills } from './protfile';

console.log(skills)
const Index = () => (

    <Layout >

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
                            <div className="progress-bar" role="progressbar" style={{width: `${porcentage}%`}}> </div>
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
                    </div>

                </div>

            </div>



        </div>

    </Layout>

)
export default Index;