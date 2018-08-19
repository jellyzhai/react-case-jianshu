import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding-bottom: 30px
  overflow: hidden;
`;

export const Header = styled.div`
  font-size: 34px;
  color: #333;
  font-weght: bold;
  line-height: 44px;
  margin: 50px 0 20px 0;
`;

//left是相对父元素，translateX是相对于自身
export const Content = styled.div`
  color: #2f2f2f;
  img {
    position: relative;
    left: 50%; 
    transform: translateX(-50%);
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
`;










