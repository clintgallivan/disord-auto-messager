import React from 'react';
import { Image, Text, View, TouchableOpacity, Linking } from 'react-native';
import { firstPic } from '../assets/images/firstPic.png';

export const instructions = `This has been tested on Mac in chrome and brave browsers...

------- Instructions -------

Part 1, get your copy and paste item (we need this):

1. open up chrome or brave.
2. In chrome, go to the discord group, and specific channel you want to bot in. Make sure you are logged in to the account you will be using.

3. open up chrome dev tools. (hotkey is command + option + i)
4. navigate to network (next to elements, console, sources, etc.)
5. send a message to the discord channel. make sure devtools remains open.
6. look on the list under network... find an item that says "messages".
7. when you find "messages", right click on that box. Copy it by clicking "copy as fetch".
8. return back to this app, and paste it into the first input box below, the box that is labeled "Paste Chrome Dev Tools Item Here:".

Part 2 - set the frequency of how often the bot should send a message:

1. Choose the frequency of how often you want the bot to send a message to the channel. You should set a minimum time, and a maximum time. The bot will randomly choose a time anywhere during that time period to send a message. (see the two input boxes below)


2. The bot will randomly say things that are in each message option set below. (four options sets)
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
`;

export const Instructions = () => {
  const firstImage = () => {
    return (
      <Image
        source={require('../assets/images/firstPic.png')}
        style={{ width: 100, height: 100 }}
      ></Image>
    );
  };
  const instructions1 = `This has been tested on Mac in chrome and brave browsers...

------- Instructions -------

Part 1, get your copy and paste item (we need this):

1. open up chrome or brave.
2. In chrome, go to the discord group, and specific channel you want to bot in. Make sure you are logged in to the account you will be using.
3. open up chrome dev tools. (hotkey is command + option + i)
`;

  const instructions2 = `
4. navigate to network (next to elements, console, sources, etc.)
`;

  const instructions3 = `
5. send a message to the discord channel. make sure devtools remains open.
6. look on the list under network... find an item that says "messages".
7. when you find "messages", right click on that box. Copy it by clicking "copy as fetch".
`;
  const instructions4 = `
8. return back to this app, and paste it into the first input box below, the box that is labeled "Paste Chrome Dev Tools Item Here:".

Part 2 - set the frequency of how often the bot should send a message:

1. Choose the frequency of how often you want the bot to send a message to the channel. You should set a minimum time, and a maximum time. The bot will randomly choose a time anywhere during that time period to send a message. (see the two input boxes below)


2. The bot will randomly say things that are in each message option set below. (four options sets)
2. For example, if you only have LETS GO in the first message options box, and :rocket: in the second options box, the bot will always say LETS GO :rocket:
3. if you want the rocket to be less frequent, add a bunch of empty phrases to reduce the likelihood of that phrase being chosen.
4. If you want to say something like "lets go", you may also want to throw in other variants of saying that phrase, like "let's go", "lets goo", or "let's goo". 
5. once you input everything, and are ready to start, press submit.
6. This should have created a big thing of code and returned it for you to copy and paste at the bottom of the page.
7. Copy that. DO NOT LOSE IT!

part 3:

1. go back to your browser where you have discord and the developer tools open ---  (dev tools and discord need to run in the same tab. if you close dev tools, it will stop. if you navigate around in discord on that tab, it will stop.).
2. next to "network, elements, sources, etc.", click console.
`;
  const instructions5 = `
4. in the console, paste the item you copied from before.
5. press enter.
`;
  const instructions6 = `
Thats it! shameless shill... follow me on twitter @crypterz_guy :)
`;

  const instructions7 = `
FAQ:

Q:    How to turn it off? C
A:    lose the page or refresh it.'

Q:    Can i have it working for several chats at the same time?

A:    Yes, you can actually have the script running in any browser (not just your discord browser).  
        You can generate multiple scripts for one account all running at once. 
        You can also have multiple accounts running scripts too :)

Q: My bot isn't working.

A: Give it a little bit of time. The bot usually takes the min time specified to submit its first post.
`;

  return (
    <View>
      <Text>{instructions1}</Text>
      <Image
        source={require('../assets/images/firstPic.png')}
        style={{ height: 340, width: 400, margin: 20 }}
      ></Image>
      <Text>{instructions2}</Text>
      <Image
        source={require('../assets/images/secondPic.png')}
        style={{ height: 320, width: 400, margin: 20 }}
      ></Image>
      <Text>{instructions3}</Text>
      <Image
        source={require('../assets/images/thirdPic.png')}
        style={{ height: 250, width: 400, margin: 20 }}
      ></Image>
      <Text>{instructions4}</Text>
      <Image
        source={require('../assets/images/fifthPic.png')}
        style={{ height: 200, width: 400, margin: 20 }}
      ></Image>
      <Text>{instructions5}</Text>
      <Image
        source={require('../assets/images/fourthPic.png')}
        style={{ height: 500, width: 300, margin: 20 }}
      ></Image>
      <Text>{instructions6}</Text>
      {/* <View style={{ backgroundColor: 'white', width: 200, height: 60 }}> */}
      <TouchableOpacity
        style={{
          marginVertical: 20,
          backgroundColor: 'white',
          height: 50,
          width: 155,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          shadowRadius: 4,
          shadowOpacity: 0.5,
          borderRadius: 4,
          alignSelf: 'center',
        }}
        onPress={() => Linking.openURL('https://twitter.com/Crypterz_Guy')}
      >
        <Image
          source={require('../assets/images/twitterPic.png')}
          style={{ height: 50, width: 150, margin: 20 }}
        ></Image>
      </TouchableOpacity>
      {/* </View> */}
      <Text>{instructions7}</Text>
    </View>
  );
};
