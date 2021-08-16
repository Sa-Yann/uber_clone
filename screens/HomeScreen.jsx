import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}> 
            {/* <Text style={tw`text-green-500`}> I am the Homescreen</Text> */}
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height:100, resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
