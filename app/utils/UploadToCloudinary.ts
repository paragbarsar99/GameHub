// utils/cloudinaryUpload.ts
import Config from 'react-native-config';
const BASE_URL =
  'https://api.cloudinary.com/v1_1/dfyusubki/upload' || Config.CLOUDINARY_URL;
// console.error(Config);
const uploadToCloudinary = async (uri: string) => {
  try {
    const data = new FormData();

    // Handling file for both iOS and Android
    const file = {
      uri,
      type: 'image/jpeg', // or determine the MIME type dynamically based on the file
      name: 'image.jpg',
    };

    data.append('file', file);
    data.append('upload_preset', Config.UPLOAD_PRESET);
    data.append('cloud_name', Config.CLOUDINARY_NAME);
    // console.error(Config.CLOUDINARY_URL);
    const res = await fetch(BASE_URL || '', {
      method: 'POST',
      body: data,
    });

    const responseData = await res.json();

    if (res.ok) {
      return responseData.secure_url; // return the secure URL for the uploaded image
    } else {
      throw new Error(responseData.error?.message || 'Upload failed');
    }
  } catch (error) {
    // console.error('Cloudinary Upload Error:', error);
    throw error;
  }
};

export default uploadToCloudinary;
