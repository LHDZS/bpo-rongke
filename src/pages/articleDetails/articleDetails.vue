<style lang="less" scoped>
.articleDetails {
    width: 100%;
    .tab {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #DCDCDC;
      padding-top: 60px;
      padding-bottom: 26px;
      .w1300 {
        max-width: 1300px;
        min-width: 320px;
        margin: 0px auto;
        text-align: left;
        font-size: 34px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        span {
            float: right;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #888888;
            margin-top: 27px;
            cursor: pointer;
        }
      }
    //   @media (max-width: 1300px) {
    //       .w1300 {
    //           margin: 0 15px;
    //       }
    //   }
    }
    .list {
      width: 100%;
      padding: 70px 0px;
      .w1300 {
        max-width: 1300px;
        min-width: 320px;
        margin: 0px auto;
        .left {
          float: left;
          width: calc(100% - 400px);
          min-width: 836px;
          .row {
            width: 100%;
            overflow: hidden;
            margin-bottom: 54px;
            img {
              width: 260px;
              float: left;
            }
            .text {
              width: calc(100% - 285px);
              float: right;
              text-align: left;
              cursor: pointer;
              p {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #888888;
                line-height: 28px;
              }
            }
          }
          .next {
            width: 100%;
            text-align: left;
          }
        }
        .right {
          float: right;
          width: 327px;
          .summary {
            width: 100%;
            min-height: 195px;
            border: 1px solid #E8E8E8;
            box-sizing: border-box;
            margin-bottom: 30px;
            .title {
              padding: 0 14px;
              line-height: 50px;
              border-bottom: 1px solid #E8E8E8;
              display: flex;
              align-items: center;  
              img {
                width: 20px;
                height: 21px;
                margin-right: 6px;
              }
            }
            .subnav {
              padding: 15px 0px;
              span {
                display: inline-block;
                margin: 10px;
                padding: 0 10px;
                background: #F3F4F5;
                border-radius: 2px;
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
                cursor: pointer;
              }
              .hot {
                margin: 0px 14px;
                padding: 10px 0px;
                display: flex;
                align-items: center;
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
                text-align: left;
                img {
                  margin-right: 18px;
                }
                div {
                  cursor: pointer;
                }
              }
            }
          }

        }
      }
    //   @media (max-width: 1300px) {
    //       .w1300 {
    //           margin: 0 15px;
    //       }
    //   }
    }
    .clear {
        clear: both;
    }
}
</style>

<template>
  <div class="articleDetails">
      <div class="tab">
        <div class="w1300">
            灵活就业所面临的三大问题和三点建议
            <span @click="getBack">返回上级</span>
        </div>
      </div>
      <div class="list">
        <div class="w1300">
          <div class="left">
              <img :src="ptimg" alt="">
              <component v-bind:is="jsonHtml"></component>
              <!-- <div v-html="jsonHtml"></div> -->
          </div>
          <div class="right">
            <div class="summary">
              <div class="title">
                <img :src="gjcicon" alt="">
                <h2>热门关键词</h2>
              </div>
              <div class="subnav">
                <span>共享用工</span><span>公积金</span><span>优惠政策</span><span>社保缴纳</span><span>残保金</span><span>灵活用工</span>
              </div>
            </div>
            <div class="summary">
              <div class="title">
                <img :src="tjicon" alt="">
                <h2>热文推荐</h2>
              </div>
              <div class="subnav">
                <div class="hot" v-for="(item,key) in hotRecommendedArr" :key="key" @click="detailsClick(item)">
                  <img :src="item.icon" alt="">
                  <div>{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
  </div>
</template>

<script>
// 行业动态
import dynamic1 from '../../components/industryTrendsList/dynamic1'
import dynamic2 from '../../components/industryTrendsList/dynamic2'
import dynamic3 from '../../components/industryTrendsList/dynamic3'
import dynamic4 from '../../components/industryTrendsList/dynamic4'
import dynamic5 from '../../components/industryTrendsList/dynamic5'
import dynamic6 from '../../components/industryTrendsList/dynamic6'
import dynamic7 from '../../components/industryTrendsList/dynamic7'
import dynamic8 from '../../components/industryTrendsList/dynamic8'
import dynamic9 from '../../components/industryTrendsList/dynamic9'
import dynamic10 from '../../components/industryTrendsList/dynamic10'
import dynamic11 from '../../components/industryTrendsList/dynamic11'
import dynamic12 from '../../components/industryTrendsList/dynamic12'
import dynamic13 from '../../components/industryTrendsList/dynamic13'
import dynamic14 from '../../components/industryTrendsList/dynamic14'
import dynamic15 from '../../components/industryTrendsList/dynamic15'
// 政策解读
import unscramble1 from '../../components/policyElucidationList/unscramble1'
import unscramble2 from '../../components/policyElucidationList/unscramble2'
import unscramble3 from '../../components/policyElucidationList/unscramble3'
import unscramble4 from '../../components/policyElucidationList/unscramble4'
import unscramble5 from '../../components/policyElucidationList/unscramble5'
import unscramble6 from '../../components/policyElucidationList/unscramble6'
import unscramble7 from '../../components/policyElucidationList/unscramble7'
import unscramble8 from '../../components/policyElucidationList/unscramble8'
import unscramble9 from '../../components/policyElucidationList/unscramble9'
import unscramble10 from '../../components/policyElucidationList/unscramble10'
import unscramble11 from '../../components/policyElucidationList/unscramble11'
import unscramble12 from '../../components/policyElucidationList/unscramble12'
import unscramble13 from '../../components/policyElucidationList/unscramble13'
import unscramble14 from '../../components/policyElucidationList/unscramble14'
import unscramble15 from '../../components/policyElucidationList/unscramble15'
// 热文推荐
import hotRecommendedArr from '../../assets/js/hotRecommendedArr.js'

export default {
  data() {
    return {
      ptimg: '',
      img: require("../../assets/img/1.png"),
      icon: require("../../assets/icon/01.png"),
      gjcicon: require("../../assets/icon/gjc.png"),
      tjicon: require("../../assets/icon/tj.png"),
      hotRecommendedArr: hotRecommendedArr,
      jsonHtml: ''
    }
  },
  created() {
      console.log(this.$route.query.item)
      let row = JSON.parse(this.$route.query.item);
      this.ptimg = row.banImg;
      this.jsonHtml = row.element;
  },
  methods: {
    detailsClick(row) {
      this.$router.push({name: 'articleDetails',query:{ item: JSON.stringify(row)}})
    },
    getBack() {
      this.$router.push({name: 'policyMessage'})
    }
  },
  components: {
      dynamic1: dynamic1,
      dynamic2: dynamic2,
      dynamic3: dynamic3,
      dynamic4: dynamic4,
      dynamic5: dynamic5,
      dynamic6: dynamic6,
      dynamic7: dynamic7,
      dynamic8: dynamic8,
      dynamic9: dynamic9,
      dynamic10: dynamic10,
      dynamic11: dynamic11,
      dynamic12: dynamic12,
      dynamic13: dynamic13,
      dynamic14: dynamic14,
      dynamic15: dynamic15,
      unscramble1: unscramble1,
      unscramble2: unscramble2,
      unscramble3: unscramble3,
      unscramble4: unscramble4,
      unscramble5: unscramble5,
      unscramble6: unscramble6,
      unscramble7: unscramble7,
      unscramble8: unscramble8,
      unscramble9: unscramble9,
      unscramble10: unscramble10,
      unscramble11: unscramble11,
      unscramble12: unscramble12,
      unscramble13: unscramble13,
      unscramble14: unscramble14,
      unscramble15: unscramble15
  }
}
</script>
