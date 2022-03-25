import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Jordan Shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'Levi\'s Trousers',
        amount: 109.99,
        date: new Date('2022-02-11')
    },
    {
        id: 'e3',
        description: 'PlayStation',
        amount: 599.99,
        date: new Date('2020-04-21')
    },
    {
        id: 'e4',
        description: 'A Macbook Pro',
        amount: 1200,
        date: new Date('2019-03-12')
    },
    {
        id: 'e5',
        description: 'Game of Thrones Book',
        amount: 49.75,
        date: new Date('2021-06-03')
    },
]

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
  </View>;
}

const styles = StyleSheet.create({});
