import { Layout, LoginForm } from "../components";
import banner from '../assets/FondoVeronica.jpg'

export const Home = () => {
  return <div>
    <Layout>
      <div className='d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", height: '90vh', width: '100%'}}>
        <LoginForm/>
      </div>
    </Layout>
  </div>;
};
