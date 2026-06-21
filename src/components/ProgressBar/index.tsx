import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';
import classnames from 'classnames';

interface ProgressBarProps {
  percent: number;
  label?: string;
  showLabel?: boolean;
  showPercent?: boolean;
  color?: string;
  bgColor?: string;
  height?: number;
  radius?: number;
  striped?: boolean;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  label,
  showLabel = true,
  showPercent = true,
  color,
  bgColor,
  height = 16,
  radius = 8,
  striped = false,
  animated = false
}) => {
  const safePercent = Math.min(100, Math.max(0, percent));

  return (
    <View className={styles.progressWrap}>
      {(showLabel && label) || showPercent ? (
        <View className={styles.labelRow}>
          {showLabel && label && <Text className={styles.label}>{label}</Text>}
          {showPercent && <Text className={styles.percent}>{safePercent}%</Text>}
        </View>
      ) : null}
      <View
        className={styles.progressBar}
        style={{
          height: `${height}rpx`,
          borderRadius: `${radius}rpx`,
          backgroundColor: bgColor || '$color-bg-block'
        }}
      >
        <View
          className={classnames(
            styles.progressFill,
            striped && styles.striped,
            animated && styles.animated
          )}
          style={{
            width: `${safePercent}%`,
            background: color || '$gradient-primary',
            borderRadius: `${radius}rpx`
          }}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
