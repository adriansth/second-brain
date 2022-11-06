import Head from 'next/head';

// components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Calendar from '../../components/Calendar';

export default function CalendarPage() {

    return(
        <div>
            <Head>
                <title>Second Brain</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='w-screen h-screen'>
                    <Navbar />
                    <div className='flex w-full h-full'>
                        <Sidebar />
                        <Calendar />
                    </div>
                </div>
            </main>
        </div>
    );
}