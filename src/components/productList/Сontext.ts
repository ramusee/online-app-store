import {createContext} from 'react';
import {IContextSortPanel} from "../../interfaces/IProps";

const SortContext = createContext<IContextSortPanel | null>(null)

export default SortContext

