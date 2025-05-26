import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import Container from 'components/Container';
import {hp} from 'styles/Dimensions';
import Animated from 'react-native-reanimated';

export const PostDetails = ({route}) => {
  const {creator, title, description, previewUrl} = route.params;
  return (
    <Container>
      <ScrollView>
        <View style={styles.imageContainer}>
          {previewUrl ? (
            <Animated.Image
              sharedTransitionTag="tag"
              source={{uri: previewUrl}}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>Game Preview</Text>
            </View>
          )}
        </View>

        <View style={styles.content}>
          <Text style={styles.metaText}>Created by</Text>
          <Text style={styles.creator}>{creator}</Text>

          <Text style={styles.metaText}>Title</Text>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.metaText}>Description</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: hp(40),
    width: '100%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    elevation: 3,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#999',
  },
  content: {
    padding: 20,
    gap: 12,
  },
  metaText: {
    color: '#888',
    fontSize: 12,
    textTransform: 'uppercase',
    marginTop: 12,
  },
  creator: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
  },
});
