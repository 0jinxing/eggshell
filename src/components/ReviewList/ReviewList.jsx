import React from 'react';
import classnames from 'classnames';
import './ReviewList.css';
import ReviewItem from './ReviewItem/ReviewItem';

export default class ReviewList extends React.Component {
  componentWillMount() {
    this.props.jumpPage(1);
  }
  render() {
    let { list } = this.props;
    let contentEl = (!list ? [] : list).map((item, index) => <ReviewItem className="review"
      key={index}
      {...item} doSupport={this.props.doSupport} doOppose={this.props.doOppose} />);
    return (
      <div className="container review-list">
        <h3 className='mt-4 mb-4 font-weight-light border-bottom p-2'>{!!this.props.title ? this.props.title : "最受欢迎的影评"}</h3>
        <div className="list">
          {contentEl}
        </div>
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={classnames({
              "page-item": true,
              "disabled": this.props.cur_page <= 1
            })}>
              <a className="page-link" href="#" tabIndex="-1" onClick={() => {
                if (this.props.cur_page > 1) this.props.jumpPage(this.props.cur_page - 1);
              }}>Previous</a>
            </li>
            {
              [...Array(this.props.total_page).keys()].slice(0, this.props.cur_page + 5).map((num, index) => (
                <li key={index} onClick={() => this.props.jumpPage(num + 1)} className={classnames({
                  "page-item": true,
                  "disabled": num + 1 == this.props.cur_page
                })}><a className="page-link" href="#">{num + 1}</a></li>
              ))
            }
            <li className={classnames({
              "page-item": true,
              "disabled": this.props.cur_page >= this.props.total_page
            })}>
              <a className="page-link" href="#" onClick={() => {
                if (this.props.cur_page < this.props.total_page) this.props.jumpPage(this.props.cur_page + 1);
              }} >Next</a>
            </li>
          </ul>
        </nav>
      </div >
    );
  }
}