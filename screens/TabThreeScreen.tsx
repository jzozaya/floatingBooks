import React, { useCallback, useRef } from 'react';

import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import EditScreenInfo from '../components/EditScreenInfo'

import { Text, View  } from '../components/Themed'
import BottomSheet, { BottomSheetRefProps } from '../components/BottomSheet'

import { RootTabScreenProps } from '../types'


export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {


  const ref = useRef<BottomSheetRefProps>(null)

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive()
    if (isActive) {
    ref?.current?.scrollTo(0)
    } else {
    ref?.current?.scrollTo(-200)
    }
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.title}>Tab Three</Text>
        
        <View style={styles.separator} lightColor="#171717" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: 'orange' }} />
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: '#203699',
    opacity: 0.9,
  },
})
