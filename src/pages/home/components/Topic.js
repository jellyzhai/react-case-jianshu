import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic_pic'
                src={item.get('imgUrl')}
                alt=""
              />
              {item.get('title')}
            </TopicItem>
          ))
        }

      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['homeReducer','topicList']),
})

export default connect(mapState, null)(Topic);