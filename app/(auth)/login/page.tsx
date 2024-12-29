import { Suspense } from "react";
import Login from "./components/login";

const SuccessPage: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </div>
  );
};

export default SuccessPage;
