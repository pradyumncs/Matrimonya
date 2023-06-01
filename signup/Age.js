import { View, Text, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { Input } from "react-native-elements";
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import pr from '../assets/progress.png';
import { useTailwind } from "tailwind-rn";
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as Location from 'expo-location';
import {
    TextInput,
    FlatList,
} from 'react-native';
import { useRef } from 'react';
const countries = [
    { job: '4\' 3"' },
    { job: '4\' 4"' },
    { job: '4\' 5"' },
    { job: '4\' 6"' },
    { job: '4\' 7"' },
    { job: '4\' 8"' },
    { job: '4\' 9"' },
    { job: '4\' 10 "' },
    { job: '4\' 11 "' },
    { job: '5\' 0"' },
    { job: '5\'1 " ' },
    { job: '5\'2" ' },
    { job: '5\'3" ' },
    { job: '5\'4" ' },
    { job: '5\'5" ' },
    { job: '5\'6" ' },
    { job: '5\'7" ' },
    { job: '5\'8" ' },
    { job: '5\'9" ' },
    { job: '5\'10" ' },
    { job: '5\'11" ' },
    { job: '6\' 0"' },
    { job: '6\' 1"' },
    { job: '6\' 2"' },
    { job: '6\' 3"' },


];
const Age = () => {
    const tw = useTailwind();
    const [Age, setAge] = React.useState("");
    const navigation = useNavigation();
    const [buttonTitle, setButtonTitle] = useState("Continue");
    const route = useRoute();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(countries);
    const [selectedjob, setSelectedjob] = useState('');



    const searchRef = useRef();
    const onSearch = search => {
        if (search !== '') {
            let tempData = data.filter(item => {
                return item.job.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            setData(tempData);

        } else {
            setData(countries);

        }
    };

    console.log(selectedjob)


    var city;

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {

                setErrorMsg('Without your location we can not show users near your area');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let z = await Location.getCurrentPositionAsync({});

            let address = await Location.reverseGeocodeAsync(location.coords)
            let ada = await Location.reverseGeocodeAsync(z.coords)


            city = (ada[0].city)
            setLocation(address);



        })();
    }, []);

    let text = '';

    let countrya = 'null';
    let statea = 'null';
    let subregiona = 'null';
    let heights = 'null';

    if (errorMsg) {
        text = errorMsg;

    } else if (location) {


        countrya = location[0].country
        subregiona = location[0].subregion
        statea = location[0].region


        //text = (location.city)
    }

    console.log(location)
    console.log(countrya)
    console.log(statea)
    console.log(subregiona)
    console.log("ageeee")


    const incompleteForm = !Age || !selectedjob;

    let usernamea = route.params.Username
    console.log(usernamea)
    console.log(usernamea)

    const Register = () => {


        navigation.navigate("Job", {
            Age: Age,
            Username: usernamea,
            country: countrya,
            state: statea,
            subregion: subregiona,
            heights: selectedjob
        });
    };

    const [fontsLoaded] = useFonts({
        'NexaBold': require('../assets/NexaBold.otf'),
    });






    return (
        <View style={tw("flex-1")}>
            <ImageBackground
                resizeMode="cover"
                style={tw("flex-1")}
                source={require("../assets/appbacc.png")}
            >
                <View style={tw(" my-auto items-center")}>

                    <Image source={pr} />


                    <Text style={styles.buttonText}>
                        What's your Height? {"\n"}
                    </Text>


                    <TouchableOpacity
                        style={{
                            width: '90%',
                            height: 50,
                            borderRadius: 10,
                            borderWidth: 2,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: 15,
                            paddingRight: 15,
                            backgroundColor: "#e9f5f8",
                        }}
                        onPress={() => {
                            setClicked(!clicked);
                        }}>
                        <Text style={{ fontWeight: '600' }}>
                            {selectedjob == '' ? 'Select Height' : selectedjob}
                        </Text>
                        {clicked ? (
                            <Image
                                source={require("../assets/upload.png")}
                                style={{ width: 20, height: 20 }}
                            />
                        ) : (
                            <Image
                                source={require("../assets/dropdown.png")}
                                style={{ width: 20, height: 20 }}
                            />
                        )}
                    </TouchableOpacity>
                    {clicked ? (
                        <View
                            style={{
                                elevation: 5,
                                marginTop: 20,
                                height: 300,
                                alignSelf: 'center',
                                width: '90%',
                                backgroundColor: '#fff',
                                borderRadius: 10,
                            }}>


                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                width: '85%',
                                                alignSelf: 'center',
                                                height: 50,
                                                justifyContent: 'center',
                                                borderBottomWidth: 0.5,
                                                borderColor: '#8e8e8e',
                                            }}
                                            onPress={() => {
                                                setSelectedjob(item.job);
                                                setClicked(!clicked);
                                                onSearch('');
                                                setSearch('');
                                            }}>
                                            <Text style={{ fontWeight: '600' }}>{item.job}</Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    ) : null}



                    <View style={tw("p-5")} />



                    <Text style={styles.buttonText}>
                        Your Age? {"\n"}

                    </Text>


                    <Input
                        style={styles.input}
                        onChangeText={(Age) => setAge(Age.replace(/[^\d]/g, ''))}
                        value={Age}
                        maxLength={2}

                    />

                </View>

                <View style={tw("flex-1 items-center  pt-9 mb-11")}>






                    <TouchableOpacity
                        disabled={incompleteForm}
                        style={[
                            tw("w-64 p-3 rounded-xl  absolute bottom-1 bg-white"),
                            incompleteForm ? tw("bg-gray-400") : tw("bg-white"),
                            styles.shadow,
                        ]}
                        onPress={Register}
                    >
                        <Text style={tw("text-center text-black text-xl")}>
                            {buttonTitle}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#e9f5f8",

    },
    buttonText: {
        color: "#000000",
        fontSize: 35,
        fontFamily: 'NexaBold',
    },
    buttonTextsm: {
        color: "#000000",
        fontSize: 15,
        padding: 10,
        fontFamily: 'NexaBold',
    },

    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8.65,

        elevation: 8,
    },


});

export default Age