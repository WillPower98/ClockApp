import React, { Component } from 'react';
import Clock from './Clock'
import moment from "moment";
import { Text, TextInput, View, StyleSheet } from 'react-native';



class ClockFace extends Component{
    constructor(props){
        super(props);
        this.state = {
          time: moment().format("LTS"),
          date: "1999-12-31",
        };
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            time: moment().format("LTS")
          });
        }, 1000);
      }

        render(){
            return(
                <View>
                    <Clock time={this.state.time} date={this.state.date}/>
                </View>
            )
        }
}

export default ClockFace;
