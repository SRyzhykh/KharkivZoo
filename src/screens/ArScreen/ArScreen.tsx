import React, { useState } from 'react';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
} from '@viro-community/react-viro';

const ARScene = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      <Viro3DObject
        source={require('../../assets/wolf-obj/wolf-obj.obj')}
        resources={[require('../../assets/wolf-obj/wolf-obj.mtl')]}
        position={[0, 0, -1]}
        scale={[0.5, 0.5, 0.5]}
        type="OBJ"
      />
    </ViroARScene>
  );
};

export const ArScreen = () => {
  const [object, setObject] = useState('skull');
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: ARScene,
      }}
      viroAppProps={{ object: object }}
      style={{ flex: 1 }}
    />
  );
};
