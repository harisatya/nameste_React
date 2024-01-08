import { useRouteError } from "react-router-dom";
const Error = ()=>{

    const err = useRouteError();
    console.log(err,"err");
    const {status,statusText} = err;
return(<>
<h1>Oops!! someting went wrong.....!!</h1>
<h1>{status}</h1>
<h2>{statusText}</h2>
</>);

}
export default Error;