

import type { DASHBOARD_PROPS_INTERFACE } from "./interfaces/dashbordProps.interface";
import Classes from "./styles/Dashboard.module.css";


export default function Dashboard({

    role,

}: DASHBOARD_PROPS_INTERFACE) {
    console.log(role)

    return (

        <div
            className={Classes.container}
        >

        </div>

    );

}