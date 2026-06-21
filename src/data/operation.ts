import { CustomerItem, OperationTask, ConsultantLoad } from '@/types';

export const operationTasks: OperationTask[] = [
  {
    id: 'task-1',
    type: 'birthday',
    title: '生日关怀名单',
    count: 23,
    description: '本周过生日的客户，需发送祝福和专属优惠',
    priority: 'high'
  },
  {
    id: 'task-2',
    type: 'sleeping',
    title: '沉睡客户唤醒池',
    count: 156,
    description: '90天以上未到店客户，需启动唤醒计划',
    priority: 'medium'
  },
  {
    id: 'task-3',
    type: 'activity',
    title: '活动报名人群',
    count: 89,
    description: '已报名6月会员日活动的客户',
    priority: 'high'
  },
  {
    id: 'task-4',
    type: 'followUp',
    title: '咨询师跟进负荷',
    count: 0,
    description: '查看咨询师当前跟进客户数量和负荷状态',
    priority: 'medium'
  }
];

export const birthdayCustomers: CustomerItem[] = [
  {
    id: 'b1',
    name: '王女士',
    level: '钻石卡',
    lastVisit: '3天前',
    totalConsume: 128000,
    tags: ['生日', '高价值', '水光项目'],
    consultant: '李咨询师'
  },
  {
    id: 'b2',
    name: '张女士',
    level: '金卡',
    lastVisit: '1周前',
    totalConsume: 56000,
    tags: ['生日', '光电意向', '复购潜力'],
    consultant: '陈咨询师'
  },
  {
    id: 'b3',
    name: '刘女士',
    level: '银卡',
    lastVisit: '2周前',
    totalConsume: 18000,
    tags: ['生日', '新客', '眼修复咨询'],
    consultant: '王咨询师'
  },
  {
    id: 'b4',
    name: '陈女士',
    level: '钻石卡',
    lastVisit: '昨天',
    totalConsume: 256000,
    tags: ['生日', '高价值', '手术意向'],
    consultant: '李咨询师'
  },
  {
    id: 'b5',
    name: '赵女士',
    level: '金卡',
    lastVisit: '5天前',
    totalConsume: 72000,
    tags: ['生日', '抗衰需求', '高端项目'],
    consultant: '张咨询师'
  }
];

export const sleepingCustomers: CustomerItem[] = [
  {
    id: 's1',
    name: '孙女士',
    level: '金卡',
    lastVisit: '95天前',
    totalConsume: 68000,
    tags: ['沉睡', '高潜力', '水光常客'],
    consultant: '张咨询师'
  },
  {
    id: 's2',
    name: '周女士',
    level: '银卡',
    lastVisit: '120天前',
    totalConsume: 25000,
    tags: ['沉睡', '光电项目', '可唤醒'],
    consultant: '李咨询师'
  },
  {
    id: 's3',
    name: '吴女士',
    level: '钻石卡',
    lastVisit: '100天前',
    totalConsume: 180000,
    tags: ['沉睡', '高价值', '需重点唤醒'],
    consultant: '陈咨询师'
  }
];

export const consultantLoads: ConsultantLoad[] = [
  {
    id: 'c1',
    name: '李咨询师',
    customerCount: 86,
    followUpCount: 23,
    loadLevel: 'high',
    conversionRate: 28.5
  },
  {
    id: 'c2',
    name: '陈咨询师',
    customerCount: 72,
    followUpCount: 18,
    loadLevel: 'medium',
    conversionRate: 32.1
  },
  {
    id: 'c3',
    name: '王咨询师',
    customerCount: 58,
    followUpCount: 12,
    loadLevel: 'low',
    conversionRate: 25.6
  },
  {
    id: 'c4',
    name: '张咨询师',
    customerCount: 95,
    followUpCount: 28,
    loadLevel: 'overload',
    conversionRate: 22.3
  },
  {
    id: 'c5',
    name: '刘咨询师',
    customerCount: 65,
    followUpCount: 15,
    loadLevel: 'medium',
    conversionRate: 30.8
  },
  {
    id: 'c6',
    name: '赵咨询师',
    customerCount: 45,
    followUpCount: 8,
    loadLevel: 'low',
    conversionRate: 35.2
  },
  {
    id: 'c7',
    name: '孙咨询师',
    customerCount: 78,
    followUpCount: 20,
    loadLevel: 'high',
    conversionRate: 27.9
  },
  {
    id: 'c8',
    name: '周咨询师',
    customerCount: 52,
    followUpCount: 10,
    loadLevel: 'low',
    conversionRate: 31.5
  }
];

export const activityCustomers: CustomerItem[] = [
  {
    id: 'a1',
    name: '黄女士',
    level: '金卡',
    lastVisit: '1周前',
    totalConsume: 62000,
    tags: ['活动报名', '抗衰项目', 'VIP客户'],
    consultant: '李咨询师'
  },
  {
    id: 'a2',
    name: '林女士',
    level: '银卡',
    lastVisit: '2周前',
    totalConsume: 22000,
    tags: ['活动报名', '水光项目', '新会员'],
    consultant: '陈咨询师'
  },
  {
    id: 'a3',
    name: '许女士',
    level: '钻石卡',
    lastVisit: '3天前',
    totalConsume: 195000,
    tags: ['活动报名', '高价值', '手术意向'],
    consultant: '王咨询师'
  }
];
