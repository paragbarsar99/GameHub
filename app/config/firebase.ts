import firestore from '@react-native-firebase/firestore';

const likeCollection = () => firestore().collection('likes');

const postsCollection = () => firestore().collection('posts');

export {likeCollection, postsCollection};
