import './AboutText.css'

function AboutText(props){
    return(
          <div className='container'>
            <div className='text-section d-flex'>
                <h2>ABC SER</h2>
            </div>
            <div className='text-section d-flex'>
                <p className="primary-color">Primeira linha</p>
                <p className="primary-color">Segunda linha</p>
                <p className="primary-color">Terceira linha</p>
            </div>
          </div>
    )
}

export default AboutText
