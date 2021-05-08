import React from 'react'; 

export default class Starts extends React.Component {
    render() {
        return (
            <div className="rating">
                <input type="radio" id="rating-5" name="rating" value="5" /><label for="rating-5">★</label>
                <input type="radio" id="rating-4" name="rating" value="4" /><label for="rating-4">★</label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label for="rating-3">★</label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label for="rating-2">★</label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label for="rating-1">★</label>
            </div>
        )
    }
}