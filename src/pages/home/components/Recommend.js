import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendItem, RecommendWrapper } from '../style';

class Recommend extends PureComponent {
    render() {
        return(
            <RecommendWrapper>
                {this.props.list.map((item) => (
                    <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                ))}
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'recommendList'])
    }
}

export default connect(mapState, null)(Recommend);