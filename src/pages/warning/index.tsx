import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { usePullDownRefresh } from '@tarojs/taro';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
  warningOverview,
  warningList,
  channelQualityList,
  highValueAtRisk
} from '@/data/warning';

type TabType = 'all' | 'decline' | 'channel' | 'highValue';

const WarningPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  usePullDownRefresh(() => {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });

  const tabs = [
    { key: 'all', label: '全部预警' },
    { key: 'decline', label: '成交下滑' },
    { key: 'channel', label: '渠道质量' },
    { key: 'highValue', label: '高客保护' }
  ];

  const getLevelText = (level: string) => {
    switch (level) {
      case 'high': return '高风险';
      case 'medium': return '中风险';
      default: return '低风险';
    }
  };

  const formatMoney = (value: number) => {
    if (value >= 10000) {
      return (value / 10000).toFixed(1) + '万';
    }
    return value.toLocaleString();
  };

  const getRoiClass = (roi: number) => {
    if (roi >= 4) return '';
    if (roi >= 3) return 'warning';
    return 'danger';
  };

  const getRoiWidth = (roi: number, maxRoi: number) => {
    return Math.min((roi / maxRoi) * 100, 100);
  };

  const maxRoi = Math.max(...channelQualityList.map(c => c.roi));

  const filteredWarnings = activeTab === 'all'
    ? warningList
    : warningList.filter(w => {
        if (activeTab === 'decline') return w.type === 'decline';
        if (activeTab === 'channel') return w.type === 'channel';
        if (activeTab === 'highValue') return w.type === 'highValue';
        return true;
      });

  const renderWarningList = () => (
    <View className={styles.warningList}>
      {filteredWarnings.map((warning) => (
        <View
          key={warning.id}
          className={classnames(
            styles.warningItem,
            styles[warning.level],
            warning.handled && styles.handled
          )}
        >
          {warning.handled && (
            <View className={styles.handledBadge}>
              <Text>已处理</Text>
            </View>
          )}
          <View className={styles.itemHeader}>
            <Text className={styles.title}>{warning.title}</Text>
            <View className={classnames(styles.level, styles[warning.level])}>
              <Text>{getLevelText(warning.level)}</Text>
            </View>
          </View>
          <Text className={styles.description}>{warning.description}</Text>
          <View className={styles.itemFooter}>
            <Text className={styles.time}>{warning.time}</Text>
            <Text className={styles.action}>
              {warning.handled ? '查看详情' : '立即处理 ›'}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderChannelSection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>渠道质量对比</Text>
        </View>
        <Text className={styles.moreText}>ROI排名</Text>
      </View>
      <View className={styles.channelList}>
        {channelQualityList
          .sort((a, b) => b.roi - a.roi)
          .map((channel, index) => (
            <View key={channel.id} className={styles.channelItem}>
              <View className={styles.itemHeader}>
                <Text className={styles.name}>
                  {index + 1}. {channel.name}
                </Text>
                <Text
                  className={classnames(
                    styles.roi,
                    getRoiClass(channel.roi) && styles[getRoiClass(channel.roi)]
                  )}
                >
                  ROI {channel.roi}
                </Text>
              </View>
              <View className={styles.stats}>
                <View className={styles.statItem}>
                  <Text className={styles.statLabel}>获客数</Text>
                  <Text className={styles.statValue}>{channel.customerCount}人</Text>
                </View>
                <View className={styles.statItem}>
                  <Text className={styles.statLabel}>转化率</Text>
                  <Text className={styles.statValue}>{channel.conversionRate}%</Text>
                </View>
                <View className={styles.statItem}>
                  <Text className={styles.statLabel}>客单价</Text>
                  <Text className={styles.statValue}>¥{formatMoney(channel.avgCustomerValue)}</Text>
                </View>
              </View>
              <View className={styles.roiBar}>
                <View
                  className={classnames(styles.roiFill, styles[getRoiClass(channel.roi)])}
                  style={{ width: `${getRoiWidth(channel.roi, maxRoi)}%` }}
                />
              </View>
            </View>
          ))}
      </View>
    </View>
  );

  const renderHighValueSection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>高价值客户保护</Text>
        </View>
        <Text className={styles.moreText}>共 {highValueAtRisk.length} 人</Text>
      </View>
      <View className={styles.highValueList}>
        {highValueAtRisk.map((customer) => (
          <View key={customer.id} className={styles.highValueItem}>
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
                  <Text key={idx} className={classnames(styles.tag, idx === 0 ? styles.warning : styles.normal)}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
            <View className={styles.action}>
              <View className={styles.actionBtn}>
                <Text>重点维护</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderDeclineSection = () => (
    <View className={classnames(styles.sectionCard, styles.declineSection)}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>成交下滑详情</Text>
        </View>
        <Text className={styles.moreText}>本周数据</Text>
      </View>
      <View className={styles.declineStats}>
        <View className={styles.declineStat}>
          <Text className={styles.label}>本周成交</Text>
          <Text className={styles.value}>128.5万</Text>
          <Text className={styles.change}>↓ 23.5% 较上周</Text>
          <Text className={styles.target}>目标：180万</Text>
        </View>
        <View className={styles.declineStat}>
          <Text className={styles.label}>新客成交</Text>
          <Text className={styles.value}>42.3万</Text>
          <Text className={styles.change}>↓ 18.2% 较上周</Text>
          <Text className={styles.target}>目标：60万</Text>
        </View>
        <View className={styles.declineStat}>
          <Text className={styles.label}>老客复购</Text>
          <Text className={styles.value}>86.2万</Text>
          <Text className={styles.change}>↓ 25.8% 较上周</Text>
          <Text className={styles.target}>目标：120万</Text>
        </View>
        <View className={styles.declineStat}>
          <Text className={styles.label}>客单价</Text>
          <Text className={styles.value}>2.85万</Text>
          <Text className={styles.change}>↓ 8.6% 较上周</Text>
          <Text className={styles.target}>目标：3.2万</Text>
        </View>
      </View>
    </View>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'all':
        return (
          <View className={styles.sectionCard}>
            <View className={styles.sectionTitle}>
              <View className={styles.titleLeft}>
                <View className={styles.titleBar} />
                <Text className={styles.titleText}>预警列表</Text>
              </View>
              <Text className={styles.moreText}>共 {warningList.length} 条</Text>
            </View>
            {renderWarningList()}
          </View>
        );
      case 'decline':
        return (
          <>
            {renderDeclineSection()}
            <View className={styles.sectionCard}>
              <View className={styles.sectionTitle}>
                <View className={styles.titleLeft}>
                  <View className={styles.titleBar} />
                  <Text className={styles.titleText}>相关预警</Text>
                </View>
              </View>
              {renderWarningList()}
            </View>
          </>
        );
      case 'channel':
        return (
          <>
            {renderChannelSection()}
            <View className={styles.sectionCard}>
              <View className={styles.sectionTitle}>
                <View className={styles.titleLeft}>
                  <View className={styles.titleBar} />
                  <Text className={styles.titleText}>渠道相关预警</Text>
                </View>
              </View>
              {renderWarningList()}
            </View>
          </>
        );
      case 'highValue':
        return (
          <>
            {renderHighValueSection()}
            <View className={styles.sectionCard}>
              <View className={styles.sectionTitle}>
                <View className={styles.titleLeft}>
                  <View className={styles.titleBar} />
                  <Text className={styles.titleText}>相关预警</Text>
                </View>
              </View>
              {renderWarningList()}
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View className={styles.page}>
      <View className={styles.overviewCards}>
        {warningOverview.map((item, index) => (
          <View key={index} className={classnames(styles.overviewCard, styles[item.level])}>
            <Text className={styles.count}>{item.value}</Text>
            <Text className={styles.label}>{item.label}</Text>
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

export default WarningPage;
