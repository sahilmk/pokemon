import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { Alert, Stack } from '@mui/material'
import { Buttoncomp, Inputcomp } from '../../stories'
import style from './Loginpage.module.scss'
import { invalidCredentialsMessage } from '../../Util/Constans'

export type FormType = {
    useremail?: string,
    password?: string,
}

export type UserDataType = {
    email: string
    password: string
}

export type LoginType = {
    loginState: boolean;
    setLoginState: (loginState: boolean | ((prevVar: boolean) => boolean)) => void;
};


function Loginpage({ loginState, setLoginState }: LoginType) {
    const navigate = useNavigate();
    const [buttonClick, setButtonClick] = useState<boolean>(false);

    const onSubmit = (e: FormType) => {
        const allUsers = localStorage.getItem('users');
        setButtonClick(true)

        if (allUsers) {
            const convertedUser = JSON.parse(allUsers);
            convertedUser.map((user: UserDataType) => {
                if (user.email === e.useremail && user.password === e.password) {
                    localStorage.setItem("login", (!loginState).toString());
                    setLoginState(!loginState);
                    navigate('/');
                }
            })
        }
    }

    const validate = (e?: FormType) => {
        const errors: FormType = {};

        if (!e?.useremail) {
            errors.useremail = 'Please enter email'
        }

        if (!e?.password) {
            errors.password = 'Please enter password'
        }

        return errors;
    }

    return (
        <div className={style.login}>
            <div className={style.form}>
                <h2>Login</h2>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={style.form__formcontrol}>
                                <Field name='useremail'>
                                    {({ input, meta }) => (
                                        <div>
                                            <label>Email</label>
                                            <Inputcomp
                                                inputLabel='Email'
                                                inputType='email'
                                                inputColor='primary'
                                                hasFullWidth={true}
                                                {...input} />
                                            {meta.error && meta.touched && <span className={style.errorm}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className={style.form__formcontrol}>
                                <Field name='password'>
                                    {({ input, meta }) => (
                                        <div>
                                            <label>Password</label>
                                            <Inputcomp
                                                inputLabel='Passowrd'
                                                inputType='password'
                                                inputColor='primary'
                                                hasFullWidth={true}
                                                {...input} />
                                            {meta.error && meta.touched && <span className={style.errorm}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className={style.form__formcontrol}>
                                <Buttoncomp
                                    buttonVariant={'contained'}
                                    buttonLabel={'Login'}
                                    type={'submit'} />
                            </div>
                        </form>
                    )}
                />

                <Link to={'/register'}>New user? Register</Link>
            </div>
            {
                (!loginState && buttonClick) && (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">{invalidCredentialsMessage}</Alert>
                    </Stack>
                )
            }
        </div>
    )
}

export default Loginpage
