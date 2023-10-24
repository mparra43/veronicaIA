import { modulesPermissions } from '@/shared/constants';
import { Layout } from '../components';
import { Link } from 'react-router-dom';
import fondo from '../assets/fondo1.jpg'


export const HomeAdmin = () => {
  return (
    <Layout >
      <div className='text-center bg-light w-100 p-4' style={{ backgroundImage: `url(${fondo})`, backgroundRepeat: "no-repeat", height: '90vh' }} >
        <div className='d-flex flex-wrap pl-2 pr-2 mt-2 justify-content-center'>
          {modulesPermissions.map(({ name, icon, route }, index) => (
            <Link to={route} key={index}>
              <div className="card border text-center my-4 mr-4" style={{ width: '15rem', borderRadius: '1.5rem' }}>
                <div className="card-body">
                  <i className={`pi ${icon} text-success pr-2`} style={{ paddingTop: '0.3rem', fontSize: '2rem' }}></i>
                  <h5 className="card-title text-secondary">{name}</h5>
                </div>
              </div>
            </Link >
          ))}
        </div>
      </div>
    </Layout>
  );
};
