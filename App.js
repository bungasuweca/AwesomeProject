import {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';

import TaskInput from './components/TaskItem';
import TaskItem from './components/TaskItem';

export default function App() {
  const [MyTask, setMyTask] = useState('');

  function addTaskBtnHandler(enteredTaskText) {
    // console.log(enteredTaskText);
    setMyTask(currentTask => [
      ...currentTask,
      {text: enteredTaskText, key: Math.random().toString},
    ]);
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskBtnHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={MyTask}
          renderItem={itemData => {
            return <TaskItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        />
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

  listContainer: {
    flex: 2,
  },
  btn: {
    minHeight: 80,
    height: 80,
  },
  tasks: {
    margin: 8,
    padding: 8,
    borderRadius: 6,

    backgroundColor: '#ECF2FF',
  },
});
