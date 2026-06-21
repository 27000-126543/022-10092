import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { usePullDownRefresh } from '@tarojs/taro';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
  newOldCustomerData,
  amountSegments,
  visitFrequencySegments,
  repurchaseCycleData
} from '@/data/customer';

type TabType = 'newOld' | 'amount' | 'frequency' | 'repurchase';

const CustomerSegmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('newOld');

  usePullDownRefresh(() => {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });

  const tabs = [
    { key: 'newOld', label: '新老客' },
    { key: 'amount', label: '消费额' },
    { key: 'frequency', label: '到店频次' },
    { key: 'repurchase', label: '复购周期' }
  ];

  const totalCustomers = 12586;

  const getConicGradient = (data: { name: string; value: number; color: string }[]) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let gradient = '';
    let currentPercent = 0;

    data.forEach((item) => {
      const itemPercent = (item.value / total) * 100;
      gradient += `${item.color} ${currentPercent}% ${currentPercent + itemPercent}%, `;
      currentPercent += itemPercent;
    });

    return `conic-gradient(${gradient.slice(0, -2)})`;
  };

  const renderNewOldSection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>新客老客占比</Text>
        </View>
        <Text className={styles.subtitle}>共 {totalCustomers.toLocaleString()} 人</Text>
      </View>
      <View className={styles.pieSection}>
        <View className={styles.pieContainer}>
          <View
            className={styles.pie}
            style={{ background: getConicGradient(newOldCustomerData) }}
          />
          <View className={styles.pieCenter}>
            <Text className={styles.centerValue}>{totalCustomers.toLocaleString()}</Text>
            <Text className={styles.centerLabel}>总客户数</Text>
          </View>
        </View>
        <View className={styles.pieLegend}>
          {newOldCustomerData.map((item, index) => (
            <View key={index} className={styles.legendItem}>
              <View
                className={styles.legendDot}
                style={{ backgroundColor: item.color }}
              />
              <Text className={styles.legendName}>{item.name}</Text>
              <Text className={styles.legendValue}>{item.value}人</Text>
              <Text className={styles.legendPercent}>
                {((item.value / totalCustomers) * 100).toFixed(1)}%
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  const renderSegmentList = (segments: typeof amountSegments) => (
    <View className={styles.segmentList}>
      {segments.map((segment) => (
        <View
          key={segment.id}
          className={styles.segmentItem}
          style={{ borderLeftColor: segment.color }}
        >
          <View className={styles.itemHeader}>
            <View className={styles.nameRow}>
              <Text className={styles.name}>{segment.name}</Text>
              <Text className={styles.count}>{segment.count}人</Text>
            </View>
            <Text className={styles.percent} style={{ color: segment.color }}>
              {segment.percentage}%
            </Text>
          </View>
          <View className={styles.progressBar}>
            <View
              className={styles.progressFill}
              style={{
                width: `${segment.percentage * 2}%`,
                background: `linear-gradient(90deg, ${segment.color}80 0%, ${segment.color} 100%)`
              }}
            />
          </View>
          <Text className={styles.itemDesc}>{segment.description}</Text>
          <View className={styles.itemMeta}>
            <Text className={styles.behavior}>最近行为：{segment.lastBehavior}</Text>
            <Text className={styles.suggestion}>{segment.suggestion}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderAmountSection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>消费金额分档</Text>
        </View>
        <Text className={styles.subtitle}>按累计消费金额</Text>
      </View>
      {renderSegmentList(amountSegments)}
    </View>
  );

  const renderFrequencySection = () => (
    <View className={styles.sectionCard}>
      <View className={styles.sectionTitle}>
        <View className={styles.titleLeft}>
          <View className={styles.titleBar} />
          <Text className={styles.titleText}>到店频次分档</Text>
        </View>
        <Text className={styles.subtitle}>按到店频率</Text>
      </View>
      {renderSegmentList(visitFrequencySegments)}
    </View>
  );

  const renderRepurchaseSection = () => {
    const maxValue = Math.max(...repurchaseCycleData.map(d => d.value));
    return (
      <View className={styles.sectionCard}>
        <View className={styles.sectionTitle}>
          <View className={styles.titleLeft}>
            <View className={styles.titleBar} />
            <Text className={styles.titleText}>复购周期识别</Text>
          </View>
          <Text className={styles.subtitle}>首次消费后复购时间</Text>
        </View>
        <View className={styles.barChart}>
          {repurchaseCycleData.map((item, index) => (
            <View key={index} className={styles.barItem}>
              <Text className={styles.barLabel}>{item.name}</Text>
              <View className={styles.barTrack}>
                <View
                  className={styles.barFill}
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    background: `linear-gradient(90deg, ${item.color}80 0%, ${item.color} 100%)`
                  }}
                />
              </View>
              <Text className={styles.barCount}>{item.value}人</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'newOld':
        return (
          <>
            {renderNewOldSection()}
            {renderAmountSection()}
          </>
        );
      case 'amount':
        return renderAmountSection();
      case 'frequency':
        return renderFrequencySection();
      case 'repurchase':
        return renderRepurchaseSection();
      default:
        return null;
    }
  };

  return (
    <View className={styles.page}>
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

export default CustomerSegmentPage;
