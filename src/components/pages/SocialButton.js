import React from 'react'
import SocialLogin from 'react-social-login'

class SocialButton extends React.Component {

    render() {
        return (
            <button class="col btn btn-solid m-md-2" onClick={this.props.triggerLogin} {...this.props}>
              { this.props.children }
            </button>
        );
    }
}

export default SocialLogin(SocialButton);