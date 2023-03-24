import {Text} from '@rneui/base';
import {StyleSheet, View} from 'react-native';

function TaskItem(props) {
  return (
    <View style={styles.TaskItem}>
      <Text style={styles.TaskText}>{props.text}</Text>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  tasks: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#ffffffff',
  },
});
