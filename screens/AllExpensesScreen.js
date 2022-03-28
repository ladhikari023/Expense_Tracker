import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallbackText="All Expenses"
    />
  );
}

const styles = StyleSheet.create({});
