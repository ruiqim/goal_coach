import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';



class GoalItem extends Component{

  completeGoal(){
    // add to complete goals on the database
    const {email} = this.props.user;
    const {title,serverKey} = this.props.goal;

    console.log('email', serverKey);
    //remove this goal from the gosl
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }

  render(){
    const {email, title} = this.props.goal;
    return(
      <div style={{margin:"5px"}}>
        <strong>{title}</strong>
        <span style={{marginRight:"5px"}}> Submitted By: <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={()=> this.completeGoal()}
          >
            Complete
          </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user } = state;
  return{
    user
  }
}

export default connect(mapStateToProps,null)(GoalItem);
