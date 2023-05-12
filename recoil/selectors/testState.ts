import { selector } from "recoil";
import { testState } from "../atoms/testState";

export const testSelectorState = selector({
	key: "testSelectortState",
	get: ({ get }) => get(testState) + 1,
});
