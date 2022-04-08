export const tableStructure = [
  {
    title: "Icon",
    type: "dinamicIcon",
    className: "note__category-icon"
  },
  {
    title: "Name",
    type: "text",
    className: "note__title",
    property: "title",
  },
  {
    title: "Created",
    type: "text",
    className: "note__date",
    property: "created",
  },
  {
    title: "Category",
    type: "text",
    className: "note__category",
    property: "category",
  },
  {
    title: "Content",
    type: "text",
    className: "note__content",
    property: "content"
  },
  {
    title: "Content Dates",
    type: "dinamicDates",
    className: "note__content-dates"
  },
  {
    title: "Edit Button",
    type: "container",
    children: {
      elem: "button",
      classNames: ["note__button", "note__edit"],
      content: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#777"><path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/><path d="M0 0h48v48H0z" fill="none"/></svg>`
    }
  },
  {
    title: "Archive Button",
    type: "container",
    children: {
      elem: "button",
      classNames: ["note__button", "note__archive"],
      content: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#777"><path d="m41.09 10.45-2.77-3.36A3.043 3.043 0 0 0 36 6H12c-.93 0-1.76.43-2.31 1.09l-2.77 3.36C6.34 11.15 6 12.03 6 13v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V13c0-.97-.34-1.85-.91-2.55zM24 35 13 24h7v-4h8v4h7L24 35zM10.25 10l1.63-2h24l1.87 2h-27.5z"/><path d="M0 0h48v48H0z" fill="none"/></svg>`
    }
  },
  {
    title: "Remove Button",
    type: "container",
    children: {
      elem: "button",
      classNames: ["note__button", "note__remove"],
      content: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#777"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>`
    }
  },
]