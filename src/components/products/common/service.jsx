import React, {Component} from 'react';
import {connect} from 'react-redux';
import { sideDetails } from '../../../constants/Endpoints';
import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "../../../services/script"

class Service extends Component {
    render (){
        const {sideDetails,country} = this.props
        
        return (
            <div class="collection-filter-block ">
                <div class="product-service">
                    <div class="media">
                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                        <div class="media-body">
                            <h4>{sideDetails[country][0].Name}</h4>
                            <p>{sideDetails[country][0].Description}</p>
                        </div>
                    </div>
                    <div class="media">
                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                        <div class="media-body">
                        <h4>{sideDetails[country][1].Name}</h4>
                            <p>{sideDetails[country][1].Description}</p>
                        </div>
                    </div>
                    <div class="media">
                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                        <div class="media-body">
                        <h4>{sideDetails[country][2].Name}</h4>
                            <p>{sideDetails[country][2].Description}</p>
                        </div>
                    </div>
                    <div class="media border-0 m-0">
                        <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                        <div class="media-body">
                        <h4>{sideDetails[country][3].Name}</h4>
                            <p>{sideDetails[country][3].Description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        sideDetails: state.data.sideDetails,
        country: state.filters.country
     
    }
}

export default connect(mapStateToProps)(Service);
