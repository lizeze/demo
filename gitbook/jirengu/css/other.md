<h3>使用伪类可以在标签左右添加内容</h3>
          
          div::after {

            content: '右护卫'

          }

        div::before {

            content: '左护卫'

        }
        
 ---
 
<h3>增加阴影</h3>

        .blur {
            color: transparent;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
           }

---
<h3>多边框</h3>
 	  
 	   .borders {
  	   position: relative;
 	   border: 5px solid #f00;
      }
      .borders:before {
	  	content: " ";
 	 	position: absolute;
 	 	z-index: -1;
 	 	top: 5px;
 	 	left: 5px;
 	 	right: 5px;
 	 	bottom: 5px;
 	 	border: 5px solid #ffea00;
		}

<h1>
  <a href="https://lizeze.github.io/demo/jirengu/12/other.html">点击查看</a>

<a href="https://css-tricks.com/snippets/css">更多</a></h1>		
