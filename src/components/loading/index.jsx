import React from 'react';
import './loading.css';
import { Redirect } from 'react-router-dom'
import { Component } from 'react'

class Loading extends Component {
    state = {
        redirect: false
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                redirect: true
            })
        }, 1500);
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.props.to} />
        }
        return (
            <div className="loading-container">
                <div className="loading">
                    <span>Loading...</span>
                </div>
            </div>

        )
    }
}
export default Loading;