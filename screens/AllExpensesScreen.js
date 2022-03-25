import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

export default function AllExpensesScreen() {
  return (
    <ExpensesOutput expensesPeriod={'Total'} />
  )
}

const styles = StyleSheet.create({})