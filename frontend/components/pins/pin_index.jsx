import React from 'react';
import PinIndexItem from './pin_index_item';
import NavBarContainer from '../navbar/nav_bar_container'

class PinIndex extends React.Component {
    constructor(props){
        super(props)
    }
componentDidMount(){
    this.props.fetchPins()
}

render(){
    let pins = this.props.pins.map(pin => {
        return <PinIndexItem pin={pin} key={pin.id}/>
    })

    return(
        <div>
            <NavBarContainer/>
            <ul>
                {pins}
            </ul>
        </div>
    )
    }
}

export default PinIndex; 