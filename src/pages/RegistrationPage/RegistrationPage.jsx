import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
    const handleRegister = (values) => {
        console.log('Registration data: ', values)
    }
    return (
        <div>
            {/* <h1>Register</h1> */}
            <RegistrationForm onSubmit={handleRegister} />
        </div>
    )
}