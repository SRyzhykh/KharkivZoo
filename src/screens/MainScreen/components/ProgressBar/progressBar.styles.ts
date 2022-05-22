import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  progressBar: {
    height: '100%',
    width: '80%',
    backgroundColor: COLORS.MAIN_LIGHT,
    borderRadius: 10,
  },
  progressContainer: {
    borderColor: COLORS.MAIN,
    borderWidth: 2,
    height: SIZES.BAR_HEIGHT,
    backgroundColor: COLORS.LIGHT,
    borderRadius: 10,
    width: '80%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
});
