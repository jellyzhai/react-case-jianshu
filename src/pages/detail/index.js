import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {

  render() {

    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{__html: this.props.content}}
        />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapeState = (state) => ({
  title: state.getIn(['detailReducer','title']),
  content: state.getIn(['detailReducer','content']),
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreaters.getDetail(id))
  }
})

//使用react-router-dom库中的withRouter方法 连接route路由组件 获取路径中传的ID值
export default connect(mapeState,mapDispatch)(withRouter(Detail));
