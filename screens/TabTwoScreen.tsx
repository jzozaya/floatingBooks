
import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import ListItem from '../components/ListItem'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  //Text,
  TouchableOpacity,
  //View,
} from 'react-native'
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated'

const LIST_ITEM_COLOR = '#e84b32'

interface Item {
  id: number
}

export default function TabTwoScreen() {

  
  const initialMode = useRef<boolean>(true)

  useEffect(() => {
    initialMode.current = false
  }, [])

  // new Array(5).fill(0).map((_, index) => ({ id: index }))

  
  const [items, setItems] = useState<Item[]>(
    new Array(3).fill(0).map((_, index) => ({ id: index }))
  )

  const onAdd = useCallback(() => {
    setItems((currentItems) => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1
      return [...currentItems, { id: nextItemId }]
    })
  }, [])

  const onDelete = useCallback((itemId: number) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== itemId)
    })
  }, [])

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <ListItem /> */}
      
      <TouchableOpacity style={styles.floatingButton} onPress={onAdd}>
        <Text style={{ color: 'white', fontSize: 40 }}>+</Text>
      </TouchableOpacity>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 50 }}
      >
        {items.map((item, index) => {
          return (
            <Animated.View
              key={item.id}
              entering={
                initialMode.current ? FadeIn.delay(100 * index) : FadeIn
              }
              exiting={FadeOut}
              layout={Layout.delay(100)}
              onTouchEnd={() => onDelete(item.id)}
              style={styles.listItem}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  listItem: {
    height: 80,
    backgroundColor: LIST_ITEM_COLOR,
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    // Shadow on Android
    elevation: 5,
    // Shadow on iOS
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
  },
  floatingButton: {
    width: 70,
    aspectRatio: 1,
    backgroundColor: '#203699',
    borderRadius: 40,
    position: 'absolute',
    bottom: 30,
    right: '5%',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
