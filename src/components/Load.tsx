import { IonSpinner } from "@ionic/react";

const Load:React.FC=()=>{
    return(
        <>
            <div style={{ display:'flex', alignItems: 'center', justifyContent:'center'}}>
                <IonSpinner name="circles" />
            </div>
        </>
    );
}

export default Load;