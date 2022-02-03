import {graphql} from 'msw';
import * as respons from './responses';

export const requestHandlers = [
  graphql.mutation('CreateUser', (req, res, ctx) => {
    return res(
      ctx.data(respons.createUser)
    )
  }),
  graphql.mutation('SignInUser', (req, res, ctx) => {
    return res(
      ctx.data(respons.signInUser)
    )
  })
]

export const signUpError = graphql.mutation('CreateUser', (req,res, ctx) => {
  return res(
    ctx.errors(respons.signUpError)
  )
});

export const signInError = graphql.mutation('SignInUser', (req,res, ctx) => {
  return res(
    ctx.errors(respons.signInError)
  )
});
