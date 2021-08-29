# vue3-antd-bbs
基于vue-cli/vite + vue3.0 + ant-design-vue2.0 + typescript hooks的论坛系统

# 新知识
1.document.hidden; 页面隐藏来控制

var hidden
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
}
console.log("当前页面是否被隐藏：" + document[hidden])

2. document.activeElement 判断是否是焦点

3.number & 1 判断奇偶

4.window.scrollTo(0, 0)滑到页面顶端

