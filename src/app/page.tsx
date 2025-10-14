import { redirect } from 'next/navigation';

export const HomePage = () => {
  redirect('/users');
};

export default HomePage;
