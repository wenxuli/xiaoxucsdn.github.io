$(function(){  
    //图片切换  
    var imgList = $("#personImg li"); //获取图片对象  
    var liNum = imgList.length;//获取图片数  
    if(liNum>0){  
        for(var i=0;i<liNum;i++){//添加数字选择栏  
            if(i==0){  
                $("#imgNum").append('<li class="on">'+(i+1)+'</li>');  
            }else{  
                $("#imgNum").append("<li>"+(i+1)+"</li>");  
            }  
        }  
    }  
    //定时器  
    var interval = setInterval(function(){  
        var current = $("#imgNum .on");//获取当前被选中的数字对象  
        var index = parseInt(current.text());//获取选中的图片的数字  
        var numList =  $("#imgNum li"); //获取数字数组对象,是一个dom数组  
        current.removeClass("on");//移除已选择的数字样式  
        if(index<liNum){//设置新数字的选择样式  
            numList[index].className="on";  
            changImg(index,liNum);  
        }else{  
            numList[0].className="on";  
            changImg(0,liNum);  
        }  
    },5000);  
      
    //图片切换操作  
    $("#imgNum li").click(function(){  
        $(".on").removeClass("on");  
        this.className="on";  
        changImg(this.innerText-1,liNum);  
        clearInterval(interval);  
    });  
      
});  
  
//图片切换定位  
function changImg(index,liNum){  
    var maxTop = liNum*270;  
    $("#personImg")[0].style.position = "absolute";  
    if(index*270<=maxTop){  
        $("#personImg")[0].style.top = index*(-270) + "px";  
    }else{  
        $("#personImg")[0].style.top = "0";  
    }     
}  