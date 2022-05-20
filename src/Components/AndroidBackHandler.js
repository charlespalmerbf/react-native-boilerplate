import React, {useEffect} from 'react';
import {BackHandler} from "react-native"

const AndroidBackHandler = ({onPress}) => {
    useEffect(() => {
        const backAction = () => {
            onPress()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
        );

        return () => backHandler.remove();
    }, []);

    return null;
}

export default AndroidBackHandler;

