import React from 'react';
import Loadable from 'react-loadable';

//react-loadable库 以组件为中心的 1.代码分割和 2.懒加载。
//1：访问目标组件时，先访问当前组建，再访问目标组件
//通过对目标组建的包装，把当前组件用到的js文件 从一个总的打包文件中分离出来
//访问那个组件时，再加载那个组建的静态资源，实现按需加载，防止不必要的加载拖慢访问时间
// 2：可以实现当前组件加载完成前的loading状态
/*
* 避免加载组件时的闪烁 *
有时组件加载非常快，小于 200ms，提示加载的组件会在界面上一闪而过。
一些用户调研表明这会导致用户感知事情发生（组件加载）的时间比真实的更长。
如果你什么都不显示，那么用户对加载的感知反而觉得更快。
所以你的 loading 组件（就是在真正要用的组件加载完成之前显示的提示组件）有一个 pastDelay 属性，
只有在真正用到的组件花了比设定的 delay更长的时间加载的时候，它的值才会是 true （才会显示提示的 loading 组件）。
* delay 的默认值是 200ms，但你也可以使用第三个参数来设置 delay 时长 。*
* */
const LoadableComponent = Loadable({

  //自动匹配当前文件夹中的index.js;最终要加载的组件
  loader: () => import('./'),
  //delay:300,
  loading({error, pastDelay}) {
    if(error){
      return <div>Error!</div>
    } else if(pastDelay) {
      return <div>loading...</div>
    }else {
      return null;
    }
  },
});

//无状态组件(组建类中只有一个render函数)可以写成一个箭头函数，函数返回一个组件
export default () => <LoadableComponent/>;
