import {Component, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Button} from '@rneui/themed';

import TaskItem from './components/TaskItem';

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [MyTask, setMyTask] = useState('');

  function inputTaskHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskBtnHandler() {
    // console.log(enteredTaskText);
    setMyTask(currentTask => [...currentTask, enteredTaskText]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.txtInput}
          placeholder="What's Today's Task?"
          onChangeText={inputTaskHandler}
        />
        <Button
          style={styles.btn}
          title="Add Task"
          type="outline"
          onPress={addTaskBtnHandler}
        />
      </View>

      <View style={styles.listContainer}>
        <ScrollView>
          return <TaskItem />;
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    // backgroundColor: '#EDE9D5',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#617143',
    height: 80,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#cccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    height: 35,
  },
  listContainer: {
    flex: 2,
  },
  btn: {
    minHeight: 80,
    height: 80,
  },
});
