import './ProjectsList.css'

//ASSETS
import Curtido from '../../assets/curtido.svg'
import Curtir from '../../assets/curtir.svg'

function ProjectsList(props){
    return(
        <div className="projects-section">
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className='project-grid'>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtir} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Alexander</h3>
                    <p>JF, Brasil</p>
                    <img src={Curtido} height="20px"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList