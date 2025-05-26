import firestore from '@react-native-firebase/firestore';
import {useCallback, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {likeCollection, postsCollection} from 'config/firebase';
export type TPost = {
  id: string; // Document ID from Firestore
  creator: string;
  title: string;
  description: string;
  previewUrl: string | null; // Optional
  likes: number;
};

const usePostLike = () => {
  const [loading, setLoading] = useState(false);
  const onCreateLikedPostDoc = useCallback(
    async (postId: string, isLiked: boolean) => {
      try {
        const userId = auth().currentUser?.uid;
        if (isLiked) {
          const doc = await likeCollection()
            .where('userId', '==', userId)
            .where('postId', '==', postId)
            .get();
          //delete the doc as user removed the like
          await likeCollection().doc(doc.docs[0].id).delete();
        } else {
          await likeCollection().add({
            userId: userId,
            postId: postId,
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [],
  );
  const onLikePost = useCallback(
    async (docId: string, count: number, isLiked: boolean) => {
      try {
        setLoading(true);
        await onCreateLikedPostDoc(docId, isLiked);
        await postsCollection().doc(docId).update({
          likes: count,
        });
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    },
    [onCreateLikedPostDoc],
  );

  const getIsPostLiked = useCallback(async (postId: string) => {
    try {
      const userId = auth().currentUser?.uid;
      //check if postid and userid exist in likes collection
      const isLiked = await likeCollection()
        .where('userId', '==', userId)
        .where('postId', '==', postId)
        .get();
      if (!isLiked.empty) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }, []);

  return {onLikePost, loading, getIsPostLiked};
};

export default usePostLike;
