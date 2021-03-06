import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch} from 'react-redux';
import { setDestination, setOrigin } from '../sliceReducer/navSliceRdcr';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={ tw`bg-white h-full`}> 
                <View style={ tw`p-5`}>
                    <Image
                        style={{
                            width: 100, height:100, resizeMode: 'contain',
                        }}
                        source={{
                            uri: "https://links.papareact.com/gzs",
                        }}
                    />
                        <GooglePlacesAutocomplete
                            placeholder="Where From?"
                            styles={{
                                container: {
                                    flex: 0,
                                },
                                textInput: {
                                    fontSize: 18,
                                }
                            }}
                            fetchDetails={true}
                            onPress={(data, details = null) => {
                                console.log("🚀 ~ file: HomeScreen.js ~ line 32 ~ HomeScreen ~ details", details);
                                console.log("🚀 ~ file: HomeScreen.js ~ line 32 ~ HomeScreen ~ data", data) ;
                                dispatch(setOrigin({
                                    location: details.geometry.location,
                                    description: data.description
                                }));
                                dispatch(setDestination(null))
                            }}
                            listViewDisplayed='auto'
                            returnKeyType={'search'}
                            enablePoweredByContainer={false}
                            minLength={2}
                            query={{
                                key: GOOGLE_MAPS_APIKEY,
                                language: 'en',
                                // types: '(cities)',
                            }}
                            // searching for differents places
                            nearbyPlacesAPI='GooglePlacesSearch'
                            // start searching 400ms after I stop typing
                            debounce={400}
                        />
                    <NavOptions/>
                    <NavFavorites/>
                </View>
                
            {/* </View> */}
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
