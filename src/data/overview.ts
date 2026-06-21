import { StatItem, CustomerItem, CustomerSegment } from '@/types';

export const overviewStats: StatItem[] = [
  {
    label: '总客户数',
    value: '12,586',
    unit: '人',
    change: 2.3,
    changeType: 'up'
  },
  {
    label: '今日到店',
    value: '68',
    unit: '人',
    change: 15.2,
    changeType: 'up'
  },
  {
    label: '今日成交',
    value: '28',
    unit: '人',
    change: 8.5,
    changeType: 'up'
  },
  {
    label: '今日业绩',
    value: '38.6',
    unit: '万',
    change: 12.1,
    changeType: 'up'
  }
];

export const toConvertCustomers: CustomerItem[] = [
  {
    id: '1',
    name: '王女士',
    level: '钻石卡',
    lastVisit: '昨天',
    totalConsume: 128000,
    tags: ['高意向', '水光项目', '待跟进'],
    consultant: '李咨询师'
  },
  {
    id: '2',
    name: '张女士',
    level: '金卡',
    lastVisit: '3天前',
    totalConsume: 56000,
    tags: ['光电意向', '复购潜力'],
    consultant: '陈咨询师'
  },
  {
    id: '3',
    name: '刘女士',
    level: '银卡',
    lastVisit: '今天',
    totalConsume: 18000,
    tags: ['新客', '眼修复咨询'],
    consultant: '王咨询师'
  },
  {
    id: '4',
    name: '陈女士',
    level: '钻石卡',
    lastVisit: '5天前',
    totalConsume: 256000,
    tags: ['高价值', '手术意向', '需重点跟进'],
    consultant: '李咨询师'
  },
  {
    id: '5',
    name: '赵女士',
    level: '金卡',
    lastVisit: '昨天',
    totalConsume: 72000,
    tags: ['抗衰需求', '高端项目'],
    consultant: '张咨询师'
  }
];

export const highValueChange: CustomerSegment[] = [
  {
    id: '1',
    name: '新增高价值客户',
    count: 12,
    percentage: 0,
    color: '#FF5722',
    description: '本月新增消费10万+客户',
    lastBehavior: '最近7天',
    suggestion: '安排专属顾问跟进'
  },
  {
    id: '2',
    name: '高价值客户流失预警',
    count: 8,
    percentage: 0,
    color: '#F53F3F',
    description: '连续60天未到店的高价值客户',
    lastBehavior: '60天前',
    suggestion: '启动唤醒计划'
  },
  {
    id: '3',
    name: '高价值客户升级',
    count: 15,
    percentage: 0,
    color: '#00B42A',
    description: '本月从金卡升级为钻石卡',
    lastBehavior: '最近30天',
    suggestion: '发送升级权益通知'
  }
];

export const quickActions = [
  { id: '1', name: '生日关怀', icon: '🎂', count: 23, color: '#FF7D00' },
  { id: '2', name: '沉睡唤醒', icon: '😴', count: 156, color: '#722ED1' },
  { id: '3', name: '活动报名', icon: '🎉', count: 89, color: '#0FC6C2' },
  { id: '4', name: '咨询师负荷', icon: '👩‍💼', count: '6/8', color: '#165DFF' }
];
