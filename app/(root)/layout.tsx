
import SideBar from "@/components/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
          <SideBar user={{
            $id:'1',
            address1:'gg',
            city:'hhh',
            dateOfBirth:'hhh',
            dwollaCustomerId:'gg',
            dwollaCustomerUrl:'hhh',
            email:'nnnn',
            firstName:'ggg',
            lastName:'hh',
            postalCode:':1',
            ssn:'55',
            state:'ff',
            userId:'gg'

          }}/>
         
          {children}
    </main>
  );
}
