import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default class Charts extends Component {


render() {
	return (
		<div>
		 <Sparklines height={120} width={180} data ={this.props.temperature}>
  		<SparklinesLine color="red" />
  		</Sparklines>
  		</div>
		);
}

}

/*
export default (props) => {
	return (
		<div>
		 <Sparklines height={120} width={180} data ={props.temperature}>
  		<SparklinesLine color="red" />
  		</Sparklines>
  		</div>
		);
}

*/