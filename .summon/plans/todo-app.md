---
status: implemented
title: Simple Todo App
---

1. Update `/app/src/styles/global.css` to ensure it starts with the Tailwind import and add a soft page background color so the app feels calm and modern. Expected outcome: the page has a light neutral background applied app-wide.

2. Update `/app/src/main.tsx` to import the global stylesheet once and render the main page component. Expected outcome: the app boots up showing the todo page.

3. Create a shared todo type definition at `/app/src/types/todo.ts` describing a todo item (unique id, text content, completed flag, created timestamp). Expected outcome: a single source of truth for what a todo looks like, used across the app.

4. Create a custom hook at `/app/src/hooks/useTodos.ts` that manages the list of todos in memory and persists them to the browser's local storage. It should expose actions to add a todo, toggle a todo's completed state, edit a todo's text, delete a single todo, and clear all completed todos. Expected outcome: todos survive page refreshes and all list mutations go through one place.

5. Create `/app/src/components/TodoInput.tsx` — a text field with an "Add" button that submits on Enter or button click, trims whitespace, ignores empty submissions, and clears itself after adding. Expected outcome: users can type a new task and add it to the list.

6. Create `/app/src/components/TodoItem.tsx` — a single row showing a checkbox, the todo text (struck through when completed), an edit action that turns the text into an inline input, and a delete action. Editing commits on Enter or blur and cancels on Escape. Expected outcome: each task can be checked off, renamed inline, or removed.

7. Create `/app/src/components/TodoList.tsx` — renders the filtered list of todo items, and shows a friendly empty state message when there are no todos to display for the current filter. Expected outcome: the list area always communicates what's going on, even when empty.

8. Create `/app/src/components/TodoFilters.tsx` — three filter buttons (All, Active, Completed) with the active filter visually highlighted, plus a counter showing how many items remain active, and a "Clear completed" action that only appears when at least one completed todo exists. Expected outcome: users can filter their view and bulk-clear finished tasks.

9. Create the main page at `/app/src/pages/TodoPage.tsx` that composes the header/title, the input, the list, and the filters into a centered card layout with comfortable spacing. It owns the current filter state (all / active / completed) and passes the filtered todos to the list. Expected outcome: a single cohesive todo screen.

10. Update `/app/src/App.tsx` to render the todo page. Expected outcome: opening the app shows the todo screen directly.

11. Visual polish pass across all components using Tailwind utility classes: rounded card with subtle shadow, generous padding, clear typography hierarchy for the title, muted secondary text for counts and hints, hover and focus states on every interactive element, and smooth transitions on checkbox toggling and item removal. Expected outcome: the app looks polished and feels responsive to interaction.
