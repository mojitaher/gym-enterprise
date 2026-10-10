import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../../../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";

export interface SUBSCRIPTION_PLAN_PROPS{
    plans:SUBSCRIPTION_CARD_PROPS_INTERFACE[];
    onBack: () => void;
    onSubmit:(plan: SUBSCRIPTION_CARD_PROPS_INTERFACE)=>void;
}