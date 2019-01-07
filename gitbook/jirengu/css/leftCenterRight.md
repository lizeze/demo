       .clearfix:after {
            content: '';
            display: block;
            clear: both;
        }

        .container {
            width: 410px;
        }

        .node {
            width: 100px;
            height: 100px;
            float: left;
        }

        .leftBox {
            width: 220px;
            float: left;
        }

        .left {
            border: 1px solid green;
        }

        .center {
            border: 1px solid gray;
        }

        .right {
            border: 1px solid blue
        }
        
       
    
   
 ```  
  <div class="clearfix">
      <div class=" container clearfix">
        <div class="clearfix leftBox">
                <div class="left node"  >left</div>
                <div class="center node">center</div>
            </div>
            <div class="right node">
                right
            </div>
        </div>
     </div>
 ```    

 实现方法： 左中右布局可以拆分为左右布局，左中可放在一个容器中按照<a href="leftRight.html">左右布局</a>实现和同时和右也按照<a href="leftRight.html">左右布局</a>方法实现
 <h1> <a href="https://lizeze.github.io/demo/jirengu/12/leftCenterRight.html">点击查看</a></h1>