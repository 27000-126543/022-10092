import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

interface PieDataItem {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieDataItem[];
  size?: number;
  showLegend?: boolean;
  centerText?: string;
  centerSubtext?: string;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  size = 280,
  showLegend = true,
  centerText,
  centerSubtext
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const conicGradient = data.reduce((acc, item, index) => {
    const startPercent = data.slice(0, index).reduce((s, i) => s + i.value, 0) / total * 100;
    const endPercent = (startPercent + item.value / total * 100);
    return `${acc}${item.color} ${startPercent}% ${endPercent}%, `;
  }, '');

  return (
    <View className={styles.pieChart}>
      <View
        className={styles.pieContainer}
        style={{ width: `${size}rpx`, height: `${size}rpx` }}
      >
        <View
          className={styles.pie}
          style={{
            width: `${size}rpx`,
            height: `${size}rpx`,
            background: `conic-gradient(${conicGradient.slice(0, -2)})`
          }}
        />
        <View className={styles.centerContent}>
          {centerText && <Text className={styles.centerText}>{centerText}</Text>}
          {centerSubtext && <Text className={styles.centerSubtext}>{centerSubtext}</Text>}
        </View>
      </View>
      {showLegend && (
        <View className={styles.legend}>
          {data.map((item, index) => (
            <View key={index} className={styles.legendItem}>
              <View
                className={styles.legendDot}
                style={{ backgroundColor: item.color }}
              />
              <Text className={styles.legendName}>{item.name}</Text>
              <Text className={styles.legendValue}>
                {((item.value / total) * 100).toFixed(1)}%
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default PieChart;
