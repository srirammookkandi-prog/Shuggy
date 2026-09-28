export const checkValidateData = (name, email, password, isSignedIn) => {

    const isEmailValid =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isSignedIn) {
        const isNameValid = /^[A-Za-z\s'-]{2,50}$/.test(name);

        if (!isNameValid) return "Name is not valid";
    }

    if (!isEmailValid) return "Email id is not valid";

    if (!isPasswordValid) return "Password is not valid";

    return null;
};