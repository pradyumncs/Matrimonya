import { View, Text, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { Input } from "react-native-elements";
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import pr from '../assets/progress.png';
import { useTailwind } from "tailwind-rn";
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import {
    TextInput,
    FlatList,
} from 'react-native';
import { useRef } from 'react';
const countries = [

    { job: 'Hindi' },
    { job: 'Bengali' },
    { job: 'Telugu' },
    { job: 'English' },
    { job: 'Marathi' },
    { job: 'Tamil' },
    { job: 'Gujarati' },
    { job: 'Urdu' },
    { job: 'Kannada' },
    { job: 'Oriya' },
    { job: 'Punjabi' },
    { job: 'Assamese' },
    { job: 'Kashmiri' },
    { job: 'Sindhi' },
    { job: 'Manipuri' },
    { job: 'Sanskrit' },
    { job: 'Urdu' },
    { job: 'Konkani' },
    { job: 'Nepali' },
    { job: 'Bodo' },
    { job: 'Dogri' },
    { job: 'Santali' },
    { job: 'Khasi' },
    { job: 'Mizo' },
    { job: 'Garo' },
    { job: 'Bhili' },
    { job: 'Khandeshi' },
    { job: 'Gondi' },
    { job: 'Kurukh' },
    { job: 'Tulu' },
    { job: 'Mundari' },
    { job: 'Ho' },
    { job: 'Haryanvi' },
    { job: 'Chhattisgarhi' },
    { job: 'Bhojpuri' },
    { job: 'Kamtapuri' },




];
const Religion = () => {
    const tw = useTailwind();
    const [Age, setAge] = React.useState("");
    const navigation = useNavigation();
    const [buttonTitle, setButtonTitle] = useState("Continue");
    const route = useRoute();

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








    const incompleteForm = !selectedjob;

    let usernamea = route.params.Username
    console.log(usernamea)



    let agea = route.params.Age
    let countrya = route.params.country
    let statea = route.params.state
    let subregiona = route.params.subregion
    let heighta = route.params.Height
    let joba = route.params.Jobs

    const Register = () => {


        navigation.navigate("Caste", {
            Age: agea,
            Username: usernamea,
            country: countrya,
            state: statea,
            subregion: subregiona,
            Height: heighta,
            Jobs: joba,
            MotherT: selectedjob
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
                        Your Mother Toungue ? {"\n"}
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
                            {selectedjob == '' ? 'Select Language You Speak' : selectedjob}
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
                            <TextInput
                                placeholder="Search.."
                                value={search}
                                ref={searchRef}
                                onChangeText={txt => {
                                    onSearch(txt);
                                    setSearch(txt);
                                }}
                                style={{
                                    width: '90%',
                                    height: 50,
                                    alignSelf: 'center',
                                    borderWidth: 0.2,
                                    borderColor: '#8e8e8e',
                                    borderRadius: 7,
                                    marginTop: 20,
                                    paddingLeft: 20,
                                }}
                            />


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

export default Religion