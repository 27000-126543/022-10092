import { ProjectItem, CustomerItem, CustomerSegment } from '@/types';

export const lightVsSurgeryData = [
  { name: '轻医美意向', value: 7856, color: '#0FC6C2' },
  { name: '手术类意向', value: 4730, color: '#722ED1' }
];

export const projectCategories = [
  {
    id: 'light',
    name: '轻医美',
    color: '#0FC6C2',
    count: 7856,
    projects: ['水光针', '光子嫩肤', '热玛吉', '超声炮', '玻尿酸', '肉毒素']
  },
  {
    id: 'surgery',
    name: '手术类',
    color: '#722ED1',
    count: 4730,
    projects: ['眼综合', '鼻综合', '隆胸', '吸脂', '拉皮', '修复手术']
  }
];

export const hotProjects: ProjectItem[] = [
  {
    id: 'p1',
    name: '水光针',
    category: 'light',
    interestedCount: 3256,
    conversionRate: 35.2,
    avgPrice: 2800,
    trend: 'up'
  },
  {
    id: 'p2',
    name: '光子嫩肤',
    category: 'light',
    interestedCount: 2890,
    conversionRate: 28.6,
    avgPrice: 1500,
    trend: 'up'
  },
  {
    id: 'p3',
    name: '眼综合',
    category: 'surgery',
    interestedCount: 1650,
    conversionRate: 18.5,
    avgPrice: 18000,
    trend: 'stable'
  },
  {
    id: 'p4',
    name: '热玛吉',
    category: 'light',
    interestedCount: 1580,
    conversionRate: 22.3,
    avgPrice: 15000,
    trend: 'up'
  },
  {
    id: 'p5',
    name: '鼻综合',
    category: 'surgery',
    interestedCount: 1320,
    conversionRate: 15.8,
    avgPrice: 25000,
    trend: 'down'
  },
  {
    id: 'p6',
    name: '超声炮',
    category: 'light',
    interestedCount: 1280,
    conversionRate: 25.6,
    avgPrice: 8800,
    trend: 'up'
  }
];

export const projectCrowdPackages: CustomerSegment[] = [
  {
    id: 'pkg-1',
    name: '水光推荐人群',
    count: 2156,
    percentage: 17.1,
    color: '#0FC6C2',
    description: '皮肤干燥、暗沉、有补水需求',
    lastBehavior: '最近30天咨询过皮肤项目',
    suggestion: '推水润年卡套餐，3次水光+1次光子'
  },
  {
    id: 'pkg-2',
    name: '光电推荐人群',
    count: 1820,
    percentage: 14.5,
    color: '#722ED1',
    description: '有抗衰需求、皮肤松弛',
    lastBehavior: '咨询过热玛吉/超声炮等项目',
    suggestion: '推光电组合疗程，超声炮+热玛吉'
  },
  {
    id: 'pkg-3',
    name: '眼鼻修复人群',
    count: 568,
    percentage: 4.5,
    color: '#FF5722',
    description: '有整形史、对效果不满意',
    lastBehavior: '咨询过修复类项目',
    suggestion: '安排专家面诊，定制修复方案'
  },
  {
    id: 'pkg-4',
    name: '抗衰刚需人群',
    count: 1340,
    percentage: 10.6,
    color: '#165DFF',
    description: '35岁以上，关注年轻化项目',
    lastBehavior: '多次浏览抗衰项目',
    suggestion: '推全面部抗衰方案'
  }
];

export const waterLightCustomers: CustomerItem[] = [
  {
    id: 'w1',
    name: '李女士',
    level: '金卡',
    lastVisit: '5天前',
    totalConsume: 68000,
    tags: ['干性皮肤', '暗沉', '水光意向'],
    consultant: '张咨询师'
  },
  {
    id: 'w2',
    name: '王女士',
    level: '银卡',
    lastVisit: '2周前',
    totalConsume: 25000,
    tags: ['补水需求', '首次体验'],
    consultant: '李咨询师'
  },
  {
    id: 'w3',
    name: '张女士',
    level: '钻石卡',
    lastVisit: '昨天',
    totalConsume: 156000,
    tags: ['高端客户', '定期水光'],
    consultant: '陈咨询师'
  }
];

export const projectRankingData = [
  { name: '水光针', value: 3256, color: '#0FC6C2' },
  { name: '光子嫩肤', value: 2890, color: '#165DFF' },
  { name: '眼综合', value: 1650, color: '#722ED1' },
  { name: '热玛吉', value: 1580, color: '#FF5722' },
  { name: '鼻综合', value: 1320, color: '#FF7D00' }
];
