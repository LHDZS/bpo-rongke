<template>
  <!-- <div id="app" v-if="navigationBarType">
    <navigationBar></navigationBar>
    <navigationBarLeft v-if="navigationBarLeftType" :activeIndex="activeIndex"></navigationBarLeft>
    <div :class="navigationBarLeftType ? 'main' : 'appMain'">
      <router-view/>
    </div>
  </div> -->
  <div id="appNo">
    <navigationBar></navigationBar>
    <router-view/>
    <footerbar></footerbar>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar'
import navigationBarLeft from '@/components/navigationBarLeft'
import footerbar from '@/components/footerbar'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/taskCenter/delivery',
      navWhiteList:['login','home','agreement'],
      navigationBarType: false,
      navigationBarLeftType: true
    }
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0,0);
      // console.log('????????????',to,from)
      if (to.name == null) {
        this.$router.push({path: '/'})
      }
      
      if (this.navWhiteList.indexOf(to.name) >= 0) {
        
        this.navigationBarType = false;
      } else {
        this.navigationBarType = true;
      }
    },
  },
  mounted() {
    this.activeIndex = sessionStorage.getItem("activeIndex") || "0-0";
  },
  methods: {

  },
  components: {
    navigationBar: navigationBar,
    navigationBarLeft: navigationBarLeft,
    footerbar: footerbar
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main {
    float: left;
    width: calc(100% - 182px);
    height: calc(100% - 58px);
    // background:rgba(121, 184, 255, 0.3);
    background-color: #f2f2f2;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .appMain {
    width: 100%;
    height: calc(100% - 58px);
    // background:rgba(121, 184, 255, 0.3);
    // overflow-y: auto;
  }
}
#appNo {
  width: 100%;
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

<style>
.el-table th {
  background-color: rgba(242, 240, 240, 100);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 104px;
  height: 104px;
  line-height: 104px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
