export interface StatItem {
  label: string;
  value: string | number;
  unit?: string;
  change?: number;
  changeType?: 'up' | 'down';
  color?: string;
}

export interface CustomerSegment {
  id: string;
  name: string;
  count: number;
  percentage: number;
  color: string;
  description: string;
  lastBehavior: string;
  suggestion: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: 'light' | 'surgery';
  interestedCount: number;
  conversionRate: number;
  avgPrice: number;
  trend: 'up' | 'down' | 'stable';
}

export interface CustomerItem {
  id: string;
  name: string;
  avatar?: string;
  level: string;
  lastVisit: string;
  totalConsume: number;
  tags: string[];
  consultant?: string;
}

export interface WarningItem {
  id: string;
  type: 'decline' | 'highValue' | 'channel' | 'consultant';
  title: string;
  description: string;
  level: 'high' | 'medium' | 'low';
  time: string;
  handled: boolean;
}

export interface OperationTask {
  id: string;
  type: 'birthday' | 'sleeping' | 'activity' | 'followUp';
  title: string;
  count: number;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ConsultantLoad {
  id: string;
  name: string;
  customerCount: number;
  followUpCount: number;
  loadLevel: 'low' | 'medium' | 'high' | 'overload';
  conversionRate: number;
}

export interface MemberLevelDetail {
  id: string;
  name: string;
  count: number;
  percentage: number;
  color: string;
  consumeContribution: string;
  avgConsume: string;
  recentActive: string;
  suggestion: string;
  icon: string;
}

export interface MemberViewCustomer extends CustomerItem {
  viewTag: string;
  viewSuggestion: string;
}

export interface ProjectCrowdDetail {
  packageId: string;
  customers: CustomerItem[];
  totalCount: number;
  recentBehavior: string;
  suggestion: string;
}

export interface ChannelQuality {
  id: string;
  name: string;
  customerCount: number;
  conversionRate: number;
  avgCustomerValue: number;
  cost: number;
  roi: number;
}
