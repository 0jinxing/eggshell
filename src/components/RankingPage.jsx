import React, {Component} from 'react';
import MovieWideItem from './MovieWideItem';
import {fetchGet} from "../actions/rankingPage";

class RankingPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(fetchGet());
    }
    render() {
        return (
            <div>
                {
                    this.props.films.map((film, index) => (
                        <MovieWideItem film={film} key={index}/>
                    ))
                }
            </div>
        );
    }
}

export default RankingPage;