import React, {Component} from 'react';

import Breadcrumb from "../../common/breadcrumb";

class ElementTitle extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Title'}/>

                <section class="section-b-space">
                    <div class="title1">
                        <h4>recent story</h4>
                        <h2 class="title-inner1">trending products</h2>
                    </div>

                    <div class="title2">
                        <h4>recent story</h4>
                        <h2 class="title-inner2">trending products</h2>
                    </div>

                    <div class="title3">
                        <h4>recent story</h4>
                        <h2 class="title-inner3">trending products</h2>
                        <div class="line"></div>
                    </div>

                    <div class="title4">
                        <h2 class="title-inner4">trending products</h2>
                        <div class="line">
                        <span>
                        </span>
                        </div>
                    </div>

                    <div class="title1 title5">
                        <h4>recent story</h4>
                        <h2 class="title-inner1">trending products</h2>
                        <hr role="tournament6" />
                    </div>

                </section>
            </div>
        )
    }
}


export default ElementTitle;