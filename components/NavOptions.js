import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../sliceReducer/navSliceRdcr';


const dataInfo = [
    {
        id: '1234',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'Map Screen'
    },
    {
        id: '456',
        title: 'Get food',
        image: 'https://links.papareact.com/28w',
        screen: 'Eats Screen'
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={dataInfo}
            horizontal
            keyExtractor={(item )=> item.id}
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress ={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}
                >
                        <View style={tw`${!origin && "opacity-20"}`}>
                            <Image
                                source={{ uri: item.image}}
                                style={{ width: 120, height: 120, resizeMode: 'contain'}}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                            <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright" 
                            color="white" 
                            type="antdesign"
                            />
                        </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
