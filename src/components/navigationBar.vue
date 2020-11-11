<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.navigationBar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  .header {
    width: 100%;
    background: rgba(0, 0, 0, 0.36);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    li {
      list-style-type: none;
    }
    a {
      cursor: pointer;
      text-decoration: none;
    }
    .auto {
      margin: 0 4.166%;
      .logo {
        width: 22.133%;
        line-height: 42px;
        float: left;
        padding: 22px 0px;
        img {
          display: inline-block;
          vertical-align: middle;
          // width: 100%;
        }
      }
      .menu {
        width: 70%;
        float: right;
        position: relative;
        .lists {
          margin: 26px 15px 26px 0;
          .list {
            float: left;
            position: relative;
            width: 12.285%;
            text-align: center;
            text-decoration: none;
            transition: all 0.2s linear;
            -webkit-transition: all 0.2s linear;
            .am {
              display: block;
              font-size: 16px;
              line-height: 32px;
              color: #fff;
              border-radius: 25px;
              text-decoration: none;
              transition: all 0.2s linear;
              -webkit-transition: all 0.2s linear;
            }
            .subNav {
              position: absolute;
              left: 50%;
              top: 100%;
              z-index: 999;
              width: 140px;
              margin-left: -70px;
              display: none;
              padding-top: 25px;
              .box {
                position: relative;
                padding: 10px 0;
                background: #fff;
                border-top: 4px solid #2d6dc1;
                b {
                  position: absolute;
                  top: -14px;
                  left: 50%;
                  margin-left: -7px;
                  border-style: solid;
                  border-width: 0 7.5px 10px 7.5px;
                  border-color: transparent transparent #2d6dc1 transparent;
                }
                span {
                  display: block;
                  line-height: 32px;
                  font-size: 14px;
                  color: #333;
                  text-align: center;
                }
                span:hover {
                  cursor: pointer;
                  color: #59c47f;
                }
              }
            }
          }
          .list:hover .am {
            background: #2d6dc1;
            color: #fff;
          }
          .list:hover .subNav {
            display: block;
          }
        }
      }
      .but {
        display: none;
        float: right;
        height: 86px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    @media (max-width: 1080px) {
      .auto {
        margin: 0 15px;
        .menu {
          display: none;
        }
        .but {
          display: flex;
        }
      }
    }
  }
  .clear {
    clear: both;
  }
}
.navDetails {
  position: static !important;
  .header {
    background: #fff !important;
    .auto .menu .lists .list .am {
      color: #333333;
    }
  }
}
</style>

<template>
  <!-- 头部导航 -->
  <div :class="type ? 'navigationBar navDetails' : 'navigationBar'">
    <div class="header">
      <div class="auto">
        <div class="logo">
          <img :src="type ? logo1 : logo" alt="" />
          <!-- <img src="https://www.zcent.com/uploadfiles/2020/10/20201015152518020.png?56e75Yqo56uvX+eUu+advyAxLnBuZw==" alt=""> -->
        </div>
        <div class="menu">
          <ul class="lists">
            <li class="list" v-for="(item, key) in menuArr" :key="key">
              <a class="am" @click="jump(item)">{{ item.name }}</a>
              <div class="subNav" v-if="item.menuNav">
                <div class="box">
                  <b></b>
                  <span v-for="(list,index) in item.menuNav" :key="index" @click="jump(list)">{{list.name}}</span>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="but">
          <i
            class="el-icon-s-fold"
            @click="drawer = true"
            style="font-size: 30px; color: #fff"
          ></i>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <!-- 右侧导航栏 -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      direction="rtl"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
  
</template>

<script>

export default {
  name: 'navigationBar',
  data () {
    return {
      type: false,
      drawer: false,
      logo1: require("../assets/icon/rock1.png"),
      logo: require("../assets/icon/ROCK.png"),
      menuArr: [
        {
          name: "首页",
          path: 'home'
        },
        {
          name: "产品服务",
        },
        {
          name: "解决方案",
        },
        {
          name: "合伙人招募",
          path: 'partnerRecruit'
        },
        {
          name: "政策资讯",
          menuNav: [
            {
              name: '政策解读',
              path: 'policyMessage'
            },
            {
              name: '行业动态',
              path: 'policyMessage'
            }
          ]
        },
        {
          name: "关于我们",
          path: 'aboutus'
        },
      ],
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to, from, '路由')
      if (to.meta.type == 'det') {
        this.type = true
      }else {
        this.type = false
      }
    }
  },
  computed: {
  
  },
  props:{

  },
  methods: {
    jump(row) {
      if (this.$route.name == row.path) {
        return
      }
      let url = row.path;
      if (url) {
        this.$router.push({name: url,query:{name: row.name}})
      }
    },
    handleClose(done) {
      done();
    }
  },
  mounted() {

  },
  created() {
    if (this.$route.meta.type == 'det') {
      this.type = true
    }else {
      this.type = false
    }
  }
}
</script>
