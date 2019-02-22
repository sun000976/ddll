var foo=require("./file.js")
var http=require("http")
var url=require("url")
var fs=require("fs")
  http.createServer((req,res)=>{
	  if(req.url=="/favicon.ico"){
		  return
	  }
	  res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
      var obj=url.parse(req.url,true).query;
// 	  if(obj.Username=="sunhaojie"&&obj.Password=="123456"){
// 		  res.end("用户名："+obj.Username+"密码"+obj.Password+"登录成功")
// 	  }else{
// 		  res.end("用户名或密码错误")
// 	  }
      console.log(foo.Username)
	  fs.readFile("js.json",(err,data)=>{
		 if(err){
			 console.log(err)
			 return
		 }else{
			 console.log(data)
			 console.log("读取成功")
			 for (let s in data) {
				 // console.log(data)
			 	/* if(obj.Username==s){
			 					 
			 	} */
				 res.end(data);
			 }
		 }
	  })

  }).listen(3000)