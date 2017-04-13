//task2 => BABY STEPS
/**
题目：通过命令行输入数字，计算输出所有输入数字的和
hint: 通过nodejs全局的process对象可以取得命令行相关的参数
process.argv是一个数组，如图：
['node','e:/demos/learnyounode/demo2.js',1,2,3]
第一个参数默认是node，第二个参数是js文件的路径，从第三个参数开始才是命令行里的输入参数
**/
var argv = process.argv;
var sum=0;
for(var i=2;i<argv.length;i++){
	sum+=Number(argv[i])
}
console.log(sum)