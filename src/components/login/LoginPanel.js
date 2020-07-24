import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, getTree, matchFields } from '../../redux'
import InputGroup from './InputGroup'

const trees = require('../../assets/trees.json')

const LoginPanel = () => {
  const { name, email, confirmEmail, password, confirmPassword, username, tree, status } = useSelector(state => state.user)
	const dispatch = useDispatch()

	useEffect(() => {

	}, [tree, status])

  const onFocus = e => {
    dispatch(setValue({field: 'focus', value: e.target.name }))
  }

  const onChange = e => {
    dispatch(setValue({ field: e.target.name, value: e.target.value }))
  }

  const inputList = {
    name: {
      type: 'text',
      name: 'name',
      placeholder: 'Name',
      value: name,
      onChange: e => onChange(e),
      onFocus: e => onFocus(e)
    },
    email: {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      value: email,
      onChange: e => onChange(e),
      onFocus: e => onFocus(e)
    },
    confirmEmail: {
      type: 'email',
      name:'confirmEmail',
      placeholder:'Confirm Email',
      value: confirmEmail,
      onChange:e => onChange(e),
      onFocus:e => onFocus(e),
      onBlur:e => dispatch(matchFields(email, confirmEmail, e.target.name, status))
    },
    username: {
      type: 'text',
      name: 'username',
      placeholder: 'Username',
      value: username,
      onChange: e => onChange(e),
      onFocus: e => onFocus(e)
    },
    password: {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      value: password,
      onChange: e => onChange(e),
      onFocus: e => onFocus(e)
    },
    confirmPassword: {
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      value: confirmPassword,
      onChange: e => onChange(e),
      onFocus: e => onFocus(e),
      onBlur:e => dispatch(matchFields(password, confirmPassword, e.target.name, status))
    }
  }

  const createInputGroup = (key, index) => {
    return (
      <InputGroup
        attributes = {inputList[key]}
        key = {index}
        children = {inputSpan(key)}
      />
    )
  }

  const createInputList = () => {
    const inputs = Object.keys(inputList)

    return (
      inputs.map((key, index) => (
        createInputGroup(key, index)
      ))
    )
  }

  const inputSpan = (key) => {
    const className = `corner-span corner-span_${(status[key].success && 'success') ||  (status[key].error && 'error')}`
    const content = (status[key].success && '$') || (status[key].error && 'X')

    return (
      <span className = {className}>{content}</span>
    )
  }

  return (
    <div className = 'login-panel'>
      <form>
        {createInputList()}
        <button 
          onClick={() => dispatch(getTree(undefined, trees.length - 1, tree))}
          name='tree'
          type='button'
          className='random-tree'
        >
          <img src={require(`../../assets/images/${trees[tree].value}.jpg`)} alt={`${trees[tree].name}`} height='200'/>
        </button>
      </form>
    </div>
  )
}

export default LoginPanel
