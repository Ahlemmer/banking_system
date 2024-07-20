import SideBar from '@/components/sideBar';
import MobileNav from '@/components/mobile-nav-bar';
import Image from 'next/image';
import RightSidebar from '@/components/right-side-bar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar
        user={{
          $id: '1',
          address1: 'gg',
          city: 'hhh',
          dateOfBirth: 'hhh',
          dwollaCustomerId: 'gg',
          dwollaCustomerUrl: 'hhh',
          email: 'nnnn',
          firstName: 'ggg',
          lastName: 'hh',
          postalCode: ':1',
          ssn: '55',
          state: 'ff',
          userId: 'gg',
        }}
      />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav
              user={{
                $id: '1',
                address1: 'gg',
                city: 'hhh',
                dateOfBirth: 'hhh',
                dwollaCustomerId: 'gg',
                dwollaCustomerUrl: 'hhh',
                email: 'nnnn',
                firstName: 'ggg',
                lastName: 'hh',
                postalCode: ':1',
                ssn: '55',
                state: 'ff',
                userId: 'gg',
              }}
            />
          </div>
        </div>
        {children}
      </div>
      <RightSidebar
        banks={[{currentBalance:12.34},{currentBalance:123.7}]}
        transactions={[]}
        user={{
          $id: '1',
          address1: 'gg',
          city: 'hhh',
          dateOfBirth: 'hhh',
          dwollaCustomerId: 'gg',
          dwollaCustomerUrl: 'hhh',
          email: 'nnnn',
          firstName: 'ggg',
          lastName: 'hh',
          postalCode: ':1',
          ssn: '55',
          state: 'ff',
          userId: 'gg',
        }}
      />
    </main>
  );
}
