 
 ```

	 *{
	   margin:10px;
 	 }
	.clearfix:after { 
		content: ''; 
		display: block; 
		clear: both;
	 }
	   #left{
       float:left;
       width:40%;
       height:10px;
       border:1px solid red;
      }
  	 #right{
  	 	   float:left;
  	 	    width:40%;
   	    	height:10px; 
   		   border:1px solid green;
      }  
      
 ```
 
 ```
 <div class="clearfix">
     	<div id="left"><p>Left Half</p></div>
 	   <div id="right"><p>Right Half</p></div>
 </div>
 ```
  实现方法：两个容器设置属性left：right，同时给父节点加上clearfix类，即可实现
   	<h1><a href='https://lizeze.github.io/demo/jirengu/12/leftRight.html'>点击查看</a></h1>