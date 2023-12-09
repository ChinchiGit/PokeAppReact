import React from "react";
import { shallow } from "enzyme";
import FormularioCrear from "./FormularioCrear";

describe("FormularioCrear", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormularioCrear />);
    expect(wrapper).toMatchSnapshot();
  });
});
