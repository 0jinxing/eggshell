import React from 'react';
import classnames from 'classnames';
import './ReviewList.css';
import ReviewItem from './ReviewItem/ReviewItem';

export default class ReviewList extends React.Component {
  componentWillMount() {
    this.props.jumpPage(1);
  }
  render() {
    let { reviews } = this.props;
    let contentEl = (!reviews ? [] : reviews).map((item, index) => <ReviewItem className="review"
      key={index}
      {...item} doSupport={this.props.doSupport} doOppose={this.props.doOppose} />);
    return (
      <div className="container review-list">
        <h3 className='mt-4 mb-4 font-weight-light border-bottom p-2'>最受欢迎的影评</h3>
        <div className="list">
          {contentEl}
        </div>
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className={classnames({
                "page-link": true,
                "disable": this.props.cur_page <= 1
              })} href="#" tabIndex="-1">Previous</a>
            </li>
            {
              [...Array(this.props.total_page).keys()].slice(this.props.cur_page, this.props.cur_page + 5).map((num, index) => (
                <li key={index} onClick={() => this.props.jumpPage(num)} className="page-item"><a className="page-link" href="#">{num}</a></li>
              ))
            }
            <li className="page-item">
              <a className={classnames({
                "page-link": true,
                "display": this.props.cur_page >= this.props.total_page
              })} href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}