import React from "react";


class Notification extends React.Component {
    render() {
        const {message} = this.props;
        return (
            <p>{message}</p>
        )
    }

};


export default Notification