import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { usePullDownRefresh } from '@tarojs/taro';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
  memberLevelDetails,
  highValueCustomers,
  repurchasePotentialCustomers,
  sleepingRiskCustomers,
  memberViewStats
} from '@/data/member';

type ViewTab = 'highValue' | 'repurchase' | 'sleeping';

const MemberValuePage: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewTab>('highValue');

  usePullDownRefresh(() => {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });

  const viewTabs = [
    { key: 'highValue', label: '高客单' },
    { key: 'repurchase', label: '复购潜力' },
    { key: 'sleeping', label: '沉睡风险' }
  ];

  const formatMoney = (value: number) => {
    if (value >= 10000) {
      return (value / 10000).toFixed(1) + '万';
    }
    return value.toLocaleString();
  };

  const getViewTagClass = (tag: string) => {
    if (tag === '需保护') return 'protect';
    if (tag === '可升级') return 'upgrade';
    if (tag === '推套餐') return 'package';
    if (tag === '需唤醒') return 'awaken';
    return 'low';
  };

  const getActiveDot = (name: string) => {
    if (name === '钻石会员') return '';
    if (name === '金卡') return '';
    if (name === '银卡') return 'warn';
    if (name === '普通会员') return 'warn';
    return 'danger';
  };

  const getCurrentCustomers = () => {
    switch (activeView) {
      case 'highValue': return highValueCustomers;
      case 'repurchase': return repurchasePotentialCustomers;
      case 'sleeping': return sleepingRiskCustomers;
    }
  };

  const getViewSectionTitle = () => {
    switch (activeView) {
      case 'highValue': return '高客单客户保护';
      case 'repurchase': return '复购潜力客户';
      case 'sleeping': return '沉睡风险客户';
    }
  };

  const renderLevelList = () => (
    <View className={styles.levelList}>
      {memberLevelDetails.map((level) => (
        <View
          key={level.id}
          className={styles.levelCard}
          style={{ borderLeftColor: level.color }}
        >
          <View className={styles.levelHeader}>
            <View className={styles.levelLeft}>
              <Text className={styles.icon}>{level.icon}</Text>
              <Text className={styles.name}>{level.name}</Text>
            </View>
            <View style={{ display: 'flex', alignItems: 'baseline' }}>
              <Text className={styles.count} style={{ color: level.color }}>
                {level.count}
              </Text>
              <Text className={styles.percentage}>
                ({level.percentage}%)
              </Text>
            </View>
          </View>
          <View className={styles.levelMetrics}>
            <View className={styles.metric}>
              <Text className={styles.metricLabel}>消费贡献</Text>
              <Text className={styles.metricValue}>{level.consumeContribution}</Text>
            </View>
            <View className={styles.metric}>
              <Text className={styles.metricLabel}>人均消费</Text>
              <Text className={styles.metricValue}>{level.avgConsume}</Text>
            </View>
            <View className={styles.metric}>
              <Text className={styles.metricLabel}>会员占比</Text>
              <Text className={styles.metricValue}>{level.percentage}%</Text>
            </View>
          </View>
          <View className={styles.levelActive}>
            <View className={classnames(styles.dot, styles[getActiveDot(level.name)])} />
            <Text>{level.recentActive}</Text>
          </View>
          <View className={styles.levelSuggestion}>
            <Text>{level.suggestion}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderCustomerSection = () => {
    const customers = getCurrentCustomers();
    return (
      <View className={styles.sectionCard}>
        <View className={styles.sectionTitle}>
          <View className={styles.titleLeft}>
            <View className={styles.titleBar} />
            <Text className={styles.titleText}>{getViewSectionTitle()}</Text>
          </View>
          <Text className={styles.moreText}>共 {customers.length} 人</Text>
        </View>
        <View className={styles.customerList}>
          {customers.map((customer) => (
            <View key={customer.id} className={styles.customerItem}>
              <View className={styles.avatar}>
                <Text className={styles.avatarText}>{customer.name.charAt(0)}</Text>
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
                    <Text key={idx} className={styles.tag}>{tag}</Text>
                  ))}
                </View>
              </View>
              <View className={styles.rightCol}>
                <View className={classnames(styles.viewTag, styles[getViewTagClass(customer.viewTag)])}>
                  <Text>{customer.viewTag}</Text>
                </View>
                <Text className={styles.suggestion}>{customer.viewSuggestion}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <Text className={styles.headerTitle}>会员价值总览</Text>
        <View className={styles.statsRow}>
          <View className={styles.statItem}>
            <Text className={styles.value}>{memberViewStats.highValue.count}</Text>
            <Text className={styles.label}>{memberViewStats.highValue.label}</Text>
          </View>
          <View className={styles.statItem}>
            <Text className={styles.value}>{memberViewStats.repurchasePotential.count}</Text>
            <Text className={styles.label}>{memberViewStats.repurchasePotential.label}</Text>
          </View>
          <View className={styles.statItem}>
            <Text className={styles.value}>{memberViewStats.sleepingRisk.count}</Text>
            <Text className={styles.label}>{memberViewStats.sleepingRisk.label}</Text>
          </View>
        </View>
      </View>

      <View className={styles.content}>
        <View className={styles.viewTabs}>
          {viewTabs.map((tab) => (
            <View
              key={tab.key}
              className={classnames(
                styles.viewTab,
                activeView === tab.key && styles.active,
                activeView === tab.key && styles[tab.key]
              )}
              onClick={() => setActiveView(tab.key as ViewTab)}
            >
              <Text>{tab.label}</Text>
            </View>
          ))}
        </View>

        <View className={styles.sectionCard}>
          <View className={styles.sectionTitle}>
            <View className={styles.titleLeft}>
              <View className={styles.titleBar} />
              <Text className={styles.titleText}>会员等级分布</Text>
            </View>
          </View>
          {renderLevelList()}
        </View>

        {renderCustomerSection()}
      </View>
    </View>
  );
};

export default MemberValuePage;
