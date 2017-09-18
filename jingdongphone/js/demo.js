/**
 * Created by Administrator on 2016/12/29.
 */
var startY = 0;
var endY = 0;
var moveY = 0;

//改变位置函数
var setTransform = function (t, dom) {
    dom.style.transform = "translateY("+t+"px)";
    dom.style.webkitTransform = "translateY("+t+"px)";
};
//添加过度
var addTranstion = function (dom) {
    dom.style.transition = "all .3s ease 0s";
    dom.style.webkitTransition = "all .3s ease 0s";
};
//删除过度
var removeTranstion = function (dom) {
    dom.style.transition = "none";
    dom.style.webkitTransition = "none";
};

var parentDom = document.getElementsByClassName('jd_catLeft')[0];
var childDom = document.getElementsByTagName('ul')[0];

childDom.addEventListener('touchstart', function (e) {
    console.log(e.touches[0]);
    console.log(e.target);
    startY = e.touches[0].clientY;//相对于父容器的垂直距离

});
childDom.addEventListener('touchmove', function (e) {
    e.preventDefault();
    endY = e.touches[0].clientY;
    moveY = endY - startY;
    setTransform(moveY,childDom);
})