import React from "react";

function CounterDisplay({count}) {
    return <p>{count}</p>
}

function IncreaseButton ({increase} ) {
    return (
        <div>
            <button onClick={increase}> increase</button>
        </div>
    )
}

function ResetButton ({reset}) {
    return (
        <div>
            <button onClick={reset}>reset</button>
        </div>
    )
}

class Counter extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }

        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this)
        this.onResetEventHandler = this.onResetEventHandler.bind(this)    
    }
    
    onIncreaseEventHandler() {
        this.setState ((previousstate) => {
            return {
                count: previousstate.count + 1
            };
        }
        );
    }
    onResetEventHandler() {
        this.setState ((previousstate) => {
            return {
                count: 0
            }
        }

        )
    }


    render() {
        return(
            <div>
                <CounterDisplay count={this.state.count}/>
                <IncreaseButton increase={this.onIncreaseEventHandler}/>
                <ResetButton reset={this.onResetEventHandler}/>
            </div>
        )
    }
}

export default Counter