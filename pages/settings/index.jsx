import Head from 'next/head';

// components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function SettingsPage() {
    return(
        <div>
            <Head>
                <title>Second Brain</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='w-screen'>
                    <Navbar />
                    <div className='flex'>
                        <Sidebar />
                    </div>
                </div>
            </main>
        </div>
    );
}