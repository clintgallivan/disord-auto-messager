import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './src/styles';
import { Feather } from '@expo/vector-icons';
import { instructions } from './src/instructions';
import { createOutput } from './src/createOutput';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [dummy, setDummy] = useState(true);
  const [outputValue, setOutputValue] = useState('(data will show here)');

  const [pastedValue, setPastedValue] = useState(``);

  const [minNum, setMinNum] = useState(null);
  const [maxNum, setMaxNum] = useState(null);

  const [firstOptions, setFirstOptions] = useState([]);
  const [secondOptions, setSecondOptions] = useState([]);
  const [thirdOptions, setThirdOptions] = useState([]);
  const [fourthOptions, setFourthOptions] = useState([]);
  const [fifthOptions, setFifthOptions] = useState([]);

  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [thirdValue, setThirdValue] = useState('');
  const [fourthValue, setFourthValue] = useState('');
  const [sixthValue, setSixthValue] = useState('');

  // const [selectedId, setSelectedId] = useState(true);

  const firstFlatListItem = (item) => {
    const removeItem = (itemToDelete) => {
      let newArray = [];
      firstOptions.forEach((item, index) => {
        console.log({ index });
        if (itemToDelete.index !== index) {
          newArray.push(item);
        }
      });

      setFirstOptions(newArray);

      console.log({ newArray });
    };

    return (
      <View style={styles.flatListItem}>
        <Text>{item.item}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeItem(item)}
        >
          <Feather name="x" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const secondFlatListItem = (item) => {
    const removeItem = (itemToDelete) => {
      let newArray = [];
      secondOptions.forEach((item, index) => {
        console.log({ index });
        if (itemToDelete.index !== index) {
          newArray.push(item);
        }
      });

      setSecondOptions(newArray);

      console.log({ newArray });
    };

    return (
      <View style={styles.flatListItem}>
        <Text>{item.item}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeItem(item)}
        >
          <Feather name="x" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const thirdFlatListItem = (item) => {
    const removeItem = (itemToDelete) => {
      let newArray = [];
      thirdOptions.forEach((item, index) => {
        console.log({ index });
        if (itemToDelete.index !== index) {
          newArray.push(item);
        }
      });

      setThirdOptions(newArray);

      console.log({ newArray });
    };

    return (
      <View style={styles.flatListItem}>
        <Text>{item.item}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeItem(item)}
        >
          <Feather name="x" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const fourthFlatListItem = (item) => {
    const removeItem = (itemToDelete) => {
      let newArray = [];
      fourthOptions.forEach((item, index) => {
        console.log({ index });
        if (itemToDelete.index !== index) {
          newArray.push(item);
        }
      });

      setFourthOptions(newArray);

      console.log({ newArray });
    };

    return (
      <View style={styles.flatListItem}>
        <Text>{item.item}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeItem(item)}
        >
          <Feather name="x" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const submitItem = (value, setValue, setOptions) => {
    setOptions.push(value);
    setValue('');
    toggleDummy();
  };

  const toggleDummy = () => {
    if (dummy === true) {
      setDummy(false);
    } else {
      setDummy(true);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(outputValue);
  };

  const OutputItem = () => {
    return (
      <View style={styles.outputContainer}>
        <Text style={{ marginBottom: 20, fontWeight: 'bold' }}>
          Copy and paste this in your browser console:
        </Text>
        <View style={styles.copyContainer}>
          <Text>{outputValue}</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 10, top: 5 }}
            onPress={copyToClipboard}
          >
            <Feather name="clipboard" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  console.log(outputValue);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginVertical: 20 }}>Discord Bot!</Text>
      <View style={styles.copyContainer}>
        <Text>{instructions}</Text>
      </View>
      <ScrollView
        style={styles.subContainer}
        contentContainerStyle={styles.subContainer}
      >
        <View style={styles.leftContainer}>
          <View style={styles.messageItem}>
            <Text>Paste Chrome Dev Tools Item Here:</Text>
            <TextInput
              placeholder='fetch("https://discord.com/api/v9/channels/91...'
              style={styles.input}
              value={pastedValue}
              onChangeText={setPastedValue}
            ></TextInput>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.messageItem, { marginRight: 80 }]}>
              <Text>Minimum Time Delay (Seconds):</Text>
              <TextInput
                placeholder="20"
                style={styles.numberInput}
                value={minNum}
                onChangeText={setMinNum}
              ></TextInput>
            </View>

            <View style={styles.messageItem}>
              <Text>Maximum Time Delay (Seconds):</Text>
              <TextInput
                placeholder="35"
                style={styles.numberInput}
                value={maxNum}
                onChangeText={setMaxNum}
              ></TextInput>
            </View>
          </View>

          <View style={styles.messageItem}>
            <Text>First Message Options:</Text>
            <TextInput
              placeholder="Lets go"
              style={styles.input}
              value={firstValue}
              onChangeText={setFirstValue}
              onSubmitEditing={() =>
                submitItem(firstValue, setFirstValue, firstOptions)
              }
              blurOnSubmit={false}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                submitItem(firstValue, setFirstValue, firstOptions)
              }
            >
              <Text style={styles.buttonText}>Add to First Phrase Options</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.messageItem}>
            <Text>Second Message Options:</Text>
            <TextInput
              placeholder="guys"
              style={styles.input}
              value={secondValue}
              onChangeText={setSecondValue}
              onSubmitEditing={() =>
                submitItem(secondValue, setSecondValue, secondOptions)
              }
              blurOnSubmit={false}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                submitItem(secondValue, setSecondValue, secondOptions)
              }
            >
              <Text style={styles.buttonText}>
                Add to Second Phrase Options
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.messageItem}>
            <Text>Third Message Options:</Text>
            <TextInput
              placeholder=":rocket:"
              style={styles.input}
              value={thirdValue}
              onChangeText={setThirdValue}
              onSubmitEditing={() =>
                submitItem(thirdValue, setThirdValue, thirdOptions)
              }
              blurOnSubmit={false}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                submitItem(thirdValue, setThirdValue, thirdOptions)
              }
            >
              <Text style={styles.buttonText}>Add to Third Phrase Options</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.messageItem}>
            <Text>Fourth Message Options:</Text>
            <TextInput
              placeholder="wagmi"
              style={styles.input}
              value={fourthValue}
              onChangeText={setFourthValue}
              onSubmitEditing={() =>
                submitItem(fourthValue, setFourthValue, fourthOptions)
              }
              blurOnSubmit={false}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                submitItem(fourthValue, setFourthValue, fourthOptions)
              }
            >
              <Text style={styles.buttonText}>
                Add to Fourth Phrase Options
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              { marginVertical: 50, backgroundColor: 'green' },
            ]}
            onPress={() =>
              createOutput(
                pastedValue,
                firstOptions,
                secondOptions,
                thirdOptions,
                fourthOptions,
                setOutputValue,
                minNum,
                maxNum
              )
            }
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.rightContainerContent}
          style={styles.rightContainer}
        >
          <Text>First Message Options:</Text>
          <FlatList
            renderItem={firstFlatListItem}
            data={firstOptions}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text>Second Message Options:</Text>
          <FlatList
            renderItem={secondFlatListItem}
            data={secondOptions}
            keyExtractor={(item) => item}
          />

          <Text>Third Message Options:</Text>
          <FlatList
            renderItem={thirdFlatListItem}
            data={thirdOptions}
            keyExtractor={(item) => item}
          />

          <Text>Fourth Message Options:</Text>
          <FlatList
            renderItem={fourthFlatListItem}
            data={fourthOptions}
            keyExtractor={(item) => item}
          />
        </ScrollView>
      </ScrollView>

      <OutputItem />
      <StatusBar style="auto" />
    </View>
  );
}

/*

This only works on Mac in chrome.

Part 1:

1. open up chrome.
2. In chrome, go to the discord group, and specific channel you want to bot in. Make sure you are logged in to the account you will be using.
3. open up chrome dev tools. (hotkey is command + option + i)
4. navigate to network (next to elements, console, sources, etc.)
5. send a message to the discord channel. make sure devtools remains open.
6. look on the list under network... find an item that says "messages".
7. right click on "messages" when you find it. click "copy > fetch"
8. paste that in the first input field.

Part 2: 

1. The bot will randomly say things that are in each message option set. (four options sets)
2. For example, if you only have LETS GO in the first message options box, and :rocket: in the second options box, the bot will always say LETS GO :rocket:
3. if you want the rocket to be less frequent, add a bunch of empty phrases to reduce the likelihood of that phrase being chosen.
4. If you want to say something like "lets go", you may also want to throw in other variants of saying that phrase, like "let's go", "lets goo", or "let's goo". 
5. once you input everything, and are ready to start, press submit.
6. This should have created a big thing of code and returned it for you to copy and paste at the bottom of the page.
7. Copy that. DO NOT LOSE IT!

part 3:

1. Open any chrome window. 
2. Open chrome dev tools (command + option + i)
3. next to "network, elements, sources, etc.", click console.
4. in the console, paste the item you copied from before.
5. press enter.

Congratulations.
*/
