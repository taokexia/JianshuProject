import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriteWrapper, WriteItem } from '../style';

class Writer extends Component {
    render() {
        return (
            <WriteWrapper>
                {
                    this.props.list.map((item) => (
                        <WriteItem key={item.get('id')}>
                            <img className="pic" src={item.get('imgUrl')} alt="" />
                            <p className="name">{item.get('name')}</p>
                            <p className="desc">{item.get('desc')}</p>
                        </WriteItem>
                    ))
                }

            </WriteWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'writerList'])
    }
}
export default connect(mapState, null)(Writer);