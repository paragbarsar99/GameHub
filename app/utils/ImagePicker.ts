import {
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';

const ImagePicker = async (
  props: ImageLibraryOptions,
): Promise<ImagePickerResponse> => {
  return await launchImageLibrary({...props});
};

export default ImagePicker;
