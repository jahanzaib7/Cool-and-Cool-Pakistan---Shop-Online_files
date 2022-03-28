import React from 'react';
import {Link} from 'react-router-dom'

function LogoImage(props) {

    return <Link to={`${process.env.PUBLIC_URL}/`} >
                <img src={`${process.env.PUBLIC_URL}./assets/images/logos/logos.png`} style={{width:"30%"}} alt="" class="img-fluid" />
            </Link>;
}

export default LogoImage;