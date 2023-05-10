import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'

export default class FormDemoOne extends Component {
    state={
        userName:"",
        city:""
    }
    onChangeHandler=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:[value]})
    }
    onSubmitHandler=(event)=>{ 
        event.preventDefault()
        alert(this.state.userName)
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <Input name="userName" onChange={this.onChangeHandler}></Input>
            <p>{this.state.userName}</p>

            <h3>City</h3>
            <Input name="city" onChange={this.onChangeHandler}></Input>
            <p>{this.state.city}</p>
            <Input type='submit' value={"Submit"}></Input>
        </Form>
      </div>
    )
  }
}
