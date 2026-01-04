import { Text, View } from "react-native";
import TodoApp from '../Components/TodoApp'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function Index() {

  return (
    <Animated.View
      entering={FadeInDown.duration(500)}
      style={{ flex: 1, marginTop: 40 }}>
      <TodoApp />
    </Animated.View>
  )
}
