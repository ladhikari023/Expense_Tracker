import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpensesScreen() {
  return (
    <ExpensesOutput expensesPeriod={'Last 7 Days'} />
  );
}

const styles = StyleSheet.create({});
