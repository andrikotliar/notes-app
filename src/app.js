import { notes } from './modules/data/notes';

import generateTable from './modules/generateTable';
import removeNote from './modules/removeNote';

generateTable('#tableBody', notes, 'note');

removeNote('.note__remove', notes);