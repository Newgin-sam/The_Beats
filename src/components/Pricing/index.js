import React, { Component } from 'react';
import MyButton from '../Util/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state={
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        description:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"],
        linkto:["http://demo","http://demo","http://demo"],
        delay:[500,0,500]
    }

    showBoxes = () => {
        
        return(
        this.state.prices.map((box,i) =>(
            <Zoom delay={this.state.delay[i]} key={[i]}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>{this.state.prices[i]}$</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.description[i]}
                    </div>
                    <div className="pricing_buttons"
                        text="Purchase tickets" 
                        bck="#ffa800"
                        color="#ffffff"
                        link={this.state.linkto[i]}
                    >
                        <MyButton className="pricing_buttons"
                            text="Purchase tickets" 
                            bck="#ffa800"
                            color="#ffffff"
                            link={this.state.linkto[i]}
                        />

                    </div>
                </div>
            </div>
            </Zoom>
        )))
    }

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;