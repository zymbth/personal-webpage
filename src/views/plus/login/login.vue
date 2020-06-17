<template>
    <div class='login-page'>
        <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-position="left"
        	label-width="0px" class="demo-ruleForm login-container">
            <h3 class="title">系统登录</h3>
            <!--<el-form-item prop="appId ">
                <el-input type="text" v-model="ruleForm.appId "
                	auto-complete="off" placeholder="应用ID" id="appId"></el-input>
            </el-form-item>
            <el-form-item prop="appKey ">
                <el-input type="text" v-model="ruleForm.appKey "
                	auto-complete="off" placeholder="应用秘钥" id="appKey"></el-input>
            </el-form-item>-->
            <el-form-item prop="userName ">
            	<!--@blur='checkUser("userName")'-->
                <el-input type="text" v-model="ruleForm.userName "
                	auto-complete="off" placeholder="用户名" id="userName"></el-input>
            </el-form-item>
            <el-form-item prop="userPwd ">
                <el-input type="password" v-model="ruleForm.userPwd "
                	auto-complete="off" placeholder="密码" id="userPwd"></el-input>
            </el-form-item>
            <!--<el-form-item v-if='googleShow' prop="google_code">
                <el-input type="text" v-model="ruleForm.google_code" auto-complete="off"
                	placeholder="谷歌验证码"></el-input>
            </el-form-item>-->
            <el-form-item>
	            <el-checkbox v-model="ruleForm.checked" class="remember">记住密码</el-checkbox>
	            <a class='findPassword' @click="forgotPass">找回密码</a>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleData"
                	:loading="logining">登录</el-button>
                <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
            </el-form-item>
            <a class='register' @click="register">没有账号？去注册</a>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                logining: false,
                googleShow: false,
                ruleForm: {
                    userName: "",
                    userPwd: "",
                    checked: false,
                },
                rules2: {},
                checked: false,
                input_check: false,
            }
        },
        methods: {
            forgotPass(){
                this.$router.push("/forgotPass");
            },
            handleData() {
            	var content1 = (this.ruleForm.userName)?this.ruleForm.userName:"";
            	var content2 = (this.ruleForm.userPwd)?this.ruleForm.userPwd:"";
            	if(content1 && content1.length >4 && content1.length <30 &&
            		content2 && content2.length >4 && content2.length <30) {
					var obj = { // 发送数据对象
						"userName": this.ruleForm.userName,
						"password": this.ruleForm.userPwd
					};
					if(this.ruleForm.checked) { // 记住密码时，存储用户名及密码
						localStorage.setItem("usr", obj.userName);
						localStorage.setItem("pwd", obj.password);
					}
					this.fetchGet("/UserAction/login.go", obj).then(res => {
						var result = res.data;
						if(result.errorcode == 0) {
							localStorage.setItem("se", result.datastr.token);
							alert("登录成功");
							this.$router.push("/");
						}else{
							alert(result.message);
						}
					});
            	}else {
            		alert("输入有误");
            	}
            },
            register() {
                this.$router.push("/register");
            },
//          checkUser(target_ele) {
//          	var content = (this.ruleForm[target_ele])?this.ruleForm[target_ele]:"";
//          	if(content.length < 5 || content.length > 30) alert("输入长度在5-30位之间");
//          },
        },
        created() {
        	// 被存储的用户名、密码
        	if(localStorage.getItem("usr")) this.ruleForm.userName = localStorage.getItem("usr");
        	if(localStorage.getItem("pwd")) this.ruleForm.userPwd = localStorage.getItem("pwd");
        }
    };
</script>

<style lang="scss" scoped>
    .login-page {
    	position: relative;
        /*position: absolute;*/
        /*top: 0;*/
        width: 100%;
        height: 100vh;
        min-height: 512px;
        background: #26507b;
        background-size: 100%;
    }
    .login-container {
        /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        padding: 30px;
        background: #fff;
        border: 1px solid #eaeaea;
        /*水平垂直居中*/
        position: absolute;
        top:50%;
        left:50%;
        height: 450px;
        width: 350px;
        margin: -256px 0 0 -206px;
        /*(450+30*2+1*2)/2  (350+30*2+1*2)/2*/

	    .title {
	        margin: 0px auto 40px auto;
	        text-align: center;
	        color: #505458;
	    }
	    .remember {
	        float: left;
	    }
	    .findPassword{
	        float: right;
	        color: #26507b;
	        cursor: pointer;
	        margin-right: 10px;
	    }
	    .findPassword:hover{
	        color: #409EFF;
	        /*text-decoration: underline*/
	    }
	    .register {
	        color: #26507b;
	        cursor: pointer;
	    }
    }
</style>
