<style lang="less" scoped>
.policyMessage {
    width: 100%;
    .banner {
        width: 100%;
        display: flex;
        img {
            width: 100%;
        }
    }
    .tab {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #DCDCDC;
      div {
        display: inline-block;
        width: 216px;
        height: 75px;
        line-height: 75px;
        text-align: center;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        cursor: pointer;
      }
      .tabThe {
        background: #3D7BFF;
        color: #fff;
      }
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
                justify-content: flex-start;
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
    }
    .clear {
        clear: both;
    }
}
</style>

<template>
  <div class="policyMessage">
      <div class="banner">
          <!-- <img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_2101016049053303982020915210398banner(2).png" alt=""> -->
          <img :src="banner" alt="">
      </div>
      <div class="tab">
        <div :class="tabName == '政策解读' ? 'tabThe' : ''" @click="tabClick('政策解读')">政策解读</div>
        <div :class="tabName == '行业动态' ? 'tabThe' : ''" @click="tabClick('行业动态')">行业动态</div>
      </div>
      <div class="list">
        <div class="w1300">
          <div class="left">
            <div class="row" v-for="(item, key) in articleListsArr" :key="key" @click="detailsClick(item)">
              <img :src="item.img" alt="">
              <div class="text">
                <h2>{{item.name}}</h2>
                <p>{{item.text}}</p>
              </div>
            </div>
            <div class="next">
              <pagination :total="total" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></pagination>
            </div>
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
import pagination from '../../components/pagination.vue'
import industryTrendsArr from '../../assets/js/industryTrendsArr.js'
import industryDynamicArr from '../../assets/js/industryDynamicArr.js'
import hotRecommendedArr from '../../assets/js/hotRecommendedArr.js'

export default {
  data() {
    return {
      total: 100,
      tabName: '政策解读',
      banner: require("../../assets/img/banner (2).png"),
      icon: require("../../assets/icon/01.png"),
      gjcicon: require("../../assets/icon/gjc.png"),
      tjicon: require("../../assets/icon/tj.png"),
      articleListsArr: industryTrendsArr,
      hotRecommendedArr: hotRecommendedArr
    }
  },
  created() {
    this.tabName = this.$route.query.name || '政策解读';
    this.articleListsArr = industryDynamicArr;
  },
  methods: {
    tabClick(name) {
      this.tabName = name;
      if (name == '政策解读') {
        this.articleListsArr = industryDynamicArr
      }else {
        this.articleListsArr = industryTrendsArr;
      }
    },
    detailsClick(row) {
      this.$router.push({name: 'articleDetails',query:{ item: JSON.stringify(row) }})
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  },
  components: {
    pagination:pagination
  }
}
</script>
