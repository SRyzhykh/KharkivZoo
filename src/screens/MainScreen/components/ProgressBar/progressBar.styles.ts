import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  progressBar: {
    height: '100%',
    width: '80%',
    backgroundColor: COLORS.PROGRESS_BAR,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 99,
  },
  progressContainer: {
    height: SIZES.BAR_HEIGHT,
    backgroundColor: COLORS.PROGRESS_BACKGROUND,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    zIndex: 100,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: COLORS.LIGHT,
    textAlign: 'center',
    paddingRight: 10,
  },
});
