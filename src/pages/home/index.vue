
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  li {
    list-style-type:none;
  }
  a {
    text-decoration:none;
  }
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(0,0,0,0.36);
    z-index: 99;
    box-shadow: 0 5px 20px rgba(0,0,0,.3);
    .auto {
      margin: 0 4.166%;
      overflow: hidden;
      .logo {
        width: 22.133%;
        line-height: 42px;
        float: left;
        padding: 22px 0px;
        img {
          display: inline-block;
          vertical-align: middle;
          width: 100%;
        }
      }
      .menu {
        width: 70%;
        float: right;
        position: relative;
        .lists {
          margin: 26px 150px 26px 0;
          overflow: hidden;
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
          }
          .list:hover .am {
            background: #2d6dc1;
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
    @media (max-width: 1360px) {
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
  .nav {
    width: 100%;
    // height: 800px;
    margin-bottom: 2%;
    .el-carousel__item img {
      width: 100%;
      height: 100%;
      color: #475669;
      // font-size: 18px;
      // opacity: 0.75;
      // line-height: 800px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  .lbox3 {
    width: 100%;
    height: 750px;
    position: relative;
    margin-bottom: 3%;
    padding: 3% 0;
    box-sizing: border-box;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_45191603856248327202028113728327bjImg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    .w1600 {
      max-width: 1600px;
      min-width: 320px;
      margin: 0px auto;
      .title {
        margin-left: 54%;
        margin-bottom: 3%;
        z-index: 3;
        position: relative;
        text-align: left;
        span {
          display: block;
          font-size: 42px;
          line-height: 72px;
        }
        p {
          font-size: 18px;
        }
      }
      .uls {
        background: #fff;
        box-shadow: 0 0 20px rgba(0,0,0,0.12);
        z-index: 3;
        position: relative;
        padding: 0px;
        .lli {
          width: 25%;
          float: left;
          // background: url(../images/line2.png) no-repeat right center;
          transition: all 0.2s linear;
          -webkit-transition: all 0.2s linear;
          .ldiv {
            padding: 14px 8%;
            height: 372px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            .img {
              width: 79px;
              height: 79px;
              margin: 0 auto 18px;
              position: relative;
              img {
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
              }
              .offImg {
                transition: 400ms;
              }
              .onImg {
                -webkit-transform: scale(0);
                transform: scale(0);
                opacity: 0;
                filter: alpha(opacity=0);
                transition: 500ms;
                
              }
            }
            .name {
              font-size: 28px;
              line-height: 32px;
              height: 32px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .text {
              font-size: 16px;
              line-height: 30px;
              margin-top: 15px;
              color: #666;
              overflow: hidden;
              word-break: normal;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              img {
                margin-right: 10px;
              }
            }
            .offIcon {
              display: inline-block;
            }
            .onIcon {
              display: none;
            }
            .on {
              height: 80px;
              display: none;
            }
          }
        }
        .lli:hover {
          background-color: #2d6dc1;
          color: #fff;
        }
        .lli:hover .on{
          display: flex;
        }
        .lli:hover .text{
          color: #fff;
        }
        .lli:hover .offIcon{
          display: none !important;
        }
        .lli:hover .onIcon{
          display: inline-block !important;
        }
        .lli:hover .offImg{
          opacity: 0 !important;
          filter: alpha(opacity=0) !important;
          -webkit-transform: scale (1.2) !important;
          transform: scale(1.2) !important;
        }
        .lli:hover .onImg {
          -webkit-transform: scale(1) !important;
          transform: scale(1) !important;
          opacity: 1 !important;
          filter: alpha(opacity=100) !important;
        }
      }
      .leftImg {
        width: 50.5%;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 1;
        text-align: center;
        cursor: pointer;
        zoom: 1;
        overflow: hidden;
        span {
          background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_37591603856122715202028113522715leftImg.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          height: 100%;
          opacity: 1;
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
          display: block;
          width: 100%;
        }
      }
      .leftImg:hover span{
        transform: scale(1.2);
      }
    }
    
  }
  .lbox4 {
    width: 100%;
    border-top: 1px solid #eee;
    text-align: center;
    padding: 3% 0;
    .w1600 {
      max-width: 1600px;
      min-width: 320px;
      margin: 0px auto;
      .title {
        font-weight: 100;
        margin-bottom: 3%;
        text-align: center;
        span {
          display: block;
          font-size: 42px;
          line-height: 72px;
        }
        p {
          font-size: 18px;
        }
      }
      .uls {
        width: 100%;
        padding: 0px;
        .lli {
          width: 20%;
          float: left;
          transition: all 0.2s linear;
          -webkit-transition: all 0.2s linear;
          .ldiv {
            padding: 8% 10%;
            .limg {
              text-align: center;
              cursor: pointer;
              zoom: 1;
              img {
                opacity: 1;
                -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
                transition: opacity 0.35s, transform 0.35s;
                display: block;
                width: 100%;
                max-width: 100%;
                border: none;
                border: 0;
                vertical-align: top;
              }
            }
            .lname {
              margin: 22px 0 12px;
              font-weight: 100;
              i {
                display: block;
                margin: 0 auto 16px;
                width: 20px;
                height: 2px;
                background: #2d6dc1;
              }
              span {
                display: block;
                font-size: 24px;
                line-height: 30px;
              }
            }
            .ltext {
              overflow: hidden;
              word-break: normal;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              font-size: 16px;
              line-height: 26px;
              color: #555;
              min-height: 78px;
            }
          }
        }
        .lli:hover img {
          opacity: 1;
          transform: scale3d(1.1,1.1,1);
        }
        .lli:hover {
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0,0,0,0.12);
        }
      }
    }
  }
  .lbox4_5 {
    background: #22272b;
    font-weight: 100;
    .w1600 {
      max-width: 1600px;
      min-width: 320px;
      margin: 0px auto;
      .left {
        width: 21.375%;
        float: left;
        padding: 94px 0 80px;
        text-align: left;
        .text {
          color: #fff;
          margin-bottom: 3%;
          span {
            display: block;
            font-size: 42px;
            line-height: 72px;
          }
          p {
            font-size: 18px;
          }
        }
        a {
          display: block;
          margin-top: 162px;
          width: 206px;
          line-height: 58px;
          font-size: 18px;
          color: #fff;
          border: 1px solid #fff;
          font-weight: normal;
          text-align: center;
          img {
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
          }
        }
      }
      .right {
        width: 73.5%;
        float: right;
        .uls {
          overflow: hidden;
          li {
            width: 9%;
            float: left;
            position: relative;
            transition: all 0.2s linear;
            -webkit-transition: all 0.2s linear;
            a {
              color: #333;
              text-decoration: none;
              // noline: -webkit-tap-highlight-color:rgba(0,0,0,0);
              transition: all 0.2s linear;
              -webkit-transition: all 0.2s linear;
              .ltop {
                width: 100%;
                height: 524px;
                float: left;
                position: relative;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                .lspan {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(0,0,0,0.4);
                }
                .ldiv {
                  padding: 54px 0;
                  z-index: 3;
                  position: relative;
                  img {
                    display: block;
                    width: 50px;
                    margin: 0 auto 20px;
                    max-width: 100%;
                    border: none;
                    border: 0;
                    vertical-align: top;
                  }
                  span {
                    display: block;
                    font-size: 20px;
                    line-height: 20px;
                    width: 24px;
                    margin: 0 auto;
                    color: #fff;
                  }
                  i {
                    position: absolute;
                    width: 1px;
                    height: 38px;
                    left: 50%;
                    bottom: 60px;
                    background: #fff;
                  }
                }
              }
              .lbottom {
                display: none;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                width: 75.5%;
                height: 524px;
                float: left;
                .bck {
                  width: 64%;
                  border-radius: 50%;
                  margin: 0 auto 25px;
                  img {
                    display: block;
                    width: 100%;
                  }
                }
                .icon {
                  display: block;
                  width: 50px;
                  margin: 0 auto 20px;
                  max-width: 100%;
                  border: none;
                  border: 0;
                  vertical-align: top;
                }
                .img {
                  display: block;
                  width: 34px;
                  margin: 36px auto 0;
                  max-width: 100%;
                  border: none;
                  border: 0;
                  vertical-align: top;
                }
                .title {
                  font-size: 24px;
                  line-height: 32px;
                  color: #fff;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
          .no {
            width: 37%;
            a {
              text-decoration: none;
              transition: all 0.2s linear;
              -webkit-transition: all 0.2s linear;
              .ltop {
                width: 24.5%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                .ldiv > img {
                  display: none;
                }
                .lspan {
                  background: rgba(45,109,193,0.94);
                }
              }
              .lbottom {
                display: flex;
              }
            }
          }
        }
      }
    }
    @media (max-width: 1640px) {
      .w1600 {
        padding: 0 15px;
      }
    }
  }
  .lbox5 {
    width: 100%;
    height: 336px;
    text-align: center;
    display: flex;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_3039160385459771520202811957715bj.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    align-items: center;
    box-sizing: border-box;
    padding: 0% 18%;
    @font-face{
			font-family: 'ITV Reem';
			src: url(/assets/itvreem.woff) format('woff');
		}
		.js-odoo{
			flex: 1;
			font-family: 'ITV Reem';
			font-size: 38px;
			text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
      fill: #3D7BFF;
      p {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
      }
		}
  }
  .footerbar {
    width: 100%;
    background: #22272b;
    padding: 80px 0 35px;
    box-sizing: border-box;
    .w1600 {
      max-width: 1600px;
      min-width: 320px;
      margin: 0px auto;
      .service {
        margin-bottom: 3%;
        .flogo {
          text-align: left;
          float: left;
          padding-right: 5%;
          margin-right: 5%;
        }
        @media (max-width: 1640px) {
          .flogo {
            width: 100%;
            margin-bottom: 35px;
            padding-right: 0;
            margin-right: 0;
          }
        }
        .left {
          width: 15%;
          float: left;
          padding-right: 5%;
          margin-right: 5%;
          text-align: left;
          dt {
            margin-bottom: 30px;
            span {
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 25px;
            }
          }
          dd {
            margin-bottom: 15px;
            margin-left: 0px;
            a {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 20px;
            }
          }
        }
        .centre {
          width: 20%;
          float: left;
          padding-right: 5%;
          margin-right: 5%;
          text-align: left;
          dt {
            margin-bottom: 30px;
            span {
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 25px;
            }
          }
          dd {
            margin-bottom: 15px;
            margin-left: 0px;
            span {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 20px;
            }
          }
        }
        .right {
          width: 10%;
          min-width: 138px;
          float: right;
          dl {
            img {
              width: 138px;
            }
            p {
              color: #fff;
            }
          }
        }
      }
      .servicelink {
        color: #fff;
        text-align: left;
        h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .con {
          font-weight: 100;
          a {
            color: #fff;
          }
          i {
            padding: 0 10px;
          }
        }
      }
    }
  }
  @media (max-width: 1640px) {
    .footerbar {
      padding: 80px 5% 35px;
    }
  }
  .copyright {
    background: #22272b;
    border-top: 1px solid #4e5255;
    padding: 16px 0;
    color: #ddd;
    font-weight: normal;
    text-align: center;
    .w1600 {
      max-width: 1600px;
      min-width: 320px;
      margin: 0px auto;
    }
  }
  .clear {
    clear: both;
  }
}
</style>

<template>
  <div class="home">
    <!-- 头部导航 -->
    <div class="header">
      <div class="auto">
        <div class="logo">
          <img src="https://www.zcent.com/uploadfiles/2020/10/20201015151847505.png?57uEMzYucG5n" alt="">
          <!-- <img src="https://www.zcent.com/uploadfiles/2020/10/20201015152518020.png?56e75Yqo56uvX+eUu+advyAxLnBuZw==" alt=""> -->
        </div>
        <div class="menu">
          <ul class="lists">
            <li class="list" v-for="(item,key) in menuArr" :key="key"><a class="am" href="">{{item.name}}</a></li>
          </ul>
        </div>
        <div class="but">
          <i class="el-icon-s-fold" @click="drawer = true" style="font-size: 30px;color: #fff;"></i>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="nav">
      <el-carousel indicator-position="outside" height="570px">
        <el-carousel-item v-for="item in bannerArr" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 第三部分 -->
    <div class="lbox3">
      <div class="w1600">
        <div class="title">
          <span>我们能为你做什么？</span>
          <p>打造数字化共享用工平台，降低企业成本，增加就业收入</p>
        </div>
        <div class="leftImg">
          <span></span>
        </div>
        <ul class="uls">
          <li class="lli" v-for="(item,key) in boxArr3" :key="key">
            <div class="ldiv">
              <div class="img">
                <img class="offImg" :src="item.icon" alt="">
                <img class="onImg" :src="item.iconf" alt="">
              </div>
              <div class="name">{{item.name}}</div>
              <div class="text">
                <div v-for="(list,index) in item.texts" :key="index">
                  <img class="offIcon" :src="offIcon" alt="">
                  <img class="onIcon" :src="onIcon" alt="">
                  <span>{{list}}</span>
                </div>
              </div>
              <div class="on"></div>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
    <!-- 第四部分 -->
    <div class="lbox4">
      <div class="w1600">
        <div class="title">
          <span>为什么选择我们？</span>
          <p>专业领域深耕，打造行业旗舰标杆</p>
        </div>
        <ul class="uls">
          <li class="lli" v-for="(item,key) in boxArr4" :key="key">
            <div class="ldiv">
              <div class="limg">
                <img :src="item.icon">
              </div>
              <div class="lname">
                <i></i>
                <span>{{item.name}}</span>
              </div>
              <div class="ltext">{{item.text}}</div>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
    <!--  -->
    <div class="lbox4_5">
      <div class="w1600">
        <div class="left">
          <div class="text">
            <span>我们服务的行业</span>
            <p>根据行业性质提供垂直解决方案，精准打击行业痛点</p>
          </div>
          <a href="">了解更多<img src="https://www.zcent.com/cn/images/more.png"></a>
        </div>
        <div class="right">
          <ul class="uls">
            <li :class="liKey == key ? 'no' : ''" v-for="(item,key) in boxArr4_5" :key="key" @mouseover="mouseOver(key)">
              <a href="">
                <div class="ltop" :style="'background-image: url(' + item.imgs + ');'">
                  <span class="lspan"></span>
                  <div class="ldiv">
                    <img :src="item.icon" alt="">
                    <span>{{item.name}}</span>
                  </div>
                  <i></i>
                </div>
                <div class="lbottom">
                  <div class="bck">
                    <img :src="item.imgy" alt="">
                  </div>
                  <img class="icon" :src="item.icon" alt="">
                  <div class="title">点击获取解决方案</div>
                  <img class="img" src="https://www.zcent.com/cn/images/arr1.png" alt="">
                </div>
                <div class="clear"></div>
              </a>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <!-- 第五部分 -->
    <div class="lbox5" ref="lbox5">
      <div class="js-odoo">
        <div class="js-odoo0">0</div>
        <p>企业服务经验</p>
      </div>
      <div class="js-odoo">
        <div class="js-odoo1">0</div>
        <p>企业客户资源</p>
      </div>
      <div class="js-odoo">
        <div class="js-odoo2">0</div>
        <p>专家定制方案</p>
      </div>
      <div class="js-odoo">
        <div class="js-odoo3">0</div>
        <p>核心服务城市</p>
      </div>
    </div>
    <!-- 底栏 -->
    <div class="footerbar">
      <div class="w1600">
        <div class="service">
          <div class="flogo"><img src="https://www.zcent.com/cn/images/logo.png"></div>
          <div class="left">
            <dl>
              <dt><span>融科</span></dt>
              <dd><a href="">隐私声明</a></dd>
              <dd><a href="">关于我们</a></dd>
            </dl>
          </div>
          <div class="centre">
            <dl>
              <dt><span>联系我们</span></dt>
              <dd><span>电话：400-86678997</span></dd>
              <dd><span>邮箱：kefu@rongke.com</span></dd>
              <dd><span>地址：北京市朝阳区国创产业园6号楼</span></dd>
              <dd><span>工作时间：9：00 - 18：00</span></dd>
            </dl>
          </div>
          <div class="right">
            <dl>
              <img src="https://www.zcent.com/uploadfiles/2020/09/20200908142127642.jpg?5a6i5pyNMTIzNDU2Ny5qcGc=" alt="">
              <p>薪必果APP</p>
            </dl>
          </div>
          <div class="clear"></div>
        </div>
        <div class="servicelink">
          <h3>友情链接</h3>
          <div class="con">
            <a href="">公司宝</a>
            <i>|</i>
            <a href="">汉唐咨询</a>
            <i>|</i>
            <a href="">北大科技园</a>
            <i>|</i>
            <a href="">京东云</a>
            <i>|</i>
          </div>
        </div>
      </div>
    </div>
    <!-- ICP -->
    <div class="copyright">
      <div class="w1600">版权所有©汉唐融科（北京）有限公司</div>
    </div>
    <!-- 右侧导航栏 -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      direction="rtl"
      :before-close="handleClose">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import odoo from '../../lib/odoo.js'

export default {
  data() {
    return {
      liKey: 0,
      offIcon: require("../../assets/icon/dui.png"),
      onIcon: require("../../assets/icon/duif.png"),
      odooType: true,
      drawer: false,
      bannerArr:[
        require("../../assets/img/banner.png"),
        require("../../assets/img/banner2.png"),
        require("../../assets/img/banner3.png")
      ],
      menuArr:[
        {
          name: '首页'
        },{
          name: '产品服务'
        },{
          name: '解决方案'
        },{
          name: '合伙人招募'
        },{
          name: '融科头条'
        },{
          name: '关于我们'
        }
      ],
      boxArr4_5:[
        {
          name: '电商行业',
          icon: require("../../assets/img/i1.png"),
          imgs: require("../../assets/img/s1.png"),
          imgy: require("../../assets/img/y1.png")
        },{
          name: '物流配送',
          icon: require("../../assets/img/i2.png"),
          imgs: require("../../assets/img/s2.png"),
          imgy: require("../../assets/img/y2.png")
        },{
          name: '餐饮行业',
          icon: require("../../assets/img/i3.png"),
          imgs: require("../../assets/img/s3.png"),
          imgy: require("../../assets/img/y3.png")
        },{
          name: '家政保姆',
          icon: require("../../assets/img/i4.png"),
          imgs: require("../../assets/img/s4.png"),
          imgy: require("../../assets/img/y4.png")
        },{
          name: '文娱行业',
          icon: require("../../assets/img/i5.png"),
          imgs: require("../../assets/img/s5.png"),
          imgy: require("../../assets/img/y5.png")
        },{
          name: '网红直播',
          icon: require("../../assets/img/i6.png"),
          imgs: require("../../assets/img/s6.png"),
          imgy: require("../../assets/img/y6.png")
        },{
          name: '在线医疗',
          icon: require("../../assets/img/i7.png"),
          imgs: require("../../assets/img/s7.png"),
          imgy: require("../../assets/img/y7.png")
        },{
          name: '物业管理',
          icon: require("../../assets/img/i8.png"),
          imgs: require("../../assets/img/s8.png"),
          imgy: require("../../assets/img/y8.png")
        }
      ],
      boxArr3:[
        {
          iconf: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_13591603942016511202029112656511lgf.png',
          icon: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_38791603852347837202028103227837lg.png',
          name: '零工招聘',
          texts: [
            '协助自由职业者灵活就业','带来全新的机遇挑战机会','协助企业解决用工难问题','满足快速发展的用工需求'
          ]
        },{
          iconf: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_15791603942072268202029112752268gxf.png',
          icon: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_48991603853150804202028104550804gx.png',
          name: '共享用工',
          texts: [
            '解决传统用工高风险问题','协助企业大幅度降本增效','雇佣双方高效确认工作量','提高自由职业者税后收入'
          ]
        },{
          iconf: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_41591603942042209202029112722209rkf.png',
          icon: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_8791603853188114202028104628114rk.png',
          name: '融科学堂',
          texts: [
            '提升自由者专业技能知识','创造不一样的未来和发展','自我赋能增强职场竞争力','实现岗位薪酬待遇的提升'
          ]
        },{
          iconf: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_40291603942056178202029112736178zzf.png',
          icon: 'https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_20291603853202752202028104642752zz.png',
          name: '增值服务',
          texts: [
            '合法合规合理的税收筹划','有效节省企业经营的成本','严格按政策设计税筹方案','确保税务链条的六流合一'
          ]
        }
      ],
      boxArr4:[
        {
          icon: require("../../assets/icon/ic1.png"),
          name: '合法合规',
          text: '拥有委托代征 人力资源等国家颁发资质'
        },{
          icon: require("../../assets/icon/ic2.png"),
          name: '研发能力',
          text: '自研共享平台 为灵活就业提供一站式服务'
        },{
          icon: require("../../assets/icon/ic3.png"),
          name: '专业能力',
          text: '顶级人力专家、 税务师、律师组成专家团队'
        },{
          icon: require("../../assets/icon/ic4.png"),
          name: '交付能力',
          text: '专业系统支撑 后续服务确保客户满意'
        },{
          icon: require("../../assets/icon/ic5.png"),
          name: '强大背书',
          text: '用友·创业黑马 两大公司背书资金风险低'
        }
      ]
    }
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    mouseOver(key) {
      this.liKey = key;
    },
    handleClose(done) {
      done();
    },
    handleScrollx() {
      // if (!this.$refs.lbox5) {
      //   return
      // }
      // let x = window.pageYOffset - this.$refs.lbox5.getBoundingClientRect().top;
      // console.log(window.pageYOffset)

      if (window.pageYOffset > 1500 && this.odooType) {
        this.odooType = false;
        setTimeout(()=>{
          odoo({ el:'.js-odoo0',value:'   15年  ' });
          odoo({ el:'.js-odoo1',value:'200万+' });
          odoo({ el:'.js-odoo2',value:'500位+' });
          odoo({ el:'.js-odoo3',value:'300个+' });
        },1000)
      }
      // if (window.pageYOffset < 520 && !this.odooType) {
      //   this.odooType = true;
      // }
      // console.log('滚动高度', window.pageYOffset)
      // console.log('距离顶部高度', this.$refs.lbox5.getBoundingClientRect().top)
    }
  },
  components: {

  }
}
</script>
