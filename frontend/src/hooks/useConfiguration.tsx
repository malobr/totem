import { ConfigurationContext } from "@/context/configurationContext/context";
import fetchProjectByRef from "@/utils/fetchProject";
import { useContext } from "react";
import { options } from "@/data/options";

export const useConfiguration = () => {
  const context = useContext(ConfigurationContext);

  if (!context)
    throw new Error(
      "useConfiguration needs be used with a ConfigurationProvider"
    );
  const { dispatch, state } = context;

  const load = async (ref: string) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      if (ref === "demo") {
        dispatch({
          type: "SET_PROJECT",
          payload: {
            ref: "demo",
            title: "INOVAÇÃO",
            description: "Descriçã de demonstração",
            theme: "blue",
            logoUrl: "Logo 1",
            pattern: options.patterns[0].name,
          },
        });

        return;
      }

      const data = await fetchProjectByRef(ref);

      if (data) dispatch({ type: "SET_PROJECT", payload: data });
    } catch (error) {
      dispatch({
        type: "SET_PROJECT",
        payload: {
          ref: "Null",
          title: "Null",
          description: "Null",
          theme: "dark",
          logoUrl: "Logo 1",
          pattern: options.patterns[0].name,
        },
      });
      console.log(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return { dispatch, ...state, load };
};
