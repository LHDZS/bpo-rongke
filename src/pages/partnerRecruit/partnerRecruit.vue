<style lang="less" scoped>
.partnerRecruit {
    width: 100%;
    .banner {
        width: 100%;
        display: flex;
        img {
            width: 100%;
        }
    }
    .box1 {
        width: 100%;
        padding: 70px 0px;
        .w1300 {
            max-width: 1300px;
            min-width: 320px;
            margin: 0px auto;
            .title {
                width: 100%;
                p {
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                }
            }
            .current {
                width: 100%;
                display: flex;
                align-items: center;
                margin-top: 25px;
                .left {
                    width: calc(100% - 700px);
                    margin-left: 130px;
                    .field {
                        width: 499px;
                        height: 104px;
                        padding-top: 37px;
                        padding-left: 37px;
                        background: url('../../assets/img/bimg.png') no-repeat;
                        background-size: 100% 100%;
                        font-size: 20px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #333333;
                        box-sizing: border-box;
                        text-align: left;
                    }
                }
                .right {
                    width: 418px;
                    height: 409px;
                }
            }
            .current1 {
                width: 100%;
                margin-top: 40px;
                .bimg {
                    float: left;
                    width: 610px;
                    height: 132px;
                    background: url('../../assets/img/bgi1.png') no-repeat;
                    background-size: 100% 100%;
                    text-align: left;
                    padding-top: 15px;
                    padding-left: 38px;
                    box-sizing: border-box;
                    p { 
                        font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #666666;
                    }
                }
            }
        }
    }
    .box2 {
        width: 100%;
        padding: 70px 0px;
        background-color: #F7F9FD;
        .w1300 {
            max-width: 1300px;
            min-width: 320px;
            margin: 0px auto;
            .title {
                width: 100%;
                p {
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                }
            }
            .current {
                width: 100%;
                display: flex;
                align-items: center;
                margin-top: 55px;
                justify-content: center;
                .item {
                    flex: 1;
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #666666;
                }
                .list {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 394px;
                    height: 138px;
                    box-sizing: border-box;
                    text-align: center;
                    background: url('../../assets/img/zmtj.png') no-repeat;
                    background-size: 100% 100%;
                    font-size: 20px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                    margin-right: 20px;
                }
            }
        }
    }
    .clear {
        clear: both;
    }
}
</style>


<template>
  <div class="partnerRecruit">
      <div class="banner">
          <!-- <img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4251016049129886842020917948684banner(3).png" alt=""> -->
          <img :src="banner" alt="">
      </div>
      <div class="box1">
          <div class="w1300">
              <div class="title">
                  <h1>服务介绍</h1>
                  <p>SERVICE INTRODUCTION</p>
              </div>
              <div class="current">
                  <div class="left">
                      <div class="field">企业购买自由职业者服务无法取得合规发票</div>
                      <div class="field">解决自由职业者个税成本过高的问题</div>
                      <div class="field">解决社保入税，企业社保成本压力过大问题</div>
                  </div>
                  <div class="right">
                      <img src="../../assets/img/rightImg.png" alt="">
                  </div>
                  <div class="clear"></div>
              </div>
          </div>
      </div>
      <div class="box2">
          <div class="w1300">
              <div class="title">
                  <h1>业务背景</h1>
                  <p>BUSINESS BACKGROUND</p>
              </div>
              <div class="current">
                  <div class="item">
                      <img src="../../assets/icon/icon1.png" alt="">
                      <h3>经济形势</h3>
                      <p>国家已经进入经济 <br>内循环时代，节省人力 <br>成本服务将会成为企业刚需</p>
                  </div>
                  <div class="item">
                      <img src="../../assets/icon/icon2.png" alt="">
                      <h3>市场情况</h3>
                      <p>共享用工在发达国家已经 <br>成为常态的用工形式，而 <br>中国市场的渗透率不到 1%</p>
                  </div>
                  <div class="item">
                      <img src="../../assets/icon/icon3.png" alt="">
                      <h3>合法合规</h3>
                      <p>国务院、发改委、 <br>人社部等部委，官方意见 <br>均支持灵活就业、共享用工</p>
                  </div>
                  <div class="item">
                      <img src="../../assets/icon/icon4.png" alt="">
                      <h3>未来趋势</h3>
                      <p>近七成企业有采用 <br>共享用工的计划，近5年 <br>共享用工的比例将达到44.6%</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="box1">
          <div class="w1300">
              <div class="title">
                  <h1>为什么加入合伙人招募计划</h1>
                  <p>WHY JOIN THE PARTNER RECRUITMENT PROGRAM</p>
              </div>
              <div class="current1">
                  <div class="bimg">
                      <h2>0资金投入</h2>
                      <p>无资质门槛，零财务风险</p>
                  </div>
                  <div class="bimg">
                      <h2>市场潜力大</h2>
                      <p>3000万目标客户，万亿级市场</p>
                  </div>
                  <div class="bimg">
                      <h2>省心省力</h2>
                      <p>标准服务体系，佣金计算公开透明</p>
                  </div>
                  <div class="bimg">
                      <h2>可持续收益</h2>
                      <p>高频交易行业，每月获得分成</p>
                  </div>
                  <div class="clear"></div>
              </div>
          </div>
      </div>
      <div class="box2">
          <div class="w1300">
              <div class="title">
                  <h1>融科合伙人招募条件</h1>
                  <p>RECRUITMENT CONDITIONS</p>
              </div>
              <div class="current">
                  <div class="list">看好并愿意投身共享用工行业</div>
                  <div class="list">认同并遵守 <br>《融科合伙人服务协议》</div>
                  <div class="list">有丰富的企业资源，<br> 能够引荐企业关键决策人</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        banner: require("../../assets/img/banner (3).png"),
    }
  },
  methods: {

  },
  components: {

  }
}
</script>
