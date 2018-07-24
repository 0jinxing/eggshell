import React, { Component } from 'react';
import classnames from 'classnames';
import './PeoplePage.css';

export default class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            nicknameValidMsg: '',
            introductionValidMsg: '',
        };
    }

    componentWillMount() {
        this.props.getUserInfo();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps });
        console.log(nextProps);
        if (!nextProps.logined) this.props.history.push('/identity/login');
    }

    handleModify = () => {
        // 昵称校验
        let valid = true;
        if (!!this.state.nickname && !this.state.nickname.trim()) {
            this.setState({ nicknameValidMsg: '昵称不能为空' });
            valid = false;
        } else {
            this.setState({ nicknameValidMsg: '' });
            valid = valid && true;
        }
        if (!!this.state.introduction && !this.state.introduction.trim()) {
            this.setState({ introductionValidMsg: '个性签名不能为空' });
            valid = false;
        }
        else {
            this.setState({ introductionValidMsg: '' });
            valid = valid && true;
        }
        if (valid) {
            // TODO:
            this.props.modifyUserInfo(
                this.state.nickname,
                this.state.introduction,
                this.state.sex,
                this.props.role,
                this.props.createtime,
                this.props.email,
                this.state.avatar
            );
        }
    }

    handleChange = (e) => {
        let newState = {
            [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value
        };
        this.setState(newState);
        if (e.target.type === "file") {
            let reader = new FileReader();
            reader.onload = (file) => {
                this.refs.avatar.src = file.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    render() {
        return (
            <div className='people-page'>
                <div className="row">
                    <div className="movie-wide-item media col-md-4 col-sm-12">
                        <div className="avatar">
                            <img width="64" className="mr-3" src={this.state.imgurl} ref="avatar" />
                            <label htmlFor="avatar" className="font-weight-light">修改头像</label>
                            <input type="file" id="avatar" name="avatar" onChange={this.handleChange} />
                        </div>
                        <div className="media-body">
                            <h5 href="#">{this.props.nickname}</h5>
                            <p className="description">{this.props.introduction}</p>
                        </div>
                    </div>
                    <form className="col-md-4 col-sm-12">
                        <div className='form-group'>
                            <label htmlFor='password'>昵称</label>
                            <input className={classnames({
                                'form-control': true,
                                'is-invalid': !!this.state.nicknameValidMsg,
                            })} type='text' defaultValue={this.state.nickname} name="nickname" onChange={this.handleChange} />
                            <small className='invalid-feedback'>{this.state.nicknameValidMsg}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>个性签名</label>
                            <input className={classnames({
                                'form-control': true,
                                'is-invalid': !!this.state.introductionValidMsg,
                            })} type='text' name="introduction" defaultValue={this.state.introduction} onChange={this.handleChange} />
                            <small className='invalid-feedback'>{this.state.introductionValidMsg}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>性别</label>
                            <select id="inputState" value={this.state.sex} className="form-control" name="sex" onChange={this.handleChange}>
                                <option value={-1}>隐藏</option>
                                <option value={1}>男</option>
                                <option value={0}>女</option>
                            </select>
                        </div>
                        <button onClick={this.handleModify} type="button" className="btn btn-outline-primary float-right my-2 my-sm-0">修改</button>
                    </form>
                </div>
            </div>
        );
    }
}