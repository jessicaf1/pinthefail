import React from 'react';
import BoardCreateForm from './board_create_form';
import {connect} from 'react-redux';
import {createBoard} from '../../actions/board_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

export const mapStateToProps = state => {
    debugger
    return {
    // currentUser: state.users[state.session.currentUser]
    board: {name:'', description: ''}
    }
}

export const mapDispatchToProps = dispatch => {
    debugger
    return {
    createBoard: board => dispatch(createBoard(board)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm)
