import React, { useState } from 'react'
import logo from './logo.svg';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import '../src/App.css';
import {Paper, Grid, Box, Typography} from '@material-ui/core';
import TinderCard from 'react-tinder-card';
import DataLayer from './Pages/DataLayer';
import MainPage from './Pages/MainPage';

import NavBar from './Pages/NavBar';
import {View} from 'react-native';
import ModalRoot from './Shared/ModalRoot';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { hideModal } from './actions/bluevilleActions';

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles((theme) => ({
}))

function App(props) {
  const modalProps=props.modalProps;
  const modalType=modalProps.modalType;
  const open=modalProps.open;
  const [selectedTab, setSelectedTab] = useState('instrument');
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

 
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <React.Fragment>
      <Router>
        <Route
  exact path='/'
  render={(props) => (
    <MainPage {...props} />
  )}
/>
      </Router>
    
       {modalType!==undefined && modalType!==null && <ModalRoot handleClose={hideModal} open={open}/> }
       
       </React.Fragment>
      //  </View>
 
       )
}
const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps,
  modalType: state.blueville.modalTYpe
});
const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
