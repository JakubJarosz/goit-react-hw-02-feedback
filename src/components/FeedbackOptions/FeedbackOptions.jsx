import React from "react";


class FeedbackOptions extends React.Component {
    render() {
        const {options, onLeaveFeedback} = this.props;
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <button onClick={() => {onLeaveFeedback(options[0])}}>Good</button>
                    <button onClick={() => {
                        onLeaveFeedback(options[1])
                    }}>Neutral</button>
                    <button onClick={() => {
                        onLeaveFeedback(options[2])
                    }}>Bad</button>
                </div>
            </div>
        )
    }

};


export default FeedbackOptions