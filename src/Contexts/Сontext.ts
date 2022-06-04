import {createContext} from 'react';
import {IContextOptionPanel} from "../models/IProps";

const SortContext = createContext<IContextOptionPanel | null>(null)

export default SortContext