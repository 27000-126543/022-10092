import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { usePullDownRefresh } from '@tarojs/taro';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
  lightVsSurgeryData,
  hotProjects,
  projectCrowdPackages,
  crowdPackageDetails
} from '@/data/project';

type ProjectCategory = 'all' | 'light' | 'surgery';

const ProjectPreferencePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  usePullDownRefresh(() => {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });

  const totalIntent = lightVsSurgeryData.reduce((sum, d) => sum + d.value, 0);

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

  const filteredProjects = activeCategory === 'all'
    ? hotProjects
    : hotProjects.filter(p => {
        if (activeCategory === 'light') return p.category === 'light';
        return p.category === 'surgery';
      });

  const formatPrice = (price: number) => {
    if (price >= 10000) {
      return (price / 10000).toFixed(1) + '万';
    }
    return price.toLocaleString();
  };

  const formatMoney = (value: number) => {
    if (value >= 10000) {
      return (value / 10000).toFixed(1) + '万';
    }
    return value.toLocaleString();
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↑';
      case 'down': return '↓';
      default: return '→';
    }
  };

  const getRankClass = (index: number) => {
    if (index === 0) return 'top1';
    if (index === 1) return 'top2';
    if (index === 2) return 'top3';
    return 'normal';
  };

  const togglePackage = (pkgId: string) => {
    setExpandedPackage(expandedPackage === pkgId ? null : pkgId);
  };

  const getCrowdDetail = (pkgId: string) => {
    return crowdPackageDetails.find(d => d.packageId === pkgId);
  };

  return (
    <View className={styles.page}>
      <View className={styles.content}>
        <View className={styles.sectionCard}>
          <View className={styles.sectionTitle}>
            <View className={styles.titleLeft}>
              <View className={styles.titleBar} />
              <Text className={styles.titleText}>轻医美 vs 手术类</Text>
            </View>
            <Text className={styles.subtitle}>意向客户分布</Text>
          </View>
          <View className={styles.categoryCompare}>
            <View className={styles.pieContainer}>
              <View
                className={styles.pie}
                style={{ background: getConicGradient(lightVsSurgeryData) }}
              />
              <View className={styles.pieCenter}>
                <Text className={styles.centerValue}>{totalIntent.toLocaleString()}</Text>
                <Text className={styles.centerLabel}>意向总人数</Text>
              </View>
            </View>
            <View className={styles.categoryLegend}>
              {lightVsSurgeryData.map((item, index) => (
                <View key={index} className={styles.categoryItem}>
                  <View className={styles.itemHeader}>
                    <View
                      className={styles.dot}
                      style={{ backgroundColor: item.color }}
                    />
                    <Text className={styles.name}>{item.name}</Text>
                    <Text className={styles.count} style={{ color: item.color }}>
                      {item.value}人
                    </Text>
                  </View>
                  <View className={styles.itemMeta}>
                    <Text className={styles.percent}>
                      占比 {((item.value / totalIntent) * 100).toFixed(1)}%
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className={styles.sectionCard}>
          <View className={styles.sectionTitle}>
            <View className={styles.titleLeft}>
              <View className={styles.titleBar} />
              <Text className={styles.titleText}>热门项目排行</Text>
            </View>
          </View>
          <View className={styles.projectTabs}>
            <View
              className={classnames(styles.projectTab, activeCategory === 'all' && styles.active)}
              onClick={() => setActiveCategory('all')}
            >
              <Text>全部</Text>
            </View>
            <View
              className={classnames(styles.projectTab, activeCategory === 'light' && styles.active)}
              onClick={() => setActiveCategory('light')}
            >
              <Text>轻医美</Text>
            </View>
            <View
              className={classnames(styles.projectTab, activeCategory === 'surgery' && styles.active)}
              onClick={() => setActiveCategory('surgery')}
            >
              <Text>手术类</Text>
            </View>
          </View>
          <View className={styles.projectList}>
            {filteredProjects.map((project, index) => (
              <View key={project.id} className={styles.projectItem}>
                <View className={classnames(styles.rank, styles[getRankClass(index)])}>
                  <Text>{index + 1}</Text>
                </View>
                <View className={styles.info}>
                  <Text className={styles.name}>{project.name}</Text>
                  <View className={styles.meta}>
                    <View className={styles.metaItem}>
                      <Text>意向 {project.interestedCount}人</Text>
                    </View>
                    <View className={styles.metaItem}>
                      <Text>转化率 {project.conversionRate}%</Text>
                    </View>
                  </View>
                </View>
                <View className={styles.right}>
                  <Text className={styles.price}>¥{formatPrice(project.avgPrice)}</Text>
                  <Text className={styles.conversion}>客单价</Text>
                </View>
                <View className={classnames(styles.trend, styles[project.trend])}>
                  <Text>{getTrendIcon(project.trend)}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className={styles.sectionCard}>
          <View className={styles.sectionTitle}>
            <View className={styles.titleLeft}>
              <View className={styles.titleBar} />
              <Text className={styles.titleText}>项目人群包</Text>
            </View>
            <Text className={styles.subtitle}>精准推荐</Text>
          </View>
          <View className={styles.crowdPackages}>
            {projectCrowdPackages.map((pkg) => {
              const detail = getCrowdDetail(pkg.id);
              const isExpanded = expandedPackage === pkg.id;
              return (
                <View key={pkg.id}>
                  <View
                    className={styles.crowdCard}
                    style={{
                      background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}dd 100%)`
                    }}
                    onClick={() => togglePackage(pkg.id)}
                  >
                    <View className={styles.cardHeader}>
                      <Text className={styles.name}>{pkg.name}</Text>
                      <Text className={styles.count}>{pkg.count}人</Text>
                    </View>
                    <Text className={styles.cardDesc}>{pkg.description}</Text>
                    <View className={styles.cardMeta}>
                      <Text className={styles.behavior}>{pkg.lastBehavior}</Text>
                      <Text className={styles.action}>
                        {isExpanded ? '收起详情' : '查看详情'} {isExpanded ? '▲' : '›'}
                      </Text>
                    </View>
                  </View>
                  {isExpanded && detail && (
                    <View className={styles.crowdDetail}>
                      <View className={styles.detailSummary}>
                        <View className={styles.summaryItem}>
                          <Text className={styles.summaryLabel}>人群规模</Text>
                          <Text className={styles.summaryValue} style={{ color: pkg.color }}>
                            {detail.totalCount}人
                          </Text>
                        </View>
                        <View className={styles.summaryItem}>
                          <Text className={styles.summaryLabel}>最近行为</Text>
                          <Text className={styles.summaryValue}>{detail.recentBehavior}</Text>
                        </View>
                        <View className={styles.summaryItem}>
                          <Text className={styles.summaryLabel}>建议动作</Text>
                          <Text className={styles.summaryValue} style={{ color: pkg.color }}>
                            {detail.suggestion}
                          </Text>
                        </View>
                      </View>
                      <View className={styles.detailTitle}>
                        <Text className={styles.detailTitleText}>推荐客户明细</Text>
                        <Text className={styles.detailCount}>共 {detail.customers.length} 人</Text>
                      </View>
                      <View className={styles.crowdCustomers}>
                        {detail.customers.map((customer) => (
                          <View key={customer.id} className={styles.customerItem}>
                            <View className={styles.avatar}>
                              <Text className={styles.avatarText}>
                                {customer.name.charAt(0)}
                              </Text>
                            </View>
                            <View className={styles.customerInfo}>
                              <View className={styles.customerNameRow}>
                                <Text className={styles.customerName}>{customer.name}</Text>
                                <Text className={styles.customerLevel}>{customer.level}</Text>
                              </View>
                              <Text className={styles.customerMeta}>
                                累计消费 ¥{formatMoney(customer.totalConsume)} · {customer.lastVisit}到店
                              </Text>
                              <View className={styles.customerTags}>
                                {customer.tags.slice(0, 3).map((tag, idx) => (
                                  <Text key={idx} className={styles.customerTag}>{tag}</Text>
                                ))}
                              </View>
                            </View>
                            <View className={styles.consultantCol}>
                              <Text className={styles.consultantLabel}>负责咨询师</Text>
                              <Text className={styles.consultantName}>{customer.consultant}</Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProjectPreferencePage;
