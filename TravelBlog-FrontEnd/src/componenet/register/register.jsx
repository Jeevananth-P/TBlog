import './register.scss'
export const Register = () => {
    
    return (
        <>
        <div className="container">
          <p style={{ fontSize: '27px', textAlign: 'center' }}>Registration</p>
          <form action="/register" method="post">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="text" name="city" placeholder="City" required />
            <button style={{ color: 'black', backgroundColor: '#6E85B7' }} type="submit">Register</button>
          </form>
          <p style={{ paddingTop: '10px' }}>Already have an account? <a href="login.html">Login</a></p>
        </div>
        </>
      );
}