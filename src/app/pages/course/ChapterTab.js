import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VideosSection from './chapterTab/VideosSection';
import ChapterTest from './chapterTab/ChapterTest';
import Resources from './chapterTab/Resources';
import QNBank from './chapterTab/QNBank';
import { COLOR } from '../../constant/Color';

const Tab = createMaterialTopTabNavigator();

export default function ChapterTab() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          elevation: 0,
          backgroundColor: COLOR.mainColor,
          height: 40,
        },
        tabBarLabelStyle: { textTransform:'none', fontSize: 10 },

      })}>
      <Tab.Screen
        name="Videos"
        component={VideosSection}
        options={{
          tabBarActiveTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="Chapter Test"
        component={ChapterTest}
        options={{
          tabBarActiveTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarActiveTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="QN Bank"
        component={QNBank}
        options={{
          tabBarActiveTintColor: 'white',
          
        }}
      />
    </Tab.Navigator>
  );
}

