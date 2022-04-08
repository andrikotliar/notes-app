const openNoteModal = (openButtonId, modal) => {
  const openButton = document.querySelector(openButtonId);

  openButton.addEventListener('click', () => {
    modal.openModal();
  });
}

export default openNoteModal;