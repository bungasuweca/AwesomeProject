import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

function TaskItem() {
  return (
    <View style={styles.tasks}>
      {MyTask && MyTask.map(task => <Text key={task}>{task}</Text>)}
    </View>
  );
}

export default TaskItem;
const [MyTask, setMyTask] = useState('');

const styles = StyleSheet.create({
  tasks: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#ffffffff',
  },
});
