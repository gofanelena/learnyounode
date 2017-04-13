//task3 =>MY FIRST I/O!
/**
题目：使用nodejs的fs模块同步的读一个文件，输出其中的换行数,这里文件不用自己创建，
会以process.argv[2]的参数给出
hint：使用API：fs.readFileSync（'/path/to/file'），返回值是以Buffer对象表示的文件的内容，
而通过var str = buf.toString()方法可以将其转化为字符串对象
API:fs.readFileSync(filename, [encoding])
**/
var fs=require('fs');
var data=fs.readFileSync(process.argv[2]);
var str = data.toString();
var newlines = str.split('\n').length-1;
console.log(newlines);