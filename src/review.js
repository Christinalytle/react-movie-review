import React from 'react'; 

export default class Review extends React.Component {
    render() {
        return(
            <div className="col-lg-12">
                <p>{this.props.review}</p>
            </div>
                   
        )
    }
}