import type PLAN_HANDLER_INTERFACE from "../interfaces/planHandlerInterface";



export function planHandler({ setActivityPeriod, value }: PLAN_HANDLER_INTERFACE) {
  
    setActivityPeriod(value);

  
}
