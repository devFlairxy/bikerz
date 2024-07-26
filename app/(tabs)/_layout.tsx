import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const TabIcon = ({ name, icon,  focused, color}: any) => {
  return (
    <View className="items-center justify-center gap-2 mt-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

enum TabList {
  HOME = 'home',
  MAP = 'map',
  CHECKOUT = 'checkout',
  PROFILE = 'profile',
  TRANSACTION = 'transaction',
}

const TabsLayout = () => {

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarBackground: () => (
          //   <Image
          //     source={images.tabBg}
          //     className="-top-4 -right-0.5 absolute h-full w-full -rotate-[2deg]"
          //   />
          // ),
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: '#232533',
            backgroundColor: '#232533',
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({focused, color}) => (
              <TabIcon
                name={TabList.HOME}
                icon={icons.bicycle}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                name={TabList.MAP}
                icon={icons.map}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="checkout"
          options={{
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                name={TabList.CHECKOUT}
                icon={icons.cart}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({focused, color}) => (
              <TabIcon
                name={TabList.PROFILE}
                icon={icons.person}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="transaction"
          options={{
            tabBarIcon: ({color,focused}) => (
              <TabIcon
                name={TabList.TRANSACTION}
                icon={icons.doc}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabsLayout;
