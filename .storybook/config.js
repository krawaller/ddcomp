import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";

function loadStories() {
  const req = require.context("../src", true, /\.stories\.[tj]sx?$/);
  addDecorator(withKnobs);
  //addDecorator(jsxDecorator);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
