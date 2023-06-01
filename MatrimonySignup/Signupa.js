import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native';
import React, { useRef, useState } from 'react';
const countries = [
    { job: 'Accountant' },
    { job: 'Accounts executive' },
    { job: 'Accounts manager' },
    { job: 'Actuary' },
    { job: 'Administrative assistant' },
    { job: 'Airline pilot' },
    { job: 'Animator' },
    { job: 'Application developer' },
    { job: 'Architect' },
    { job: 'Artificial intelligence specialist' },
    { job: 'Auditor' },
    { job: 'Bank manager' },
    { job: 'Bank teller' },
    { job: 'Biochemist' },
    { job: 'Biomedical engineer' },
    { job: 'Brand manager' },
    { job: 'Budget analyst' },
    { job: 'Business analyst' },
    { job: 'Business Owner' },
    { job: 'Business development manager' },
    { job: 'Business intelligence analyst' },
    { job: 'Buyer' },
    { job: 'Call center executive' },
    { job: 'Cashier' },
    { job: 'Chartered accountant' },
    { job: 'Chemical engineer' },
    { job: 'Chief executive officer' },
    { job: 'Chief financial officer' },
    { job: 'Chief marketing officer' },
    { job: 'Chief operations officer' },
    { job: 'Chief technology officer' },
    { job: 'Civil engineer' },
    { job: 'Clinical research associate' },
    { job: 'Cloud architect' },
    { job: 'Commercial pilot' },
    { job: 'Computer hardware engineer' },
    { job: 'Computer network architect' },
    { job: 'Computer programmer' },
    { job: 'Computer systems analyst' },
    { job: 'Construction manager' },
    { job: 'Content writer' },
    { job: 'Copy editor' },
    { job: 'Corporate communications specialist' },
    { job: 'Cost accountant' },
    { job: 'Creative director' },
    { job: 'Credit analyst' },
    { job: 'Cybersecurity analyst' },
    { job: 'Data analyst' },
    { job: 'Data entry clerk' },
    { job: 'Data scientist' },
    { job: 'Database administrator' },
    { job: 'Dentist' },
    { job: 'Doctor' },
    { job: 'Digital marketing specialist' },
    { job: 'Direct salesperson' },
    { job: 'E-commerce specialist' },
    { job: 'Electrical engineer' },
    { job: 'Electrician' },
    { job: 'Electronics engineer' },
    { job: 'Endocrinologist' },
    { job: 'Engineer' },
    { job: 'Energy engineer' },
    { job: 'Environmental engineer' },
    { job: 'Environmental specialist' },
    { job: 'Event planner' },
    { job: 'Executive assistant' },
    { job: 'Fashion designer' },
    { job: 'Film director' },
    { job: 'Freelancer' },
    { job: 'Finance manager' },
    { job: 'Financial advisor' },
    { job: 'Financial analyst' },
    { job: 'Fitness trainer' },
    { job: 'Food service manager' },
    { job: 'Front-end web developer' },
    { job: 'Full-stack web developer' },
    { job: 'Game developer' },
    { job: 'General practitioner' },
    { job: 'Geologist' },
    { job: 'Graphic designer' },
    { job: 'Hardware engineer' },
    { job: 'Healthcare analyst' },
    { job: 'Hospital administrator' },
    { job: 'Hotel manager' },
    { job: 'Human resource executive' },
    { job: 'Human resource manager' },
    { job: 'Industrial engineer' },
    { job: 'Information security analyst' },
    { job: 'Information technology manager' },
    { job: 'Insurance agent' },
    { job: 'Interior designer' },
    { job: 'Investment banker' },
    { job: 'IT consultant' },
    { job: 'Journalist' },
    { job: 'Laboratory technician' },
    { job: 'Lawyer' },
    { job: 'Logistics manager' },
    { job: 'Machine learning engineer' },
    { job: 'Maintenance technician' },
    { job: 'Management consultant' },
    { job: 'Market research analyst' },
    { job: 'Marketing coordinator' },
    { job: 'Marketing manager' },
    { job: 'Materials engineer' },
    { job: 'Mechanical engineer' },
    { job: 'Medical assistant' },
    { job: 'Medical laboratory technician' },
    { job: 'Medical records technician' },
    { job: 'Medical researcher' },
    { job: 'Medical sales representative' },
    { job: 'Medical technologist' },
    { job: 'Merchant navy officer' },
    { job: 'Meteorologist' },
    { job: 'Mobile application developer' },
    { job: 'Multimedia artist and animator' },
    { job: 'Nurse' },
    { job: 'Nutritionist' },
    { job: 'Office assistant' },
    { job: 'Operations manager' },
    { job: 'Optometrist' },
    { job: 'Orthodontist' },
    { job: 'Paralegal' },
    { job: 'Pathologist' },
    { job: 'Payroll specialist' },
    { job: 'Personal trainer' },
    { job: 'Petroleum engineer' },
    { job: 'Pharmacist' },
    { job: 'Pharmacologist' },
    { job: 'Physical therapist' },
    { job: 'Physician' },
    { job: 'Physician assistant' },
    { job: 'Product manager' },
    { job: 'Product owner' },
    { job: 'Professor' },
    { job: 'Programmer' },
    { job: 'Project manager' },
    { job: 'Psychiatrist' },
    { job: 'Psychologist' },
    { job: 'Public relations specialist' },
    { job: 'Quality assurance analyst' },
    { job: 'Real estate agent' },
    { job: 'Real estate developer' },
    { job: 'Real estate manager' },
    { job: 'Receptionist' },
    { job: 'Registered nurse' },
    { job: 'Research analyst' },
    { job: 'Risk analyst' },
    { job: 'Safety engineer' },
    { job: 'Sales associate' },
    { job: 'Sales engineer' },
    { job: 'Sales manager' },
    { job: 'SAP consultant' },
    { job: 'Scrum master' },
    { job: 'Search engine optimization specialist' },
    { job: 'Security analyst' },
    { job: 'Security guard' },
    { job: 'Social media manager' },
    { job: 'Software engineer' },
    { job: 'Software quality assurance engineer' },
    { job: 'Software tester' },
    { job: 'Solution architect' },
    { job: 'Statistician' },
    { job: 'Supply chain analyst' },
    { job: 'Supply chain manager' },
    { job: 'Surgeon' },
    { job: 'System administrator' },
    { job: 'Systems analyst' },
    { job: 'Teacher' },
    { job: 'Technical writer' },
    { job: 'Telecom engineer' },
    { job: 'Test engineer' },
    { job: 'Tour guide' },
    { job: 'Training specialist' },
    { job: 'Travel agent' },
    { job: 'UI designer' },
    { job: 'UX designer' },
    { job: 'Video editor' },
    { job: 'Virtual reality developer' },
    { job: 'Visual merchandiser' },
    { job: 'Web designer' },
    { job: 'Web developer' },
    { job: 'Writer' },
    { job: 'Zoologist' },

];
const Signupa = () => {
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


    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{
                    width: '90%',
                    height: 50,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    marginTop: 100,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                }}
                onPress={() => {
                    setClicked(!clicked);
                }}>
                <Text style={{ fontWeight: '600' }}>
                    {selectedjob == '' ? 'Select Occupation' : selectedjob}
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
        </View>
    );
};

export default Signupa;