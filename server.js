const express = require('express'); // node 문법 module을 불러오는 방법
const app = express(); 

app.get('/',(req,res)=>{
	res.send('HelloWorld');
	
});

app.listen(7777);	//서버띄우는거 코드

// git에 commit 하지 않을 파일을 제외하는 파일이 있다.
// .gitignore