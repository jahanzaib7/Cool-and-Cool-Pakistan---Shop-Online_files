import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

class TopBarWhite extends Component {

    render() {
        const {translate} = this.props;
        return (
            <div>
                {/* <div class="top-header white-bg border-bottom-grey">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="header-contact">
                                    <ul>
                                        <li>{translate('topbar_title', { theme_name: ' Multikart' })}</li>
                                        <li><i class="fa fa-phone" aria-hidden="true"></i>{translate('call_us')}:  123 - 456 - 7890</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 text-right">
                                <ul class="header-dropdown">
                                    <li class="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i class="fa fa-random" aria-hidden="true"></i>{translate('compare')}</Link></li>
                                    <li class="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i class="fa fa-heart" aria-hidden="true"></i>{translate('wishlist')}</Link></li>
                                    <li class="onhover-dropdown mobile-account">
                                        <i class="fa fa-user" aria-hidden="true"></i> {translate('my_account')}
                                        <ul class="onhover-show-div">
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                            </li>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}


export default withTranslate(TopBarWhite);