import {graphql} from 'msw';
import * as respons from './responses';

export const requestHandlers = [
  graphql.mutation('CreateUser', (req, res, ctx) => {
    return res(
      ctx.data(respons.createUser)
    )
  })
]

export const signUpError = graphql.mutation('CreateUser', (req,res, ctx) => {
  return res(
    ctx.errors(respons.signUpError)
  )
})
