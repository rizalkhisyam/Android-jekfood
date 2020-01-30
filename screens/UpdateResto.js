import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
// import Fire from '../Fire';

// import Constants from 'expo-constants';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';


export default class UpdateResto extends React.Component{

    state = {
        resto_name:'',
        descript:'',
        info:'',
        location:0,
        idResto:'',
        restoStatus:null,
        errorMessage: null
    };


    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp(){
        return Date.now();
    }

    handleUpResto(){
            firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant').set({
                idResto:this.uid,
                resto_name: this.state.resto_name,
                location: this.state.location,
                status_resto:true,
                timestamp:this.timestamp
                
            })
        }
        // componentDidMount() {
        //     if (Platform.OS === 'android' && !Constants.isDevice) {
        //         this.setState({
        //         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        //         });
        //     } else {
        //         this._getLocationAsync();
        //     }
        // }
        
        // _getLocationAsync = async () => {
        //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
        //     if (status !== 'granted') {
        //         this.setState({
        //         errorMessage: 'Permission to access location was denied',
        //         });
        //     }
        
        //     let location = await Location.getCurrentPositionAsync({});
        //     this.setState({ location });
        // };

    render(){
        // let text = 'Waiting..';
        // if (this.state.errorMessage) {
        //     text = this.state.errorMessage;
        // } else if (this.state.location) {
        //     text = JSON.stringify(this.state.location);
        // }
        return(
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <Text style={{fontWeight:'bold'}}>Ubah Informasi Restoran</Text>
                    </View>

                    <View style={styles.input_content}>
                    <View>
                        <Text style={styles.label_email}>Nama Restoran</Text>
                    </View>

                    <TextInput 
                    style={styles.inputan}
                    placeholder=' Masukkan nama restoran anda'
                    onChangeText={resto_name => this.setState({ resto_name })}
                    />

                    <View>
                        <Text style={styles.label_email}>Alamat Restoran</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MapAddress')}>
                        <Text>
                            pilih lewat maps
                        </Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_update} onPress={()=>this.handleUpResto()}>
                        <Text>Update</Text>
                    </TouchableOpacity>
                    
                        {/* <Text>
                            {text}
                        </Text> */}
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:32,
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor: '#D8D9DB',
        backgroundColor:'white'

    },
    input_content:{
        alignItems:'center',
        marginTop:25
    },
    label_email:{
        marginTop:10,
        fontWeight:'bold',
        marginLeft:-164,
        marginBottom:5
    },
    inputan:{
        width:327,
        height:50,
        borderColor: '#707070',
        borderWidth:0.5,
        borderRadius:4
    },
    textareaContainer: {
        width:327,
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    button_update:{
        marginTop:100,
        width:327,
        height:50,
        backgroundColor:'gainsboro',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    }
})