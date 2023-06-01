import { View, Text, Image, StyleSheet } from 'react-native';
import { Input } from "react-native-elements";
import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native';
import pr from '../assets/progress5.png';
import { Button, TouchableOpacity, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import { useTailwind } from "tailwind-rn";
import * as ImagePicker from 'expo-image-picker';
import { firebase, storage } from "../firebase";
import { async } from '@firebase/util';
import { Alert } from 'react-native';
import pbar from '../assets/zas.gif';
import useAuth from "../hooks/useAuth";
import { Foundation, Ionicons, AntDesign } from "@expo/vector-icons";
import { db } from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
    collection,
    doc,
    DocumentSnapshot,
    Firestore,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    serverTimestamp,
    setDoc,
    where,
} from "@firebase/firestore";
import * as Location from 'expo-location';
import { useFonts } from 'expo-font';

const Upload = () => {
    const tw = useTailwind();
    const [Username, setUsername] = React.useState("");
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigation = useNavigation();

    const incompleteForm = !image;
    const [Age, setAge] = React.useState("");
    const route = useRoute();
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [p, setp] = useState("");
    const [buttonTitle, setButtonTitle] = useState("Continue");
    const { user } = useAuth();
    const [done, setDone] = useState(null);
    const [Showed, setShowed] = useState(false)

    if (!user.uid) {
        user.uid = user.user.uid
        console.log(user.uid)
    }
    else {
        console.log("bye")

    }




    var city;
    var imageuria;
    var z;
    var numz;
    const [fontsLoaded] = useFonts({
        'NexaBold': require('../assets/NexaBold.otf'),
    });







    var itemsnamesS = Array("a");
    var di = itemsnamesS[Math.floor(Math.random() * itemsnamesS.length)];
    var SubRegion = String(di);
    console.log(SubRegion)

    var States = "Kerala"

    var Showme = "Men"
    var count = 1

    var Country = "India"

    var gender = "Female"

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function numberid(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    const metadata = {
        contentType: 'image/png',
    };

    console.log();


    console.log(z)


    console.log("hi")
    console.log(numz)
    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [7, 10],
            quality: 0.9

        })

        const source = { uri: result.uri };
        console.log(source);

        setImage(source);

        setp(result.uri);
        console.log(result.uri)
        console.log(result.uri)
        global = result.uri
        console.log(global)


    };

    const handlesub = async () => {
        setShowed(true)

        var itemsnames = Array("Aaradhya", "Aarohi", "Aditi", "Akanksha", "Alisha", "Amaira", "Amaya", "Amisha", "Amrita", "Ananya", "Anaya", "Anika", "Anjali", "Anvi", "Arya", "Avani", "Avantika", "Bhavika", "Bhavya", "Chhavi", "Devika", "Diya", "Divya", "Eesha", "Esha", "Falguni", "Gauri", "Gayatri", "Geet", "Gunjan", "Hansika", "Harsha", "Ishita", "Jhanvi", "Kavya", "Khushi", "Krishna", "Kritika", "Mahi", "Mansi", "Megha", "Mehak", "Mehakpreet", "Mehul", "Misha", "Navya", "Nidhi", "Nikita","Palak", "Pallavi", "Pooja", "Prachi", "Pragya", "Pranali", "Pranavi", "Pranjal", "Prapti", "Prarthana", "Prisha", "Priti", "Priya", "Rachana", "Radhika", "Rashi", "Rashmi", "Rhea", "Riddhi", "Riya", "Sakshi", "Sana", "Sanjana", "Sanskriti", "Sanya", "Sapna", "Sarika", "Savita", "Sejal", "Shagun", "Shalini", "Shanaya", "Shanika", "Shanvi", "Shivani", "Shreya", "Simran", "Smita", "Sneha", "Sohini", "Sonakshi", "Sonali", "Soniya", "Srishti", "Suhani", "Sumedha", "Supriya", "Surabhi","Swara", "Swati", "Tanisha", "Tanvi", "Tanya", "Trisha", "Tulsi", "Urvi", "Usha", "Vaishali", "Vandana", "Vani", "Varsha", "Veda", "Vidhi", "Vidya", "Vijaya", "Vrinda", "Yamini", "Yashasvi", "Yogita", "Yukta");
        var na = itemsnames[Math.floor(Math.random() * itemsnames.length)];
        var displayName = String(na);
        console.log(displayName)


        var castenamess = Array("Brahmin", "Kshatriya", "Dalit", "Muslim", "Jat", "Rajput", "Maratha", "Yadav", "Gujjar", "Ahir", "Kayastha", "Lingayat", "Reddy", "Nair", "Ezhava", "Vokkaliga", "Iyer", "Iyengar", "Nadar", "Chettiar", "Mudaliar", "Pillai", "Thevar", "Patel", "Bania", "Kurmi", "Mahishya", "Bhumihar", "Brahmin-Sikh", "Gounder", "Kamma", "Kapu", "Khatri", "Koli", "Kori", "Nai", "Vishwakarma", "Saini", "Sindhi");
        var purecaste = "Brahmin"
       // var da = purecaste[Math.floor(Math.random() * purecaste.length)];
        var Caste = String(purecaste);
        console.log(Caste)

        var Toungue = Array("Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Gujarati", "Urdu", "Kannada", "Oriya", "Punjabi", "Assamese", "Kashmiri", "Sindhi", "Manipuri", "Sanskrit", "Gujarati", "Urdu", "Konkani", "Nepali", "Bodo", "Dogri", "Santali", "Khasi", "Mizo", "Garo", "Bhili", "Khandeshi", "Gondi", "Kurukh", "Tulu", "Mundari", "Ho", "Haryanvi", "Chhattisgarhi", "Bhojpuri", "Kamtapuri");
        var maa= "Telugu"
      //  var ra = maa[Math.floor(Math.random() * maa.length)];
        var MotherT = String(maa);
        console.log(MotherT)

        var Job = Array("Accountant", "Accounts executive", "Accounts manager", "Actuary", "Administrative assistant", "Airline pilot", "Animator", "Application developer", "Architect", "Artificial intelligence ", "Auditor", "Bank manager", "Bank teller", "Biochemist", "Biomedical engineer", "Brand manager", "Budget analyst", "Business analyst", "Business Owner", "Business development manager", "Business intelligence analyst", "Buyer", "Call center executive", "Cashier", "Chartered accountant", "Chemical engineer", "Chief executive ", "Chief financial officer", "Chief marketing ", "Chief operations officer", "Chief technology officer", "Civil engineer", "Clinical research ", "Cloud architect", "Commercial pilot", "Computer hardware engineer", "Computer network architect", "Computer programmer", "Computer systems analyst", "Construction manager", "Content writer", "Copy editor", "Corporate", "Cost accountant", "Creative director", "Credit analyst", "Cybersecurity analyst", "Data analyst", "Data entry clerk", "Data scientist", "Database administrator", "Dentist", "Doctor", "Digital marketing ", "Direct salesperson", "E-commerce specialist", "Electrical engineer", "Electrician", "Electronics engineer", "Endocrinologist", "Engineer", "Energy engineer","Environmental engineer", "Environmental specialist", "Event planner", "Executive assistant", "Fashion designer", "Films", "Freelancer", "Finance manager", "Financial advisor", "Financial analyst", "Fitness trainer", "Food service manager", "Front-end web developer", "Full-stack web developer", "Game developer", "General practitioner", "Geologist", "Graphic designer", "Hardware engineer", "Healthcare analyst", "Hospital administrator", "Hotel manager", "Human resource executive", "Human resource manager", "Industrial engineer", "Information security analyst", "Information technology manager", "Insurance agent", "Interior designer", "Investment banker", "IT consultant", "Journalist", "Laboratory technician", "Lawyer", "Logistics manager", "Machine learning engineer", "Maintenance technician", "Management consultant", "Market research analyst", "Marketing coordinator","Marketing manager", "Materials engineer", "Mechanical engineer", "Medical assistant", "Medical laboratory ", "Medical records ", "Medical researcher", "Medical sales", "Medical technologist", "Merchant navy ","Nurse",);
        var ma = Job[Math.floor(Math.random() * Job.length)];
        var Jobs = String(ma);
        console.log(Jobs)


        numz = numberid(10)


   

        var items = Array(22, 23, 24, 25, 26, 27, 28, 29, 30,31,32);
        var a = items[Math.floor(Math.random() * items.length)];
        var age = String(a);
        console.log(age)

        var heig = Array('5\' 5"', '4\' 4"', '4\' 5"', '4\' 6"', '4\' 7"', '4\' 8"', '4\' 9"', '4\' 10"', '4\' 11"', '5\' 0"', '5\'1" ', '5\'2" ', '5\'3" ', '5\'4" ');
        var ahe = heig[Math.floor(Math.random() * heig.length)];
        var Height = String(ahe);
        console.log(Height)


        z = '00' + makeid(27)


        image.uri = `https://indianmatrimonyapp.s3.ap-south-1.amazonaws.com/indiangirls+(${count}).jpg`


        count = count + 1

        const response = await fetch(image.uri)
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
        console.log('filesss ' + image.uri);


        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            //   setDoc(doc(db, "images",), "userSwiped");
            //  let db = Firestore.firestore()
            //  //   db.collection("images").document().setData([filename])

        },




            (error) => {
                console.log(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    imageuria = String(downloadURL)


                    setDoc(doc(db, "users", z), {
                        id: z,
                        displayName: displayName,
                        Showme: Showme,
                        photoURL: image.uri,
                        gender: gender,
                        age: age,
                        Country: Country,
                        States: States,
                        SubRegion: SubRegion,
                        Number: numz,
                        timestamp: serverTimestamp(),
                        Caste:Caste,
                        MotherT:MotherT,
                        Jobs:Jobs,
                        Height:Height,
                    })
                        .then(() => {
                            console.log("done")
                            setDone("done");

                            navigation.navigate("Upload");
                        })
                        .catch((error) => {
                            alert(error.message);


                        });


                });




            }





        )







    }


    let text = 'Waiting..';
    if (done) {
        text = "done";


    } else if (location) {
        text = "waiting";
    }

    //useEffect(() => {
     //   const interval = setInterval(() => {
       //     handlesub();
      //  }, 4000);
    //    return () => clearInterval(interval);
 //   }, []);
    
    return (
        <View style={tw("flex-1 ")}>

            <View style={tw("items-center pt-1")}>

                <Image source={pr} />
                <Text >{text}</Text>
                <Text style={styles.buttonText}>
                    Add a Photo of You{"\n"}

                </Text>

            </View>

            <View style={tw("flex items-center justify-center h-1/2 w-full")}>
                <TouchableOpacity
                    //  onPress={() => navigation.goBack()}
                    style={tw("p-7")}
                >
                    <AntDesign name="pluscircle" size={50} color="black" onPress={pickImage} />
                </TouchableOpacity>

                <View style={styles.imageContainer}>


                    <TouchableOpacity style={styles.buttonTextsm} >

                        <Text> Please show your own Face </Text>
                    </TouchableOpacity>


                </View>

            </View>
            <View style={tw("flex-1 items-center  pt-1 mb-10")}>
                <TouchableOpacity

                    style={[
                        tw("w-64 p-3 rounded-xl  absolute bottom-1 bg-red-400"),
                        incompleteForm ? tw("bg-gray-400") : tw("bg-red-400"),
                    ]}

                    onPress={handlesub}

                >

                    <Text style={tw("text-center text-white text-xl")}>
                        {buttonTitle}
                    </Text>

                </TouchableOpacity>

            </View>


        </View >
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





});



export default Upload