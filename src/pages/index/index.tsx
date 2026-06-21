import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { usePullDownRefresh } from '@tarojs/taro';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
  overviewStats,
  toConvertCustomers,
  highValueChange,
  quickActions
} from '@/data/overview';

const OverviewPage: React.FC = () => {
  usePullDownRefresh(() => {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });

  const getTodayDate = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekDay = weekDays[now.getDay()];
    return `${month}月${day}日 ${weekDay}`;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '早上好，院长';
    if (hour < 18) return '下午好，院长';
    return '晚上好，院长';
  };

  const formatMoney = (value: number) => {
    if (value >= 10000) {
      return (value / 10000).toFixed(1) + '万';
    }
    return value.toLocaleString();
  };

  const handleQuickAction = (actionId: string) => {
    const tabMap: Record<string, number> = {
      '1': 3,
      '2': 3,
      '3': 3,
      '4': 3
    };
    const index = tabMap[actionId];
    if (index !== undefined) {
      Taro.switchTab({
        url: '/pages/operation/index'
      });
    }
  };

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.greeting}>
          <Text className={styles.greetingText}>{getGreeting()}</Text>
          <Text className={styles.dateText}>{getTodayDate()}</Text>
        </View>
      </View>

      <View className={styles.content}>
        <View className={styles.statsGrid}>
          {overviewStats.map((stat, index) => (
            <View key={index} className={classnames(styles.statCard, styles.sectionCard)}>
              <Text className={styles.label}>{stat.label}</Text>
              <View className={styles.valueRow}>
                <Text className={styles.value}>{stat.value}</Text>
                {stat.unit && <Text className={styles.unit}>{stat.unit}</Text>}
              </View>
              {stat.change !== undefined && (
                <View className={styles.changeRow}>
                  <Text className={classnames(
                    styles.change,
                    stat.changeType === 'up' ? styles.up : styles.down
                  )}>
                    {stat.changeType === 'up' ? '↑' : '↓'} {Math.abs(stat.change)}%
                  </Text>
                  <Text className={styles.changeLabel}>较昨日</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View className={styles.sectionCard}>
          <View className={styles.sectionTitle}>
            <View className={styles.titleLeft}>
              <View className={styles.titleBar} />
              <Text className={styles.titleText}>今日待转化人群</Text>
            </View>
            <View className={styles.moreText}>
              <Text>查看全部</Text>
              <Text>›</Text>
            </View>
          </View>
          <View className={styles.customerList}>
            {toConvertCustomers.map((customer) => (
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
                    {customer.tags.map((tag, idx) => (
                      <Text key={idx} className={styles.tag}>{tag}</Text>
                    ))}
                  </View>
                </View>
                <View className={styles.consultant}>
                  <Text className={styles.consultantLabel}>咨询师</Text>
                  <Text className={styles.consultantName}>{customer.consultant}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className={styles.sectionCard}>
          <View className={styles.sectionTitle}>
            <View className={styles.titleLeft}>
              <View className={styles.titleBar} />
              <Text className={styles.titleText}>高价值客户变化</Text>
            </View>
          </View>
          <View className={styles.highValueCards}>
            {highValueChange.map((item) => (
              <View key={item.id} className={styles.highValueItem}>
                <View
                  className={styles.iconBox}
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <Text>●</Text>
                </View>
                <View className={styles.info}>
                  <Text className={styles.title}>{item.name}</Text>
                  <Text className={styles.desc}>{item.description}</Text>
                </View>
                <View className={styles.countBox}>
                  <Text className={styles.count} style={{ color: item.color }}>
                    {item.count}
                  </Text>
                  <Text className={styles.unit}>人</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className={styles.sectionCard}>
          <View className={styles.sectionTitle}>
            <View className={styles.titleLeft}>
              <View className={styles.titleBar} />
              <Text className={styles.titleText}>快捷运营入口</Text>
            </View>
          </View>
          <View className={styles.quickActions}>
            {quickActions.map((action) => (
              <View
                key={action.id}
                className={styles.quickActionItem}
                onClick={() => handleQuickAction(action.id)}
              >
                <Text className={styles.icon}>{action.icon}</Text>
                <Text className={styles.name}>{action.name}</Text>
                <Text
                  className={styles.badge}
                  style={{ backgroundColor: `${action.color}15`, color: action.color }}
                >
                  {action.count}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OverviewPage;
