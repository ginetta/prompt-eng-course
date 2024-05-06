import { Label } from '@radix-ui/react-label';
import { FC, FormEvent, useState } from 'react';

import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

type PromptTextareaProps = {
  onSubmit: (e: FormEvent, textAreaRole: string) => void;
};

export const PromptTextarea: FC<PromptTextareaProps> = ({ onSubmit }) => {
  const [textAreaRole, setTextAreaRole] = useState('');

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={(e) => onSubmit(e, textAreaRole)}
    >
      <Label className="text-lg font-normal text-gray-400">
        System Message
      </Label>
      <Textarea
        placeholder="Type your message here."
        className="min-h-36"
        onChange={(e) => {
          setTextAreaRole(e.target.value);
        }}
        value={textAreaRole}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};
