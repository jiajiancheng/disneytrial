(function () {
    var _mhBottom = "";
	var path = 'http://t.dol.cn/common/minisite/header_footer/' //http://t.dol.cn/common/minisite/header_footer/
    var _mhCss = "";

    _mhBottom +='<div class="miniCommonFooter ">'
    _mhBottom +='<div class="communicate"><strong>交流更多：</strong><a href="http://e.weibo.com/dimgchina"><img width="20" height="20" src="http://www.dol.cn/images/01.png">关注我们</a> | <a href="http://t.qq.com/disneyinteractive"><img width="20" height="20" src="http://www.dol.cn/images/02.png">收听我们</a> | <a href="http://page.renren.com/disney?checked=true"><img width="20" height="20" src="http://www.dol.cn/images/03.png">加入小镇粉丝</a></div>'
    _mhBottom +='<div class="footruleDiv"><div class="dCode"><img class="flo_l" src="http://mcdn.dol.cn/space/images/weixin.png"></div>'
    _mhBottom +='<div class="flo_l ruleDiv">	<a href="http://www.dol.cn/disneyguide/falv.html">法律条款</a>｜<a href="http://www.dol.cn/disneyguide/yinsi.html">隐私政策</a><br><span style="line-height: 20px;" class="fbs">&copy;Disney. All rights reserved<br>ICP备案号：沪B2-20040338-3</span></div>'
    _mhBottom +='</div>';



    var oDiv = document.createElement("div");
    function addBottom_mh(obody) {
        oDiv.innerHTML = _mhBottom;
        obody.appendChild(oDiv);
    }

function addStyle_mh() {
       
    }
    
        var obody = document.getElementsByTagName("body").item(0);
        var ohead = document.getElementsByTagName("head").item(0);
        addStyle_mh();
        addBottom_mh(obody);
})();

(function () {
    var _mhTop = "";
    //var path = 'http://223.202.21.140/minisite/header_footer/'
	var path = 'http://t.dol.cn/common/minisite/header_footer/'
    var _mhCss = "";
    _mhTop += '<div class="miniCommonHeader">'
    _mhTop += '<div class="menu">'
    _mhTop += '<span class="logo" onclick="miniCommonOpenCloseAct(this)"><a href="http://www.dol.cn"></a></span>'
    _mhTop += '<ul class="pcList">'
    _mhTop += '<li><a href="http://game.dol.cn">游戏</a></li>'
    _mhTop += '<li><a href="http://image.dol.cn">美图</a></li>'
    _mhTop += '<li><a href="http://baby.dol.cn">亲子</a></li>'
    _mhTop += '<li><a href="http://player.dol.cn">乐播</a></li>'
    _mhTop += '<li><a href="http://store.dol.cn">时尚</a></li>'
    _mhTop += '<li><a href="http://book.dol.cn">购物</a></li>'
    _mhTop += '<li><a href="http://movie.dol.cn">电影</a></li>'
    _mhTop += '<li><a href="http://tv.dol.cn">电视</a></li>'
    _mhTop += '<li><a href="http://star.dol.cn">明星</a></li>'
    _mhTop += '<li><a href="http://Show.dol.cn">演出</a></li>'
    _mhTop += '<li><a href="http://www.hongkongdisneyland.com.cn/" target="_blank">乐园</a></li>'
    _mhTop += '<li><a href="http://www.disneyenglish.com/" target="_blank">英语</a></li>'
    _mhTop += '<li class="noneBg"><a href="http://space.dol.cn">会员</a></li>'
    _mhTop += '</ul>'
    _mhTop += '</div>'
    _mhTop += '<ul class="mobileList" id="miniCommonMobileList" onclick="miniCommonSubMenuAct(event)">'
    _mhTop += '<li><a class="home" href="http://www.dol.cn"></a></li>'
    _mhTop += '<li><a class="game" data-index="1">游戏<span class="expandCloseBtn_e"></span></a><p><a href="http://game.dol.cn/Mgame/">手机游戏及应用</a><a href="http://flashgame.dol.cn/">Flash游戏</a></p></li>'
    _mhTop += '<li><a class="image" data-index="2">美图<span class="expandCloseBtn_e"></span></a><p><a href="http://image.dol.cn">壁纸</a><a href="http://image.dol.cn/screenindex/">屏保</a><a href="http://image.dol.cn/header_pic/">人物头像</a></p></li>'
    _mhTop += '<li><a class="baby" data-index="3">亲子<span class="expandCloseBtn_e"></span></a><p><a href="http://baby.dol.cn/craft/">亲子手工</a><a href="http://baby.dol.cn/food/">爱心美食</a><a href="http://shiyong.dol.cn/disneybaby/" target="_blank">免费试用</a><a href="http://baby.dol.cn/grow/">育儿笔记</a><a href="http://baby.dol.cn/book/">电子图书</a><a href="http://baby.dol.cn/graffiti/">多彩涂鸦</a><a href="http://baby.dol.cn/shop/">必备单品</a></p></li>'
    _mhTop += '<li><a class="player" data-index="4">乐播<span class="expandCloseBtn_e"></span></a><p><a href="http://player.dol.cn?id=tab1&amp;name=tabA">爱电影</a><a href="http://player.dol.cn?id=tab11&amp;name=tabK">爱游戏</a><a href="http://player.dol.cn?id=tab2&amp;name=tabB">爱动画</a><a href="http://player.dol.cn?id=tab3&amp;name=tabC">爱流行</a><a href="http://player.dol.cn?id=tab4&amp;name=tabD">爱旅行</a><a href="http://player.dol.cn?id=tab4&amp;name=tabD">爱旅行</a><a href="http://player.dol.cn?id=tab6&amp;name=tabF">爱文艺</a></p></li>'
    _mhTop += '<li><a class="store" data-index="5">购物<span class="expandCloseBtn_e"></span></a><p><a href="http://store.dol.cn/baby/">迪士尼宝宝</a><a href="http://store.dol.cn/princess/">迪士尼公主</a><a href="http://store.dol.cn/fashion/">迪士尼时尚</a><a href="http://store.dol.cn/sport/">迪士尼运动</a></p></li>'
    _mhTop += '<li><a class="book" data-index="6">图书<span class="expandCloseBtn_e"></span></a><p><a href="http://book.dol.cn/book/">图书</a><a href="http://book.dol.cn/ebook/">电子书</a><a href="http://book.dol.cn/magazine/">杂志</a><a href="http://book.dol.cn/miaomiao/">妙妙家园</a></p></li>'
    _mhTop += '<li><a class="movie" data-index="7">电影<span class="expandCloseBtn_e"></span></a><p><a href="http://movie.dol.cn/Mnews/">电影资讯</a><a href="http://movie.dol.cn/Pixar/">经典DVD</a></p></li>'
    _mhTop += '<li><a class="tv" href="http://tv.dol.cn">电视</a></li>'
    _mhTop += '<li><a class="star" href="http://star.dol.cn">明星</a></li>'
    _mhTop += '<li><a class="show" href="http://Show.dol.cn">演出</a></li>'
    _mhTop += '<li><a class="disneyland" href="http://www.hongkongdisneyland.com.cn/" target="_blank">乐园</a></li>'
    _mhTop += '<li><a class="de" href="http://www.disneyenglish.com/" target="_blank">英语</a></li>'
    _mhTop += '<li><a class="space" href="http://space.dol.cn">会员</a></li>'
    _mhTop += '</ul>'
    _mhTop += '</div>'

	_mhCss +='.miniCommonHeader{ background:#ebebeb;  height:30px;padding:0; margin:0;}'
_mhCss +='.miniCommonHeader .menu{ width:1000px; margin:0 auto; height:30px; }'
_mhCss +='.miniCommonHeader .pcList{padding:0; margin:0; padding-left:120px;}'
_mhCss +='.miniCommonHeader .pcList li{ float:left; background:url('+path+'/style/navspace.jpg) right top no-repeat; width:7.5%; list-style:none; text-align:center; display:inline-block;}'
_mhCss +='.miniCommonHeader .noneBg{ background:none}'
_mhCss +='.miniCommonHeader .pcList li a{color:#545454; text-decoration: none; line-height:30px; }'
_mhCss +='.miniCommonHeader .logo{ background:url('+path+'/style/logo.jpg) left top no-repeat; width:105px; height:37px; position:absolute;  overflow:hidden; zoom:1; z-index:100}'
_mhCss +='.miniCommonHeader .logo a{width:105px; height:37px; display:inline-block;}'
_mhCss +='.miniCommonHeader .mobileList{ width:242px; background:#f7f7f7; position:absolute; top:43px; left:100%; margin:0 0 0 -242px; display:none; z-index:100}'
_mhCss +='.miniCommonHeader .mobileList li{ list-style:none; width:242px; border-bottom:1px solid #dcdee0}'
_mhCss +='.miniCommonHeader .mobileList a{ display:inline-block; line-height:62px; text-indent:3em; width:242px; text-decoration:none; overflow:hidden; color:#676767; font-size:16px; font-weight:bold}'
_mhCss +='.miniCommonHeader .mobileList .home{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 0 no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .game{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -57px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .image{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -122px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .baby{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -184px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .player{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -246px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .store{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -308px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .book{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -370px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .movie{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -432px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .tv{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -494px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .star{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -556px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .show{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -617px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .disneyland{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -679px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .de{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -741px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .space{ height:52px; background:url('+path+'/style/mobileListBg.jpg) 0 -802px no-repeat;}'
_mhCss +='.miniCommonHeader .mobileList .expandCloseBtn_e{ background:url('+path+'/style/expandCloseBtn.gif) center bottom no-repeat; cursor:pointer; height:60px; width:18px; display:inline-block; float:right; margin-right:50px}'
_mhCss +='.miniCommonHeader .mobileList .expandCloseBtn_c{background:url('+path+'/style/expandCloseBtn.gif) center top no-repeat;  cursor:pointer; height:60px; width:18px; display:inline-block; float:right; margin-right:50px}'
_mhCss +='.miniCommonHeader .mobileList p{ background:#dcdee0; display:none}'
_mhCss +='.miniCommonHeader .mobileList p a{ height:45px; border-bottom:1px dashed #a0a0a0; width:220px; margin:0 auto; display:block; font-size:14px; font-weight:normal; line-height:45px;}'


_mhCss +='.miniCommonFooter {text-align: center; margin: 0 auto; background:#FFF; font-size:12px }'
_mhCss +='.miniCommonFooter a {text-decoration: none; color:#000}'
_mhCss +='.miniCommonFooter .communicate {line-height: 20px;margin-bottom: 20px;}'
_mhCss +='.miniCommonFooter .communicate img {margin-right: 5px;vertical-align: middle;}'
_mhCss +='.miniCommonFooter .communicate a {margin: 0 26px;}'
_mhCss +='.miniCommonFooter .commandDiv {color: #FFFFFF;height: 20px;line-height: 24px;padding-top: 4px;}'
_mhCss +='.miniCommonFooter .commandDiv a:link, .commandDiv a:visited {color: #FFFFFF;margin: 0 10px 0 15px;}'
_mhCss +='.miniCommonFooter .footruleDiv {height: 120px;margin: 10px auto 0;width: 260px;}'
_mhCss +='.miniCommonFooter .ruleDiv {line-height: 24px;margin-left: 20px;}'
_mhCss +='.miniCommonFooter .dCode{ float:left}'
_mhCss +='.miniCommonFooter .fbs {font-family: Arial,Helvetica,sans-serif;}'
_mhCss +='.miniCommonFooter .flo_l {float: left;}'
_mhCss +='.miniCommonFooter img{ border:none}'



_mhCss +='@media only screen and (min-width: 1025px)  {}'


_mhCss +='@media only screen and (min-width: 768px) and (max-width: 1024px) {'
_mhCss +='.miniCommonHeader .menu{ width:100%};'
_mhCss +='.miniCommonFooter  { width:100%}'
_mhCss +='.miniCommonHeader{width:100%;}'
_mhCss +='}'

_mhCss +='@media only screen and (min-width: 320px) and (max-width: 767px) {'
_mhCss +='.miniCommonHeader{width:100%; overflow:hidden;margin:0 auto; padding:0}'
_mhCss +='.miniCommonHeader .menu{width:100%;}'
_mhCss +='.miniCommonHeader .menu ul{ display:none;}'
_mhCss +='.miniCommonHeader .logo{ background:url('+path+'/style/mobile_moreBtn.jpg) left top no-repeat; width:87px; height:42px; position:absolute; z-index:100; left:100%; margin-left:-87px   }'
_mhCss +='.miniCommonHeader .logo a{display:none}'
	
_mhCss +='.miniCommonFooter{width:100%;  overflow:hidden; margin:0 auto; padding:0}'
_mhCss +='.miniCommonFooter .communicate strong{ display:block; margin:0 auto}'
_mhCss +='.miniCommonFooter .communicate a{ margin: 0 5px }'
_mhCss +='}';
    

    
    var oDiv2 = document.createElement("div");
    function addTop_mh(obody) {
        oDiv2.innerHTML = _mhTop;
        obody.insertBefore(oDiv2, obody.firstChild);
    }


    function addStyle_mh() {
        var oStyle = document.createElement("style");
        oStyle.type = "text/css";
        try {
            oStyle.appendChild(document.createTextNode(_mhCss));
        }
        catch (e) {
            oStyle.styleSheet.cssText = _mhCss;
        }
        document.getElementsByTagName("head")[0].appendChild(oStyle);
    }

    
        var obody = document.getElementsByTagName("body").item(0);
        var ohead = document.getElementsByTagName("head").item(0);
        addStyle_mh();
        addTop_mh(obody);


})();


function miniCommonOpenCloseAct(o){
	if(o.firstChild.style.display=='block'){
		
		
	}else{
		if(document.getElementById('miniCommonMobileList').style.display=='block'){
			document.getElementById('miniCommonMobileList').style.display='none'
		}else{
			document.getElementById('miniCommonMobileList').style.display='block'
		}	
	}
}
var miniCommonSubMenuStatus=''
function miniCommonSubMenuAct(event){
	var path = 'http://t.dol.cn/common/minisite/header_footer/'
	var e = event || window.event
	var ev = e.target || e.srcElement

	if(ev.tagName.toLowerCase()=='span'){
		ev= ev.parentNode
	}
	
	if(ev.tagName.toLowerCase() == 'a' && ev.getAttribute('data-index')){
		if(miniCommonSubMenuStatus!=''){//miniCommonMobileList
			document.getElementById('miniCommonMobileList').getElementsByTagName('li')[miniCommonSubMenuStatus].getElementsByTagName('span')[0].style.background='url('+path+'/style/expandCloseBtn.gif) center bottom no-repeat'
			document.getElementById('miniCommonMobileList').getElementsByTagName('li')[miniCommonSubMenuStatus].getElementsByTagName('p')[0].style.display='none'
		}
		
		if(miniCommonSubMenuStatus!=ev.getAttribute('data-index')){
		miniCommonSubMenuStatus = ev.getAttribute('data-index')
		ev.getElementsByTagName('span')[0].style.background='url('+path+'/style/expandCloseBtn.gif) center top no-repeat'
		ev.parentNode.getElementsByTagName('p')[0].style.display='block'
		}else{
			miniCommonSubMenuStatus = ''
		}
	}
}