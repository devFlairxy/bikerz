import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';
import GradientButton from '@/components/GradientButton';
import HomeCardSvg from '@/components/HomeCardSvg';
import ItemCardSvg from '@/components/ItemCardSvg';

const CardItem = ({ index, item: { name, model, price, image } }: any) => {
  return (
    <View
      key={index}
      className="relative w-3/6 max-h-[240px] -mt-2"
    >
      <View className="w-full max-w-fit">
        <ItemCardSvg className={`${index % 2 === 0 ? '-mt-5' : '-mt-14 '} -ml-5 `} />

        <Image
          className={`${
            index % 2 === 0 ? 'top-12' : 'top-2'
          } absolute left-6 w-32 h-32`}
          source={image}
          resizeMode="contain"
        />
        <Image
          source={index % 2 === 0 ? icons.blueHeart : icons.heart}
          className={`${
            index % 2 === 0 ? 'top-14' : 'top-5'
          } w-5 h-5 z-10 absolute right-7`}
        />
        <Text
          className={`${
            index % 2 === 0 ? 'bottom-16' : 'bottom-24'
          } mb-1 font-pmedium text-gray-400 absolute left-6`}
        >
          {' '}
          {name}{' '}
        </Text>
        <Text
          className={`${
            index % 2 === 0 ? 'bottom-12' : 'bottom-20'
          } mb-0.5 font-pbold text-white absolute left-6`}
        >
          {' '}
          {model}{' '}
        </Text>
        <Text
          className={`${
            index % 2 === 0 ? 'bottom-8' : 'bottom-16'
          } font-pmedium text-gray-400 absolute left-6`}
        >
          {' '}
          {price}{' '}
        </Text>
      </View>
    </View>
  );
};

const Home = () => {
  const itemList = [
    {
      name: 'Road Bike',
      price: '$1,999.99',
      model: 'PEUGEOT-LR01',
      image: images.bike3,
    },
    {
      name: 'Road Helmet',
      price: '$120',
      model: 'SMITH-Trade',
      image: images.helmet,
    },
    {
      name: 'Mountain Bike',
      price: '$1,999.99',
      model: 'PILOT-Chromoly',
      image: images.bike1,
    },
    {
      name: 'Road Bike',
      price: '$1,999.99',
      model: 'PEUGEOT-LR01',
      image: images.bike3,
    },
    {
      name: 'Road Helmet',
      price: '$120',
      model: 'SMITH-Trade',
      image: images.helmet,
    },
    {
      name: 'Mountain Bike',
      price: '$1,999.99',
      model: 'PILOT-Chromoly',
      image: images.bike1,
    },
    {
      name: 'Road Bike',
      price: '$1,999.99',
      model: 'PEUGEOT-LR01',
      image: images.bike3,
    },
    {
      name: 'Road Helmet',
      price: '$120',
      model: 'SMITH-Trade',
      image: images.helmet,
    },
    {
      name: 'Mountain Bike',
      price: '$1,999.99',
      model: 'PILOT-Chromoly',
      image: images.bike1,
    },
  ];
  return (
    <SafeAreaView className="bg-primary h-full">
      <Image source={images.bgOne} className="absolute -bottom-5 right-0" />

      <View style={{ flex: 1 }}>
        <FlatList
          className="h-screen w-screen p-5"
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <View
                style={{ flex: 1 }}
                className="flex flex-row justify-between items-center"
              >
                <Text className="font-pbold text-white text-xl">
                  Choose Your Bike
                </Text>
                <GradientButton
                  isDefault={true}
                  isIcon={true}
                  icon={icons.search}
                  otherStyles="w-[44px] h-[44px]"
                />
              </View>
              <View className="relative h-auto">
                <View className="relative">
                  <HomeCardSvg className="mt-10" />
                  <Image
                    source={images.bike1}
                    className="absolute top-20 left-8"
                  />
                  <Text className="absolute -bottom-4 left-5 font-pbold text-gray-400 text-3xl">
                    30% Off
                  </Text>
                </View>
                <View className="mt-5 ml-5">
                  <GradientButton
                    isDefault={true}
                    isIcon={false}
                    text="SEE THE BIKES"
                    otherStyles="py-2 w-28 rounded-lg"
                    textStyles="font-pbold"
                  />
                </View>
              </View>
              <View className="h-40 -mt-4 relative -mb-[70px]">
                <View className="w-full max-w-max left-0 absolute top-12">
                  <View className="flex flex-row space-x-5 justify-between">
                    <GradientButton
                      containerStyles=""
                      isDefault={true}
                      isIcon={true}
                      text="All"
                      textStyles="font-pmedium"
                      otherStyles="w-[53px] h-[53px]"
                    />

                    <GradientButton
                      containerStyles="-mt-4"
                      isDefault={false}
                      gradientStyles={['#353F54', '#222834']}
                      isIcon={true}
                      icon={icons.bicycle}
                      textStyles="font-pmedium"
                      otherStyles="w-[53px] h-[53px]"
                      iconStyles="w-8 h-8"
                    />

                    <GradientButton
                      containerStyles="-mt-6"
                      isDefault={false}
                      gradientStyles={['#353F54', '#222834']}
                      isIcon={true}
                      icon={icons.road}
                      textStyles="font-pmedium"
                      otherStyles="w-[53px] h-[53px]"
                      iconStyles="w-8 h-8"
                    />

                    <GradientButton
                      containerStyles="-mt-8"
                      isDefault={false}
                      gradientStyles={['#353F54', '#222834']}
                      isIcon={true}
                      icon={icons.mountain}
                      textStyles="font-pmedium"
                      otherStyles="w-[53px] h-[53px]"
                      iconStyles="w-8 h-8"
                    />

                    <GradientButton
                      containerStyles="-mt-11"
                      isDefault={false}
                      gradientStyles={['#353F54', '#222834']}
                      isIcon={true}
                      icon={icons.accessory}
                      textStyles="font-pmedium"
                      otherStyles="w-[53px] h-[53px]"
                      iconStyles="w-8 h-8"
                    />
                  </View>
                </View>
              </View>
            </>
          )}
          columnWrapperStyle={{ 
            display: 'flex',
            padding: 5,
           }}
          data={itemList}
          renderItem={({ item, index }) => (
            <CardItem index={index} item={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
