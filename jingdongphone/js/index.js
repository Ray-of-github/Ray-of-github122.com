/**
 * Created by Administrator on 2016/12/29.
 */
window.onload = function () {
    search();
    secondKill();
};

var search = function(){
    var search = document.getElementsByClassName('jd_header_box')[0];
    var banner = document.getElementsByClassName('jd_banner')[0];

    var height = banner.offsetHeight;

    window.onscroll = function () {
        //console.log(document.body.scrollTop);
        var top = document.body.scrollTop;

        if(top > height){
            search.style.background = "rgba(201,21,35,0.85)";
        }else{
            var op = top/height * 0.85
            search.style.background = "rgba(201,21,35,"+op+")";
        }
    }
}
var scrollPic = function () {
    var banner = document.getElementsByClassName('jd_banner')[0];
    var width = banner.offsetWidth;
    var index = 0;

    var imgBox = banner.getElementsByTagName('ul')[0];

    var setScrolling = function (index) {

        imgBox.style.transform = 'translateX('+(-index*width) + 'px)';
        imgBox.style.webkitTransform = 'translateX('+(-index*width) + 'px)';
        imgBox.style.transition = "all 1s ease 0s";
        imgBox.style.webkitTransition = "all 1s ease 0s";
    }

    var setTransform = function (index) {
        imgBox.style.transform = 'translateX('+(-index*width) + 'px)';
        imgBox.style.webkitTransform = 'translateX('+(-index*width) + 'px)';
    }
    var removeTransition = function () {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }


    var timer = setInterval(function () {
        index++;
        setScrolling(index);
        //if(index == 8){
        //    index = 1;
        //    removeTransition();
        //}
    },3000)

    imgBox.addEventListener('transitionEnd', function () {
        console.log('��������');
        console.log(index);
    })
    imgBox.addEventListener('webkitTransitionEnd', function () {
        console.log('��������');
        console.log(index);
        removeTransition();
        if(index >= 8){
            index = 0;
        }
        setTransform(index);
    })
}

/*��ɱ����ʱ*/
var secondKill = function(){
    /*������*/
    var parentTime = document.getElementsByClassName('sk_time')[0];
    /*spanʱ��*/
    var timeList = parentTime.getElementsByClassName('num');

    console.log(timeList.length);

    var times = 7   * 60 * 60;
    var timer;
    timer = setInterval(function(){
        times  -- ;

        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;

        console.log(h+'-'+m+"-"+s);

        timeList[0].innerHTML = h>=10?Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>=10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>=10?Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;
        if(times <= 0){
            clearInterval(timer);
        }
    },1000);

}