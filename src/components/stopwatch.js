import React, { Component } from "react";
import "../css/style.css";

export default class Stopwatch extends Component {
    state = {
        count: 0,
        startDisabled: false,
        stopDisabled: true
    };
    increaseCounter = () => {
        this.setState({
            startDisabled: true,
            stopDisabled: false
        });
        this.counter = setInterval(() => {
            this.setState((prevState, props) => ({
                count: prevState.count + 1
            }));
        }, 1000);
    };
    stopCounter = () => {
        clearInterval(this.counter);
        this.setState({
            startDisabled: false,
            stopDisabled: true
        });
    };
    render() {
        const { count, startDisabled, stopDisabled } = this.state;
        const header = {
            fontSize: "10rem",
            color: startDisabled ? "red" : "black"
        };
        return (
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ marginTop: "18rem" }}
            >
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h1 className="card-header header" style={header}>
                                    {count}
                                </h1>
                            </div>
                            <div className="card-footer buttons">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.increaseCounter}
                                    disabled={startDisabled}
                                >
                                    Start
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={this.stopCounter}
                                    disabled={stopDisabled}
                                >
                                    Stop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
