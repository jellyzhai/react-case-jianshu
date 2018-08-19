import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreaters } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const {articleList, getMoreArticle, currentPage, endPage} = this.props;

    return (
      <Fragment>
        {
          //Link组件的to属性值为路径地址,使用动态路由，让文章列表与文章详情相匹配
          articleList.map((item,index) => (
            <Link key={index} to={`/detail/${ item.get('id') }`}>
              <ListItem>
                <img
                  className='pic'
                  src={item.get('imgUrl')}
                  alt=""
                />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={()=>getMoreArticle(currentPage,endPage)} >
          {currentPage===4 ? '没有更多了' : '阅读更多'}
        </LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['homeReducer','articleList']),
  currentPage: state.getIn(['homeReducer','currentPage']),
  endPage: state.getIn(['homeReducer','endPage']),
})

const mapDispatch = (dispatch) => ({
  getMoreArticle(currentPage,endPage) {
    const  action = actionCreaters.getMoreArticle(currentPage,endPage);
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(List);