import React, { useState } from 'react';
import {SectionList, SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';

var data = [
    {
      title: 'Today',
      data: [
        {
          gedung: 'Gedung TULT', 
          time: '19:30',
        },
        {
          gedung: 'Gedung A', 
          time: '10:56',
        },
        {
          gedung: 'Gedung A', 
          time: '06:25',
        },
      ]
    },
    {
      title: 'Yesterday',
      data: [
        {
          gedung: 'Gedung TULT', 
          time: '19:30',
        },
        {
          gedung: 'Gedung TULT', 
          time: '17:20',
        },
      ]
    },
    {
      title: 'Wed, April 22, 2023',
      data: [
        {
          gedung: 'Gedung TULT', 
          time: '19:30',
        },
        {
          gedung: 'Gedung TULT', 
          time: '17:20',
        },
        {
          gedung: 'Gedung A', 
          time: '17:20',
        },
        {
          gedung: 'Gedung A', 
          time: '17:20',
        },
      ]
    },
    {
      title: 'Mon, April 20, 2023',
      data: [
        {
          gedung: 'Gedung TULT', 
          time: '19:30',
        },
        {
          gedung: 'Gedung TULT', 
          time: '17:20',
        },
        {
          gedung: 'Gedung A', 
          time: '17:20',
        },
        {
          gedung: 'Gedung A', 
          time: '17:20',
        },
        {
          gedung: 'Gedung TULT', 
          time: '17:20',
        },
        {
          gedung: 'Gedung TULT', 
          time: '17:20',
        },
      ]
    },
  ];


const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>History</Text>
      </View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.section}>
            <Text style={styles.h2}>{title}</Text>
          </View>
        )}

        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.gedung}</Text>
            <Text style={styles.subtitle}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default History;

const styles = StyleSheet.create({
  //c
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },

  //h
  h1: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
  h2: {
    color: '#645D5D',
    fontSize: 20,
    fontWeight: '500',
  },
  header: {
    paddingTop: 12,
  },

  //i
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  //s
  section: {
    borderTopColor: '#CDC5C5', // Color of the border
    borderTopStyle: 'solid',
    borderTopWidth: 1, // Width of the border
    marginTop: -2,
    paddingTop: 20,
  },
  subtitle: {
    color: '#7D7676',
    fontSize: 14,
  },

  //t
  title: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 8,
  },
});
