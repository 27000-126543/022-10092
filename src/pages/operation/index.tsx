import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { usePullDownRefresh } from '@tarojs/taro';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
  operationTasks,
  birthdayCustomers,
  sleepingCustomers,
  activityCustomers,
  consultantLoads
} from '@/data/operation';

type TabType = 'birthday' | 'sleeping' | 'activity' | 'consultant';

const OperationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('birthday');

  usePullDownRefresh(() => {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });

  const tabs = [
    { key: 'birthday', label: '生日关怀' },
    { key: 'sleeping', label: '沉睡唤醒' },
    { key: 'activity', label: '活动报名' },
    { key: 'consultant', label: '咨询师负荷' }
  ];

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return '高优先级';
      case 'medium': return '中优先级';
      default: return '低优先级';
    }
  };

  const formatMoney = (value: number) => {
    if (value >= 10000) {
      return (value / 10000).toFixed(1) + '万';
    }
    return value.toLocaleString();
  };

  const getLoadLevelText = (level: string) => {
    switch (level) {
      case 'low': return '空闲';
      case 'medium': return '正常';
      case 'high': return '繁忙';
      case 'overload': return '超负荷';
      default: return '正常';
    }
  };

  const renderCustomerList = (
    customers: typeof birthdayCustomers,
    showBadge = false,
    badgeText = ''
  ) => (
    <View className={styles.customerList}>
      {customers.map((customer) => (
        <View key={customer.id} className={styles.customerItem}>
          <View className={styles.avatar}>
            <Text className={styles.avatarText}>{customer.name.charAt(0)}</Text>
            {showBadge && (
              <View className={styles.avatarBadge}>
                <Text>{badgeText}</Text>
              </View>
            )}
          </View>
          <View className={styles.info}>
            <View className={styles.nameRow}>
              <Text className={styles.name}>{customer.name}</Text>
              <Text className={styles.level}>{customer.level}</Text>
            </View>
            <Text className={styles.meta}>
              累计消费 ¥{formatMoney(customer.totalConsume)} · {customer.lastVisit}到店
            </Text>
            <View className={styles.tags}>
              {customer.tags.slice(0, 3).map((tag, idx) => (
                <Text key={idx} className={classnames(styles.tag)}>
                  {tag}
                </Text>
              ))}
            </View>
          </View>
          <View className={styles.action}>
            <View className={styles.actionBtn}>
              <Text>跟进</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderBirthdaySection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>本周生日客户</Text>
        </View>
        <View className={styles.moreText}>
          <Text>共 {birthdayCustomers.length} 人</Text>
        </View>
      </View>
      {renderCustomerList(birthdayCustomers, true, '🎂')}
    </View>
  );

  const renderSleepingSection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>沉睡客户唤醒池</Text>
        </View>
        <View className={styles.moreText}>
          <Text>共 156 人</Text>
        </View>
      </View>
      {renderCustomerList(sleepingCustomers)}
    </View>
  );

  const renderActivitySection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>6月会员日活动报名</Text>
        </View>
        <View className={styles.moreText}>
          <Text>已报名 89 人</Text>
        </View>
      </View>
      {renderCustomerList(activityCustomers)}
    </View>
  );

  const renderConsultantSection = () => {
    const totalCustomers = consultantLoads.reduce((sum, c) => sum + c.customerCount, 0);
    const avgLoad = Math.round(totalCustomers / consultantLoads.length);
    const overloadCount = consultantLoads.filter(c => c.loadLevel === 'overload').length;

    return (
      <View className={styles.sectionCard}>
        <View className={styles.sectionTitle}>
          <View className={styles.titleLeft}>
            <View className={styles.titleBar} />
            <Text className={styles.titleText}>咨询师跟进负荷</Text>
          </View>
          <View className={styles.moreText}>
            <Text>共 {consultantLoads.length} 人</Text>
          </View>
        </View>
        <View className={styles.loadSummary}>
          <View className={styles.loadStat}>
            <Text className={styles.value}>{totalCustomers}</Text>
            <Text className={styles.label}>总跟进客户</Text>
          </View>
          <View className={styles.loadStat}>
            <Text className={styles.value}>{avgLoad}</Text>
            <Text className={styles.label}>人均负荷</Text>
          </View>
          <View className={classnames(styles.loadStat, styles.highlight)}>
            <Text className={styles.value}>{overloadCount}</Text>
            <Text className={styles.label}>超负荷</Text>
          </View>
        </View>
        <View className={styles.consultantList}>
          {consultantLoads.map((consultant) => (
            <View key={consultant.id} className={styles.consultantItem}>
              <View className={styles.avatar}>
                <Text className={styles.avatarText}>
                  {consultant.name.charAt(0)}
                </Text>
              </View>
              <View className={styles.info}>
                <Text className={styles.name}>{consultant.name}</Text>
                <View className={styles.stats}>
                  <View className={styles.statItem}>
                    <Text className={styles.statValue}>{consultant.customerCount}</Text>
                    <Text>客户</Text>
                  </View>
                  <View className={styles.statItem}>
                    <Text className={styles.statValue}>{consultant.followUpCount}</Text>
                    <Text>待跟进</Text>
                  </View>
                </View>
              </View>
              <View className={styles.loadStatus}>
                <View className={classnames(styles.loadLevel, styles[consultant.loadLevel])}>
                  <Text>{getLoadLevelText(consultant.loadLevel)}</Text>
                </View>
                <Text className={styles.conversion}>转化率 {consultant.conversionRate}%</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'birthday':
        return renderBirthdaySection();
      case 'sleeping':
        return renderSleepingSection();
      case 'activity':
        return renderActivitySection();
      case 'consultant':
        return renderConsultantSection();
      default:
        return null;
    }
  };

  return (
    <View className={styles.page}>
      <View className={styles.taskOverview}>
        {operationTasks.map((task) => (
          <View key={task.id} className={styles.taskCard}>
            <Text className={styles.taskName}>{task.title}</Text>
            <Text className={styles.taskCount}>{task.count || '—'}</Text>
            <Text className={styles.taskDesc}>{task.description}</Text>
            <View className={classnames(styles.priority, styles[task.priority])}>
              <Text>{getPriorityText(task.priority)}</Text>
            </View>
          </View>
        ))}
      </View>

      <View className={styles.tabBar}>
        {tabs.map((tab) => (
          <View
            key={tab.key}
            className={classnames(styles.tabItem, activeTab === tab.key && styles.active)}
            onClick={() => setActiveTab(tab.key as TabType)}
          >
            <Text>{tab.label}</Text>
          </View>
        ))}
      </View>

      <View className={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
};

export default OperationPage;
