import style from "@/components/AccountSettings/AccountSettings.module.css";

import DashboardMenu from "./DashboardMenu";
import AccountInput from "./AccountInput";
import SelectInput from "../CheckoutPage/SelectInput";
import SelectOption from "../CheckoutPage/SelectOption";

export default function AccountSettings() {
  return (
    <>
      <div className={style.container}>
        <DashboardMenu />
        <div className={style.profileDetails}>
          <div className={style.personalInfo}>
            <h2>Personal Information</h2>
            <form>
              <AccountInput
                labelFor="firstName"
                labelText="First Name"
                inputType="text"
              />
              <AccountInput
                labelFor="lastName"
                labelText="Last Name"
                inputType="text"
              />
              <AccountInput
                labelFor="phone"
                labelText="Phone/Mobile"
                inputType="number"
              />
              <SelectInput
                name="gender"
                id="gender"
                label="Gender"
                labelFor="gender"
              >
                <SelectOption
                  value="gender"
                  innerText="Select Gender"
                  isDisabled={true}
                  isSelected={true}
                />
                <SelectOption
                  value="male"
                  innerText="Male"
                  isDisabled={false}
                  isSelected={false}
                />
                <SelectOption
                  value="female"
                  innerText="Female"
                  isDisabled={false}
                  isSelected={false}
                />
                <SelectOption
                  value="other"
                  innerText="Other"
                  isDisabled={false}
                  isSelected={false}
                />
              </SelectInput>

              <AccountInput
                labelFor="address"
                labelText="Address"
                inputType="text"
              />
            </form>
          </div>
          <div className={style.personalInfo}>
            <h2>Account Information</h2>
            <form>
              <AccountInput
                labelFor="email"
                labelText="Email"
                inputType="email"
              />
              <AccountInput
                labelFor="password"
                labelText="Password"
                inputType="password"
              />
              <AccountInput
                labelFor="confirm_password"
                labelText="Confirm Password"
                inputType="password"
              />
            </form>
          </div>
          <button className={style.saveBtn}>Save Changes</button>
        </div>
      </div>
    </>
  );
}
