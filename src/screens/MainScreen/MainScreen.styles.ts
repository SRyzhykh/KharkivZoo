import { StyleSheet } from 'react-native';
import { COLORS, FONT_WEIGHT, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
  },
  animalCard: {
    borderWidth: 2,
    borderColor: COLORS.DISABLED,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 1000,
    flex: 1,
    marginVertical: SIZES.GUTTER,
  },
  animalPop: {
    borderRadius: 100,
    width: SIZES.POP_SIZE,
    height: SIZES.POP_SIZE,
  },
  header: {
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: SIZES.LARGE_FONT,
    color: '#000000',
  },
});
