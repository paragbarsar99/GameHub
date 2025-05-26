import {HEARTFILL, HEARTTABBARSTROCK} from 'constants/Icons';
import usePostLike from 'hooks/usePostLike';
import {TPost} from 'hooks/usePosts';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Styles from '../Styles';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
const PostCard: React.FC<TPost> = ({
  creator,
  description,
  likes = 0,
  previewUrl,
  title,
  id,
}) => {
  //   console.log(likes);
  const {loading, onLikePost, getIsPostLiked} = usePostLike();
  const [numberOfLikes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();
  const toggleLike = async () => {
    try {
      const count = liked ? numberOfLikes - 1 : numberOfLikes + 1;
      setLiked(!liked);
      setLikes(prev => (liked ? prev - 1 : prev + 1));
      await onLikePost(id, count, liked);
    } catch (error) {
      setLikes(prev => {
        if (prev > 0) {
          return prev - 1;
        }
        return 0;
      });
      setLiked(!liked);
    }
  };
  //   console.log(numberOfLikes, likes);

  useEffect(() => {
    setLikes(likes);
    (async () => {
      const isLiked = await getIsPostLiked(id);
      setLiked(isLiked);
    })();
  }, [getIsPostLiked, id, likes]);

  const onPress = () => {
    //@ts-ignore
    navigation.navigate('details', {
      creator,
      description,
      likes,
      previewUrl,
      title,
      id,
    });
  };
  return (
    <Pressable onPress={onPress} style={Styles.card}>
      <Text style={Styles.creator}>By {creator}</Text>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.description}>{description}</Text>

      <View style={Styles.preview}>
        {previewUrl ? (
          <Animated.Image
            sharedTransitionTag="tag"
            source={{uri: previewUrl}}
            style={Styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={Styles.placeholder}>
            <Text style={Styles.placeholderText}>Game Preview</Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={toggleLike}
        style={Styles.likeButton}
        disabled={loading}>
        <SvgXml xml={liked ? HEARTFILL : HEARTTABBARSTROCK} />
        <Text style={Styles.likeText}>
          {numberOfLikes > 0
            ? `${numberOfLikes} Likes`
            : `${numberOfLikes} Like`}
        </Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default PostCard;
