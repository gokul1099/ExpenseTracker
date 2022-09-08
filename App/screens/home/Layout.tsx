import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SYSTEM from '../../theme'
import CustomText from "../../components/CustomText"
import TransactType from "../../components/TransactType"
import useSelectTheme from "../../hooks/useSelectTheme"
interface Props { }

const Layout: React.FC<Props> = props => {
  const theme = useSelectTheme()
  const { spacing, typography, fontSize } = SYSTEM
  const styles = Styles(theme)
  return (
    <View style={{ flex: 1, borderWidth: 1, padding: "5%", backgroundColor: theme.primary }}>
      <View style={styles.header}>
        <CustomText type="medium" text="My Wallet" variant="primary" />
      </View>
      <View style={{ flex: 0.2, borderWidth: 1 }}>
        <View style={styles.totalIncomeContainer}>
          <View><CustomText text={"Total Balance"} variant={"secondary"} /></View>
          <View><CustomText text={"$ 4500"} variant={"secondary"} /></View>
        </View>
      </View>
      <View style={{ flex: 0.3 }}>
        <View style={styles.transactType}>
          <View style={{ flex: 0.5, borderWidth: 1 }}>
            <TransactType type="Income" />
          </View>
          <View style={{ flex: 0.5, borderWidth: 1 }}>
            <TransactType type="Expense" />
          </View>
        </View>
      </View>
      <View style={{ flex: 0.2 }}>
        <Text>List of Transactions</Text>
      </View>
    </View>

  )

}

Layout.defaultProps = {}

const Styles = (theme: any) => (StyleSheet.create({
  header: {
    flex: 0.15,
    borderWidth: 1,
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
