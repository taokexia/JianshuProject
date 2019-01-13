import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        return (
            <div>
                {this.props.list.map((item, index) => (
                    <Link to='/detail' key={index}>
                        <ListItem >
                            <img className="pic" src={item.get('imgUrl')} alt="" />
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))}
                <LoadMore onClick={() => this.props.loadMore(this.props.articlePage)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        articlePage: state.getIn(['home', 'articlePage'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadMore(page) {
            dispatch(actionCreators.getMoreArticle(page));
        }
    }
}
export default connect(mapState, mapDispatch)(List);