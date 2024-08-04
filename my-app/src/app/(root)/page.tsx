import { Button } from '@/components/ui/button';
import React from 'react';

const Page = () => {
  // Log the button text content
  console.log('Button content:', 'CLick Me');
  
  return (
    <div>
      <Button>CLick Me</Button>
    </div>
  );
};

export default Page;
