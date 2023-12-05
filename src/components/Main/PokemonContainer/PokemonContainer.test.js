import React from "react";
import { shallow } from "enzyme";
import PokemonContainer from "./PokemonContainer";

describe("PokemonContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
