import { useRef, useState } from "react";
import { Search } from "./shared/ui/molcoule/search/search"
import { Textarea } from "./shared/ui/atoms/textarea/textarea"
import { Avatar } from "./shared/ui/atoms/avatar/avatar"
import { Button } from "./shared/ui/atoms/button/button"
import { Chip } from "./shared/ui/atoms/chips/chip"
import { Text } from "./shared/ui/atoms/text/text"
import { Spinner } from "./shared/ui/atoms/spiner/spinner"
import { InputPassword } from "./shared/ui/molcoule/passwordInput/inputPasssword"
// import { INPUT_PASSWORD_VISIBILITY_ENUM } from "./shared/ui/molcoule/passwordInput/enums/inputPasswordVisable"
import SingleDropdown from "./shared/ui/molcoule/dropdaown/singleDropdown";
import GroupDropdown from "./shared/ui/molcoule/groupedDropdown/groupDropdown";
import usePortal from "./shared/ui/organisms/portalManager/hooks/usePortal"
import { PORTAL_TYPE_ENUM } from "./shared/ui/organisms/portalManager/enums/portalManagerEnum";
import { Checkbox } from "./shared/ui/atoms/checkbox/checkbox";
import { Stepper } from "./shared/ui/molcoule/stepper/stepper";
import { Input } from "./shared/ui/atoms/input/input";
import { TOAST_MESSAGE_ENUM } from "./shared/ui/atoms/toast/enums/toastMessageEnum";
import { PlanCard } from "./entities/planCard/ui/planCard";
import { SubscriptionCard } from "./entities/subscriptionCard/ui/subscriptionCard";
import { PlanDetailCard } from "./entities/planDetailCard/ui/planDetailCard";
import { ConversationCard } from "./entities/conversationCard/ui/conversationCard";
import { ProfileCard } from "./entities/profileCard/ui/profileCard";
import { BodyCard } from "./shared/ui/molcoule/bodyCard/bodyCard";
import { WorkoutCard } from "./shared/ui/molcoule/workoutCard/workoutCard";
import { ListItem } from "./shared/ui/molcoule/listItem/listItem";
import { SquareCard } from "./shared/ui/molcoule/squareCard/squareCard";
import profileAcceptIcon from "./assets/icons/profileAccrpter.svg";
import { usePlanDelete } from "./entities/planCard/ui/hooks/usePlanDelete";
import { useStepNavigation } from "./shared/ui/molcoule/stepper/hooks/useStepNavigation";
import type { PLAN_INTERFACE } from "./entities/planCard/ui/interfaces/planInterface";
import { ACTIVITY_PERIOD_ENUM } from "./entities/planCard/ui/enums/activityPeriodEnum";

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
const chipIcon=(<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 11.9779C17.8173 11.9779 18.7731 12.9219 18.5195 14.0442C18.2674 15.1598 17.812 16.2257 17.17 17.1864C16.1399 18.7281 14.6757 19.9297 12.9627 20.6393C11.2496 21.3489 9.3646 21.5345 7.54603 21.1728C5.72746 20.811 4.05699 19.9182 2.74588 18.607C1.43476 17.2959 0.541879 15.6255 0.180142 13.8069C-0.181594 11.9883 0.00406206 10.1033 0.713634 8.39026C1.42321 6.67721 2.62482 5.21303 4.16653 4.18289C5.12725 3.54096 6.19314 3.08554 7.30874 2.83345C8.43104 2.57986 9.375 3.53566 9.375 4.68625V6.76959C9.375 9.64607 11.7069 11.9779 14.5833 11.9779H16.6667Z" fill="#1F7FE6"/>
<path d="M12.5 3.15945C12.5 1.1262 14.2092 -0.586545 16.0877 0.191548C17.2251 0.662685 18.2586 1.35324 19.1291 2.22379C19.9997 3.09434 20.6902 4.12783 21.1614 5.26526C21.9395 7.14374 20.2267 8.85292 18.1935 8.85292H17.1875C14.5987 8.85292 12.5 6.75425 12.5 4.16542V3.15945Z" fill="#1F7FE6"/>
</svg>
)
const { addPortalComponent } = usePortal();
const handleSearch=() => console.log("search:" , searchRef.current?.value ?? "")
const [acceptedTerms, setAcceptedTerms] = useState(false);

// هر پلن یک id یکتا می‌گیرد — title کلید امنی نیست.
// const planId=useId()
// Plans rendered as PlanCards — onDelete removes the card from this list.
const [plans, setPlans] = useState<PLAN_INTERFACE[]>(() => [
  { id: 1, title: "Football", coach: "John Smith", session: 12, present: 10, absent: 2,month:ACTIVITY_PERIOD_ENUM.April },
  { id: 2, title: "Basketball", coach: "Jane Doe", session: 8, present: 7, absent: 1 ,month:ACTIVITY_PERIOD_ENUM.February },
]);

const { onDelete } = usePlanDelete(setPlans);
const { goToStep, nextStep, previousStep } = useStepNavigation(
  currentStep, setCurrentStep, setCompletedSteps, steps
);


const STEP_CONTENT = [
  <div>Step 1 — Gym Information form goes here.</div>,
  <div>Step 2 — Subscription Plan selection goes here.</div>,
  <div>Step 3 — Payment details go here.</div>,
  <div>🎉 Success! Your gym has been set up.</div>,
];
const svgIcon = (<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6025 1.66663 10.0001 1.66663C5.39771 1.66663 1.66675 5.39759 1.66675 9.99996C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333ZM10.6251 7.49996C10.6251 7.15478 10.3453 6.87496 10.0001 6.87496C9.6549 6.87496 9.37508 7.15478 9.37508 7.49996V9.37496H7.50008C7.1549 9.37496 6.87508 9.65478 6.87508 9.99996C6.87508 10.3451 7.1549 10.625 7.50008 10.625H9.37508V12.5C9.37508 12.8451 9.6549 13.125 10.0001 13.125C10.3453 13.125 10.6251 12.8451 10.6251 12.5V10.625H12.5001C12.8453 10.625 13.1251 10.3451 13.1251 9.99996C13.1251 9.65478 12.8453 9.37496 12.5001 9.37496H10.6251V7.49996Z" fill="#80BDFF"/>
</svg>
)

  return (
    <div>
   <h1>button</h1>
   <Button startIcon={svgIcon} endIcon={svgIcon} variant='secondary' size='large' >
   <Text text="secondary"></Text></Button>
<Button
startIcon={svgIcon} endIcon={svgIcon}
  variant="primary"
  size="small"
>
  <Text className='text-base font-medium' text="primary"></Text>
  

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
<Chip
    icon={chipIcon}
>
    Pending
</Chip> 
<Chip
    icon={chipIcon}
>
    Active
</Chip>



<Chip
    icon={chipIcon}
>
    Expired
</Chip>

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
    <div className="w-35 flex flex-col gap-10   ">

    <p>dropdowns</p>
    <SingleDropdown
      items={dropdownItems}
      placeholder="Select a fruit"
      clearable
      searchable
    />
    <SingleDropdown
      items={dropdownItems}
      placeholder="Choose fruits"
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
    </div>
    <Button
    startIcon={svgIcon} endIcon={svgIcon}
    variant="secondary"
    size="small"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.DeleteAccount,
            },
        });
    }}
>
    DeleteAccount toast
</Button>
<Button
    startIcon={svgIcon} endIcon={svgIcon}
    variant="secondary"
    size="small"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.RestoreAccount,
            },
        });
    }}
>
    RestoreAccount toast
</Button><Button
    startIcon={svgIcon} endIcon={svgIcon}
    variant="secondary"
    size="small"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.InvalidUsernameorPassword,
            },
        });
    }}
>
    InvalidUsernameorPassword toast
</Button><Button
    startIcon={svgIcon} endIcon={svgIcon}
    variant="secondary"
    size="small"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.LoginSuccess,
            },
        });
    }}
>
    LoginSuccess toast
</Button>
<Button
startIcon={svgIcon} endIcon={svgIcon}
    variant="secondary"
    size="small"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.SuspendAccount,
            },
        });
    }}
>
   SuspendAccount toast
</Button>
<Button
startIcon={svgIcon} endIcon={svgIcon}
    variant="secondary"
    size="small"
    onClick={() => {
        addPortalComponent({
            type: PORTAL_TYPE_ENUM.TOAST,
            props: {
                message: TOAST_MESSAGE_ENUM.IncompleteInformation,
            },
        });
    }}
>
   IncompleteInformation toast
</Button>
<h1>Plan Card</h1>
{plans.map((plan) => (
  <PlanCard
    key={plan.id}
    title={plan.title}
    coach={plan.coach}
    session={plan.session}
    present={plan.present}
    absent={plan.absent}
    month={plan.month}
    onDelete={() => onDelete(plan.id)}
  />
))}

<h1>Subscription Card</h1>
<SubscriptionCard
  planNumber={1}
  planName="Plan's name"
  bestFor="Best for those who want to progress quickly"
  coach="The Couch Number"
  trainee="The Trainee Number"
  duration="1-Year Subscription"
  price={250000}
/>

<h1>Plan Detail Card</h1>
<PlanDetailCard
  id={1}
  title="Football"
  data={[
    { exersize: "Squat", set: 3, rep: 12 },
    { exersize: "Bench Press", set: 4, rep: 10 },
    { exersize: "Running", time: 20 },
  ]}
  // onEdit={() => console.log("Edit clicked")}
/>

<h1>Conversation Card</h1>
<ConversationCard
  avatar="https://i.pravatar.cc/100"
  username="John Doe"
  text="Hello! When is our next gym session?"
  image="https://picsum.photos/200/200"
/>

<h1>Profile Card</h1>
<ProfileCard
  avatar="https://i.pravatar.cc/200"
  username="John Doe"
  secondaryInfo="john@example.com"
  info={[
    "Age: 28",
    "Height: 180 cm",
    "Weight: 78 kg",
  ]}
  buttons={["Message", "Follow", "Block", "Report"]}
  onRemove={() => console.log("remove profile")}
/>

<h1>Body Card</h1>
<BodyCard
  image="https://picsum.photos/200/200"
  title="Morning Workout"
  subtitle="Full body routine"
  description="A complete workout plan covering strength and cardio, designed for beginners."
>
  <Button variant="primary" size="small">Start</Button>
  <Button variant="secondary" size="small">View Details</Button>
</BodyCard>

<h1>Workout Card</h1>
<WorkoutCard
  image="https://picsum.photos/200/300"
  title="Squat"
  set="3 × 12"
  description="Builds lower body strength with proper form and controlled tempo."
  previous={<Button variant="primary" size="small">Previous</Button>}
  next={<Button variant="primary" size="small">Next</Button>}
/>

<h1>Square Card</h1>
<SquareCard text="text" />

<h1>List Item</h1>
<ListItem
  avatar="https://i.pravatar.cc/100"
  username="John Doe"
  secondaryInfo="john@example.com"
  info="Accepted"
  icon={profileAcceptIcon}
/>

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
        onClick={previousStep}
      >
        Previous Step
      </button>

      <button
        type="button"
        onClick={nextStep}
      >
        Next Step
      </button>


      <h2>Current Step: {currentStep + 1}</h2>

      {STEP_CONTENT[currentStep]}
      <Button
    variant="primary"
    size="small"
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
