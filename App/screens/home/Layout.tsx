import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SYSTEM from '../../theme'
import CustomText from "../../components/CustomText"
import TransactType from "../../components/TransactType"
import useSelectTheme from "../../hooks/useSelectTheme"
import TrasactItem from "../../components/TrasactItem"
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"

const H_MAX_HEIGHT = 15
const H_MIN_HEIGHT = 52
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT

interface Props { }
const data = [
  {
    id: 1,
    type: "Expense",
    amount: "20.00",
    date: new Date().toLocaleTimeString(),
    title: "Online Shopping"
  },
  {
    id: 2,
    type: "Expense",
    amount: "20.00",
    date: new Date().toLocaleDateString(),
    title: "Online Shopping"
  },
  {
    id: 3,
    type: "Expense",
    amount: "20.00",
    date: new Date().toLocaleDateString(),
    title: "Online Shopping"
  },
  {
    id: 4,
    type: "Expense",
    amount: "20.00",
    date: new Date().toLocaleDateString(),
    title: "Online Shopping"
  },
]
const Layout: React.FC<Props> = props => {
  const theme = useSelectTheme()
  const { spacing, typography, fontSize } = SYSTEM
  const styles = Styles(theme)
  const scrollOffsetY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffsetY.value = event.contentOffset.y
  })
  const scrollStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffsetY.value,
      [0, H_SCROLL_DISTANCE],
      [H_MAX_HEIGHT, H_MIN_HEIGHT],
    )
    return { transform: [{ translateY }] }
  })

  return (
    <View style={{ flex: 1, padding: "5%", backgroundColor: theme.primary }}>
      <View style={styles.header}>
        <CustomText type="medium" text="My Wallet" variant="primary" />
      </View>
      <Animated.View style={[{ flex: 0.2, borderWidth: 1 }]}>
        <View style={styles.totalIncomeContainer}>
          <View><CustomText text={"Total Balance"} variant={"secondary"} /></View>
          <View><CustomText text={"$ 4500"} variant={"secondary"} /></View>
        </View>
      </Animated.View>
      <View style={{ flex: 0.3, marginTop: "5%" }}>
        <Animated.View style={[styles.transactType]}>
          <View style={{ flex: 0.49 }} key="income">
            <TransactType type="Income" />
          </View>
          <View style={{ flex: 0.49 }} key="expense">
            <TransactType type="Expense" />
          </View>
        </Animated.View>
      </View>
      <View style={{ flex: 0.4 }}>
        <Text>List of Transactions</Text>
        <Animated.ScrollView style={{ borderWidth: 1 }} onScroll={scrollHandler} scrollEventThrottle={16} >
          <View style={{ flex: 1, borderWidth: 1 }}>
            {
              data.map((item) => {
                return (
                  <TrasactItem item={item} />
                )
              })
            }
          </View>
        </Animated.ScrollView>
      </View>
    </View>

  )

}

Layout.defaultProps = {}

const Styles = (theme: any) => (StyleSheet.create({
  header: {
    flex: 0.15,
    justifyContent: "center"
  },
  totalIncomeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.secondary,
    borderRadius: 15
  },
  transactType: { flex: 1, flexDirection: "row", justifyContent: "space-between" }
}))

export default Layout
