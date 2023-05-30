import React, { useState } from 'react';
import {Alert, ScrollView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import { PRIMARY50, NEUTRAL20, NEUTRAL50, NEUTRAL80, GREEN } from '../../styles/color';
// import { h1 } from '../../styles/style'

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
      <StatusBar
        barStyle='dark-content'
        backgroundColor={"transparent"}
        translucent
      />
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.h1}>Your RFID Card</Text>
      </View>

      {/* CONTENT */}
      <ScrollView style={styles.content}>

        {/* CONTAINER IMAGE */}
        <View style={styles.containerCardImg}>
          <Image style={styles.cardImg}
            source={require('../../assets/images/ktm-active-blank.png')}
          />
          <Image style={styles.cardImgPerson}
            source={require('../../assets/images/Muhammad-Hilmy-Aziz.png')}
          />
          <View style={styles.containerCardText}>
            <Text style={[styles.cardText, {fontSize: 14}]}>MUH. HILMY AZIZ</Text>
            <Text style={styles.cardText}>1103201244</Text>
            <Text style={[styles.cardText, {paddingTop: 6}]}>S1 Teknik Komputer</Text>
          </View>
        </View>

        {/* CONTAINER SECTION */}
        <View style={styles.containerSection}>
          <View style={styles.section}>
            <Text style={styles.h2}>Status</Text>
            <Text style={[styles.h2, { color: GREEN, }]}>Active</Text>
          </View>

          <View style={styles.divider}></View>

          <View style={styles.section}>
            <Text style={styles.h2}>Last Place</Text>
            <Text style={styles.subtitle}>Gedung TULT</Text>
          </View>

          <View style={styles.divider}></View>

          <View style={styles.section}>
            <Text style={styles.h2}>Last Taping</Text>
            <Text style={styles.subtitle}>19:30</Text>
          </View>

          <View style={styles.divider}></View>

          <View style={styles.section}>
            <Text style={styles.h2}>Lost your card?</Text>
            <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
              <Text style={[styles.h2, { color: PRIMARY50, }]}>Block it now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider}></View>
        
        </View>

      </ScrollView>
    </View>
  );
}

export default Active;

const styles = StyleSheet.create({
  //c
  cardText: {
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  cardImg: {
    // backgroundColor: 'red',
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    // paddingTop: StatusBar.currentHeight,
  },
  containerCardImg: {
    flex: 1,
    // justifyContent: 'center',
    paddingVertical: 64,
    // backgroundColor: 'blue',
  },
  containerSection: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  containerCardText: {
    bottom: '45%',
    // height: '100%',
    width: '100%',
    // backgroundColor: 'grey',
    position: 'absolute',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    // backgroundColor:'yellow',
  },

  //d
  divider: {
    marginVertical: '7%',
    height: 1,
    backgroundColor: NEUTRAL80,
  },

  //h
  h1: {
    color: NEUTRAL20,
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  h2: {
    color: NEUTRAL20,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  header: {
    // backgroundColor: 'grey',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '7%',
  },

  //i

  //l

  //p

  //s
  section: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: -1,
    // backgroundColor: 'red',
    // paddingTop: 10,
    flexDirection: 'row',

  },
  subtitle: {
    color: NEUTRAL50,
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
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