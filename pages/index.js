import Head from 'next/head';
import Image from 'next/image';
import Login from '../components/Login';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <Head>
        <title>Gutter Pro</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
      <Login />
    </>
  );
}
