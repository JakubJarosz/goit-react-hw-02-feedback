import React from "react";

class Statistic extends React.Component {
   
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props
        return (
            <div>   
                
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage}%</p>
                
            </div>
        )
    }

};


export default Statistic