import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';
import classnames from 'classnames';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  onAction?: () => void;
  showMore?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  actionText,
  onAction,
  showMore = true
}) => {
  return (
    <View className={styles.sectionHeader}>
      <View className={styles.left}>
        <View className={styles.titleBar} />
        <Text className={styles.title}>{title}</Text>
        {subtitle && <Text className={styles.subtitle}>{subtitle}</Text>}
      </View>
      {showMore && (
        <View
          className={classnames(styles.right, onAction && styles.clickable)}
          onClick={onAction}
        >
          {actionText && <Text className={styles.actionText}>{actionText}</Text>}
          <Text className={styles.arrow}>›</Text>
        </View>
      )}
    </View>
  );
};

export default SectionHeader;
