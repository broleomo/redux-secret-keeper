const authToken = (token) => ({
  type: 'AUTH_TOKEN',
  token
});

const dashboard = (full_name, email, password, message) => ({
  type: 'DASHBOARD',
  full_name,
  email,
  message
})

const options = {
  method: 'POST',
  mode: 'cors',
  headers: new Headers({'Content-Type':'application/json'})
}

export const fetchRegister = (full_name, name, email, password, message) => (
  (dispatch, getState) => (
    fetch('https://user-auth-test.herokuapp.com/register', {...options, body: JSON.stringify({full_name, name, email, password, message})})
    .then(response => response.json())
      .then( () => console.log('registered'))
  )
)

export const fetchLogin = (email,password) => (
  (dispatch, getState) => (
    fetch('https://user-auth-test.herokuapp.com/login', {...options, body:JSON.stringify({email, password})})
    .then(response => response.json())
    .then(payload => payload.success && dispatch(authToken(payload.auth_token)))
  )
)
//
export const fetchDashboard = () => (
  (dispatch, getState) => {
    const {token} = getState();
    fetch('https://user-auth-test.herokuapp.com/dashboard', {headers: new Headers({'X-AUTH-TOKEN': token})})
    .then(response => response.json())
    .then(({full_name, email, message, success}) =>(
      dispatch(dashboard(full_name, email, message, success))
    ))
  }
)
