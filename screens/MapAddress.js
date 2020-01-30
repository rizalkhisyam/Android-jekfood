import React from 'react';
import MapView, { Polyline as Polylines } from 'react-native-maps';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Marker from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class MapAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concatLot: null,
      concatDes:null,
      nameLoc:'',
      nameDesLoc:'',
      currentAddress:'',
      destiAddress:'',
      coords:[],
      markers:[],
      x: 'false',
      cordLatitude:0,
      cordLongitude:0,
    };

    this.mergeLot = this.mergeLot.bind(this);
    this.handleMarker = this.handleMarker.bind(this);

  }

  componentDidMount(){
    this.getMapPermissions();
  }

    getMapPermissions = async () => {
        if (Constants.platform.android){
          const { status } = await Permissions.getAsync(Permissions.LOCATION)
        
            if(status != 'granted'){
              const response = await Permissions.askAsync(Permissions.LOCATION)
            }
            navigator.geolocation.getCurrentPosition(
              ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude },this.mergeLot),
            )
        }
    };


    mergeLot(desLat, desLong){

          let concatLot = `${this.state.latitude},${this.state.longitude}`
          let concatDes = `${desLat},${desLong}`
          this.setState({
            concatLot: concatLot,
            concatDes: concatDes
          }, () => {
            this.getDirections(concatLot, concatDes);
          });
      }

  handleMarker= (e) => {
    this.setState({
      markers:[{
        coordinate: e.nativeEvent.coordinate
      }],
      cordLatitude: e.nativeEvent.coordinate.latitude,
      cordLongitude: e.nativeEvent.coordinate.longitude
    });
    this.mergeLot(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)
  }
  
    async getDirections(startLoc, desLoc) {
      try {
        const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyAl_jzi_etjLgz0LV10ECyU5Hsntnfz6q0`)
        const respJson = await resp.json();
        const response = respJson.routes[0]
        const distanceTime = response.legs[0]
        const nameLoc = respJson.routes[0].legs[0].start_address;
        const nameDesLoc = respJson.routes[0].legs[0].end_address;
        const loc = nameLoc.split(',');
        const nameDes = nameDesLoc.split(',');
        const distance = distanceTime.distance.text
        const time = distanceTime.duration.text
        const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        const coords = points.map(point => {
          return {
            latitude: point[0],
            longitude: point[1]
          }
        })
        this.setState({coords:coords})
        this.setState({ distance, time })
        this.setState({
          nameLoc: loc[0]+','+loc[1],
          nameDes: nameDes[0]+','+nameDes[0]
        })
      } catch(error) {
        console.log('Error: ', error)
      }
    }

  render(){
    const { latitude, longitude } = this.state

    if(latitude){
      return (
        <View style={{flex:1}}>
          <MapView
          style={{width:'100%',height:500}}
          showsUserLocation
          onPress={this.handleMarker}
          
          initialRegion={{
            latitude,
            longitude,
            
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
          }}
          >

          {this.state.markers.map(marker => (
              <MapView.Marker key='marker' {...marker}
              />
            ))}

            <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={5}
            strokeColor="blue"/>

          </MapView>
          <View>
            <Text style={styles.name_loc}>Posisi anda saat ini</Text>
          <Text>{this.state.nameLoc}</Text>
          </View>
        </View>
      );
    }

    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>Sedang menyiapkan google maps</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    name_loc:{
        margin:10,
        fontSize:20,
        fontWeight:'bold'
    }    
})



