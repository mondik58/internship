import {graphql} from 'msw';
import * as response from 'constants/responses';

export const requestHandlers = [
  graphql.mutation('CreateUser', (req, res, ctx) => {
    return res(
      ctx.data(response.createUser)
    )
  }),
  graphql.mutation('SignInUser', (req, res, ctx) => {
    return res(
      ctx.data(response.signInUser)
    )
  }),
  graphql.mutation('CreateProject', (req, res, ctx) => {
    return res(
      ctx.data(response.createList)
    )
  }),
  graphql.mutation('CreateTask', (req, res, ctx) => {
    return res(
      ctx.data(response.createTask)
    )
  }),
  graphql.mutation('UpdateProject', (req, res, ctx) => {
    return res(
      ctx.data(response.updateList)
    )
  }),
  graphql.query('GetTask', (req, res, ctx) => {
    return res(
      ctx.data(response.getTask)
    )
  }),
  graphql.query('GetLists', (req, res, ctx) => {
    return res(
      ctx.data(response.getLists)
    )
  }),
  graphql.mutation('DeleteList', (req, res, ctx) => {
    return res(
      ctx.data(response.deleteList)
    )
  }),
  graphql.mutation('UpdateTask', (req, res, ctx) => {
    return res(
      ctx.data(response.updateTask)
    )
  }),
  graphql.mutation('DeleteTask', (req, res, ctx) => {
    return res(
      ctx.data(response.deleteTask)
    )
  }),
]

export const signUpError = graphql.mutation('CreateUser', (req,res, ctx) => {
  return res(
    ctx.errors(response.signUpError)
  )
});

export const signInError = graphql.mutation('SignInUser', (req,res, ctx) => {
  return res(
    ctx.errors(response.signInError)
  )
});

export const getListsEmpty = graphql.query('GetLists', (req, res, ctx) => {
  return res(
    ctx.data(response.getListsEmpty)
  )
});
