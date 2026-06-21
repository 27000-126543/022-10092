import { CustomerSegment, CustomerItem } from '@/types';

export const newOldCustomerData = [
  { name: '新客', value: 4523, color: '#0FC6C2' },
  { name: '老客', value: 8063, color: '#722ED1' }
];

export const amountSegments: CustomerSegment[] = [
  {
    id: 'amount-1',
    name: '高净值客户',
    count: 328,
    percentage: 2.6,
    color: '#FF5722',
    description: '累计消费10万以上',
    lastBehavior: '平均30天到店',
    suggestion: '提供专属服务，推荐高端项目'
  },
  {
    id: 'amount-2',
    name: '中高消费',
    count: 1256,
    percentage: 10.0,
    color: '#722ED1',
    description: '累计消费5-10万',
    lastBehavior: '平均45天到店',
    suggestion: '推荐组合项目，提升客单价'
  },
  {
    id: 'amount-3',
    name: '中等消费',
    count: 3420,
    percentage: 27.2,
    color: '#165DFF',
    description: '累计消费1-5万',
    lastBehavior: '平均60天到店',
    suggestion: '定期营销活动，增加到店频次'
  },
  {
    id: 'amount-4',
    name: '低消费',
    count: 5682,
    percentage: 45.1,
    color: '#0FC6C2',
    description: '累计消费1万以下',
    lastBehavior: '平均90天到店',
    suggestion: '首次体验项目，培养消费习惯'
  },
  {
    id: 'amount-5',
    name: '未消费',
    count: 1900,
    percentage: 15.1,
    color: '#86909C',
    description: '仅咨询未消费',
    lastBehavior: '首次咨询后未到店',
    suggestion: '新人优惠活动，促进首次成交'
  }
];

export const visitFrequencySegments: CustomerSegment[] = [
  {
    id: 'visit-1',
    name: '高频到店',
    count: 856,
    percentage: 6.8,
    color: '#00B42A',
    description: '每月到店2次以上',
    lastBehavior: '最近7天内到店',
    suggestion: '会员专属活动，提升忠诚度'
  },
  {
    id: 'visit-2',
    name: '中频到店',
    count: 3240,
    percentage: 25.7,
    color: '#165DFF',
    description: '每月到店1次',
    lastBehavior: '最近30天内到店',
    suggestion: '月度优惠活动，保持消费习惯'
  },
  {
    id: 'visit-3',
    name: '低频到店',
    count: 4520,
    percentage: 35.9,
    color: '#0FC6C2',
    description: '每2-3个月到店1次',
    lastBehavior: '最近60天内到店',
    suggestion: '季节性项目推荐，唤醒消费'
  },
  {
    id: 'visit-4',
    name: '沉睡客户',
    count: 3970,
    percentage: 31.5,
    color: '#86909C',
    description: '超过3个月未到店',
    lastBehavior: '90天以上未到店',
    suggestion: '沉睡唤醒活动，召回客户'
  }
];

export const repurchaseCycleData = [
  { name: '7天内复购', value: 1256, color: '#00B42A' },
  { name: '30天内复购', value: 2340, color: '#165DFF' },
  { name: '60天内复购', value: 1890, color: '#0FC6C2' },
  { name: '90天内复购', value: 1120, color: '#722ED1' },
  { name: '90天以上', value: 1480, color: '#86909C' }
];

export const memberValueSegments: CustomerSegment[] = [
  {
    id: 'member-1',
    name: '钻石会员',
    count: 186,
    percentage: 1.5,
    color: '#FF5722',
    description: '年消费20万以上',
    lastBehavior: '贡献45%营业额',
    suggestion: '一对一专属服务，私人定制方案'
  },
  {
    id: 'member-2',
    name: '金卡会员',
    count: 856,
    percentage: 6.8,
    color: '#FFD700',
    description: '年消费10-20万',
    lastBehavior: '贡献28%营业额',
    suggestion: '优先体验新项目，专属折扣'
  },
  {
    id: 'member-3',
    name: '银卡会员',
    count: 2340,
    percentage: 18.6,
    color: '#C0C0C0',
    description: '年消费5-10万',
    lastBehavior: '贡献15%营业额',
    suggestion: '积分兑换，升级激励'
  },
  {
    id: 'member-4',
    name: '普通会员',
    count: 5680,
    percentage: 45.1,
    color: '#165DFF',
    description: '年消费1-5万',
    lastBehavior: '贡献8%营业额',
    suggestion: '消费满额升级，培养消费习惯'
  },
  {
    id: 'member-5',
    name: '非会员',
    count: 3524,
    percentage: 28.0,
    color: '#86909C',
    description: '未开通会员',
    lastBehavior: '贡献4%营业额',
    suggestion: '新人礼包，引导开通会员'
  }
];

export const segmentCustomers: CustomerItem[] = [
  {
    id: 'c1',
    name: '王女士',
    level: '钻石卡',
    lastVisit: '昨天',
    totalConsume: 128000,
    tags: ['高净值', '抗衰需求', '水光'],
    consultant: '李咨询师'
  },
  {
    id: 'c2',
    name: '张女士',
    level: '金卡',
    lastVisit: '3天前',
    totalConsume: 56000,
    tags: ['光电项目', '复购率高'],
    consultant: '陈咨询师'
  },
  {
    id: 'c3',
    name: '刘女士',
    level: '银卡',
    lastVisit: '今天',
    totalConsume: 18000,
    tags: ['新客', '眼修复'],
    consultant: '王咨询师'
  }
];
