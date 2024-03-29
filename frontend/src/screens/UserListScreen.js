import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../actions/userActions'

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector(state => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
 
  const userDelete = useSelector(state => state.userDelete)
  const { success: successDelete } = userDelete // INTERESTING way of usage redux - "successDelete" just retriggers useEffect, to update the users list to show

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
    
  }, [dispatch, history, successDelete, userInfo]) // weird to pass a dispatch as dependency - i see info, that React guarantee that dispatch won't change between renders. TODO: double check.

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <>
      <h1>Users</h1>
      {
        loading
          ? <Loader />
          : error
            ? <Message variant='danger'>{error}</Message>
            : (
              <Table striped bordered hover responsive className='table-sm'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th>ID</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map(user => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                      <td>
                        {
                          user.isAdmin
                            ? (<i className='fas fa-check' style={{ color: 'green' }}></i>)
                            : (<i className='fas fa-times' style={{ color: 'red' }}></i>)
                        }
                      </td>
                      <td>
                        <LinkContainer to={`/admin/user/${user._id}/edit`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>
                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
                          <i className='fas fa-trash'></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )
      }
    </>
  )
}

export default UserListScreen

// className='table-sm' - making table small one, as any other comp, info on react-bootstrap docs
