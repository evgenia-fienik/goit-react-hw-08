import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
    const handleLogin = (values) => {
        console.log('Login data: ', values)
    };
    return (
        <div>
            {/* <h1>Log In</h1> */}
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
}