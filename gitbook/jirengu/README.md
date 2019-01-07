# Gitbook
  gitbook是基于node.js的，因此必须先安装 nodejs 的 runtime 才可以使用。

  请先安装完nodejs之后，再继续后面的安装。
  
  <h1>Windows下安装node.js</h1>
  <a href='https://nodejs.org/en/download/ '>https://nodejs.org/en/download/ </a>下载 Windows Installer (.msi) 的 64位版本，一般用LTS版本即可
  
  <h1>Linux下安装node.js</h1>
  ```
  yum install nodejs -y
  ```
  
 
 <h1>安装Gitbook</h1>
 通过下列命令安装 gitbook 和 gitbook-cli
 
 ```
 npm install -g gitbook-cli
 ```
 安装完成之后，执行 gitbook --version 命令可以看到当前安装的版本
 
 	$ gitbook --version
   	CLI version: 2.3.0  
  	GitBook version: 3.2.2


 <h1>初始化gitbook</h1>
 进入任何一本 gitbook 的书籍，执行 gitbook serve 命令，第一次执行时会初始化 GitBook：	
 
 		$ cd leaning-gitbook/
		 sky@skylinux ~/work/code/leaning/leaning-gitboo
		 $ gitbook serve
		 Installing GitBook 3.2.2
		 ........
		 Starting server ... 
		 Serving book on http://localhost:4000