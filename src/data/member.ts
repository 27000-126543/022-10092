import { MemberLevelDetail, MemberViewCustomer } from '@/types';

export const memberLevelDetails: MemberLevelDetail[] = [
  {
    id: 'diamond',
    name: '钻石会员',
    count: 186,
    percentage: 1.5,
    color: '#FF5722',
    consumeContribution: '45%',
    avgConsume: '28.6万',
    recentActive: '7天内到店 72%',
    suggestion: '一对一专属服务，私人定制方案',
    icon: '💎'
  },
  {
    id: 'gold',
    name: '金卡会员',
    count: 856,
    percentage: 6.8,
    color: '#FFD700',
    consumeContribution: '28%',
    avgConsume: '12.8万',
    recentActive: '14天内到店 58%',
    suggestion: '优先体验新项目，专属折扣',
    icon: '🥇'
  },
  {
    id: 'silver',
    name: '银卡会员',
    count: 2340,
    percentage: 18.6,
    color: '#86909C',
    consumeContribution: '15%',
    avgConsume: '6.2万',
    recentActive: '30天内到店 42%',
    suggestion: '积分兑换，升级激励',
    icon: '🥈'
  },
  {
    id: 'normal',
    name: '普通会员',
    count: 5680,
    percentage: 45.1,
    color: '#165DFF',
    consumeContribution: '8%',
    avgConsume: '2.3万',
    recentActive: '60天内到店 35%',
    suggestion: '消费满额升级，培养消费习惯',
    icon: '🪪'
  },
  {
    id: 'nonMember',
    name: '非会员',
    count: 3524,
    percentage: 28.0,
    color: '#C9CDD4',
    consumeContribution: '4%',
    avgConsume: '0.6万',
    recentActive: '仅咨询未到店 68%',
    suggestion: '新人礼包，引导开通会员',
    icon: '👤'
  }
];

export const highValueCustomers: MemberViewCustomer[] = [
  {
    id: 'hv1',
    name: '王女士',
    level: '钻石卡',
    lastVisit: '昨天',
    totalConsume: 256000,
    tags: ['高客单', '手术意向', '抗衰'],
    consultant: '李咨询师',
    viewTag: '需保护',
    viewSuggestion: '安排专家面诊，锁定高客单项目'
  },
  {
    id: 'hv2',
    name: '陈女士',
    level: '钻石卡',
    lastVisit: '3天前',
    totalConsume: 198000,
    tags: ['高客单', '水光常客', 'VIP'],
    consultant: '陈咨询师',
    viewTag: '需保护',
    viewSuggestion: '推荐年卡续费，保持忠诚度'
  },
  {
    id: 'hv3',
    name: '张女士',
    level: '金卡',
    lastVisit: '1周前',
    totalConsume: 128000,
    tags: ['高客单', '光电项目', '升级潜力'],
    consultant: '王咨询师',
    viewTag: '可升级',
    viewSuggestion: '推荐高端光电组合，冲刺钻石卡'
  },
  {
    id: 'hv4',
    name: '赵女士',
    level: '金卡',
    lastVisit: '5天前',
    totalConsume: 96000,
    tags: ['高客单', '眼鼻修复', '二次消费'],
    consultant: '张咨询师',
    viewTag: '需保护',
    viewSuggestion: '安排修复专家面诊，确保满意度'
  },
  {
    id: 'hv5',
    name: '刘女士',
    level: '钻石卡',
    lastVisit: '2天前',
    totalConsume: 312000,
    tags: ['高客单', '全脸抗衰', 'TOP5'],
    consultant: '李咨询师',
    viewTag: '需保护',
    viewSuggestion: '1对1私人顾问，优先体验新项目'
  }
];

export const repurchasePotentialCustomers: MemberViewCustomer[] = [
  {
    id: 'rp1',
    name: '林女士',
    level: '金卡',
    lastVisit: '2周前',
    totalConsume: 68000,
    tags: ['复购潜力', '水光到期', '3次消费'],
    consultant: '陈咨询师',
    viewTag: '推套餐',
    viewSuggestion: '推水光年卡套餐，3次+1次光子'
  },
  {
    id: 'rp2',
    name: '孙女士',
    level: '银卡',
    lastVisit: '3周前',
    totalConsume: 35000,
    tags: ['复购潜力', '光电意向', '2次消费'],
    consultant: '王咨询师',
    viewTag: '推套餐',
    viewSuggestion: '推光电组合疗程，超声炮+热玛吉'
  },
  {
    id: 'rp3',
    name: '黄女士',
    level: '银卡',
    lastVisit: '1个月前',
    totalConsume: 28000,
    tags: ['复购潜力', '抗衰需求', '到店频次高'],
    consultant: '张咨询师',
    viewTag: '推套餐',
    viewSuggestion: '推抗衰保养套餐，月度到店'
  },
  {
    id: 'rp4',
    name: '吴女士',
    level: '金卡',
    lastVisit: '1周前',
    totalConsume: 82000,
    tags: ['复购潜力', '眼综合到期', '高满意度'],
    consultant: '李咨询师',
    viewTag: '推套餐',
    viewSuggestion: '推术后维养+皮肤管理套餐'
  },
  {
    id: 'rp5',
    name: '周女士',
    level: '普通会员',
    lastVisit: '2周前',
    totalConsume: 15000,
    tags: ['复购潜力', '首次体验后好评', '可培养'],
    consultant: '赵咨询师',
    viewTag: '推套餐',
    viewSuggestion: '推轻医美体验包，培养消费习惯'
  }
];

export const sleepingRiskCustomers: MemberViewCustomer[] = [
  {
    id: 'sr1',
    name: '许女士',
    level: '钻石卡',
    lastVisit: '68天前',
    totalConsume: 185000,
    tags: ['沉睡风险', '高价值', '需唤醒'],
    consultant: '李咨询师',
    viewTag: '需唤醒',
    viewSuggestion: '院长亲自关怀，专属回归礼包'
  },
  {
    id: 'sr2',
    name: '杨女士',
    level: '金卡',
    lastVisit: '95天前',
    totalConsume: 72000,
    tags: ['沉睡风险', '可召回', '光电常客'],
    consultant: '陈咨询师',
    viewTag: '需唤醒',
    viewSuggestion: '推送新品体验券，电话关怀跟进'
  },
  {
    id: 'sr3',
    name: '马女士',
    level: '银卡',
    lastVisit: '120天前',
    totalConsume: 32000,
    tags: ['沉睡风险', '已流失', '价格敏感'],
    consultant: '王咨询师',
    viewTag: '需唤醒',
    viewSuggestion: '推送限时折扣活动，降低到店门槛'
  },
  {
    id: 'sr4',
    name: '朱女士',
    level: '金卡',
    lastVisit: '80天前',
    totalConsume: 95000,
    tags: ['沉睡风险', '竞品咨询', '需重点挽回'],
    consultant: '张咨询师',
    viewTag: '需唤醒',
    viewSuggestion: '安排高端面诊，了解流失原因'
  },
  {
    id: 'sr5',
    name: '何女士',
    level: '普通会员',
    lastVisit: '150天前',
    totalConsume: 8000,
    tags: ['沉睡风险', '已流失', '低价值'],
    consultant: '赵咨询师',
    viewTag: '低优先',
    viewSuggestion: '群发唤醒活动，低成本触达'
  }
];

export const memberViewStats = {
  highValue: { count: 486, label: '高客单客户', desc: '年消费5万以上' },
  repurchasePotential: { count: 2340, label: '复购潜力客户', desc: '有复购意向或周期到期' },
  sleepingRisk: { count: 856, label: '沉睡风险客户', desc: '60天以上未到店' }
};
