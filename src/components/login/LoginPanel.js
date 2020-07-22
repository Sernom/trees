import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, getTree, matchFields } from '../../redux'

const trees = require('../../assets/trees.json')

const LoginPanel = () => {
  const { name, email, confirmEmail, password, confirmPassword, username, tree } = useSelector(state => state.user)
	const dispatch = useDispatch()

	useEffect(() => {

	}, [tree])

  const onFocus = e => {
    dispatch(setValue({field: 'focus', value: e.target.name }))
  }

  const onChange = e => {
    dispatch(setValue({ field: e.target.name, value: e.target.value }))
  }

  return (
    <div className = 'login-panel'>
      <form>
        <div className = 'input-group'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={e => onChange(e)}
            onFocus={e => onFocus(e)}
          />
          <button>!!!</button>
        </div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
        />
        <input
          type='email'
          name='confirmEmail'
          placeholder='Confirm Email'
          value={confirmEmail}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
          onBlur={e => matchFields(email, confirmEmail, e.target.name)}
        />
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
        />
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
