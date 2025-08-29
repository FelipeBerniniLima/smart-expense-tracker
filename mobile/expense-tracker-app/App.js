import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState('');

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/expenses');
      setExpenses(response.data.expenses);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error connecting to server');
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Expense Tracker</Text>
      <Text style={styles.subtitle}>Track and split group expenses easily</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add New Expense</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={fetchExpenses}>
        <Text style={styles.buttonText}>View Expenses</Text>
      </TouchableOpacity>
      
      {message ? <Text style={styles.message}>{message}</Text> : null}
      
      {expenses.length > 0 && (
        <View style={styles.expensesContainer}>
          <Text style={styles.expensesTitle}>Recent Expenses:</Text>
          {expenses.map((expense) => (
            <View key={expense.id} style={styles.expenseItem}>
              <Text style={styles.expenseDescription}>{expense.description}</Text>
              <Text style={styles.expenseAmount}>${expense.amount}</Text>
              <Text style={styles.expenseDetails}>
                Paid by {expense.paid_by_name} • {expense.group_name}
              </Text>
            </View>
          ))}
        </View>
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#27ae60',
    textAlign: 'center',
  },
  expensesContainer: {
    marginTop: 20,
    width: '100%',
    maxWidth: 400,
  },
  expensesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  expenseItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  expenseDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  expenseAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginTop: 2,
  },
  expenseDetails: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
  },
});