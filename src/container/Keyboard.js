import { Box, Card, Grid } from "@material-ui/core";
import React, { useState } from "react";
import NumberButton from "../components/NumberButton";
import Screen from "../components/Screen";
import { changeLastEleOfArray, executor } from "../utils/common";
import numberPad from "../utils/numberPad";

const KeyBoard = () => {
  const [textQue, setTextQue] = useState([]);
  const [aphabetIndex, setAphabetIndex] = useState(0);
  const [lastKey, setLastKey] = useState(null);

  function handleClick() {
    const { number, alphabets = [] } = this;
    if (lastKey && lastKey !== number) {
      setTextQue([...textQue, alphabets[0]]);
    } else {
      const currentIndex = (aphabetIndex + 1) % alphabets.length;
      setAphabetIndex(currentIndex);
      const tempTextQue = changeLastEleOfArray(
        textQue,
        alphabets[currentIndex]
      );
      setTextQue(tempTextQue);
      executor(() => {
        setTextQue(tempTextQue);
        setLastKey(-1);
        setAphabetIndex(0);
      }, 550);
    }
    setLastKey(number);
  }
  return (
    <Card p={2} elevation={2}>
      <Box p={2}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Screen text={textQue.join("")} />
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" spacing={1}>
              {numberPad.map((x) => (
                <Grid item xs={4}>
                  <NumberButton onClick={handleClick.bind(x)}  {...x}  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default KeyBoard;
