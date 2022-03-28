import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Breadcrumb extends Component {
    render (){
        const {title, parent} = this.props;
        return (
            <div class="breadcrumb-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="page-title">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <nav aria-label="breadcrumb" class="theme-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                    {parent?
                                    <li class="breadcrumb-item" aria-current="page">{parent}</li>:''}
                                    <li class="breadcrumb-item active" aria-current="page">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;