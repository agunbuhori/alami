import React from 'react';
import {Animated, Easing, Pressable, StyleSheet} from 'react-native';

type Props = {
  duration?: number;
  value: number;
  maxValue: number;
};

const Progress: React.FC<Props> = ({
  duration = 5000,
  value = 40,
  maxValue = 100,
}) => {
  const [animatedProgress] = React.useState(new Animated.Value(0));
  const animationProgress = Animated.timing(animatedProgress, {
    toValue: 1,
    duration: duration,
    easing: Easing.ease,
    useNativeDriver: false,
  });

  React.useEffect(() => {
    handleOnPressOut();
  });

  const handleOnPressIn = () => {
    animationProgress.stop();
  };

  const handleOnPressOut = () => {
    animationProgress.start();
  };

  const getPercentage = () => {
    const progress = value > maxValue ? maxValue : value;
    return (progress / maxValue) * 100;
  };

  return (
    <Pressable
      style={styles.progressBackground}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}>
      <Animated.View
        style={{
          ...styles.progress,
          width: animatedProgress.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', `${getPercentage()}%`],
          }),
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  progressBackground: {
    height: 20,
    width: '100%',
    backgroundColor: '#49c742',
    opacity: 0.5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#13700f',
  },
});

export default Progress;
