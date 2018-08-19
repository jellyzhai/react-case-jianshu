//输出的默认变量 和 其他输出是分开的；不带{}的就是默认输出
import React, { PureComponent } from 'react';
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo,SearchInfoTitle, SearchInfoSwitch,
  SearchInfoItem, SearchInfolist
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { Link } from 'react-router-dom';
import { loginActionCreaters } from '../../pages/login/store';

//PureComponent：react会自动判断当前组件使用的数据是否发生变化，
//根据情况返回true或false 决定是否执行 shouldComponentUpdate 生命周期函数，
// 要结合immmutable数据 效率更高，否则可能会出现坑
class Header extends PureComponent {

  render() {
    const {focused, searchFocus, searchBlur, list, login, logout} = this.props;

    return (
        <HeaderWrapper>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className='left active' >首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            {
              login ? <NavItem onClick={ logout } className='right'>退出</NavItem>
                : <Link to='/login'><NavItem className='right'>登陆</NavItem> </Link>
            }
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              {/*
              in=true表示执行入场动画(slide-enter, slide-enter-active)，
              in=false执行出场动画(slide-exit, slide-exit-active)
              */}
              <CSSTransition
                in={focused}
                timeout={300}
                classNames='slide'
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => searchFocus(list)}
                  onBlur={searchBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6dd;</i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='writting'>
              <i className="iconfont">&#xe615;</i>
              写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
    )
  }

  getListArea() {
    const {focused, list, mouseIn, changeMouseIn, changeMouseLeave, page, totalPage, nextPage} = this.props;
    const newList = list.toJS();
    const  pageArr = [];

    //易错点：初始值list为空数组，标签索引值为未定义会报错
    if(newList.length){
      for(let i=(page-1)*10; i<page*10; i++) {
        if(newList[i]){
          pageArr.push( <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem> )
        }
      }
    }

    if(focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={changeMouseIn}
          onMouseLeave={changeMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={ () => {nextPage(page, totalPage, this.spin)}}
            >
              <i ref={(icon) => {this.spin=icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfolist>
            {pageArr}
          </SearchInfolist>
        </SearchInfo>
      )
    }
  }

}

//对于immutable对象，也可以通过get(key)方法获取直接下级的数据
const mapStateToProps = (state) => {

  return {
    focused: state.getIn(['headerReducer','focused']),
    list: state.getIn(['headerReducer','list']),
    mouseIn: state.getIn(['headerReducer','mouseIn']),
    page: state.getIn(['headerReducer','page']),
    totalPage: state.getIn(['headerReducer','totalPage']),
    login: state.getIn(['loginReducer','login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    //不带action的函数名都是 非直接数据修改的异步操作
    searchFocus(list) {
      //list是immutable对象 取长度用size，一个判断一个执行语句可以用 && 连接，一行显示
      //在用户离开页面之前不会改变的请求数据 可以只请求一次
      list.size === 0 && dispatch(actionCreaters.getList());
      dispatch(actionCreaters.getSearchFocusAction());
    },
    searchBlur() {
      dispatch(actionCreaters.getSearchBlurAction())
    },
    changeMouseIn() {
      dispatch(actionCreaters.getChangeMouseInAction())
    },
    changeMouseLeave(e) {
      e.clientX >= 554 && dispatch(actionCreaters.getChangeMouseLeaveAction())
    },
    nextPage(page, totalPage, spin) {
      let angle = spin.style.transform.replace(/[^0-9]/ig,'');
      angle = angle ? Number(angle) : 0;
      spin.style.transform=`rotate(${angle+360}deg)`;

      if(page < totalPage){
        //易错点：应该先运算后赋值
        dispatch(actionCreaters.getNextPageAction(++page));
      }
      else{
        dispatch(actionCreaters.getNextPageAction(1))
      }
    },
    logout() {
      //window.location.reload();
      dispatch(loginActionCreaters.logoutAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);