import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper,HomeLeft, HomeRight,BackTop } from './style';
import { connect } from 'react-redux';
import { actionCreaters } from './store';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner'
            src="//upload.jianshu.io/admin_banners/web_images/4358/dc9118d2dbb0799053d181cad4c97ecad9d54c4a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="img1"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.backToTop ? <BackTop onClick={this.scrollToTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
    window.addEventListener('scroll',this.props.listenerScroll);
  }
  //页面都关闭了，还有必要删除事件绑定么
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.listenerScroll)
  }

  scrollToTop() {
    window.scrollTo(0,0);
  }
}

const mapState = state => ({
  backToTop: state.getIn(['homeReducer','backToTop'])
});

const mapDispatch = dispatch => ({
  getHomeData(){
    dispatch(actionCreaters.getHomeInfo())
  },
  listenerScroll() {
    if(document.documentElement.scrollTop > 300 ){
      dispatch(actionCreaters.toggleBackToTop(true))
    }else {
      dispatch(actionCreaters.toggleBackToTop(false))
    }
  }
});

export default connect(mapState,mapDispatch)(Home);