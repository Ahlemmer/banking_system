import SideBar from '@/components/sideBar';
import MobileNav from '@/components/mobile-nav-bar';
import Image from 'next/image';
import RightSidebar from '@/components/right-side-bar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn=await getLoggedInUser()


  if (!LoggedIn) redirect('/sign-in')
  
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar
        user={LoggedIn}
      />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav
              user={LoggedIn}
            />
          </div>
        </div>
        {children}
      </div>
   
    </main>
  );
}
