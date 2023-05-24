import React, { useState } from 'react';
import {Alert, ScrollView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';

const Active = ({ navigation }) => {
  const createTwoButtonAlert = () =>
    Alert.alert('Block your card?', 'Kartu KTM Anda akan tidak dapat digunakan kembali setelah melakukan blokir kartu. Untuk mengaktifkannya kembali, hubungi administrator.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Block card', onPress: () => {navigation.replace('Blocked');}},
    ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Your RFID Card</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardImgContainer}>
          <Image style={styles.cardImg}
            source={require('../../assets/images/ktm-active-blank.png')}
          />
          <Image style={styles.cardImgPerson}
            source={require('../../assets/images/Muhammad-Hilmy-Aziz.png')}
          />
          <View style={styles.cardContainerText}>
            <Text style={[styles.cardText, {fontSize: 14}]}>MUH. HILMY AZIZ</Text>
            <Text style={styles.cardText}>1103201244</Text>
            <Text style={[styles.cardText, {paddingTop: 6}]}>S1 Teknik Komputer</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.title}>Status</Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.subtitleActive}>Active</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.title}>Last Place</Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.subtitle}>Gedung TULT</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.title}>Last Taping</Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.subtitle}>19:30</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.title}>Lost your card?</Text>
          </View>
          <View style={styles.sectionRight}>
            <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
              <Text style={styles.subtitleBlock}>Block it now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>

      </ScrollView>
    </View>
  );
}

export default Active;

const styles = StyleSheet.create({
  //c
  cardContainerText: {
    top: 215,
    width: '100%',
    // backgroundColor: 'grey',
    position: 'absolute',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
  },
  cardImg: {
    alignSelf: 'center',
    height: 265,
    width: 348,
    resizeMode: 'contain',
  },
  cardImgPerson: {
    top: 108,
    bottom: 0,
    position: 'absolute',
    // backgroundColor: 'grey',
    alignSelf: 'center',
    height: 300/3,
    width: 450/3,
    // resizeMode: 'contain',
  },
  cardImgContainer: {
    justifyContent: 'center',
    paddingVertical: 64,
    // backgroundColor: 'grey',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },

  //d
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#CDC5C5',
  },

  //h
  h1: {
    color: '#372F2F',
    fontSize: 22,
    fontWeight: '500',
  },
  header: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },

  //i

  //l

  //p

  //s
  section: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -1,
    // backgroundColor: 'red',
    paddingTop: 10,
    flexDirection: 'row',

  },
  sectionLeft: {
    
  },
  sectionRight: {

  },
  subtitle: {
    color: '#7D7676',
    fontSize: 14,
  },
  subtitleActive: {
    fontSize: 16,
    fontWeight: '500',
    color: '#277237',
  },
  subtitleBlock: {
    fontSize: 16,
    fontWeight: '500',
    color: '#EA5455',
  },

  //t
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});