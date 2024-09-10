import InputType from "../input/input"

export default function FormLogin () {
    return (
        <>
            <InputType
            type="text"
            size="lg"
            label="Username"
            name="username"
            color="cyan"
        />
            <InputType
            type="password"
            size="lg"
            label="Password"
            name="password"
            color="cyan"
            />
        </>
    )
}