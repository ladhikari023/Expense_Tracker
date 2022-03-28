import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpensesScreen() {
    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7daysAgo = getDateMinusDays(today,7);

        return expense.date > date7daysAgo;
    })
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={'Last 7 Days'} fallbackText={'No Expenses in last 7 days!'} />
  );
}

const styles = StyleSheet.create({});
