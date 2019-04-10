# TODO-LIST

## Vision (Why am I building this?)

Because we all know the world NEEDS another todo-list, oh and:

- To build a web-app from scratch
- That has both front and back end routes
- React and Redux
- Auth (JWT)
- API's
- Testing: Jest and Enzyme

## Goals (Personal)

- I want to produce a functional full-stack app, utilising the concepts as listed above.

## Payload

- Array of objects

```
[{
  task: "", (string)
  priority: 1 - 5 (integer),
  category: " ", (string)
  is_complete: false (boolean),
  due_at: xxxxxxx (integer)
}]
```

### Backend routes

1. /api/v1/todos/priority/:priority (e.g. 5)
2. /api/v1/todos/category/:category (e.g. done)
3. /api/v1/todos/category/:is_complete (e.g. true/false)

### Front end routes

1. /#/completed - for completed only
2. /#/priority/5 - priority 5 tasks
3. /#/category/home - 'home category'

## Todos

- [x] Write the ReadMe
- [x] Setup back end and front end
- [ ] Setup Database routes
- [ ] Setup Database functions
- [ ] Setup API
- [ ] Setup Hashrouter
- [ ] Setup components
- [ ] Create reducers and actions
- [ ] test!

```
yarn
yarn dev/start


yarn knex migrate:latest
yarn knex seed:run

```
