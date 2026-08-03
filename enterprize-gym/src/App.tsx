import { useRef, useState } from "react";
import { Search } from "./shared/ui/molcoule/search/search"
import { Textarea } from "./shared/ui/atoms/textarea/textarea"
import { Avatar } from "./shared/ui/atoms/avatar/avatar"
import { Button } from "./shared/ui/atoms/button/button"
import { Badge } from "./shared/ui/atoms/badge/badge"
import { Text } from "./shared/ui/atoms/text/text"
import { Spinner } from "./shared/ui/atoms/spiner/spinner"
import { InputPassword } from "./shared/ui/molcoule/passwordInput/inputPasssword"
// import { INPUT_PASSWORD_VISIBILITY_ENUM } from "./shared/ui/molcoule/passwordInput/enums/inputPasswordVisable"
import SingleDropdown from "./shared/ui/molcoule/dropdaown/singleDropdown";
import GroupDropdown from "./shared/ui/molcoule/groupedDropdown/groupDropdown";
import usePortal from "./shared/ui/organisms/portalManager/hooks/usePortal"
import { PORTAL_TYPE_ENUM } from "./shared/ui/organisms/portalManager/enums/portalManagerEnum";
import { TOAST_MODE_ENUM } from "./shared/ui/atoms/toast/enums/toastModeEnum";
import { Checkbox } from "./shared/ui/atoms/checkbox/checkbox";
import { Stepper } from "./shared/ui/molcoule/stepper/stepper";
import { Input } from "./shared/ui/atoms/input/input";
import { TOAST_MESSAGE_ENUM } from "./shared/ui/atoms/toast/enums/toastMessageEnum";

function App() {
  const searchRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);
   const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());


  const steps = [
    {
      key: "gym-information",
      label: "Gym Information",
    },
    {
      key: "subscription-plan",
      label: "Subscription Plan",
    },
    {
      key: "payment",
      label: "Payment",
    },
    {
      key: "success",
      label: "Success",
    },
  ];


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
const { addPortalComponent } = usePortal();
const handleSearch=() => console.log("search:" , searchRef.current?.value ?? "")
const [acceptedTerms, setAcceptedTerms] = useState(false);

// Moves to a step and remembers the furthest step ever reached, so passed
// steps stay complete. Used by the Stepper clicks and the Next/Previous buttons.
 const goToStep = (step: number) => setCurrentStep(step);


const STEP_CONTENT = [
  <div>Step 1 — Gym Information form goes here.</div>,
  <div>Step 2 — Subscription Plan selection goes here.</div>,
  <div>Step 3 — Payment details go here.</div>,
  <div>🎉 Success! Your gym has been set up.</div>,
];


  return (
    <div>
   <h1>button</h1>
   {/* <Button mode='error' variant='primery' size='large' >{Text}</Button> */}
   <Button  variant='secondary' size='medium' >
   <h1>salam</h1></Button>
<Button
  variant="primery"
  size="small"
>
  <Text className='' text="یسیسشیdsadsadasdasd"></Text>
</Button>

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
  mode="success"
  size="extraSmall"
  placeholder="Password"
/>
<InputPassword
  mode="success"
  size="small"
  placeholder="Password"
/>
<InputPassword
  mode="success"
  size="medium"
  placeholder="Password"
/>
<InputPassword
  mode="success"
  size="large"
  placeholder="Password"
/>
<Input title="extraSmall" type="text" mode="success" size="extraSmall" placeholder="extraSmall" />
<Input title="small" type="text" mode="warn" size="small" placeholder="small" />
<Input title="medium" type="text" mode="error" size="medium" placeholder="medium" />
<Input title="large" type="text" mode="success" size="large" placeholder="large" />

<Spinner size="small"/><Spinner size="medium"/>
<Spinner size="large"/>
<div>
    <Search
      ref={searchRef}
      mode="warn"
      size="large"
      placeholder="Search members..."
      onSearch={handleSearch}
    />
      <Search
        ref={searchRef}
        mode="warn"
        size="medium"
        placeholder="Search members..."
        onSearch={handleSearch}
      />
    <Search
      ref={searchRef}
      mode="warn"
      size="small"
      placeholder="Search members..."
      onSearch={handleSearch}
    />
    <Search
      ref={searchRef}
      mode="warn"
      size="extraSmall"
      placeholder="Search members..."
      onSearch={handleSearch}
    />
    <Textarea
    title="text area"
      ref={noteRef}
      mode="success"
      size="large"
      rows={10}
      placeholder="Write a note..."
    />
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
      onChange={(value)=>{
        console.log(value)
      }}
    />
    <GroupDropdown
    groupedItems={groupedItems}
    placeholder="Grouped dropdown (grouped items)"
    multiple
    />
    <Button
    variant="primery"
    size="medium"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.DeleteAccount,
                mode: TOAST_MODE_ENUM.success,
            },
        });
    }}
>
    Test Portal
</Button>
<Button
    variant="secondary"
    size="medium"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.SuspendAccount,
                mode: TOAST_MODE_ENUM.warning,
            },
        });
    }}
>
    Test Portal
</Button>
<Button
    variant="secondary"
    size="medium"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.IncompleteInformation,
                mode: TOAST_MODE_ENUM.error,
            },
        });
    }}
>
    Test Portal
</Button>
<div>Checkbox</div>
<Checkbox shape="square" checked={acceptedTerms} onChange={setAcceptedTerms}/>
<Checkbox shape="circle" checked={acceptedTerms} onChange={setAcceptedTerms}/>
     <Stepper
        currentStep={currentStep}
        completedSteps={completedSteps}
        steps={steps}
        onStepChange={goToStep}
      />

      

      <button
        type="button"
        onClick={() => {
          if (currentStep > 0) {
            goToStep(currentStep - 1);
          }
        }}
      >
        Previous Step
      </button>

      <button
        type="button"
        onClick={() => {
   if (currentStep < steps.length - 1) {
     setCompletedSteps(prev => new Set(prev).add(steps[currentStep].key));
     setCurrentStep(currentStep + 1);
   }
}}
      >
        Next Step
      </button>


      <h2>Current Step: {currentStep + 1}</h2>

      {STEP_CONTENT[currentStep]}
      <Button
    variant="primery"
    size="medium"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.MODAL,

            props: {
                title: "Create Gym",

                children: (
                    <div>
                        <h1>Create Gym</h1>

                        <p>
                            Welcome to My Gym Dashboard.
                        </p>
                    </div>
                ),
            },
        });
    }}
>
    Open Modal
</Button>
</div>
 </div>
  )
}

export default App
