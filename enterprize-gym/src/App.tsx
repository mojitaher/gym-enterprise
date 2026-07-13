import { useState } from "react";
import { Avatar } from "./shared/ui/atoms/avatar/avatar"
import { Button } from "./shared/ui/atoms/button/button"
import { Badge } from "./shared/ui/atoms/badge/badge"
import { Text } from "./shared/ui/atoms/text/text"
import { Spinner } from "./shared/ui/atoms/spiner/spinner"
import { InputPassword } from "./shared/ui/molcoule/passwordInput/inputPasssword"
import { INPUT_PASSWORD_VISIBILITY_ENUM } from "./shared/ui/molcoule/passwordInput/enums/inputPasswordVisable"
import SingleDropdown from "./shared/ui/molcoule/dropdaown/singleDropdown";
import GroupDropdown from "./shared/ui/molcoule/groupedDropdown/groupDropdown";

function App() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(
    INPUT_PASSWORD_VISIBILITY_ENUM.hidden
  );

  const dropdownItems = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
  ];

 const groupedItems = [
    {
        label: "Citrus",

        options: [
           {value: "orange", label: "Orange"},
           {value: "lemon", label: "Lemon"},
           {value: "lime", label: "Lime"},
        ],
    },
    {
        label: "Berries",
        options: [
           {value: "strawberry", label: "Strawberry"},
           {value: "blueberry", label: "Blueberry"},
           {value: "raspberry", label: "Raspberry"},
        ]
    }
];

  return (
    <div>
   <h1>button</h1>
   {/* <Button mode='error' variant='primery' size='large' >{Text}</Button> */}
   <Button mode='success' variant='secondary' size='medium' >
   <h1>salam</h1></Button>
<Button
  mode="warn"
  variant="primery"
  size="small"
>
  <Text className='' text="یسیسشیdsadsadasdasd"></Text>
</Button>
{/* <Input
    mode="warn"
    size="small"
    placeholder="username"
  
/>
<Input
    mode="success"
    size="medium"
    placeholder="Username"
/>
<Input
    mode="error"
    size="large"
    placeholder="Username"
   */}
{/* /> */}
<Avatar
 src="https://i.pravatar.cc/300"
    size="small"
/>

<Avatar
 src="https://i.pravatar.cc/300"
    size="medium"
/>

<Avatar
 src="https://i.pravatar.cc/300"
    size="large"
/>
<Badge
    mode="warn"
    size="small"
>
    Pending
</Badge> 
<Badge
    mode="success"
    size="medium"
>
    Active
</Badge>



<Badge
    mode="error"
    size="large"
>
    Expired
</Badge>

<InputPassword
  value={password}
  visible={passwordVisible}
  mode="success"
  size="large"
  placeholder="Password"
  onChange={(event) => setPassword(event.target.value)}
  onVisibilityChange={setPasswordVisible}
/>

<Spinner size="small"/><Spinner size="medium"/>
<Spinner size="large"/>
<div>
    <p>dropdowns</p>
    <SingleDropdown
      items={dropdownItems}
      placeholder="Select a fruit"
      clearable
      searchable
    />
    <SingleDropdown
      items={dropdownItems}
      placeholder="Choose fruits (multiple)"
      clearable
      searchable
      multiple
    />
    <GroupDropdown
    groupedItems={groupedItems}
    placeholder="Grouped dropdown (grouped items)"
    multiple
    />
    
    
</div>
 </div>
  )
}

export default App
