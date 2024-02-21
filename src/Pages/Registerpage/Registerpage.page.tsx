import { Form, Field } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import { Inputcomp, Buttoncomp } from "../../stories/components";
import { emailRegex, passwordRegex } from "../../Util/Constans";
import style from "./Registerpage.module.scss";

export type FormType = {
  useremail?: string;
  password?: string;
  confirmpassword?: string;
};

export type UserDataTyep = {
  email: string;
  passowrd: string;
};

function Registerpage() {
  const navigate = useNavigate();

  const onSubmit = (e: FormType) => {
    const newUser = { email: e.useremail, password: e.password };
    const oldUsers = localStorage.getItem("users");

    if (oldUsers) {
      const oldUserWithNewUser = JSON.parse(oldUsers);
      oldUserWithNewUser.push(newUser);
      localStorage.setItem("users", JSON.stringify(oldUserWithNewUser));
    } else {
      const newUsers: FormType[] = [];
      newUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(newUsers));
    }

    navigate("/");
  };

  const validate = (e?: FormType) => {
    const errors: FormType = {};

    if (!e?.useremail) {
      errors.useremail = "Please enter email";
    } else {
      if (
        emailRegex.test(e.useremail) === false ||
        e.useremail.length <= 4 ||
        e.useremail.length > 100
      ) {
        errors.useremail = "Email is not valid";
      }
    }

    if (!e?.password) {
      errors.password = "Please enter password";
    } else {
      if (
        passwordRegex.test(e.password) === false ||
        e.password.length <= 4 ||
        e.password.length >= 16
      ) {
        errors.password =
          "Password must contain atleast one number and length must be between 5 to 15 character";
      }
    }

    if (!e?.confirmpassword) {
      errors.confirmpassword = "Please enter password";
    } else {
      if (e?.password !== e?.confirmpassword) {
        errors.confirmpassword = "Password not matched";
      }
    }

    return errors;
  };

  return (
    <div className={style.register}>
      <div className={style.form}>
        <h2>Register</h2>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={style.form__formcontrol}>
                <Field name="useremail">
                  {({ input, meta }) => (
                    <div>
                      <label>Email</label>
                      <Inputcomp
                        inputLabel="Email"
                        inputType="email"
                        inputColor="primary"
                        hasFullWidth={true}
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <span className={style.errorm}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div className={style.form__formcontrol}>
                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <label>Password</label>
                      <Inputcomp
                        inputLabel="Passowrd"
                        inputType="password"
                        inputColor="primary"
                        hasFullWidth={true}
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <span className={style.errorm}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div className={style.form__formcontrol}>
                <Field name="confirmpassword">
                  {({ input, meta }) => (
                    <div>
                      <label>Reenter Password</label>
                      <Inputcomp
                        inputLabel="Confirm Password"
                        inputType="password"
                        inputColor="primary"
                        hasFullWidth={true}
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <span className={style.errorm}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div className={style.form__formcontrol}>
                <Buttoncomp
                  buttonVariant={"contained"}
                  buttonLabel={"Register"}
                  type={"submit"}
                />
              </div>
            </form>
          )}
        />

        <Link to={"/"}>Login</Link>
      </div>
    </div>
  );
}

export default Registerpage;
