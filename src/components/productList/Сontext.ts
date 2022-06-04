import {createContext} from 'react';
import {IContextSortPanel} from "../../models/IProps";

const SortContext = createContext<IContextSortPanel | null>(null)

export default SortContext

