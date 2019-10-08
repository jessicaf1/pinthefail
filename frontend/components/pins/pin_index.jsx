import React from 'react';
import PinIndexItem from './pin_index_item';
import NavBarContainer from '../navbar/nav_bar_container'

class PinIndex extends React.Component {
    constructor(props){
        super(props)
        debugger
    }
componentDidMount(){
        this.props.fetchPins()
    }
//am i fetching pins here of a specific user or of the user's boards? 

render(){
    let pins = this.props.pins.map(pin => {
        debugger
        return <PinIndexItem pin={pin} key={pin.id}/>
    })
    debugger 
    return(
        <div>
           
            <ul>
                <div className="grid-container">
                {pins}
                </div>
            </ul>
        </div>
    )
    }
}

export default PinIndex; 