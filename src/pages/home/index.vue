
<style lang="less" scoped>
.home {
  width: 100%;
  // height: 100%;
  li {
    list-style-type: none;
  }
  a {
    cursor: pointer;
    text-decoration: none;
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

    .el-carousel__item:nth-child(2n + 1) {
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
    background: url("https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_45191603856248327202028113728327bjImg.png");
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
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
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
        .lli:hover .on {
          display: flex;
        }
        .lli:hover .text {
          color: #fff;
        }
        .lli:hover .offIcon {
          display: none !important;
        }
        .lli:hover .onIcon {
          display: inline-block !important;
        }
        .lli:hover .offImg {
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
          background: url("../../assets/img/leftImg.png");
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
      .leftImg:hover span {
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
          transform: scale3d(1.1, 1.1, 1);
        }
        .lli:hover {
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
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
                  background: rgba(0, 0, 0, 0.4);
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
                  background: rgba(45, 109, 193, 0.94);
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
    background: url("https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_3039160385459771520202811957715bj.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    align-items: center;
    box-sizing: border-box;
    padding: 0% 18%;
    @font-face {
      font-family: "ITV Reem";
      src: url(/assets/itvreem.woff) format("woff");
    }
    .js-odoo {
      flex: 1;
      font-family: "ITV Reem";
      font-size: 38px;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      color: #3d7bff;
      p {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
      }
    }
  }
  .clear {
    clear: both;
  }
}
</style>

<template>
  <div class="home">
    
    <!-- 轮播图 -->
    <div class="nav">
      <el-carousel indicator-position="outside" height="570px">
        <el-carousel-item v-for="item in bannerArr" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 第三部分 -->
    <div class="lbox3">
      <div class="w1600">
        <div class="title">
          <span>我们能为您做什么？</span>
          <p>通过数字化共享用工平台，降低企业成本、增加就业收入</p>
        </div>
        <div class="leftImg">
          <span></span>
        </div>
        <ul class="uls">
          <li class="lli" v-for="(item, key) in boxArr3" :key="key">
            <div class="ldiv">
              <div class="img">
                <img class="offImg" :src="item.icon" alt="" />
                <img class="onImg" :src="item.iconf" alt="" />
              </div>
              <div class="name">{{ item.name }}</div>
              <div class="text">
                <div v-for="(list, index) in item.texts" :key="index">
                  <img class="offIcon" :src="offIcon" alt="" />
                  <img class="onIcon" :src="onIcon" alt="" />
                  <span>{{ list }}</span>
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
          <li class="lli" v-for="(item, key) in boxArr4" :key="key">
            <div class="ldiv">
              <div class="limg">
                <img :src="item.icon" />
              </div>
              <div class="lname">
                <i></i>
                <span>{{ item.name }}</span>
              </div>
              <div class="ltext">{{ item.text }}</div>
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
          <a @click="jump()"
            >了解更多<img src="https://www.zcent.com/cn/images/more.png"
          /></a>
        </div>
        <div class="right">
          <ul class="uls">
            <li
              :class="liKey == key ? 'no' : ''"
              v-for="(item, key) in boxArr4_5"
              :key="key"
              @mouseover="mouseOver(key)"
            >
              <a @click="jump()">
                <div
                  class="ltop"
                  :style="'background-image: url(' + item.imgs + ');'"
                >
                  <span class="lspan"></span>
                  <div class="ldiv">
                    <img :src="item.icon" alt="" />
                    <span>{{ item.name }}</span>
                  </div>
                  <i></i>
                </div>
                <div class="lbottom">
                  <div class="bck">
                    <img :src="item.imgy" alt="" />
                  </div>
                  <img class="icon" :src="item.icon" alt="" />
                  <div class="title">点击获取解决方案</div>
                  <img
                    class="img"
                    src="https://www.zcent.com/cn/images/arr1.png"
                    alt=""
                  />
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
        <div
          ref="numberGrow"
          data-time="1"
          :data-value="value"
        ></div>
        <p>企业服务经验</p>
      </div>
      <div class="js-odoo">
        <div
          ref="numberGrow1"
          data-time="2"
          :data-value="value1"
        ></div>
        <p>企业客户资源</p>
      </div>
      <div class="js-odoo">
        <div
          ref="numberGrow2"
          data-time="3"
          :data-value="value2"
        ></div>
        <p>专家定制方案</p>
      </div>
      <div class="js-odoo">
        <div
          ref="numberGrow3"
          data-time="4"
          :data-value="value3"
        ></div>
        <p>核心服务城市</p>
      </div>
    </div>
    
  </div>
</template>

<script>
// import odoo from '../../lib/odoo.js'
import {post} from '../../api/index'

export default {
  data() {
    return {
      value: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      liKey: 0,
      leftImg: require("../../assets/img/leftImg.png"),
      offIcon: require("../../assets/icon/dui.png"),
      onIcon: require("../../assets/icon/duif.png"),
      odooType: true,
      bannerArr: [
        require("../../assets/img/banner.png"),
        require("../../assets/img/banner2.png"),
        require("../../assets/img/banner3.png"),
      ], 
      boxArr4_5: [
        {
          name: "电商行业",
          icon: require("../../assets/img/i1.png"),
          imgs: require("../../assets/img/s1.png"),
          imgy: require("../../assets/img/y1.png"),
        },
        {
          name: "物流配送",
          icon: require("../../assets/img/i2.png"),
          imgs: require("../../assets/img/s2.png"),
          imgy: require("../../assets/img/y2.png"),
        },
        {
          name: "餐饮行业",
          icon: require("../../assets/img/i3.png"),
          imgs: require("../../assets/img/s3.png"),
          imgy: require("../../assets/img/y3.png"),
        },
        {
          name: "家政保姆",
          icon: require("../../assets/img/i4.png"),
          imgs: require("../../assets/img/s4.png"),
          imgy: require("../../assets/img/y4.png"),
        },
        {
          name: "文娱行业",
          icon: require("../../assets/img/i5.png"),
          imgs: require("../../assets/img/s5.png"),
          imgy: require("../../assets/img/y5.png"),
        },
        {
          name: "网红直播",
          icon: require("../../assets/img/i6.png"),
          imgs: require("../../assets/img/s6.png"),
          imgy: require("../../assets/img/y6.png"),
        },
        {
          name: "在线医疗",
          icon: require("../../assets/img/i7.png"),
          imgs: require("../../assets/img/s7.png"),
          imgy: require("../../assets/img/y7.png"),
        },
        {
          name: "物业管理",
          icon: require("../../assets/img/i8.png"),
          imgs: require("../../assets/img/s8.png"),
          imgy: require("../../assets/img/y8.png"),
        },
      ],
      boxArr3: [
        {
          iconf:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_13591603942016511202029112656511lgf.png",
          icon:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_38791603852347837202028103227837lg.png",
          name: "零工招聘",
          texts: [
            "协助自由职业者灵活就业",
            "带来全新的机遇挑战机会",
            "协助企业解决用工难问题",
            "满足快速发展的用工需求",
          ],
        },
        {
          iconf:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_15791603942072268202029112752268gxf.png",
          icon:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_48991603853150804202028104550804gx.png",
          name: "共享用工",
          texts: [
            "解决传统用工高风险问题",
            "协助企业大幅度降本增效",
            "雇佣双方高效确认工作量",
            "提高自由职业者税后收入",
          ],
        },
        {
          iconf:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_41591603942042209202029112722209rkf.png",
          icon:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_8791603853188114202028104628114rk.png",
          name: "融科学堂",
          texts: [
            "提升自由职业者专业技能",
            "创造不一样的未来和发展",
            "自我赋能增强职场竞争力",
            "实现岗位薪酬待遇的提升",
          ],
        },
        {
          iconf:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_40291603942056178202029112736178zzf.png",
          icon:
            "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_20291603853202752202028104642752zz.png",
          name: "增值服务",
          texts: [
            "合法合规合理的税务筹划",
            "有效节约企业经营的成本",
            "严格按政策设计税筹方案",
            "确保税务链条的四流合一",
          ],
        },
      ],
      boxArr4: [
        {
          icon: require("../../assets/icon/ic1.png"),
          name: "合法合规",
          text: "拥有政府颁发的委托代征 人力资源等资质",
        },
        {
          icon: require("../../assets/icon/ic2.png"),
          name: "研发能力",
          text: "自研共享用工一站式服务平台 满足灵活就业需求",
        },
        {
          icon: require("../../assets/icon/ic3.png"),
          name: "专业能力",
          text: "人力资源师、税务师、律师等 组成专家管理团队",
        },
        {
          icon: require("../../assets/icon/ic4.png"),
          name: "交付能力",
          text: "专业系统支撑后续服务 确保客户满意",
        },
        {
          icon: require("../../assets/icon/ic5.png"),
          name: "强大背书",
          text: "用友、创业黑马、58资本、蔚来资本 上市公司背书",
        },
      ],
    };
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  methods: {
    // 数字递增
    numberGrow(ele, value, text) {
      let step = (value * 10) / (2 * 1000);
      let current = 0;
      let start = 0;
      let t = setInterval(function () {
        start += step;
        if (start > value) {
          clearInterval(t);
          start = value;
          t = null;
        }
        if (current === start) {
          return;
        }
        current = start.toFixed(0);
        ele.innerHTML =
          current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,") + text;
      }, 10);
    },
    jump(url) {
      if (!url) {
        return;
      }
      if (url == "/agreement/agreement") {
        let routeData = this.$router.resolve({
          path: url,
          query: {},
        });
        window.open(routeData.href, "_blank");
      } else {
        // this.$router.push({path: url})
        window.open(url);
      }
    },
    mouseOver(key) {
      this.liKey = key;
    },
    handleScrollx() {
      // console.log(!this.$refs.numberGrow)
      if (!this.$refs.numberGrow || !this.$refs.numberGrow1 || !this.$refs.numberGrow2 || !this.$refs.numberGrow3) {
        return
      }
      if (window.pageYOffset > 1600 && this.odooType) {
        this.odooType = false;
        setTimeout(() => {
          this.numberGrow(this.$refs.numberGrow, 15, "年");
          this.numberGrow(this.$refs.numberGrow1, 20, "万+");
          this.numberGrow(this.$refs.numberGrow2, 500, "位+");
          this.numberGrow(this.$refs.numberGrow3, 300, "个+");
        },500)
      }
      if (window.pageYOffset < 520 && !this.odooType) {
        this.odooType = true;
      }
    },
  },
  components: {},
};
</script>
