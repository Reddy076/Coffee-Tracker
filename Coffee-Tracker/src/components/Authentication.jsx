
export default function Authentication() {
  return (
    <>
    <h2 className='sign-up-text'>Sign up / Login</h2>
    <p placeholder='Email'>Email</p>
    <input placeholder='Email'></input>
    <input placeholder='************' type="password" />
    <button><p>Submit</p></button>
    <hr/>
    <div className='register-content'>
      <p>Don&apos;t have an account?</p>
      <button><p>Sign up</p></button>
    </div>
    </>
  )
}
