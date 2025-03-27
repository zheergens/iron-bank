<template>
  <div>
    <a-row :gutter="24">
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.total-sales')" :total="totalSales.total">
          <a-tooltip :title="$t('dashboard.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend :flag="totalSales.weekGrowth.startsWith('-') ? 'down' : 'up'" style="margin-right: 16px;">
              <span slot="term">{{ $t('dashboard.analysis.week') }}</span>
              {{ totalSales.weekGrowth }}
            </trend>
            <trend :flag="totalSales.dayGrowth.startsWith('-') ? 'down' : 'up'">
              <span slot="term">{{ $t('dashboard.analysis.day') }}</span>
              {{ totalSales.dayGrowth }}
            </trend>
          </div>
          <template slot="footer">{{ $t('dashboard.analysis.day-sales') }}<span>{{ totalSales.daySales }}</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.visits')" :total="visitData.total | NumberFormat">
          <a-tooltip :title="$t('dashboard.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-area />
          </div>
          <template slot="footer">{{ $t('dashboard.analysis.day-visits') }}<span> {{ visitData.dailyVisits | NumberFormat }}</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.payments')" :total="payments.total | NumberFormat">
          <a-tooltip :title="$t('dashboard.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-bar />
          </div>
          <template slot="footer">{{ $t('dashboard.analysis.conversion-rate') }} <span>{{ payments.conversionRate }}</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" :title="$t('dashboard.analysis.operational-effect')" :total="operationalEffect.total">
          <a-tooltip :title="$t('dashboard.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-progress color="rgb(19, 194, 194)" :target="80" :percentage="Number(operationalEffect.total.replace('%', ''))" height="8px" />
          </div>
          <template slot="footer">
            <trend :flag="operationalEffect.weekGrowth.startsWith('-') ? 'down' : 'up'" style="margin-right: 16px;">
              <span slot="term">{{ $t('dashboard.analysis.week') }}</span>
              {{ operationalEffect.weekGrowth }}
            </trend>
            <trend :flag="operationalEffect.dayGrowth.startsWith('-') ? 'down' : 'up'">
              <span slot="term">{{ $t('dashboard.analysis.day') }}</span>
              {{ operationalEffect.dayGrowth }}
            </trend>
          </template>
        </chart-card>
      </a-col>
    </a-row>

    <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>{{ $t('dashboard.analysis.all-day') }}</a>
              <a>{{ $t('dashboard.analysis.all-week') }}</a>
              <a>{{ $t('dashboard.analysis.all-month') }}</a>
              <a>{{ $t('dashboard.analysis.all-year') }}</a>
            </div>
            <a-range-picker :style="{width: '256px'}" />
          </div>
          <a-tab-pane loading="true" :tab="$t('dashboard.analysis.sales')" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData" :title="$t('dashboard.analysis.sales-trend')" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list :title="$t('dashboard.analysis.sales-ranking')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane :tab="$t('dashboard.analysis.visits')" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData2" :title="$t('dashboard.analysis.visits-trend')" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list :title="$t('dashboard.analysis.visits-ranking')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>

    <div class="antd-pro-pages-dashboard-analysis-twoColLayout" :class="!isMobile && 'desktop'">
      <a-row :gutter="24" type="flex" :style="{ marginTop: '24px' }">
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card :loading="loading" :bordered="false" :title="$t('dashboard.analysis.online-top-search')" :style="{ height: '100%' }">
            <a-dropdown :trigger="['click']" placement="bottomLeft" slot="extra">
              <a class="ant-dropdown-link" href="#">
                <a-icon type="ellipsis" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">{{ $t('dashboard.analysis.dropdown-option-one') }}</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">{{ $t('dashboard.analysis.dropdown-option-two') }}</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <a-row :gutter="68">
              <a-col :xs="24" :sm="12" :style="{ marginBottom: ' 24px'}">
                <number-info :total="12321" :sub-total="17.1">
                  <span slot="subtitle">
                    <span>{{ $t('dashboard.analysis.search-users') }}</span>
                    <a-tooltip :title="$t('dashboard.analysis.introduce')" slot="action">
                      <a-icon type="info-circle-o" :style="{ marginLeft: '8px' }" />
                    </a-tooltip>
                  </span>
                </number-info>
                <!-- miniChart -->
                <div>
                  <mini-smooth-area :style="{ height: '45px' }" :dataSource="searchUserData" :scale="searchUserScale" />
                </div>
              </a-col>
              <a-col :xs="24" :sm="12" :style="{ marginBottom: ' 24px'}">
                <number-info :total="2.7" :sub-total="26.2" status="down">
                  <span slot="subtitle">
                    <span>{{ $t('dashboard.analysis.per-capita-search') }}</span>
                    <a-tooltip :title="$t('dashboard.analysis.introduce')" slot="action">
                      <a-icon type="info-circle-o" :style="{ marginLeft: '8px' }" />
                    </a-tooltip>
                  </span>
                </number-info>
                <!-- miniChart -->
                <div>
                  <mini-smooth-area :style="{ height: '45px' }" :dataSource="searchUserData" :scale="searchUserScale" />
                </div>
              </a-col>
            </a-row>
            <div class="ant-table-wrapper">
              <a-table
                row-key="index"
                size="small"
                :columns="searchTableColumns"
                :dataSource="searchData"
                :pagination="{ pageSize: 5 }"
              >
                <span slot="range" slot-scope="text, record">
                  <trend :flag="record.status === 0 ? 'up' : 'down'">
                    {{ text }}%
                  </trend>
                </span>
              </a-table>
            </div>
          </a-card>
        </a-col>
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" :title="$t('dashboard.analysis.the-proportion-of-sales')" :style="{ height: '100%' }">
            <div slot="extra" style="height: inherit;">
              <!-- style="bottom: 12px;display: inline-block;" -->
              <span class="dashboard-analysis-iconGroup">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a-icon type="ellipsis" class="ant-dropdown-link" />
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">{{ $t('dashboard.analysis.dropdown-option-one') }}</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">{{ $t('dashboard.analysis.dropdown-option-two') }}</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </span>
              <div class="analysis-salesTypeRadio">
                <a-radio-group defaultValue="a">
                  <a-radio-button value="a">{{ $t('dashboard.analysis.channel.all') }}</a-radio-button>
                  <a-radio-button value="b">{{ $t('dashboard.analysis.channel.online') }}</a-radio-button>
                  <a-radio-button value="c">{{ $t('dashboard.analysis.channel.stores') }}</a-radio-button>
                </a-radio-group>
              </div>

            </div>
            <h4>{{ $t('dashboard.analysis.sales') }}</h4>
            <div>
              <!-- style="width: calc(100% - 240px);" -->
              <div>
                <v-chart :force-fit="true" :height="405" :data="pieData" :scale="pieScale">
                  <v-tooltip :showTitle="false" dataKey="item*percent" />
                  <v-axis />
                  <!-- position="right" :offsetX="-140" -->
                  <v-legend dataKey="item"/>
                  <v-pie position="percent" color="item" :vStyle="pieStyle" />
                  <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
                </v-chart>
              </div>

            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import {
  ChartCard,
  MiniArea,
  MiniBar,
  MiniProgress,
  RankList,
  Bar,
  Trend,
  NumberInfo,
  MiniSmoothArea
} from '@/components'
import { baseMixin } from '@/store/app-mixin'
import { axios } from '@/utils/request'

const DataSet = require('@antv/data-set')

export default {
  name: 'Analysis',
  mixins: [baseMixin],
  components: {
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    RankList,
    Bar,
    Trend,
    NumberInfo,
    MiniSmoothArea
  },
  data () {
    return {
      loading: true,
      rankList: [],
      searchUserData: [],
      searchUserScale: [
        {
          dataKey: 'x',
          alias: '时间'
        },
        {
          dataKey: 'y',
          alias: '用户数',
          min: 0,
          max: 10
        }
      ],
      searchData: [],
      barData: [],
      barData2: [],
      pieScale: [{
        dataKey: 'percent',
        min: 0,
        formatter: '.0%'
      }],
      pieData: [],
      totalSales: {
        total: '¥ 0',
        weekGrowth: '0%',
        dayGrowth: '0%',
        daySales: '¥ 0'
      },
      visitData: {
        total: 0,
        dailyVisits: 0
      },
      payments: {
        total: 0,
        conversionRate: '0%'
      },
      operationalEffect: {
        total: '0%',
        weekGrowth: '0%',
        dayGrowth: '0%'
      },
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      }
    }
  },
  computed: {
    searchTableColumns () {
      return [
        {
          dataIndex: 'index',
          title: this.$t('dashboard.analysis.table.rank'),
          width: 90
        },
        {
          dataIndex: 'keyword',
          title: this.$t('dashboard.analysis.table.search-keyword')
        },
        {
          dataIndex: 'count',
          title: this.$t('dashboard.analysis.table.users')
        },
        {
          dataIndex: 'range',
          title: this.$t('dashboard.analysis.table.weekly-range'),
          align: 'right',
          sorter: (a, b) => a.range - b.range,
          scopedSlots: { customRender: 'range' }
        }
      ]
    }
  },
  methods: {
    async fetchData () {
      try {
        const [
          salesRes,
          visitRes,
          paymentsRes,
          effectRes,
          trendRes,
          rankingRes,
          searchRes,
          proportionRes
        ] = await Promise.all([
          axios.get('/dashboard/analysis/total-sales'),
          axios.get('/dashboard/analysis/visit-data'),
          axios.get('/dashboard/analysis/payments'),
          axios.get('/dashboard/analysis/operational-effect'),
          axios.get('/dashboard/analysis/sales-trend'),
          axios.get('/dashboard/analysis/sales-ranking'),
          axios.get('/dashboard/analysis/search-data'),
          axios.get('/dashboard/analysis/sales-proportion')
        ])

        this.totalSales = salesRes.result
        this.visitData = visitRes.result
        this.payments = paymentsRes.result
        this.operationalEffect = effectRes.result
        this.barData = trendRes.result
        this.barData2 = trendRes.result // 使用相同数据用于访问趋势
        this.rankList = rankingRes.result

        // 处理搜索数据
        const { userData, tableData } = searchRes.result
        this.searchUserData = userData
        this.searchData = tableData

        // 处理销售占比数据
        const dv = new DataSet.View().source(proportionRes.result)
        dv.transform({
          type: 'percent',
          field: 'count',
          dimension: 'item',
          as: 'percent'
        })
        this.pieData = dv.rows
      } catch (error) {
        console.error('获取数据失败:', error)
      } finally {
        this.loading = false
      }
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }

  .antd-pro-pages-dashboard-analysis-twoColLayout {
    position: relative;
    display: flex;
    display: block;
    flex-flow: row wrap;
  }

  .antd-pro-pages-dashboard-analysis-salesCard {
    height: calc(100% - 24px);
    :deep(.ant-card-head) {
      position: relative;
    }
  }

  .dashboard-analysis-iconGroup {
    i {
      margin-left: 16px;
      color: rgba(0,0,0,.45);
      cursor: pointer;
      transition: color .32s;
      color: black;
    }
  }
  .analysis-salesTypeRadio {
    position: absolute;
    right: 54px;
    bottom: 12px;
  }
</style>
