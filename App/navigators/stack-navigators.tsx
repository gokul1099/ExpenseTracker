import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Transactions from '../db/model/Transactions';
import { StackActionHelpers, StackActions } from '@react-navigation/native';

import { TransactionsScreen } from '../screens/transactions';
import { AddTransactionScreen } from '../screens/addTransaction';
const TransactionStack = createNativeStackNavigator()
function TransactionsScreens() {
    return (
        <TransactionStack.Navigator>
            <TransactionStack.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }} />
        </TransactionStack.Navigator>
    )
}

export default TransactionsScreens