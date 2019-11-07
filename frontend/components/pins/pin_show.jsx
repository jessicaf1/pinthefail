//what needs to be here besides the actual pin itself 

import React from 'react';
import { withRouter } from 'react-router-dom';
import PinBoardContainer from './pin_to_board_container'

class PinShow extends React.Component {
  constructor(props){
    super(props)
    this.sendToPins = this.sendToPins.bind(this)
  }

  componentDidMount(){
    this.props.fetchPin(this.props.match.params.pinId) 
    window.scrollTo(0,0)
  }

  sendToPins(){
    this.props.history.push(`/users/${this.props.user.id}/pins`)
  }
  


  render(){

    if (this.props.pin === undefined) {
      debugger
      return null
    }
    if(this.props.pin.photoUrl === undefined){
      debugger
      return null 
    }


  //   if (this.props.boards === undefined) {
  //     debugger
  //     return null
  //   }
  // //   else { 
     
  // // }
  //   let arr2 = [];
  //   let arr = this.props.boards.forEach(board => {
  //     if (!arr2.includes(board)){
  //       arr2.push(board)
  //     }
  //   });

  //    const arr3 = arr2.map(board => {
  //     // debugger
  //     return <li>{board.name}</li>
  //   }) 
  

    //   if (this.props.boards.name === undefined) {
    //     debugger
    //     return null
    //   }
    //   else { 

    // } 
    //WORKING
    // let arr2 = []

    let arr = this.props.boards.map(board => {
      // debugger
      return board ? <li>{board.name}</li> : null 
    }) 

  //  const arrfill = () => {
  //  for (let i = 0; i < arr.length; i++){
  //    if (!arr2.includes(arr[i])){
  //      arr2.push(arr[i])
  //     } 
  //   }
  //   debugger
  //   return arr2
  // } 
  // arrfill()
  //END

    // let arr3 = []
    // let arr = this.props.boards.forEach(board => {
    //    arr3.push(board)
    // })

    // arr3.map(board =>
    //   {
    //     return <li>{board.name}</li>
    //   })


    return(


      <div>
        <div className="pin-show-big">
        <img onClick={this.sendToPins} id="arrow" src={window.arrow}></img>
        <img id="pin-edit" src={window.pencil} onClick={()=> {this.props.openModal(this.props.pin.id)}} alt=""/>
       
        <div id="pin-name">{this.props.pin.name}</div>
        <div id="pin-description">{this.props.pin.link_url}</div>
        <img id="pin-photo" src={this.props.pin.photoUrl} alt=""/>
        {/* <div id="pin-dd">
          <PinBoardContainer pinId={this.props.pin.id}/> 
          </div> */}
          
          {/* <div id="pin-user">{this.props.user.f_name ? 'uploaded by ' + this.props.user.f_name + " " + this.props.user.l_name : null } </div> */}
          <div id="pin-boards-title">Saved boards:</div>
          <div id="pin-boards">{this.props.boards === undefined ?  null : arr }</div>
      </div>
      </div>
    )
  }

}

export default withRouter(PinShow)