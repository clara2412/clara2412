import {IMAGES} from '@src/assets';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import ImageBackground from '../components/ImageBackground';
import LoginForm from '../components/LoginForm';
import styles from './styles';

const ExpertLoginScreen = () => {
    const {t} = useTranslation();
    return (
        <ImageBackground source={IMAGES.bg_intro_step_1}>
            <View style={styles.contentWrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{t('Welcome')}</Text>
                    <Text style={styles.subtitle}>{t("Let's get started")}</Text>
                </View>
                <LoginForm />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{t('Mail us for creating account for Expert')}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

export default ExpertLoginScreen;
