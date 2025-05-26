import {postsCollection} from 'config/firebase';
import {useCallback, useState} from 'react';

export type TPost = {
  id: string; // Document ID from Firestore
  creator: string;
  title: string;
  description: string;
  previewUrl: string | null; // Optional
  likes: number;
};

const usePosts = () => {
  const [post, setPost] = useState<TPost[]>([]);
  const [lastVisibleRef, setLastVisiblePost] = useState();
  const [isRefreshing, setRefreshing] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const fetchPostsPaginated = useCallback(
    async (limit: number, onRefresh: boolean = false) => {
      try {
        if (onRefresh) {
          setRefreshing(true);
          setLastVisiblePost(undefined);
        } else {
          setFetching(true);
        }

        let query = postsCollection().limit(limit).orderBy('createdAt', 'desc');

        // If there’s a last visible doc, paginate from there

        if (lastVisibleRef && !onRefresh) {
          query = query.startAfter(lastVisibleRef);
        }
        const snapshot = await query.get();
        console.log(snapshot.docs);
        const posts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const lastVisible = snapshot.docs[snapshot.docs.length - 1];

        //avoid undefind as this will reset the visible post and restart the post fetch
        //from the begining
        if (lastVisible) {
          //end of post
          setLastVisiblePost(lastVisible);
        }
        if (onRefresh) {
          setPost([...posts]);
        } else {
          setPost(prev => [...prev, ...posts]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setFetching(false);
        setRefreshing(false);
      }
    },
    [lastVisibleRef],
  );

  return {post, fetchPostsPaginated, isRefreshing, isFetching};
};

export default usePosts;
