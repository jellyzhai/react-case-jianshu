//import 命令要在最顶部；目前export { * as actionCreaters} from './actionCreaters';的写法 还在提案阶段
import * as actionCreaters from './actionCreaters';
export { actionCreaters };

//default就是代表export default app；后面值的 可以在输入模块修改名字的变量
//输出的内容一定要有 变量=>值 的对应
export { default as headerReducer } from './reducer';
