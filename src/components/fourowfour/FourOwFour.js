import React from 'react';
import '../../static/css/four.css';
import {useNavigate} from 'react-router-dom';

let FourOwFour = ()=>{

    let navigate = useNavigate()

    let goBack = ()=>{
        navigate('/')
    }

    return(
        <>
         <section className="not-container">
             <article className="not">
                 <div className="not-title">
                     <h1>404 page not found</h1>
                 </div>
                 <div className="not-button">
                     <button className="not-button-back" onClick={goBack}>Go Back</button>
                 </div>
             </article>
         </section>
        </>
    )

};



export default FourOwFour;