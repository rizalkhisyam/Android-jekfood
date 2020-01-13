import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class HistoryScreen extends React.Component{

    render(){
        return(
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>Tambah Menu</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.input_content}>
                    <View>
                        <Text style={styles.label_email}>E-mail</Text>
                    </View>

                    <TextInput 
                    style={styles.inputan}
                    placeholder='Masukkan nama makanan' 
                    autoCapitalize="none"/>

                    <View>
                        <Text style={styles.label_email}>Harga Makanan</Text>
                    </View>

                    <TextInput 
                    style={styles.inputan}
                    placeholder='Masukkan harga makanan' 
                    autoCapitalize="none"/>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1
    },
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:32,
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor: '#D8D9DB'

    },
    input_content:{
        alignItems:'center',
        marginTop:25
    },
    label_email:{
        marginTop:10,
        fontWeight:'bold',
        marginLeft:-164
    },
    inputan:{
        width:327,
        height:50,
        borderColor: '#707070',
        borderWidth:0.5,
        borderRadius:4
    },
})