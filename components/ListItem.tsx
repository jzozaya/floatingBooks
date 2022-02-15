import { View, TouchableOpacity, Image } from 'react-native';
import { Text, TextProps } from './Themed';
import tw from 'tailwind-react-native-classnames';


export default function ListItem(props: TextProps, selected = false) {
  return (
    <View style={tw.style(
        'h-64 w-40 bg-blue-500 rounded-xl p-4 m-1 items-center justify-center shadow-lg',
        !selected && 'bg-white'
      )}>
        <View style={tw`w-28 h-28 rounded-full bg-indigo-50`}>
          {/* <Image
            style={tw`w-28 h-28 rounded-full`}
            source={ 'https://images.unsplash.com/photo-1644751291719-574ef771ba30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60' }
          /> */}
        </View>
        <Text style={tw.style(
          'text-white text-lg font-bold my-4',
          !selected && 'text-black'
        )}>
          Hello
        </Text>
        <TouchableOpacity
          style={
            tw`h-10 w-full bg-white rounded-full items-center justify-center border border-blue-500`
          }
        >
          <Text style={tw`text-lg text-blue-500 font-bold`}>
            Details
          </Text>
        </TouchableOpacity>
      </View>

  )
  //<Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
