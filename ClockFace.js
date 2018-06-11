import React, { Component } from 'react';
import Clock from './Clock'
import moment from "moment";
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {time_update, date_update} from "./actions"



class ClockFace extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        setInterval(() => {
            this.props.time_update()
            }, 1000)
        }    

        render(){
            return(
                <View>
                    <Clock time={this.props.time} date={this.props.date}/>
                </View>
            )
        }
      
    }

const mapStateToProps = (state) =>{
    return {
        time: state.update_time, 
        date: state.update_date
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        time_update: () => dispatch(time_update())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(ClockFace);


