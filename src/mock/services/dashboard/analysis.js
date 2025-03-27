import Mock from 'mockjs2'
import { builder } from '../../util'
import moment from 'moment'

const analysis = {
  // 总销售额
  totalSales: () => {
    return builder({
      total: '¥ 126,560',
      weekGrowth: '12%',
      dayGrowth: '-11%',
      daySales: '¥ 234.56'
    })
  },

  // 访问量
  visitData: () => {
    return builder({
      total: 8846,
      dailyVisits: 1234,
      data: (() => {
        const data = []
        const beginDay = new Date().getTime()
        for (let i = 0; i < 20; i++) {
          data.push({
            x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
            y: Math.floor(Math.random() * 100) + 10
          })
        }
        return data
      })()
    })
  },

  // 支付笔数
  payments: () => {
    return builder({
      total: 6560,
      conversionRate: '60%',
      data: (() => {
        const data = []
        for (let i = 0; i < 8; i++) {
          data.push({
            x: `${i + 1}日`,
            y: Math.floor(Math.random() * 100) + 10
          })
        }
        return data
      })()
    })
  },

  // 运营活动效果
  operationalEffect: () => {
    return builder({
      total: '78%',
      weekGrowth: '-12%',
      dayGrowth: '80%'
    })
  },

  // 销售趋势
  salesTrend: () => {
    const barData = []
    for (let i = 0; i < 12; i++) {
      barData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200
      })
    }
    return builder(barData)
  },

  // 门店销售额排名
  salesRanking: () => {
    const rankList = []
    for (let i = 0; i < 7; i++) {
      rankList.push({
        name: '白鹭岛 ' + (i + 1) + ' 号店',
        total: Math.floor(1234.56 - i * 100)
      })
    }
    return builder(rankList)
  },

  // 线上热门搜索
  searchData: () => {
    const searchUserData = []
    const beginDay = new Date().getTime()

    for (let i = 0; i < 7; i++) {
      searchUserData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: Math.ceil(Math.random() * 10)
      })
    }

    const tableData = []
    for (let i = 0; i < 50; i++) {
      tableData.push({
        index: i + 1,
        keyword: `搜索关键词-${i}`,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2)
      })
    }

    return builder({
      userData: searchUserData,
      tableData: tableData
    })
  },

  // 销售额类别占比
  salesProportion: () => {
    return builder([
      { item: '家用电器', count: 32.2 },
      { item: '食用酒水', count: 21 },
      { item: '个护健康', count: 17 },
      { item: '服饰箱包', count: 13 },
      { item: '母婴产品', count: 9 },
      { item: '其他', count: 7.8 }
    ])
  }
}

// 注册所有接口
Mock.mock(/\/dashboard\/analysis\/total-sales/, 'get', analysis.totalSales)
Mock.mock(/\/dashboard\/analysis\/visit-data/, 'get', analysis.visitData)
Mock.mock(/\/dashboard\/analysis\/payments/, 'get', analysis.payments)
Mock.mock(/\/dashboard\/analysis\/operational-effect/, 'get', analysis.operationalEffect)
Mock.mock(/\/dashboard\/analysis\/sales-trend/, 'get', analysis.salesTrend)
Mock.mock(/\/dashboard\/analysis\/sales-ranking/, 'get', analysis.salesRanking)
Mock.mock(/\/dashboard\/analysis\/search-data/, 'get', analysis.searchData)
Mock.mock(/\/dashboard\/analysis\/sales-proportion/, 'get', analysis.salesProportion)

export default analysis
