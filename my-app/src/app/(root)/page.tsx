// src/app/page.tsx
import React from 'react';
import AddDocumentBtn from '@/components/AddDocumentBtn';
import Header from '@/components/Header';
import { SignedIn } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';

const Page = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect('/sign-in');
  }

  const documents = [];

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {documents.length > 0 ? (
        <div>
          {/* Render documents here */}
        </div>
      ) : (
        <div className="document-list-empty">
          <Image
            src="/assets/icons/doc.svg"
            alt="document"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocumentBtn
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  );
};

export default Page;
