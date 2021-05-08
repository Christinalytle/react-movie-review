import React from 'react'; 
import Movie from './movie'; 
import ReviewForm from './reviewForm'; 


export default class MovieList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { movies: [{
            id: 1,
            image: 'https://m.media-amazon.com/images/I/71ymSSSfouL._AC_SY741_.jpg', 
            title: 'Harry Potter', 
            synopsis: 'A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil. The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match.', 
            reviews: [{
                id: 1,
                review: 'this is a great movie',
                movie: 'Harry Potter'
            }, {
                id: 2,
                review: 'this was okay',
                movie: 'Harry Potter'
            } 
            ]
        }, 
        {
            id: 2,
            image: 'https://images-na.ssl-images-amazon.com/images/I/81EBp0vOZZL._AC_SL1329_.jpg', 
            title: 'Lord of the Rings', 
            synopsis: 'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.', 
            reviews: [{
                id: 1,
                review: 'too long',
                movie: 'Lord of the Rings'
            }, {
                id: 2,
                review: 'it was great!',
                movie: 'Lord of the Rings'
            }]
        }]}
    this.addNewReview = this.addNewReview.bind(this); 
    }

    addNewReview(review) {
        let fakeState = this.state.movies; 
        for (let i of fakeState) { 
            if(i.title === review.movie) {
                i.reviews.push(review)
                this.setState({movies: [...fakeState]})

            }
        }
    }


    render() {
        const movieCard = this.state.movies.map(movie => <Movie {...movie} key={movie.title} />)
        return (
            <div>
                {movieCard}
                <ReviewForm onSubmit={this.addNewReview} />
            </div>
        )
    }
}