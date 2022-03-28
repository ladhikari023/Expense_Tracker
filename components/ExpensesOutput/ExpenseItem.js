import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({item}) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense',{
        expenseId: item.id
    })
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.date}>
            {getFormattedDate(item.date).toString()}
          </Text>
          {/* <Text style={styles.date}>{getFormattedTime(item.date).toString()}</Text> */}
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 13,
    elevation: 5,
    backgroundColor: GlobalStyles.colors.primary400,
    padding: 10,
    borderRadius: 10,
  },
  desc: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  date: {
    color: "white",
  },
  amountContainer: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 5,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary400,
    fontWeight: "bold",
  },
});
