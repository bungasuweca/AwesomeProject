import {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {Button} from '@rneui/themed';

function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState('');

  function inputTaskHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskBtnHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTaskText('');
  }

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.txtInput}
        placeholder="What's Today's Task?"
        onChangeText={inputTaskHandler}
        value={enteredTaskText}
      />
      <Button
        style={styles.btn}
        title="Add Task"
        type="outline"
        onPress={props.addTaskBtnHandler}
      />
    </View>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
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
});
