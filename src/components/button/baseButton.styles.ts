import { StyleSheet } from 'react-native';
import { COLORS, FONT_WEIGHT, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.MAIN,
    padding: SIZES.GUTTER,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.SECONDARY,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: SIZES.MEDIUM_FONT,
  },
});
