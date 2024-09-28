import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import Rive from 'rive-react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  function RiveDemo() {
    return (
      <View>
        {/* Rive animation loaded from a URL */}
        <Rive
          url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
          artboardName="Avatar 1"
          stateMachineName="avatar"
          style={{ width: 36, height: 36 }}
        />
      </View>
    );
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <RiveDemo />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
