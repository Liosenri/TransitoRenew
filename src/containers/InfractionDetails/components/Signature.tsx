import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Card, CustomText} from '@/components';
import {getFolioSignatureUri} from '@/utils/fs';
import {useState} from 'react';

interface Props {
  folio: string;
}

const Signature = ({folio}: Props) => {
  const [onError, setOnError] = useState(false);
  return (
    <Card title="Firma del ciudadano">
      {onError ? (
        <CustomText
          textSize="small"
          text="Firma no encontrada en el dispositivo"
        />
      ) : (
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: getFolioSignatureUri(folio)}}
          onError={() => setOnError(true)}
        />
      )}
    </Card>
  );
};

export default Signature;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
