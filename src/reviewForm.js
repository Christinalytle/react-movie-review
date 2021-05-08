import React from 'react'; 

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
                    id: 0,
                    review: '',
                    movie: ''}; 

        this.submitForm = this.submitForm.bind(this); 
        this.changeHandler = this.changeHandler.bind(this); 
    }

    submitForm = (e) => {
        e.preventDefault(); 
        this.props.onSubmit(this.state); 
        console.log({review: this.state.review}); 
        console.log({movie: this.state.movie})
    }
    
    changeHandler = (e) => {
       let nam = e.target.name; 
       let val = e.target.value;
       this.setState({[nam]: val}); 
    }

    render() {  
        return(
            <div className="container">
            <li className="list-group-item">
                <form onSubmit={this.submitForm}>
                    <p>Enter Movie</p>
                    <select name="movie" id="inputstate" className="form-control" onChange={this.changeHandler}>
                        <option defaultValue>Choose...</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                    </select>
                    <p>Please enter your review</p>
                    <input type='text' name="review" onChange={this.changeHandler} />
                    <input type='submit' />
                </form>
            </li> 
            <br>
            </br>
            </div>
        )
    }
}