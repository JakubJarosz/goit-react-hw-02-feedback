import React from "react";


class Section extends React.Component {
    render() {
        const { title, children} = this.props;
        return (
            <div>
                <h3>{title}</h3> 
                {children}
            </div>
        )
    }

};


export default Section