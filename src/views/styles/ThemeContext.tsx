import { createContext} from "react";
export interface Tema {
  bgColor: string;
  textColor: string;
}
export const ThemeContext = createContext({
  theme: ""
});
