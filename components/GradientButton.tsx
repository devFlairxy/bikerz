import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({
  icon,
  text,
  isIcon,
  otherStyles,
  containerStyles,
  textStyles,
  isDefault,
  gradientStyles,
  iconStyles
}: any) => {
  return (
    <View className={containerStyles}
      style={{
        shadowColor: 'black',
        shadowOffset: {
          width: 4,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.5,
      }}
    >
      <TouchableOpacity>
        <LinearGradient
          colors={isDefault ? ['#34C8E8', '#4E4AF2'] : gradientStyles}
          className={`${otherStyles} rounded-lg justify-center items-center`}
        >
          {icon && <Image source={icon} className={iconStyles} resizeMode="contain" />}
          {text && <Text className={`${textStyles} text-white`}>{text}</Text>}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default GradientButton;
