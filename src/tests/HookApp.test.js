import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("HookApp testing", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
