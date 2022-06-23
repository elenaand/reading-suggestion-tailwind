import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'

// Create your atoms and derivatives
const readingSuggestionsAtom = atomWithStorage<string>('readingSuggestions', "Read a blue book, Read a book under 200 pages");
const readingSuggestionsListAtom = atom<string[]>((get) => get(readingSuggestionsAtom).split(","));

export {readingSuggestionsAtom, readingSuggestionsListAtom};