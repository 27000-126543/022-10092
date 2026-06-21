import { WarningItem, ChannelQuality, CustomerItem } from '@/types';

export const warningOverview = [
  { label: '高风险预警', value: 3, level: 'high', color: '#F53F3F' },
  { label: '中风险预警', value: 8, level: 'medium', color: '#FF7D00' },
  { label: '低风险提醒', value: 12, level: 'low', color: '#165DFF' }
];

export const warningList: WarningItem[] = [
  {
    id: 'w1',
    type: 'decline',
    title: '成交金额下滑预警',
    description: '本周成交金额较上周下滑23.5%，低于月度目标30%',
    level: 'high',
    time: '2小时前',
    handled: false
  },
  {
    id: 'w2',
    type: 'highValue',
    title: '高价值客户流失风险',
    description: '有8位钻石会员连续60天未到店，存在流失风险',
    level: 'high',
    time: '昨天',
    handled: false
  },
  {
    id: 'w3',
    type: 'channel',
    title: '渠道质量异常',
    description: '抖音渠道获客成本上升45%，转化率下降12%',
    level: 'high',
    time: '3小时前',
    handled: false
  },
  {
    id: 'w4',
    type: 'consultant',
    title: '咨询师负荷不均',
    description: '张咨询师跟进客户95人，远超平均水平68人',
    level: 'medium',
    time: '今天',
    handled: false
  },
  {
    id: 'w5',
    type: 'decline',
    title: '新客到店量下降',
    description: '本月新客到店量较上月下降15.2%',
    level: 'medium',
    time: '昨天',
    handled: false
  },
  {
    id: 'w6',
    type: 'highValue',
    title: '高客单客户保护提醒',
    description: '王女士（钻石卡）咨询竞品项目，需重点维护',
    level: 'high',
    time: '5小时前',
    handled: false
  },
  {
    id: 'w7',
    type: 'channel',
    title: '美团渠道ROI下降',
    description: '美团渠道投入产出比从3.2降至2.1',
    level: 'medium',
    time: '2天前',
    handled: true
  },
  {
    id: 'w8',
    type: 'decline',
    title: '复购率下降',
    description: '本月客户复购率38.5%，较上月下降5.8个百分点',
    level: 'medium',
    time: '1天前',
    handled: false
  }
];

export const channelQualityList: ChannelQuality[] = [
  {
    id: 'ch1',
    name: '微信生态',
    customerCount: 3256,
    conversionRate: 28.5,
    avgCustomerValue: 8500,
    cost: 150000,
    roi: 4.2
  },
  {
    id: 'ch2',
    name: '抖音',
    customerCount: 2680,
    conversionRate: 18.2,
    avgCustomerValue: 6200,
    cost: 280000,
    roi: 2.1
  },
  {
    id: 'ch3',
    name: '美团',
    customerCount: 1890,
    conversionRate: 22.8,
    avgCustomerValue: 5800,
    cost: 120000,
    roi: 3.2
  },
  {
    id: 'ch4',
    name: '小红书',
    customerCount: 1560,
    conversionRate: 25.3,
    avgCustomerValue: 7200,
    cost: 95000,
    roi: 3.8
  },
  {
    id: 'ch5',
    name: '老客转介绍',
    customerCount: 2340,
    conversionRate: 45.6,
    avgCustomerValue: 12000,
    cost: 50000,
    roi: 8.5
  },
  {
    id: 'ch6',
    name: '线下活动',
    customerCount: 860,
    conversionRate: 32.1,
    avgCustomerValue: 9800,
    cost: 80000,
    roi: 3.6
  }
];

export const highValueAtRisk: CustomerItem[] = [
  {
    id: 'hv1',
    name: '王女士',
    level: '钻石卡',
    lastVisit: '65天前',
    totalConsume: 256000,
    tags: ['高价值', '流失风险', '竞品咨询'],
    consultant: '李咨询师'
  },
  {
    id: 'hv2',
    name: '张女士',
    level: '钻石卡',
    lastVisit: '72天前',
    totalConsume: 185000,
    tags: ['高价值', '沉睡', '需唤醒'],
    consultant: '陈咨询师'
  },
  {
    id: 'hv3',
    name: '刘女士',
    level: '金卡',
    lastVisit: '58天前',
    totalConsume: 98000,
    tags: ['升级潜力', '沉睡', '高潜力'],
    consultant: '王咨询师'
  }
];

export const declineDetails = [
  { label: '本周成交', value: '128.5万', change: -23.5, target: '180万' },
  { label: '新客成交', value: '42.3万', change: -18.2, target: '60万' },
  { label: '老客复购', value: '86.2万', change: -25.8, target: '120万' },
  { label: '客单价', value: '2.85万', change: -8.6, target: '3.2万' }
];
