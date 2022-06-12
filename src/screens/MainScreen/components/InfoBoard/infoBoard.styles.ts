import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    backgroundColor: COLORS.MAIN_LIGHT,
    padding: SIZES.GUTTER,
    paddingRight: SIZES.GUTTER * 2,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    paddingHorizontal: SIZES.GUTTER * 2,
  },
  text: {
    marginLeft: 10,
  },
  list: {
    paddingTop: SIZES.GUTTER,
    width: '100%',
    paddingHorizontal: SIZES.GUTTER * 2,
  },
});
