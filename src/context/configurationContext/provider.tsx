import { ReactNode, useReducer } from "react";
import { ProjectReducer } from "./reducer";
import { ConfigurationContext, initialState } from "./context";

export const ConfigurationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  /*   const load = async (ref: string) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const data = await fetchProjectByRef(ref);
      if (data) dispatch({ type: "SET_PROJECT", payload: data });

      if (!ref) dispatch({ type: "SET_PROJECT", payload: null });
    } catch (error) {
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }; */

  return (
    <ConfigurationContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigurationContext.Provider>
  );
};
