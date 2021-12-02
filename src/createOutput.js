export const createOutput = (
  pastedValue,
  firstOptions,
  secondOptions,
  thirdOptions,
  fourthOptions,
  setOutputValue,
  minNum,
  maxNum
) => {
  console.log({ firstOptions });
  console.log({ secondOptions });
  console.log({ thirdOptions });
  console.log({ fourthOptions });

  const splitValue = pastedValue.split(`"body"`);

  let newestValue = splitValue[0];

  let newAPIOutput = '';

  const concatString = String.raw`c:\hello\yo`;
  console.log(concatString);

  const apiCreator = () => {
    if (firstOptions.length < 1) {
      console.log('firstOptionsEmpty');
    } else if (firstOptions.length >= 1 && secondOptions.length < 1) {
      newAPIOutput =
        newestValue +
        String.raw`"body": ` +
        '`' +
        String.raw`{\"content\":\"` +
        '${getRandomItem(firstOptions)}' +
        String.raw`\",\"tts\":false}` +
        '`,' +
        `"method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
      `;
    } else if (
      firstOptions.length >= 1 &&
      secondOptions.length >= 1 &&
      thirdOptions.length < 1
    ) {
      newAPIOutput =
        newestValue +
        String.raw`"body": ` +
        '`' +
        String.raw`{\"content\":\"` +
        '${getRandomItem(firstOptions)}' +
        '${getRandomItem(secondOptions)}' +
        String.raw`\",\"tts\":false}` +
        '`,' +
        `"method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
    `;
    } else if (
      firstOptions.length >= 1 &&
      secondOptions.length >= 1 &&
      thirdOptions.length >= 1 &&
      fourthOptions.length < 1
    ) {
      newAPIOutput =
        newestValue +
        String.raw`"body": ` +
        '`' +
        String.raw`{\"content\":\"` +
        '${getRandomItem(firstOptions)}' +
        '${getRandomItem(secondOptions)}' +
        '${getRandomItem(thirdOptions)}' +
        String.raw`\",\"tts\":false}` +
        '`,' +
        `"method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
    `;
    } else if (
      firstOptions.length >= 1 &&
      secondOptions.length >= 1 &&
      thirdOptions.length >= 1 &&
      fourthOptions.length >= 1
    ) {
      newAPIOutput =
        newestValue +
        String.raw`"body": ` +
        '`' +
        String.raw`{\"content\":\"` +
        '${getRandomItem(firstOptions)}' +
        '${getRandomItem(secondOptions)}' +
        '${getRandomItem(thirdOptions)}' +
        '${getRandomItem(fourthOptions)}' +
        String.raw`\",\"tts\":false}` +
        '`,' +
        `"method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
    `;
    }
  };
  apiCreator();

  console.log(firstOptions);

  const newFirstArray = [];
  const newSecondArray = [];
  const newThirdArray = [];
  const newFourthArray = [];
  const fixFunction = (newArray, numberOptions) => {
    numberOptions.map((item) => {
      newArray.push('`' + item + '`');
    });
  };
  fixFunction(newFirstArray, firstOptions);
  fixFunction(newSecondArray, secondOptions);
  fixFunction(newThirdArray, thirdOptions);
  fixFunction(newFourthArray, fourthOptions);

  console.log(firstOptions);
  let finalOutput = '';

  finalOutput = `
  const loop = () => {
    const firstOptions = [${newFirstArray}];
  
    const secondOptions = [${newSecondArray}];
  
    const thirdOptions = [${newThirdArray}];
  
    const fourthOptions = [${newFourthArray}];

    function getRandomItem(arr) {
      // get random index value
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      // get random item
      const item = arr[randomIndex];
  
      return item;
    };

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    };
    
    setInterval(() => {
      ${newAPIOutput}
    }, getRandomArbitrary(${minNum + '000'}, ${maxNum + '000'}));

  };

  loop();
  `;

  console.log(finalOutput);
  setOutputValue(finalOutput);
};
