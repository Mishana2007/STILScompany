window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isiOS=!1;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){window.isiOS=!0}
window.isiOSVersion='';if(window.isiOS){var version=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);if(version!==null){window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t686_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t686');if(!container)return;t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)});setTimeout(function(){t686_setHeight(recId)},100);window.addEventListener('resize',t_throttle(function(){t686_setHeight(recId)}));container.addEventListener('displayChanged',function(){t686_setHeight(recId)})}
function t686_setHeight(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var wrapper=rec.querySelector('.t686');if(!wrapper)return;var col=rec.querySelector('.t-card__col');var ratio=wrapper.getAttribute('data-tile-ratio');if(!col)return;var container=rec.querySelector('.t686__container');var colStyle=getComputedStyle(col,null);var colPaddingLeft=parseInt(colStyle.paddingLeft)||0;var colPaddingRight=parseInt(colStyle.paddingRight)||0;var colHeight=(col.clientWidth-(colPaddingLeft+colPaddingRight))*+ratio;var maxHeight=0;var columnsInRow=Number(container.getAttribute('data-columns-in-row'));if(columnsInRow===0||columnsInRow===''){columnsInRow=1}
var allTables=Array.prototype.slice.call(rec.querySelectorAll('.t686__table'));var rowsArray=[];for(var i=0;i<allTables.length;i+=columnsInRow){rowsArray.push(allTables.slice(i,i+columnsInRow))}
for(var i=0;i<rowsArray.length;i++){var tables=rowsArray[i];for(var j=0;j<tables.length;j++){var table=tables[j];var textWrap=table.querySelector('.t686__textwrapper');var textWrapHeight=0;if(textWrap){textWrapHeight=textWrap.offsetHeight}
var cell=table.querySelector('.t686__cell');if(cell.classList.contains('t686__button-bottom')){var button=table.querySelector('.t686__button-container');if(button){textWrapHeight+=button.offsetHeight}}
if(textWrapHeight>maxHeight)maxHeight=textWrapHeight}
if(window.innerWidth>=960){if(maxHeight>colHeight){for(var j=0;j<tables.length;j++){var table=tables[j];table.style.height=maxHeight+'px';table.style.minHeight='auto'}}else{for(var j=0;j<tables.length;j++){var table=tables[j];table.style.height=colHeight+'px';table.style.minHeight='auto'}}}else{for(var j=0;j<tables.length;j++){var table=tables[j];table.style.height=null;table.style.minHeight=colHeight+'px'}}
if(!!document.documentMode){var bgs=[];var overlays=[];for(var tableIndex=0;tableIndex<tables.length;tableIndex++){bgs.push(tables[tableIndex].querySelector('.t686__bg'));overlays.push(tables[tableIndex].querySelector('.t686__overlay'))}
var tableHeight=parseInt(tables[0].style.height);for(var j=0;j<bgs.length;j++){bgs[j].style.height=tableHeight+'px'}
for(var j=0;j<overlays.length;j++){overlays[j].style.height=tableHeight+'px'}}}}
function t702_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;rec.setAttribute('data-animationappear','off');rec.setAttribute('data-popup-subscribe-inited','y');rec.style.opacity=1;var documentBody=document.body;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var analitics=popup.getAttribute('data-track-popup');var popupCloseBtn=popup.querySelector('.t-popup__close');var hrefs=rec.querySelectorAll('a[href*="#"]');var submitHref=rec.querySelector('.t-submit[href*="#"]');if(popupTooltipHook){t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(popupTooltipHook)});document.addEventListener('click',function(event){var target=event.target;var href=target.closest('a[href$="'+popupTooltipHook+'"]')?target:!1;if(!href)return;event.preventDefault();t702_showPopup(recId);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});t702__lazyLoad();if(analitics&&window.Tilda){Tilda.sendEventToStatistics(analitics,popupTooltipHook)}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,popupTooltipHook)})}
popup.addEventListener('scroll',t_throttle(function(){t702__lazyLoad()}));popup.addEventListener('click',function(event){var windowWithoutScrollBar=window.innerWidth-17;if(event.clientX>windowWithoutScrollBar)return;if(event.target===this)t702_closePopup(recId)});popupCloseBtn.addEventListener('click',function(){t702_closePopup(recId)});if(submitHref){submitHref.addEventListener('click',function(){if(documentBody.classList.contains('t-body_scroll-locked')){documentBody.classList.remove('t-body_scroll-locked')}})}
for(var i=0;i<hrefs.length;i++){hrefs[i].addEventListener('click',function(){var url=this.getAttribute('href');if(!url||url.substring(0,7)!='#price:'){t702_closePopup(recId);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed')},300)}}})}
function t702_escClosePopup(event){if(event.key==='Escape')t702_closePopup(recId)}
popup.addEventListener('tildamodal:show'+popupTooltipHook,function(){document.addEventListener('keydown',t702_escClosePopup)});popup.addEventListener('tildamodal:close'+popupTooltipHook,function(){document.removeEventListener('keydown',t702_escClosePopup)})}
function t702_lockScroll(){var documentBody=document.body;if(!documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=typeof window.pageYOffset!=='undefined'?window.pageYOffset:(document.documentElement||documentBody.parentNode||documentBody).scrollTop;documentBody.classList.add('t-body_scroll-locked');documentBody.style.top='-'+bodyScrollTop+'px';documentBody.setAttribute('data-popup-scrolltop',bodyScrollTop)}}
function t702_unlockScroll(){var documentBody=document.body;if(documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=documentBody.getAttribute('data-popup-scrolltop');documentBody.classList.remove('t-body_scroll-locked');documentBody.style.top=null;documentBody.removeAttribute('data-popup-scrolltop');document.documentElement.scrollTop=parseInt(bodyScrollTop)}}
function t702_showPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var ranges=rec.querySelectorAll('.t-range');var documentBody=document.body;if(ranges.length){Array.prototype.forEach.call(ranges,function(range){t702__triggerEvent(range,'popupOpened')})}
t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed');documentBody.classList.add('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){setTimeout(function(){t702_lockScroll()},500)}
t702__lazyLoad();t702__triggerEvent(popup,'tildamodal:show'+popupTooltipHook)}
function t702_closePopup(recId){var rec=document.getElementById('rec'+recId);var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var popupAll=document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');if(popupAll.length==1){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}else{var newPopup=[];for(var i=0;i<popupAll.length;i++){if(popupAll[i].getAttribute('data-tooltip-hook')===popupTooltipHook){popupAll[i].classList.remove('t-popup_show');newPopup.push(popupAll[i])}}
if(newPopup.length===popupAll.length){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}}
if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');popup.classList.remove('t-popup_show');document.body.classList.remove('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){t702_unlockScroll()}
t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){var popupHide=document.querySelectorAll('.t-popup:not(.t-popup_show)');for(var i=0;i<popupHide.length;i++){popupHide[i].style.display='none'}},300);t702__triggerEvent(popup,'tildamodal:close'+popupTooltipHook)}
function t702_sendPopupEventToStatistics(popupName){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupName.substring(0,7)=='#popup:'){popupName=popupName.substring(7)}
virtPage+=popupName;virtTitle+=popupName;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{hitType:'pageview',page:virtPage,title:virtTitle})}}
if(window.mainMetrika&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t702_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t702__lazyLoad(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t702__triggerEvent(el,eventName){var event;if(typeof window.CustomEvent==='function'){event=new CustomEvent(eventName)}else if(document.createEvent){event=document.createEvent('HTMLEvents');event.initEvent(eventName,!0,!1)}else if(document.createEventObject){event=document.createEventObject();event.eventType=eventName}
event.eventName=eventName;if(el.dispatchEvent){el.dispatchEvent(event)}else if(el.fireEvent){el.fireEvent('on'+event.eventType,event)}else if(el[eventName]){el[eventName]()}else if(el['on'+eventName]){el['on'+eventName]()}}
function t503_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t738_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t738_unifyHeights(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t738');if(!container)return;var items=rec.querySelectorAll('.t738__item');var maxHeight=0;for(var i=0;i<items.length;i++){items[i].style.height=''}
for(var i=0;i<items.length;i++){var itemPaddingTop=parseInt(getComputedStyle(items[i]).paddingTop)||0;var itemPaddingBottom=parseInt(getComputedStyle(items[i]).paddingBottom)||0;var imgHeight=items[i].querySelector('img').offsetHeight+itemPaddingTop+itemPaddingBottom;if(imgHeight>maxHeight){maxHeight=imgHeight}}
for(var i=0;i<items.length;i++){var itemPaddingTop=parseInt(getComputedStyle(items[i]).paddingTop)||0;var itemPaddingBottom=parseInt(getComputedStyle(items[i]).paddingBottom)||0;items[i].style.height=maxHeight+itemPaddingTop+itemPaddingBottom+'px'}
t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recId)})}
function t537_setHeight(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t537');if(!container)return;var images=rec.querySelectorAll('.t537__bgimg');if(!images[0])return;var imageWidth=images[0].getAttribute('data-image-width');var imageHeight=images[0].getAttribute('data-image-height');var imageRatio=imageHeight/imageWidth;var imagePadding=imageRatio*100;for(var i=0;i<images.length;i++){images[i].style.paddingBottom=imagePadding+'%'}}
function t331_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return!1;rec.setAttribute('data-animationappear','off');rec.style.opacity='1';var currentBlock=rec.querySelector('.t-popup');var currentHook=currentBlock?currentBlock.getAttribute('data-tooltip-hook'):'';var currentAnalitics=currentBlock?currentBlock.getAttribute('data-track-popup'):'';if(!currentHook)return!1;t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(currentHook)});document.addEventListener('click',function(e){var href=e.target.closest('a[href="'+currentHook+'"]');if(href){e.preventDefault();t331_showPopup(recId);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});if(currentAnalitics){var virtTitle=currentHook;if(virtTitle.substring(0,7)==='#popup:')virtTitle=virtTitle.substring(7);Tilda.sendEventToStatistics(currentAnalitics,virtTitle)}}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,currentHook)})}
function t331_setHeight(recid){var rec=document.getElementById('rec'+recid);if(!rec)return!1;var videoCarrier=rec.querySelector('.t331__video-carier');var carrierParent=videoCarrier?videoCarrier.parentNode:null;var videoWidth=videoCarrier?videoCarrier.getAttribute('data-video-width'):'0';var videoHeight=videoCarrier?videoCarrier.getAttribute('data-video-height'):'0';if(videoHeight.indexOf('vh')!==-1){videoHeight=parseInt(videoHeight,10)*window.innerHeight/100}else{videoHeight=parseInt(videoHeight,10)}
var ratio=videoHeight/(parseInt(videoWidth,10)||1);var videoCurrentWidth=videoCarrier?videoCarrier.offsetWidth:0;var calculatedHeight=videoCurrentWidth*ratio;if(videoCarrier)videoCarrier.style.height=calculatedHeight+'px';if(carrierParent)carrierParent.style.height=calculatedHeight+'px'}
function t331_showPopup(recid){var rec=document.getElementById('rec'+recid);if(!rec)return!1;var popup=rec.querySelector('.t-popup');var videoContainer=rec.querySelector('.t331__youtube');var videoCarrier=rec.querySelector('.t331__video-carier');var isVideoCarrierExist=!!videoCarrier.querySelector('iframe');if(isVideoCarrierExist)return;var videoID=videoContainer?videoContainer.getAttribute('data-content-popup-video-url-youtube'):'';if(videoID)videoID=videoID.replace('https://www.youtube.com/shorts/','');var videoURL=videoID?'https://www.youtube.com/embed/'+videoID:'';if(videoCarrier){var iframe=document.createElement('iframe');iframe.id='youtubeiframe'+recid;iframe.classList.add('t331__iframe');iframe.width='100%';iframe.height='100%';iframe.src=videoURL+(videoURL.indexOf('?')!==-1?'&':'?')+'autoplay=1&rel=0';iframe.frameBorder='0';iframe.setAttribute('allowfullscreen','');videoCarrier.insertAdjacentElement('beforeend',iframe)}
if(popup)popup.style.display='block';t331_setHeight(recid);setTimeout(function(){var popupContainer=popup?popup.querySelector('.t-popup__container'):null;if(popupContainer)popupContainer.classList.add('t-popup__container-animated');if(popup)popup.classList.add('t-popup_show');popup.focus();t_onFuncLoad('t_popup__trapFocus',function(){t_popup__trapFocus(popup)})},50);if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t-body_popupshowed');document.body.classList.add('t331__body_popupshowed');if(popup){popup.addEventListener('click',function(e){if(e.target===popup)t331_popup_close(recid)})}
var popupClose=popup?popup.querySelector('.t-popup__close'):null;if(popupClose){popupClose.addEventListener('click',function(){t331_popup_close(recid)})}
document.addEventListener('keydown',function(e){if(e.keyCode===27)t331_popup_close(recid)})}
function t331_popup_close(recid){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed');document.body.classList.remove('t331__body_popupshowed');var rec=document.getElementById('rec'+recid);if(!rec)return!1;var popup=rec.querySelector('.t-popup');var videoCarrier=rec.querySelector('.t331__video-carier');if(popup)popup.classList.remove('t-popup_show');t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){if(videoCarrier)videoCarrier.innerHTML='';if(popup&&!popup.classList.contains('t-popup_show')){popup.style.display='none'}},300)}
function t331_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)==='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(ga){if(window.mainTracker!=='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}
function t228__init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuBlock=rec.querySelector('.t228');var mobileMenu=rec.querySelector('.t228__mobile');var menuSubLinkItems=rec.querySelectorAll('.t-menusub__link-item');var rightBtn=rec.querySelector('.t228__right_buttons_but .t-btn');var mobileMenuPosition=mobileMenu?mobileMenu.style.position||window.getComputedStyle(mobileMenu).position:'';var mobileMenuDisplay=mobileMenu?mobileMenu.style.display||window.getComputedStyle(mobileMenu).display:'';var isFixedMobileMenu=mobileMenuPosition==='fixed'&&mobileMenuDisplay==='block';var overflowEvent=document.createEvent('Event');var noOverflowEvent=document.createEvent('Event');overflowEvent.initEvent('t228_overflow',!0,!0);noOverflowEvent.initEvent('t228_nooverflow',!0,!0);if(menuBlock){menuBlock.addEventListener('t228_overflow',function(){t228_checkOverflow(recid)});menuBlock.addEventListener('t228_nooverflow',function(){t228_checkNoOverflow(recid)})}
rec.addEventListener('click',function(e){var targetLink=e.target.closest('.t-menusub__target-link');if(targetLink&&window.isMobile){if(targetLink.classList.contains('t-menusub__target-link_active')){if(menuBlock)menuBlock.dispatchEvent(overflowEvent)}else{if(menuBlock)menuBlock.dispatchEvent(noOverflowEvent)}}
var currentLink=e.target.closest('.t-menu__link-item:not(.tooltipstered):not(.t-menusub__target-link):not(.t794__tm-link):not(.t966__tm-link):not(.t978__tm-link):not(.t978__menu-link)');if(currentLink&&mobileMenu&&isFixedMobileMenu)mobileMenu.click()});Array.prototype.forEach.call(menuSubLinkItems,function(linkItem){linkItem.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})});if(rightBtn){rightBtn.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})}
if(menuBlock){menuBlock.addEventListener('showME601a',function(){var menuLinks=rec.querySelectorAll('.t966__menu-link');Array.prototype.forEach.call(menuLinks,function(menuLink){menuLink.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})})})}}
function t228_checkOverflow(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t228'):null;if(!menu)return;var mobileContainer=document.querySelector('.t228__mobile_container');var mobileContainerHeight=t228_getFullHeight(mobileContainer);var windowHeight=document.documentElement.clientHeight;var menuPosition=menu.style.position||window.getComputedStyle(menu).position;if(menuPosition==='fixed'){menu.classList.add('t228__overflow');menu.style.setProperty('height',(windowHeight-mobileContainerHeight)+'px','important')}}
function t228_checkNoOverflow(recid){var rec=document.getElementById('rec'+recid);if(!rec)return!1;var menu=rec.querySelector('.t228');var menuPosition=menu?menu.style.position||window.getComputedStyle(menu).position:'';if(menuPosition==='fixed'){if(menu)menu.classList.remove('t228__overflow');if(menu)menu.style.height='auto'}}
function t228_setWidth(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuCenterSideList=rec.querySelectorAll('.t228__centerside');Array.prototype.forEach.call(menuCenterSideList,function(menuCenterSide){menuCenterSide.classList.remove('t228__centerside_hidden')});if(window.innerWidth<=980)return;var menuBlocks=rec.querySelectorAll('.t228');Array.prototype.forEach.call(menuBlocks,function(menu){var maxWidth;var centerWidth=0;var paddingWidth=40;var leftSide=menu.querySelector('.t228__leftside');var rightSide=menu.querySelector('.t228__rightside');var menuList=menu.querySelector('.t228__list');var mainContainer=menu.querySelector('.t228__maincontainer');var leftContainer=menu.querySelector('.t228__leftcontainer');var rightContainer=menu.querySelector('.t228__rightcontainer');var centerContainer=menu.querySelector('.t228__centercontainer');var centerContainerLi=centerContainer?centerContainer.querySelectorAll('li'):[];var leftContainerWidth=t228_getFullWidth(leftContainer);var rightContainerWidth=t228_getFullWidth(rightContainer);var mainContainerWidth=mainContainer?mainContainer.offsetWidth:0;var dataAlign=menu.getAttribute('data-menu-items-align');var isDataAlignCenter=dataAlign==='center'||dataAlign===null;maxWidth=leftContainerWidth>=rightContainerWidth?leftContainerWidth:rightContainerWidth;maxWidth=Math.ceil(maxWidth);Array.prototype.forEach.call(centerContainerLi,function(li){centerWidth+=t228_getFullWidth(li)});if(mainContainerWidth-(maxWidth*2+paddingWidth*2)>centerWidth+20){if(isDataAlignCenter){if(leftSide)leftSide.style.minWidth=maxWidth+'px';if(rightSide)rightSide.style.minWidth=maxWidth+'px'}}else{if(leftSide)leftSide.style.minWidth=maxWidth+'';if(rightSide)rightSide.style.minWidth=maxWidth+''}
if(menuList&&menuList.classList.contains('t228__list_hidden'))menuList.classList.remove('t228__list_hidden')})}
function t228_getFullWidth(el){if(!el)return 0;var marginLeft=el.style.marginLeft||window.getComputedStyle(el).marginLeft;var marginRight=el.style.marginRight||window.getComputedStyle(el).marginRight;marginLeft=parseInt(marginLeft,10)||0;marginRight=parseInt(marginRight,10)||0;return el.offsetWidth+marginLeft+marginRight}
function t228_getFullHeight(el){if(!el)return 0;var marginTop=el.style.marginTop||window.getComputedStyle(el).marginTop;var marginBottom=el.style.marginBottom||window.getComputedStyle(el).marginBottom;marginTop=parseInt(marginTop,10)||0;marginBottom=parseInt(marginBottom,10)||0;return el.offsetHeight+marginTop+marginBottom}
function t450_showMenu(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menu=rec.querySelector('.t450');var overlay=rec.querySelector('.t450__overlay');var menuElements=rec.querySelectorAll('.t450__overlay, .t450__close, a[href*="#"]');if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t450__body_menushowed');if(menu)menu.classList.add('t450__menu_show');if(overlay)overlay.classList.add('t450__menu_show');if(menu){menu.addEventListener('clickedAnchorInTooltipMenu',function(){t450_closeMenu(menu,overlay)})}
Array.prototype.forEach.call(menuElements,function(element){element.addEventListener('click',function(){if(element.closest('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link'))return;if(element.href&&(element.href.substring(0,7)==='#price:'||element.href.substring(0,9)==='#submenu:'))return;t450_closeMenu(menu,overlay)})});document.addEventListener('keydown',function(e){if(e.keyCode===27){document.body.classList.remove('t390__body_popupshowed');var popups=document.querySelectorAll('.t390');Array.prototype.forEach.call(popups,function(popup){popup.classList.remove('t390__popup_show')})}});rec.addEventListener('click',function(e){if(e.target.closest('.t966__tm-link, .t978__tm-link')){t450_checkSize(recid);if(e.target.closest('.t978__tm-link')){setTimeout(function(){var hookLink=e.target.closest('.t978__tm-link');var menuBlock=hookLink.nextElementSibling;var submenuLinks=menuBlock?menuBlock.querySelectorAll('.t978__menu-link'):[];Array.prototype.forEach.call(submenuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})},300)}}});menu.addEventListener('menuOverflow',function(){t450_checkSize(recid)});t450_highlight(recid)}
function t450_closeMenu(menu,overlay){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t450__body_menushowed');if(menu)menu.classList.remove('t450__menu_show');if(overlay)overlay.classList.remove('t450__menu_show')}
function t450_checkSize(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;if(!menu)return;var container=menu.querySelector('.t450__container');var topContainer=menu.querySelector('.t450__top');var rightContainer=menu.querySelector('.t450__rightside');setTimeout(function(){var topContainerHeight=topContainer?topContainer.offsetHeight:0;var rightContainerHeight=rightContainer?rightContainer.offsetHeight:0;var containerPaddingTop=container?window.getComputedStyle(container).paddingTop:'0';var containerPaddingBottom=container?window.getComputedStyle(container).paddingBottom:'0';containerPaddingTop=parseInt(containerPaddingTop,10);containerPaddingBottom=parseInt(containerPaddingBottom,10);if(topContainerHeight+rightContainerHeight+containerPaddingTop+containerPaddingBottom>document.documentElement.clientHeight){menu.classList.add('t450__overflowed')}else{menu.classList.remove('t450__overflowed')}})}
function t450_appearMenu(recid){var rec=document.getElementById('rec'+recid);var burger=rec?rec.querySelector('.t450__menu__content'):null;if(!burger)return;var burgerAppearOffset=burger?burger.getAttribute('data-appearoffset'):'';var burgerHideOffset=burger?burger.getAttribute('data-hideoffset'):'';if(burgerAppearOffset){burgerAppearOffset=t450_appearMenuParseNumber(burgerAppearOffset);if(window.pageYOffset>=burgerAppearOffset){if(burger.classList.contains('t450__beforeready')){burger.classList.remove('t450__beforeready')}}else{burger.classList.add('t450__beforeready')}}
if(burgerHideOffset){burgerHideOffset=t450_appearMenuParseNumber(burgerHideOffset);var scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);if(window.pageYOffset+window.innerHeight>=scrollHeight-burgerHideOffset){if(!burger.classList.contains('t450__beforeready')){burger.classList.add('t450__beforeready')}}else if(burgerAppearOffset){if(window.pageYOffset>=burgerAppearOffset){burger.classList.remove('t450__beforeready')}}else{burger.classList.remove('t450__beforeready')}}}
function t450_appearMenuParseNumber(string){if(string.indexOf('vh')>-1){string=Math.floor((window.innerHeight*(parseInt(string)/100)))}
return parseInt(string,10)}
function t450_initMenu(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;var overlay=rec?rec.querySelector('.t450__overlay'):null;var burger=rec?rec.querySelector('.t450__burger_container'):null;var menuLinks=rec?rec.querySelectorAll('.t-menu__link-item.t450__link-item_submenu'):[];var hook=menu?menu.getAttribute('data-tooltip-hook'):'';if(hook){document.addEventListener('click',function(e){if(e.target.closest('a[href="'+hook+'"]')){e.preventDefault();t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)}})}
if(burger){burger.addEventListener('click',function(){t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)})}
window.addEventListener('resize',function(){t450_checkSize(recid)});if(!window.isMobile)return;Array.prototype.forEach.call(menuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})}
function t450_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;var hash=window.location.hash;if(url.substr(url.length-1)==='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)==='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)==='/'){pathname=pathname.slice(1)}
if(pathname===''){pathname='/'}
var shouldBeActiveElements=document.querySelectorAll('.t450__menu a[href=\''+url+'\'], '+'.t450__menu a[href=\''+url+'/\'], '+'.t450__menu a[href=\''+pathname+'\'], '+'.t450__menu a[href=\'/'+pathname+'\'], '+'.t450__menu a[href=\''+pathname+'/\'], '+'.t450__menu a[href=\'/'+pathname+'/\']'+(hash?', .t450__menu a[href=\''+hash+'\']':''));var rec=document.getElementById('rec'+recid);var menuLinks=rec?rec.querySelectorAll('.t450__menu a'):[];Array.prototype.forEach.call(menuLinks,function(link){if(link.getAttribute('data-highlighted-by-user')!=='y')link.classList.remove('t-active')});Array.prototype.forEach.call(shouldBeActiveElements,function(link){link.classList.add('t-active')})}
window.requestAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}})();function t270_scroll(hash,offset){if(!hash)return;t270_checkLoad(hash,offset);if(hash.indexOf('#!/tproduct/')!==-1||hash.indexOf('#!/tab/')!==-1){return!0}
var isHistoryChangeAllowed=window.location.hash!==hash;var wrapperBlock=document.querySelector('.t270');var dontChangeHistory=wrapperBlock?Boolean(wrapperBlock.getAttribute('data-history-disabled')):!1;t270_scrollToEl(hash,offset);if(!dontChangeHistory&&isHistoryChangeAllowed){if(history.pushState){history.pushState(null,null,hash)}else{window.location.hash=hash}
isHistoryChangeAllowed=!1}
return!0}
function t270_checkLoad(hash,offset){if(window.t270_loadChecked)return;var sliderWrappers=document.body.querySelectorAll('.t-slds__items-wrapper');if(!sliderWrappers.length)return;var lastWrapper=sliderWrappers[sliderWrappers.length-1];var sliderImgs=lastWrapper?lastWrapper.querySelectorAll('.t-slds__bgimg'):[];var lastImg=sliderImgs[sliderImgs.length-1];var imageUrl=lastImg?window.getComputedStyle(lastImg).backgroundImage:'';imageUrl=imageUrl.substring(5,imageUrl.length-2);var preloaderImg=document.createElement('img');preloaderImg.src=imageUrl?imageUrl:'';preloaderImg.addEventListener('load',function(){t270_scroll(hash,offset);window.t270_loadChecked=!0})}
function t270_scrollToEl(hash,offset){if(document.body.getAttribute('data-scroll'))return;var scrollTargetY=t270_getTarget(hash,offset);if(isNaN(scrollTargetY))return;var html=document.querySelector('html');var body=document.body;var documentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);var scrollY=window.scrollY||document.documentElement.scrollTop;var speed=2000;var time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8));var currentTime=0;function t270_easeInQuad(pos){return Math.pow(pos,2)}
function t270_animationScroll(){currentTime+=1/60;var newDocumentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);if(documentHeight<newDocumentHeight){documentHeight=newDocumentHeight;scrollTargetY=t270_getTarget(hash,offset);scrollY=window.scrollY||document.documentElement.scrollTop;time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8))}
var difference=currentTime/time;var animation=t270_easeInQuad(difference);if(difference<1){requestAnimationFrame(t270_animationScroll);window.scrollTo(0,scrollY+((scrollTargetY-scrollY)*animation))}else{body.removeAttribute('data-scroll');body.removeAttribute('data-scrollable');window.scrollTo(0,scrollTargetY)}}
body.setAttribute('data-scroll','true');body.setAttribute('data-scrollable','true');t270_animationScroll()}
function t270_getTarget(hash,offset){var target;try{if(hash.substring(0,1)==='#'){target=document.getElementById(hash.substring(1))}else{target=document.querySelector(hash)}}catch(event){console.log('Exception t270: '+event.message);return}
if(!target){target=document.querySelector('a[name="'+hash.substr(1)+'"]');if(!target)return}
target=parseInt((target.getBoundingClientRect().top+window.pageYOffset)-offset,10);target=Math.max(target,0);return target}
function t898_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t898');if(!container)return;rec.setAttribute('data-animationappear','off');rec.style.opacity=1;var whatsApp=rec.querySelector('.t898__icon-whatsapp_wrapper');if(whatsApp){var whatsAppHref=whatsApp.getAttribute('href');if(whatsAppHref&&(whatsAppHref.indexOf('whatsapp://')>-1||whatsAppHref.indexOf('wa.me')>-1)){t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref)}}
if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref){if(whatsAppHref&&whatsAppHref.indexOf('?text=')!==-1){var whatsAppHrefArr=whatsAppHref.split('?text=');whatsAppHrefArr[0]=whatsAppHrefArr[0].replace(/[\(\)+-]/g,'');whatsAppHref=whatsAppHrefArr[0]+'?text='+whatsAppHrefArr[1]}else{whatsAppHref=whatsAppHref.replace(/[\(\)+-]/,'')}
whatsApp.setAttribute('href',whatsAppHref)}