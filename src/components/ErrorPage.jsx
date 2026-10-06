import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return <div>An error occurred</div>;
}

export default ErrorPage;
