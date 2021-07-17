import { Box } from "@material-ui/core";
import React from "react";
import KeyBoard from "./container/Keyboard";

export default function App() {
  return (
    <Box pt={10} maxWidth={500} margin="0 auto">
      <KeyBoard />
    </Box>
  );
}
