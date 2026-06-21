import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';
import classnames from 'classnames';

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  change?: number;
  changeType?: 'up' | 'down';
  color?: string;
  gradient?: string;
  icon?: string;
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  unit,
  change,
  changeType,
  color,
  gradient,
  icon,
  onClick
}) => {
  const cardStyle = gradient ? { background: gradient } : {};

  return (
    <View
      className={classnames(styles.statCard, onClick && styles.clickable)}
      style={cardStyle}
      onClick={onClick}
    >
      <View className={styles.cardContent}>
        <Text className={styles.label}>{label}</Text>
        <View className={styles.valueRow}>
          <Text className={classnames(styles.value, color && styles.customColor)} style={color ? { color } : {}}>
            {value}
          </Text>
          {unit && <Text className={styles.unit}>{unit}</Text>}
        </View>
        {change !== undefined && (
          <View className={styles.changeRow}>
            <Text className={classnames(
              styles.change,
              changeType === 'up' ? styles.up : styles.down
            )}>
              {changeType === 'up' ? '↑' : '↓'} {Math.abs(change)}%
            </Text>
            <Text className={styles.changeLabel}>较昨日</Text>
          </View>
        )}
      </View>
      {icon && <View className={styles.iconWrap}>{icon}</View>}
    </View>
  );
};

export default StatCard;
