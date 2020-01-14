import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBqHAu_ywlwkAFqX228XY-ny0PbLNNagpo",
    authDomain: "ojek-apps.firebaseapp.com",
    databaseURL: "https://ojek-apps.firebaseio.com",
    projectId: "ojek-apps",
    storageBucket: "ojek-apps.appspot.com",
    messagingSenderId: "1060042604495",
    appId: "1:1060042604495:web:98fb3ebe6f45e571e6dcba",
    measurementId: "G-0RKVP2D71T"
  };

class Fire{
    constructor(){
        firebase.initializeApp(firebaseConfig);
    }

    // addPost = async ({ text, price, description, localUri }) => {
    //     const remoteUri = await this.uploadPhotoAsync(localUri);

    //     return new Promise(
    //         (res, rej) => {
    //             this.firestore
    //             .collection('post')
    //             .add({
    //                 text,
    //                 price,
    //                 description,
    //                 uid:this.uid,
    //                 timestamp:this.timestamp,
    //                 image:remoteUri
    //             })
    //             .then(ref => {
    //                 res(ref);
    //             })
    //             .catch(error => {
    //                 rej(error);
    //             })
    //         }
    //     )
    // }

    addPost = async ({ food, price, descript}) => {

        return new Promise(
            (res, rej) => {
                this.firestore
                .collection('post')
                .add({
                    food,
                    price,
                    descript,
                    uid:this.uid,
                    timestamp:this.timestamp
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                })
            }
        )
    }

    // uploadPhotoAsync = async uri => {
    //     const path = 'photos/${this.uid}/${Date.now()}.jpg'

    //     return new Promise(

    //         async (res, rej) => {
    //             const response = await fetch(uri)
    //             const file = await response.blob()

    //             let upload = firebase.storage().ref(path).put(file)

    //             upload.on('state_changed', snapshot => {}, err => {
    //                 rej(err)
    //             },
    //             async() => {
    //                 const url = await upload.snapshot.ref.getDownloadURL();
    //                 res(url);
    //             }
                
    //             )
    //         }

    //     ) 
    // }

    get firestore(){
        return firebase.firestore();
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp(){
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;