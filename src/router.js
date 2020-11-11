import Vue from 'vue'	//引入vue
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/pages/home/index.vue'
// 协议
import Agreement from '@/pages/agreement/agreement.vue'
// 关于我们
import Aboutus from '@/pages/aboutus/aboutus.vue'
// 政策解读
import PolicyMessage from '@/pages/policyMessage/policyMessage.vue'
// 合伙人招募
import PartnerRecruit from '@/pages/partnerRecruit/partnerRecruit.vue'
// 文章详情
import ArticleDetails from '@/pages/articleDetails/articleDetails.vue'



export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/agreement', name: 'agreement', component: Agreement },
    { path: '/aboutus', name: 'aboutus', component: Aboutus },
    { path: '/policyMessage', name: 'policyMessage', component: PolicyMessage },
    { path: '/partnerRecruit', name: 'partnerRecruit', component: PartnerRecruit },
    { path: '/articleDetails', name: 'articleDetails', meta: {type: 'det'}, component: ArticleDetails }
  ]
})