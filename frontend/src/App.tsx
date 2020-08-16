import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './graphql'
import Layout from './components/layout'
import Home from './components/home'
import PostsHome from './components/posts/home'
import NewPost from './components/posts/new-post'
import history from './history'

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/posts/new" component={() => <NewPost />} />
              <Route exact path="/posts/:id" component={() => <PostsHome />} />
              {/* <Route component={() => <NotFound />} /> */}
            </Switch>
          </Layout>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
