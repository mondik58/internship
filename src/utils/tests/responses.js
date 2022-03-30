export const createUser = {
  data: {
    createUser: {
      id: '63'
    }
  }
}

export const signUpError = [
  {
    message: 'Email has already been taken'
  }
]

export const signInUser = {
  signInUser: {
    token: '1234'
  }
}

export const signInError = [
  {
    message: 'Wrong email or password'
  }
]

export const createList = {
  createProject: {
    deadline: '2022-12-22T12:01:46.000Z',
    description: 'Test description',
    title: 'Test title'
  }
}

export const createTask = {
  createTask: {
    content: 'Text content'
  }
}

export const updateList = {
  updateProject: {
    id: 1,
  }
}

export const getTask = {
  project: [{
    description: 'test description',
    id: 1,
    title: 'test title'
  }]
}

export const getLists = {
  projects: [{
    createdAt: "2022-02-16 13:16:00 UTC",
    id: 2,
    title: 'test title',
    public: true,
  }]
}

export const getEmptyLists = {
  projects: []
}
