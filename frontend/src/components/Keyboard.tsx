import {
  FunctionComponent,
  useState,
  RefObject,
  useRef,
  useCallback,
} from "react";
import { UseFormSetValue } from "react-hook-form";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: RefObject<typeof Keyboard | null>;
  setValue: UseFormSetValue<{ values: string[] }>;
  input: string;
}

const layout = {
  default: [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "{shift} z x c v b n m .",
    "@ _ / {bksp}",
    "{space}",
  ],
  shift: [
    "Q W E R T Y U I O P",
    "A S D F G H J K L",
    "{shift} Z X C V B N M .",
    "@ _ / {bksp}",
    "{space}",
  ],
};

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
  setValue,
  input,
}) => {
  const [layoutName, setLayoutName] = useState("default");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onKeyPress = useCallback(
    (button: string) => {
      // Cancela o timeout anterior se existir, para evitar que se sobreponham
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Define o novo timeout
      timeoutRef.current = setTimeout(() => {
        if (button === "{shift}" || button === "{lock}") {
          setLayoutName((prev) => (prev === "default" ? "shift" : "default"));
        }

        if (button === "{bksp}") {
          setValue("values", [input.slice(0, -1)]); // Remove o último caractere
          return;
        }

        if (button === "{space}") {
          setValue("values", [input + " "]); // Adiciona espaço
          return;
        }

        if (button !== "{shift}") {
          setValue("values", [input + button]); // Adiciona o caractere pressionado
        }
      }, 150); // Espera 150ms para processar a tecla
    },
    [input, setValue] // Dependências para re-renderizar quando 'input' mudar
  );

  return (
    <div className="font-bold bottom-0 left-0 w-full ">
      <Keyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
        theme={"hg-theme-default hg-layout-default myTheme"}
        onRender={() => console.log("Rendered")}
        layout={layout}
      />
    </div>
  );
};

export default KeyboardWrapper;
