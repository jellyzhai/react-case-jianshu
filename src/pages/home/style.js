import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-top: 30px
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  float: left;
  .banner {
    width: inherit;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 30px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

//当图片和文字 都是父元素的直接子元素时，
// 设置图片的vertical-align: bottom; 让所有子元素都跟着靠底部排版，
//然后设置父元素的 line-height 等于子元素中高度最高的值，达到垂直居中
export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  line-height: 32px;
  border-radius: 4px;
  padding-right: 10px;
  margin-top: 18px;
  margin-left: 18px;
  .topic_pic {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    vertical-align: bottom; 
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0; 
`;

//styled-components组件可以在样式中 传入一个带有参数的函数，
// 参数表示组件，从组件上获取属性值
export const RecommendItem = styled.div`
  height: 50px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl}); 
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  height: 50px;
  line-height: 50px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  text-align: center;
`;

export const LoadMore = styled.div`
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  background: #a5a5a5;
  color: #fff;
  margin: 30px;
  cursor: pointer;
  :hover {
    background: #999;
  }
`;

export const BackTop = styled.div`
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  position: fixed;
  right: 60px;
  bottom: 60px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
`;






