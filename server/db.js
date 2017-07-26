// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
//mongoose.connect('mongodb://localhost:27017/user');

// 为这次连接绑定事件
const db = mongoose.createConnection('mongodb://localhost:27017/user');
db.on('error',(err) => {
    console.log(err+",Mongo connection error")
});
db.on('open',(res) => {
    console.log(res+",Mongo connection successed")
});
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String
},{
	collection:"user"
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema)
}
var mongooseModel = db.model({}, loginSchema,"user");

var a = new mongooseModel({
	account:"haha",
	password:"123123"
});

a.save(function(){
	mongooseModel.find(function(error,result){
		if(error) {
            console.log(error);
        } else {
            console.log(result); // result 为空
        }
        db.close();
	})
})

module.exports = mongooseModel;

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema)
}

module.exports = Models;