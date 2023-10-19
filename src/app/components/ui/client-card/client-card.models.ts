export const EDIT_ACTION = 'edit';
export const ATTENDS_ACTION = 'attends';
export const DELETE_ACTION = 'delete';
export const CANCEL_ACTION = 'cancel';

export const CARD_BUTTONS = [
  {label: 'commons.delete', action: DELETE_ACTION, fillColor: 'clear', extraClass: 'danger-btn'},
  {label: 'commons.attends', action: ATTENDS_ACTION, fillColor: 'outline', extraClass: ''},
  {label: 'commons.edit', action: EDIT_ACTION, fillColor: 'solid', extraClass: ''},
];