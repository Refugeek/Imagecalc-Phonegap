(function(e){$(document).on("pagechange pagebeforeshow",function(){t._pageChange()}),e.application=new HDApplication({_deviceMap:{iPhone:{screenWidth:320,screenHeight:480,width:320,height:416},iPhone5:{screenWidth:320,screenHeight:568,width:320,height:504},iPad:{screenWidth:768,screenHeight:1024,width:768,height:947},"iPad-L":{screenWidth:1024,screenHeight:768,width:1024,height:691},"iPhone-L":{screenWidth:480,screenHeight:320,width:480,height:268},"iPhone5-L":{screenWidth:568,screenHeight:320,width:568,height:256}},_jqm:!0,_jqmAJAX:!0});var t=e.application;t._pages.index=new HDPage("index"),function(e){e._pageURL="index.html",t._pages.index._events.height_onChange=function(e){var t,n=0;switch(imageSelect.value){case"Regular image (682x459)":t=682,n=459;break;case"Cover image (1100x260)":t=1100,n=260;break;default:t=682,n=459}width.value=(sizeSelect.value.match(/\d+/)[0]/100*t/n*height.value).toFixed(2)},t._pages.index._events.select_onChange=function(e){var t,n=0;switch(imageSelect.value){case"Regular image (682x459)":t=682,n=459;break;case"Cover image (1100x260)":t=1100,n=260;break;default:t=682,n=459}width.value=sizeSelect.value.match(/\d+/)[0]/100*t,height.value=sizeSelect.value.match(/\d+/)[0]/100*n},t._pages.index._events.width_onChange=function(e){var t,n=0;switch(imageSelect.value){case"Regular image (682x459)":t=682,n=459;break;case"Cover image (1100x260)":t=1100,n=260;break;default:t=682,n=459}height.value=(sizeSelect.value.match(/\d+/)[0]/100*n/t*width.value).toFixed(2)},$(document).off("_hd_pagechange","#index").on("_hd_pagechange","#index",function(){e._load(function(e){e.div1=new HDDiv("index_div1"),e.div1.top={iPhone:"274"},e.div1.left={iPhone:"5%"},e.div1.width={iPhone:"90%"},e.div1.height={iPhone:"20"},e.header1=new JQMHeaderToolbar("index_header1"),e.header1.top={iPhone:"51"},e.header1.left={iPhone:"110"},e.header1.width={iPhone:""},e.header1.height={iPhone:""},e.header1.rightButtonGotoPage="aboutpage",e.header1.rightButtonGotoPageTransition="slide",e.height=new JQMTextbox("index_height"),e.height.top={iPhone:"212"},e.height.left={iPhone:"102"},e.height.width={iPhone:"200"},e.height.height={iPhone:"44"},e.height.onChange=t._pages.index._events.height_onChange,e.imageSelect=new JQMSelect("index_imageSelect"),e.imageSelect.top={iPhone:"54"},e.imageSelect.left={iPhone:"5%"},e.imageSelect.width={iPhone:"90%"},e.imageSelect.height={iPhone:"47"},e.imageSelect.onChange=t._pages.index._events.select_onChange,e.label1=new HDLabel("index_label1"),e.label1.top={iPhone:"175"},e.label1.left={iPhone:"19"},e.label1.width={iPhone:"100"},e.label1.height={iPhone:"32"},e.label2=new HDLabel("index_label2"),e.label2.top={iPhone:"228"},e.label2.left={iPhone:"20"},e.label2.width={iPhone:"100"},e.label2.height={iPhone:"23"},e.sizeSelect=new JQMSelect("index_sizeSelect"),e.sizeSelect.top={iPhone:"106"},e.sizeSelect.left={iPhone:"5%"},e.sizeSelect.width={iPhone:"90%"},e.sizeSelect.height={iPhone:"47"},e.sizeSelect.onChange=t._pages.index._events.select_onChange,e.width=new JQMTextbox("index_width"),e.width.top={iPhone:"163"},e.width.left={iPhone:"102"},e.width.width={iPhone:"200"},e.width.height={iPhone:"44"},e.width.onChange=t._pages.index._events.width_onChange})})}(t._pages.index),t._pages.aboutpage=new HDPage("aboutpage"),function(e){e._pageURL="aboutpage.html",$(document).off("_hd_pagechange","#aboutpage").on("_hd_pagechange","#aboutpage",function(){e._load(function(e){e.div1=new HDDiv("aboutpage_div1"),e.div1.top={iPhone:"43"},e.div1.left={iPhone:"5%"},e.div1.width={iPhone:"90%"},e.div1.height={iPhone:"100"},e.header1=new JQMHeaderToolbar("aboutpage_header1"),e.header1.top={iPhone:"51"},e.header1.left={iPhone:"110"},e.header1.width={iPhone:""},e.header1.height={iPhone:""},e.header1.leftButtonGotoPage="(back)",e.header1.leftButtonGotoPageTransition="slide reverse"})})}(t._pages.aboutpage)})(window)