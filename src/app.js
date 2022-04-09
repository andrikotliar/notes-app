import { notes } from './modules/data/notes';
import { Modal } from './modules/classes/Modal';

import renderTable from './modules/renderTable';
import renderStatistic from './modules/renderStatistic';

import removeNote from './modules/removeNote';
import archiveNote from './modules/archiveNote';
import saveNote from './modules/saveNote';
import editNote from './modules/editNote';
import openNoteModal from './modules/openNoteModal';
import showArchivedNotes from './modules/showArchivedNotes';

const modal = new Modal(
  '#modal',
  '#closeModal',
  'modal--open'
);

renderTable('#notesTableBody', notes, 'note');
renderStatistic('#statisticTableBody', 'statistic__item', notes);

archiveNote('.note__archive', notes);
removeNote('.note__remove', notes);
editNote('.note__edit', notes, modal);
saveNote('#save-note', notes, modal);
openNoteModal('.create-note', modal);
showArchivedNotes('#showAllArchived', notes);