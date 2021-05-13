import { render } from '@testing-library/react';
import React,{useState,useEffect, Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Util/MyButton';

class Discount extends Component {
    
    state={
        start:0,
        end:25
    }

    handleDiscount = () => {
        // alert(discount.start+1);
        if(this.state.start < this.state.end){
            this.setState({start:this.state.start+1});
        }
    }
    componentDidUpdate(){
        setTimeout(() =>{
            this.handleDiscount();
        },40)
    }
    
render(){
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade 
                    onReveal={() => this.handleDiscount()}
                >
                    <div className="discount_porcentage">
                        <span>{this.state.start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before 20th june</h3>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <div>
                            <MyButton 
                                text="Purchase tickets" 
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://google.com"
                            />
                        </div>
                    </div>       
                </Slide>

            </div>
            
        </div>
    );
}
};

export default Discount;