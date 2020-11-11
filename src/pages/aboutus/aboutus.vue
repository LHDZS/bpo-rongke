<style lang="less" scoped>
.aboutus {
    width: 100%;
    .banner {
        width: 100%;
        display: flex;
        img {
            width: 100%;
        }
    }
    .enterprise {
        width: 100%;
        padding-bottom: 70px;
        .w1300 {
           max-width: 1300px;
           min-width: 320px;
           margin: 0px auto;
           .title {
               padding-top: 70px;
               padding-bottom: 40px;
           }
           img {
               float: left;
               width: 520px;
           }
           .text {
                width: calc(100% - 570px);
                margin-left: 50px;
                float: right;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
                line-height: 22px;
                text-align: left;
           }
        }
    }
    .clear {
        clear: both;
    }
}
</style>

<template>
  <div class="aboutus">
      <div class="banner">
          <!-- <img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_48210160490093564920209134855649gywm.png" alt=""> -->
          <img :src="banner" alt="">
      </div>
      <div class="enterprise">
          <div class="w1300">
              <div class="title">
                  <h1>企业简介</h1>
                  <p>ABOUT US</p>
              </div>
              <!-- <img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_39610160490096072020209134920720qyjj.png" alt=""> -->
              <img :src="img" alt="">
              <div class="text">
                  <p>汉唐融科是中国共享用工服务的开拓者与践行者，致力于推动共享用工相关产业的发展与变革。公司搭建“B+C”开放的数字化共享用工平台，为自由职业者提供灵活就业机会、专业能力提升培训等服务。同时为企业提供共享用工解决方案，激发创新力量，促进商业变革。</p> 
                  <p>公司以互联网技术人才、人力资源专家、法务顾问、财税专家、资深培训师组成了专家团队，从而保证了服务的专业性、及时性与安全性，在共享用工领域里为自由职业者提供了几百万人次的就业机会。 </p>
                  <p>服务范围以北京、上海、广州、深圳、成都、杭州等为核心，辐射300多个城市，通过15年的专业级企业服务，获得了20万+客户的认可！</p>
              </div>
              <div class="clear"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        banner: require("../../assets/img/gywm.png"),
        img: require("../../assets/img/qyjj.png"),
    }
  },
  methods: {

  },
  components: {

  }
}
</script>
