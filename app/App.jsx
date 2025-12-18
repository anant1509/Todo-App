import { Text, View } from "react-native";
import TodoApp from '../Components/TodoApp'

export default function Index() {
  return (
    <View style={{ flex: 1,marginTop:40}}>
      <TodoApp />
    </View>
  );
}
