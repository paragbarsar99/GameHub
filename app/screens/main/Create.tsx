import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import firestore from '@react-native-firebase/firestore';
import Button from 'components/Button';
import Container from 'components/Container';
import Styles from './Styles';
import Input from 'components/Input';
import uploadToCloudinary from 'utils/UploadToCloudinary';
import ToastMessage from 'components/ToastMessage';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from 'styles/Dimensions';
import {UPLOAD} from 'constants/Icons';
import {postsCollection} from 'config/firebase';

export const Create = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [onSelectingImge, setSelectingImage] = useState(false);
  const pickImage = async () => {
    try {
      setSelectingImage(true);
      const result = await launchImageLibrary({mediaType: 'photo'});
      if (result.assets && result.assets.length > 0) {
        setImageUri(result.assets[0].uri || null);
      }
    } finally {
      setSelectingImage(false);
    }
  };

  const uploadImage = async () => {
    try {
      if (!imageUri) {
        return null;
      }
      // console.error(imageUri);

      const url = await uploadToCloudinary(imageUri);
      return url;
    } catch (error) {
      ToastMessage({
        type: 'error',
        text1: error.message || 'Something went wrong',
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setUploading(true);
      if (!title) {
        ToastMessage({
          type: 'error',
          text1: 'Please enter valid title for snippet',
        });
        return;
      }
      const previewUrl = await uploadImage();
      if (!previewUrl) {
        ToastMessage({
          type: 'error',
          text1: 'Please select an image for preview',
        });
        return;
      }
      await postsCollection().add({
        title,
        description,
        creator: creator || 'Anonymous',
        previewUrl: previewUrl || '',
        likes: 0,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      ToastMessage({
        type: 'success',
        text1: 'Post uploaded successfully',
      });
      navigation.goBack();
      setTitle('');
      setDescription('');
      setCreator('');
      setImageUri(null);
    } catch (error) {
      ToastMessage({
        type: 'error',
        text1: error?.message || 'something went wrong',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Container style={Styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          gap: hp(2),
        }}>
        <Text style={[Styles.header, Styles.align_center]}>GameSnips</Text>
        <Input
          placeholder="Game Title"
          value={title}
          onChangeText={setTitle}
          containerStyle={Styles.input}
          maxLength={30}
        />
        <Input
          placeholder="Description(optional)"
          value={description}
          onChangeText={setDescription}
          multiline
          containerStyle={Styles.input}
          maxLength={100}
        />
        <Input
          placeholder="Creator Name"
          value={creator}
          onChangeText={setCreator}
          containerStyle={Styles.input}
          maxLength={30}
        />
        <Pressable
          disabled={onSelectingImge}
          onPress={pickImage}
          style={Styles.uploadContainer}>
          {imageUri ? (
            <Image
              source={{uri: imageUri}}
              style={Styles.image}
              resizeMode="cover"
            />
          ) : (
            <>
              <Text>Upload Preview Image</Text>
              <Image
                source={UPLOAD}
                resizeMode="contain"
                style={{height: hp(7), width: wp(15)}}
              />
            </>
          )}
        </Pressable>

        <Button
          label={uploading ? 'Uploading...' : 'Submit'}
          onPress={handleSubmit}
          disabled={uploading}
          buttonStyle={{
            maxHeight: hp(7),
          }}
        />
      </ScrollView>
    </Container>
  );
};
