import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

//HeaderWrapper是一个带有样式的div组件
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

//这不是一个用于页面显示的组件，为了说明可以被(下面)其他组件复用样式
const Public = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export const Logo = styled(Public)`
  display: block;
  width:100px;
  height: 56px;
  background: url(${logoPic});  
  background-size: contain
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box; 
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left
  }
  &.right {
    float: right;
    color: #969696
  }
  &.active {
    color: #ea6f5a
  }
`;

//绝对定位脱离文档流，重叠在正常元素上面
//文字上下不居中 可以设置行高等于元素高度
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 5px;
    bottom: 4px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff
    }
  }
`;

/* & 前缀表示当前元素内的属性如：class，placeholder
* */
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  border: none;
  outline: none;
  background: #eee;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #666；
  &::placeholder {
    color: #999
  }
  &.focused {
    width: 240px;
  }
  /*动画开始时的准备工作*/
  &.slide-enter {
    transition: all .3s ease-in;
  }
  /*动画过度中 要达到的属性结果*/
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696
`;
//旋转无效时尝试各种BFC，要设置transform-origin变换中心
//transition设置所有发生变化的属性 以固定时间和方式 从初始属性过度到设置的最新属性
//会自动检测元素属性的变化
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s linear;
    float: left;
    transform-origin: center center;
  }
`;

export const SearchInfolist = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  font-size: 12px;
  color: #787878;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

//绝对定位脱离文档流，会与其他元素重叠在上面
export const Addition = styled.ul`
  height: 56px;
  position: absolute;
  right: 0;
  top: 0;
`;

//浮动元素：宽高取决于内容，脱离文档流，跟父元素断绝父子关系，元素高度撑不开父元素
// 位置优先级，高于正常元素
//右浮动 会把元素排列顺序颠倒
export const Button = styled.li`
  float: right;
  line-height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 19px
  margin-right: 20px;
  padding: 0 20px;
  margin-top: 9px;
  fontsize: 14px;
  &.reg {
    color: rgba(236,97,73,.7);
  }
  &.writting {
    background: rgba(236,97,73,.7);
    color: #fff;
  }
`;

















