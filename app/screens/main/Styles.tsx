import {StyleSheet} from 'react-native';
import {hp, wp} from 'styles/Dimensions';
import {lightTheme} from 'styles/FontsAndColor';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    gap: hp(2),
    paddingTop: hp(3),
    backgroundColor: lightTheme.colors.btn_white,
  },
  input: {
    height: hp(7),
  },
  header: {
    fontFamily: lightTheme.fonts.txt_medium,
    color: lightTheme.colors.btn_black,
    fontSize: wp(6),
  },
  subHeading: {
    fontFamily: lightTheme.fonts.txt_medium,
    color: lightTheme.colors.btn_black,
    fontSize: wp(3.8),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  align_center: {
    alignSelf: 'center',
  },
  uploadContainer: {
    height: hp(20),
    borderRadius: 20,
    backgroundColor: lightTheme.colors.gray_100,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: lightTheme.colors.gray_400,
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(1.5),
  },
  fab: {
    backgroundColor: lightTheme.colors.btn_white,
    elevation: 10,
    shadowColor: lightTheme.colors.btn_green,
    position: 'absolute',
    right: wp(3),
    bottom: hp(3),
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 0,
  },
  logout: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 0,
    alignSelf: 'flex-end',
    backgroundColor: lightTheme.colors.btn_white,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  creator: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginVertical: 8,
  },
  preview: {
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
});
