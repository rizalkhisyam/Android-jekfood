import * as firebase from 'firebase';

class Fire{

    addPost = async ({ food, price, descript, localUri}) => {
        
        const remoteUri = await this.uploadPhotoAsync(localUri);

        return new Promise(
            (res, rej) => {
                firebase.database()
                .ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/PostFood')
                .push({
                    food,
                    price,
                    descript,
                    uid:this.uid,
                    timestamp:this.timestamp,
                    image:remoteUri,
                    switchValue:true
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

    updatePost = async ({ food, price, descript, localUri, id}) => {
        
        const remoteUri = await this.uploadPhotoAsync(localUri);

        return new Promise(
            (res, rej) => {

                firebase.database()
                .ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/PostFood/'+id)
                .update({
                    food,
                    price,
                    descript,
                    uid:this.uid,
                    timestamp:this.timestamp,
                    image:remoteUri,
                    switchValue:true
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

    uploadPhotoAsync = async uri => {

        const path = `photos/${this.uid}/${Date.now()}.jpg`

        return new Promise(async (res, rej) => {
            const response = await fetch(uri)
            const blob = await response.blob()

            let upload = firebase.storage().ref(path).put(blob)

            upload.on('state_changed', snapshot => {}, err => {
                rej(err)
            },
            async () => {
                const url = await upload.snapshot.ref.getDownloadURL();
                res(url);
            })
        })        

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