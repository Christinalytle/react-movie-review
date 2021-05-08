import React from 'react'; 
import Review from './review';


function Stars() {
    return (
        <div className="rating">
            <input type="radio" id="rating-5" name="rating" value="5" /><label htmlFor="rating-5">★</label>
            <input type="radio" id="rating-4" name="rating" value="4" /><label htmlFor="rating-4">★★</label>
            <input type="radio" id="rating-3" name="rating" value="3" /><label htmlFor="rating-3">★★★</label>
            <input type="radio" id="rating-2" name="rating" value="2" /><label htmlFor="rating-2">★★★★</label>
            <input type="radio" id="rating-1" name="rating" value="1" /><label htmlFor="rating-1">★★★★★</label>
        </div>
    )
}


export default class Movie extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            image: props.image,
            title: props.title,
            synopsis: props.synopsis, 
            reviews: props.reviews
        };
    }

    render() {
        let reviews = []; 
        if (this.state.reviews) {
            reviews = this.state.reviews.map((review) => <Review key={review.id} {...review} />)
        }

        return (          
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                  <div className="row">
                  <p id="title" className="text-center"> {this.props.title} </p>
                  </div>
                  <div className="row">
                  <p id="synopsis"> {this.props.synopsis}</p>
                  </div>
                  <div className="row">
                  <Stars />
                  </div>
              </div>
              <div className="col-md-6 text-center" id="moviePoster">
              <img src={this.props.image} alt="poster"/>
              </div>
        </div>
            <div className="row">
              <div className="col-lg-12" id="reviews">
              <p>Reviews:</p>
              {reviews}
              </div>
            </div>
            <br>
            </br>
         </div> 

        )
    }
}