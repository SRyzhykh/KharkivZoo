import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../../constants';
import { styles } from './infoBoard.styles';

const renderItem = ({ item }) => {
  return (
    <View style={styles.board}>
      <Icon name={item.name} size={30} color={COLORS.ICON} />
      <Text style={styles.text}>{item.info}</Text>
    </View>
  );
};

export const InfoBoard = ({ data }) => {
  return (
    <FlatList
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
    />
  );
};
