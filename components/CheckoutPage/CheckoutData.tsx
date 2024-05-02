import style from "@/components/CheckoutPage/CheckoutData.module.css";

import Input from "./Input";
import SelectInput from "./SelectInput";
import SelectOption from "./SelectOption";
export default function CheckoutData() {
  return (
    <>
      <div className={style.container}>
        <form className={style.checkout_container}>
          <h1>Checkout</h1>
          <p>Note: Coupon Code Not Applicable for 50% Advance Payment</p>
          <Input
            PlaceHolder="Enter Name"
            labelText="Name"
            inputType="text"
            important={true}
            Textarea={false}
            isMobileNumber={false}
            isPincode={false}
          />
          <Input
            inputType="email"
            labelText="Email"
            PlaceHolder="Enter Email"
            important={true}
            Textarea={false}
            isMobileNumber={false}
            isPincode={false}
          />
          <Input
            PlaceHolder="Enter Address "
            labelText="Address"
            inputType=""
            Textarea={true}
            important={true}
            isMobileNumber={false}
            isPincode={false}
          />
          <Input
            PlaceHolder="Enter Landmark"
            inputType=""
            important={false}
            Textarea={false}
            labelText="Land Mark(If any)"
            isMobileNumber={false}
            isPincode={false}
          />

          <Input
            PlaceHolder="Enter pincode"
            inputType="number"
            important={true}
            Textarea={false}
            labelText="Pincode"
            isMobileNumber={false}
            isPincode={true}
          />

          <Input
            PlaceHolder="Enter City Name"
            inputType="text"
            important={true}
            labelText="City"
            isMobileNumber={false}
            isPincode={false}
            Textarea={false}
          />
          <div className={style.extrafields}>
            <SelectInput
              id="occasion"
              name="occasion"
              label="Occasion"
              labelFor="occasion"
            >
              <SelectOption
                value="select-decoration-type"
                innerText="Select Decoration Type"
                isDisabled={true}
                isSelected={true}
              />
              <SelectOption
                value="birthday"
                innerText="Birthday"
                isDisabled={false}
                isSelected={false}
              />
              <SelectOption
                value="anniversary"
                innerText="Anniversary"
                isDisabled={false}
                isSelected={false}
              />
              <SelectOption
                value="baby-shower"
                innerText="Baby Shower"
                isDisabled={false}
                isSelected={false}
              />
              <SelectOption
                value="haldi"
                innerText="Haldi"
                isDisabled={false}
                isSelected={false}
              />
              <SelectOption
                value="welcome-baby"
                innerText="Welcome Baby "
                isDisabled={false}
                isSelected={false}
              />
            </SelectInput>
            <SelectInput
              id="location"
              name="location"
              label="Location"
              labelFor="location"
            >
              <SelectOption
                value="decoration-location"
                innerText="Decoration Location"
                isDisabled={true}
                isSelected={true}
              />
              <SelectOption
                value="home"
                innerText="Home"
                isDisabled={false}
                isSelected={false}
              />
              <SelectOption
                value="building"
                innerText="Building"
                isDisabled={false}
                isSelected={false}
              />
              <SelectOption
                value="office"
                innerText="Office"
                isDisabled={false}
                isSelected={false}
              />
            </SelectInput>
            <Input
              PlaceHolder="Enter Number"
              inputType="number"
              important={true}
              Textarea={false}
              labelText="Mobile Number "
              isMobileNumber={true}
              isPincode={false}
            />
            <Input
              PlaceHolder="Enter Alternative Number"
              inputType="number"
              important={false}
              Textarea={false}
              labelText="Alternative Number(If Any)"
              isMobileNumber={true}
              isPincode={false}
            />
          </div>
        </form>
      </div>
    </>
  );
}
