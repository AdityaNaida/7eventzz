import style from "@/components/ChangePassword/ChangePassword.module.css";

import DashboardMenu from "../AccountSettings/DashboardMenu";
import AccountInput from "../AccountSettings/AccountInput";
export default function ChangePassword() {
  return (
    <div className={style.container}>
      <div>
        <DashboardMenu />
      </div>
      <div className={style.changePassword}>
        <h1 className={style.heading}>Change Password</h1>
        <form className={style.form}>
          <AccountInput
            inputType="password"
            labelFor="old_password"
            labelText="Old Password"
          />
          <AccountInput
            inputType="password"
            labelFor="new_password"
            labelText="New Password"
          />
          <button className={style.submitBtn}>Change Password</button>
        </form>
      </div>
    </div>
  );
}
