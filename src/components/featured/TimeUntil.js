import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

class TimeUntil extends Component {

    state = {
        deadline: 'Dec 16, 2021',
        days:0,
        hrs:0,
        mins:0,
        sec:0
    }

    getTimeUtil = () => {
        const time = Date.parse(this.state.deadline) - Date.parse(new Date())
        if(time < 0 ){
            console.log('DatePassed')
        }else{
            const sec = Math.floor((time/1000)%60);
            const mins = Math.floor((time/1000/60)%60);
            const hrs = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));
            this.setState({days,hrs,mins,sec})
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.getTimeUtil();
        }, 1000);
    }

    render() {
        return (
            <Bounce leftt delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className = "countdown_time">
                            {this.state.days}
                        </div>
                        <div className="countdown_tag">
                            days
                        </div>
                        
                    </div>
                    <div className="countdown_item">
                        <div className = "countdown_time">
                            {this.state.hrs}
                        </div>
                        <div className="countdown_tag">
                            hours
                        </div>
                        
                    </div>
                    <div className="countdown_item">
                        <div className = "countdown_time">
                            {this.state.mins}
                        </div>
                        <div className="countdown_tag">
                            minutes
                        </div>
                        
                    </div>
                    <div className="countdown_item">
                        <div className = "countdown_time">
                            {this.state.sec}
                        </div>
                        <div className="countdown_tag">
                            seconds
                        </div>
                        
                    </div>
                </div>
            </div>
            </Bounce>
        );
    }
}

export default TimeUntil;