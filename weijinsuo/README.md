# Bootstrap常用组件
## 导航条

```html
<!-- nav 导航栏标签 -->
 <nav class="navbar navbar-wjs navbar-static-top">
    <div class="container">
        <!-- 导航条的头部区域 -->
        <div class="navbar-header">
          <!-- 小屏幕下用于切换导航栏隐藏显示的按钮 -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=" #bs-example-navbar-collapse-1" aria-expanded="false">
            <!-- sr-only = screen read only -->
            <span class="sr-only ">菜单显示切换</span>
            <!-- 三个小横条 -->
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
          </button>
          <!-- navbar-brand 商标区域，导航条最左边的用于放置网站logo的区域-->
          <a href="# " class="navbar-brand ">
            <i class="ico-logo "></i>
            <i class="ico-weijinsuo "></i>
          </a>
        </div>
        <!-- 使用collapse对需要显示和隐藏的ul进行包裹 -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav ">
            <li class="active "><a href="# ">我要投资</a></li>
            <li><a href="# ">我要借款</a></li>
            <li><a href="# ">平台介绍</a></li>
            <li><a href="# ">新手专区</a></li>
            <li><a href="# ">最新动态</a></li>
            <li><a href="# ">微论坛</a></li>
          </ul>
          <!-- navbar-right 表示悬浮于导航条的右边 -->
          <ul class="nav navbar-nav navbar-right hidden-sm ">
            <li><a href="# ">个人中心</a></li>
          </ul>
        </div>
    </div>
</nav>
```

## 轮播图
```html
<!-- 轮播图控件 -->
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- indicators 翻页小白点 -->
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    <!-- inner 轮播的内容列表 -->
    <div class="carousel-inner" role="listbox">
        <!-- 一个item就是一页里面有两部分组成 -->
        <div class="item active">
            <!-- img 显示的图片 -->
            <img src="images/slide_01_2000x410.jpg" alt="...">
            <!-- caption 下方显示的文字 -->
            <div class="carousel-caption">
                第一个广告的文字内容
            </div>
        </div>
        
        <!-- 第二个itam -->
        <div class="item">
            <img src="images/slide_02_2000x410.jpg" alt="...">
            <div class="carousel-caption">
                第二个广告的文字内容
            </div>
        </div>
    </div>
    <!-- Controls 控制器部分 左右箭头 -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
```

