import { useState } from "react";

type UseToggleReturnType = [boolean, VoidFn];

const useToggle = (initialState: boolean = false): UseToggleReturnType => {
  const [state, setState] = useState(initialState);

  const toggle = (): void => setState((prevState) => !prevState);

  return [state, toggle];
};

export default useToggle;
