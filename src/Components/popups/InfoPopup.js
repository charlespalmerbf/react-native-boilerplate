import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import theme from 'theme';

import CorePopup from 'components/popups/CorePopup';
import {BoldText, RegularText} from 'components/Text';
import PrimaryButton from 'components/buttons/PrimaryButton';

const InfoPopup = props => {
  return (
    <CorePopup visible={props.visible}>
      <View style={styles.container}>
        <BoldText style={styles.titleStyle}>{props.title}</BoldText>
        <RegularText style={styles.infoText}>{props.info}</RegularText>
        <View style={styles.buttonRow}>
          <PrimaryButton title={'Close'} onPress={props.onPress} />
        </View>
      </View>
    </CorePopup>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: moderateScale(22),
    color: theme.colors.dark,
    fontWeight: 'bold',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  infoText: {
    textAlign: 'center',
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(15),
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: moderateScale(20),
    marginHorizontal: moderateScale(15),
  },
});

export default InfoPopup;
