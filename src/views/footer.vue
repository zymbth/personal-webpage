<template>
  <footer class="footer">
    <el-row style="height:100%;">
      <!--copyright-->
      <el-col :span="12" style="height: 100%;">
        <p class="copyright">
          <span>© Copyright 2021 Yuemin Zhao. All rights reserved.</span>
          <br/>
          <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2021132566号-1</a>
        </p>
      </el-col>
      <!--social-link-->
      <el-col :span="12" class="social-info">
        <el-row>
          <el-col :span="8">
            <el-popover placement="top" width="200" trigger="hover" style="cursor: pointer;">
              <template #default>
                <img src="../assets/img/wechat.png" class="popover-content" style="width:200px;height:auto;"/>
              </template>
              <template #reference>
                <img src="../assets/img/wechat.png"/>
              </template>
            </el-popover>
          </el-col>
          <el-col :span="8">
            <a href="https://github.com/zymbth" target="_blank">
              <img src="../assets/img/github.png"/>
            </a>
          </el-col>
          <el-col :span="8">
            <a href="https://twitter.com/z_ymin">
              <img src="../assets/img/twitter.png"/>
            </a>
          </el-col>
          <!--<a><img src="../assets/img/ins.png"/></a>-->
        </el-row>
      </el-col>
    </el-row>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
	color: #f8f8ff;
	background: #303030;
	height: 100px;
	padding: 0 30px;
	
	.copyright {
		text-align: left;
		height: 100%;
		width: 100%;
		margin: 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;

		a {color:#61a8e1;text-decoration:none;}
	}
	.social-info {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			height: 32px;
			width: 32px;
			display: inline-block;
			margin: 0 10px;
		}
	}
}
</style>