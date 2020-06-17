<template>
    <div class='register-page'>
        <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-position="left"
        	label-width="0px" class="demo-ruleForm register-container">
            <h3 class="title">系统注册</h3>
            <el-form-item prop="appId ">
                <el-input @blur='checkUser' type="text" v-model="ruleForm.appId "
                	auto-complete="off" placeholder="应用ID"></el-input>
            </el-form-item>
            <el-form-item prop="appKey ">
                <el-input @blur='checkUser' type="text" v-model="ruleForm.appKey "
                	auto-complete="off" placeholder="应用秘钥"></el-input>
            </el-form-item>
            <el-form-item prop="userName ">
                <el-input @blur='checkUser' type="text" v-model="ruleForm.userName "
                	auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="userPwd ">
                <el-input type="password" v-model="ruleForm.userPwd " auto-complete="off"
                	placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleData"
                	:loading="logining">注册</el-button>
            </el-form-item>
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
                    appId: "",
                    appKey:""
                },
                rules2: {
                    userName: [
                        { required: true, message: "请输入账号", trigger: "blur" },
                        //{ validator: validaePass }
                        {
                            min: 6,
                            max: 30,
                            message: "输入长度在6-30位之间",
                            trigger: "blur"
                        }
                    ],
                    userPwd: [
                        { required: true, message: "请输入密码", trigger: "blur" },
                        {
                            min: 6,
                            max: 30,
                            message: "输入长度在6-30位之间",
                            trigger: "blur"
                        }
                        //{ validator: validaePass2 }
                    ],
                },
                checked: false
            };
        },
        methods: {
            handleData() {
                //提交数据
                this.$router.push("/");
                this.$refs.ruleForm.validate(valid => {
                    if (!valid) {
                    return;
                }
                let params = {
                    notice: "登陆成功！"
                };
                Object.assign(params, this.ruleForm);
                console.log(params)
//              this.$api("/security/v1.0/token", params).then(result => {
//                  console.log(result)
//                  if (result.code == 0) {
//                  if (this.ruleForm.checked) {
//                      delete this.ruleForm.google_code
//                      this.$cookie.set(
//                              "ac",
//                              JSON.stringify(this.ruleForm),
//                              "30"
//                      );
//                  } else {
//                      this.$cookie.remove("ac");
//                  }
//                  this.$refs.ruleForm.resetFields();
//                  this.ruleForm = {};
//                  this.$router.push("/");
//              }
//          });
            });
           },
            checkUser() {
            	console.log(11111111)
            }
        },
        created() {
//          if (this.$cookie.get("ac")) {
//              this.ruleForm = JSON.parse(this.$cookie.get("ac"));
//              // this.checkUser()
//          }
        }
    };
</script>

<style lang="scss" scoped>
    .register-page {
    	position: relative;
        /*position: absolute;*/
        /*top: 0;*/
        width: 100%;
        height: 100vh;
        min-height: 512px;
        background: #26507b;
        background-size: 100%;
    }
    .register-container {
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
