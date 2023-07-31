import PageContent from "../components/UI/PageContent";
import Login from "../components/login/Login";

const LoginPage = () => {
  return (
    <div className="container mt-4">
      <PageContent title="Login" description="Login page">
        <h2 className="col-md-8 col-xl-6 text-center mx-auto">Log in</h2>
        <Login />
      </PageContent>
    </div>
  );
};

export default LoginPage;
