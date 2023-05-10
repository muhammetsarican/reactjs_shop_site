import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default class FormDemoTwo extends Component {
    state = {
        mail: "",
        city: "",
        password: "",
        description: ""
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.mail + " saved successfully.");
        alertify.success(this.state.password + " saved successfully.");
        alertify.success(this.state.city + " saved successfully.");
        alertify.success(this.state.description + " saved successfully.");
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='mail'>Mail</Label>
                        <Input name='mail' placeholder='Enter a Mail' type='email' id='mail' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input name='password' placeholder='Enter a Password' type='password' id='password' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input name='description'
                            type='textarea'
                            placeholder='Describe your thing what you want to describe'
                            id='description' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input name='city'
                            type='select'
                            id='city' onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>Karabük</option>
                            <option>İstanbul</option>
                            <option>Burdur</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit'>Save</Button>
                </Form>

                <p>
                    {this.state.mail}
                    {this.state.password}
                    {this.state.city}
                    {this.state.description}
                </p>
            </div>
        )
    }
}
