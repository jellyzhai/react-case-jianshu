import { injectGlobal } from 'styled-components';

//将原始样式 应用于全局，需要在页面入口文件index.js中引入
//url中要加当前文件路径‘./’,除了data开头的
injectGlobal`
 
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1532790263628'); /* IE9*/
    src: url('./iconfont.eot?t=1532790263628#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1532790263628') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1532790263628#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;



