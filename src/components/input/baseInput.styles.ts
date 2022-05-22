import { StyleSheet } from 'react-native';
import { COLORS, FONT_WEIGHT, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  input: {
    borderBottomColor: COLORS.LIGHT,
    borderBottomWidth: 2,
    padding: SIZES.GUTTER / 2,
    width: '80%',
    fontSize: SIZES.MEDIUM_FONT,
    fontWeight: FONT_WEIGHT.BOLD,
    color: COLORS.SECONDARY,
    marginTop: SIZES.GUTTER,
  },
});
